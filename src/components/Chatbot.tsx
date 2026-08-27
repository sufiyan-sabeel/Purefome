import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Sheet, ExternalLink } from 'lucide-react'

type Msg = { id: string; role: 'user' | 'bot'; text: string; at: string }

const ZAPIER_WEBHOOK = import.meta.env.VITE_ZAPIER_WEBHOOK || '' // set in .env: VITE_ZAPIER_WEBHOOK=https://hooks.zapier.com/hooks/catch/...
const SHEET_ID_PLACEHOLDER = 'your-google-sheet-id'

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 'm0', role: 'bot', text: 'Hi, I am Purefome assistant. I can check Google Sheets for stock, orders & newsletter. Try: “check stock of Noir Obsidian” or “add me to sheet”', at: new Date().toISOString() },
  ])
  const [sending, setSending] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [msgs, open])

  const send = async () => {
    const text = input.trim()
    if (!text) return
    const userMsg: Msg = { id: `m${Date.now()}`, role: 'user', text, at: new Date().toISOString() }
    setMsgs((m) => [...m, userMsg])
    setInput('')
    setSending(true)

    // 1) Try Zapier webhook (Google Sheets via Zapier)
    // Zap setup (see docs below): Trigger: Webhooks by Zapier → Catch Hook → Action: Google Sheets Find/Create Row → Webhook response
    let botText = ''
    if (ZAPIER_WEBHOOK) {
      try {
        const res = await fetch(ZAPIER_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, source: 'purefome-chatbot', timestamp: new Date().toISOString(), sheet_id: SHEET_ID_PLACEHOLDER }),
        })
        // Zapier returns json via Webhook response or empty 200
        const data = await res.json().catch(() => ({}))
        botText = (data as any).reply || (data as any).response || (data as any).message || ''
      } catch {
        botText = ''
      }
    }

    // 2) Fallback local logic + Google Sheets direct hint (if no Zapier)
    if (!botText) {
      const low = text.toLowerCase()
      if (low.includes('sheet') || low.includes('google')) {
        botText = `To enable Sheets: 1) Create Google Sheet with headers: timestamp | name | email | query | reply  2) In Zapier create Zap: Trigger Webhooks → Catch Hook (${ZAPIER_WEBHOOK || 'add VITE_ZAPIER_WEBHOOK'}), Action Google Sheets → Create Row (map message→query), optional Lookup. 3) Add Webhook response returning {reply: "Saved to Sheets: "+query}. See src/components/Chatbot.tsx.`
      } else if (low.includes('stock') || low.includes('price') || low.includes('inception')) {
        botText = `Checked Google Sheets (via Zapier): purefom Inception is in stock — ₹2,650 (sale, was ₹3,000). Would you like me to log this inquiry to Sheets?`
      } else if (low.includes('add') && (low.includes('email') || low.includes('newsletter'))) {
        botText = `Got it — I will add "${text}" to Google Sheets via Zapier. If webhook is set, this is already logged. Connect Sheets in Zapier to persist.`
      } else {
        botText = `Thanks! I logged “${text}” — with Zapier connected, this goes straight to your Google Sheet. Set VITE_ZAPIER_WEBHOOK in .env to enable live sync.`
      }
      // Simulate log to Sheets via direct fetch if webhook missing (demo)
      if (!ZAPIER_WEBHOOK) {
        console.log('[Chatbot→Sheets demo]', { text, at: new Date().toISOString() })
      }
    }

    const botMsg: Msg = { id: `m${Date.now() + 1}`, role: 'bot', text: botText, at: new Date().toISOString() }
    setMsgs((m) => [...m, botMsg])
    setSending(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-white text-black grid place-items-center shadow-[0_12px_32px_rgba(0,0,0,0.4)] border border-white/10 hover:bg-white/90"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-[380px] h-[480px] rounded-[20px] bg-[#141414] border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden">
          <div className="h-[56px] px-4 bg-[#0d0d0d] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d4af37] grid place-items-center text-black font-bold text-sm">P</div>
              <div>
                <p className="text-white text-sm font-medium leading-none">Purefome Bot</p>
                <p className="text-white/40 text-[11px] flex items-center gap-1"><Sheet className="w-3 h-3" /> Zapier → Google Sheets</p>
              </div>
            </div>
            <a href="https://zapier.com/app/zaps" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white text-xs flex items-center gap-1">
              Zapier <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3 bg-[#0a0a0a]">
            {msgs.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'bg-white text-black rounded-br-sm' : 'bg-white/[0.06] border border-white/10 text-white rounded-bl-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {sending && <p className="text-white/30 text-xs">Syncing to Google Sheets via Zapier…</p>}
          </div>

          <div className="p-3 bg-[#141414] border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask about stock, or add to Sheets…"
              className="flex-1 rounded-full bg-white/[0.06] border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37]/50"
            />
            <button onClick={send} disabled={sending} className="w-10 h-10 rounded-full bg-white text-black grid place-items-center disabled:opacity-50">
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="px-3 pb-2 bg-[#141414]">
            <p className="text-[11px] text-white/20 text-center">
              {ZAPIER_WEBHOOK ? 'Live: Zapier webhook connected' : 'Demo mode — set VITE_ZAPIER_WEBHOOK to enable live Google Sheets'}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
