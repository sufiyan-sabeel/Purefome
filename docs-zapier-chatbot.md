# Zapier Chatbot → Google Sheets (Purefome)

Chatbot at `src/components/Chatbot.tsx` talks to Google Sheets via Zapier MCP at `https://mcp.zapier.com/api/v1/connect`.

## Architecture
```
[ Purefome Chatbot UI ] --POST {message}--> [ Zapier Webhook (Catch Hook) ] --Create/Find Row--> [ Google Sheets ] --Webhook Response {reply}--> [ Bot ]
```
MCP `zapier` in `~/.config/opencode/opencode.jsonc` exposes Zapier automation tools to the agent.

## One-time Zapier Setup (2 min)
1. Google Sheet: create sheet “Purefome Bot Log” with headers in row 1:
   `timestamp | source | message | reply | customer_email`
   Copy Sheet ID from URL: `https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit`
2. Zapier → Create Zap:
   - Trigger: **Webhooks by Zapier** → **Catch Hook** → Copy `Custom Webhook URL` → paste as `VITE_ZAPIER_WEBHOOK` in `purefome/.env` (see `.env.example`)
   - Action 1: **Google Sheets** → **Create Spreadsheet Row** → connect Google account → select Spreadsheet + Worksheet → map `timestamp`→`{{timestamp}}`, `message`→`{{message}}`, `source`→`purefome-chatbot`
   - (Optional) Action 2: **Google Sheets** → **Lookup Spreadsheet Row** (for “check stock” → search `Products` sheet)
   - Action 3: **Webhooks by Zapier** → **Custom Request** or **Response** → Body: `{"reply":"Saved to Sheets: {{message}} — stock: {{lookup}}"}`
3. Test & Publish Zap. Test via chatbot.

## Via Zapier MCP (agent)
With `zapier` MCP enabled, prompt the agent:
> “Create a Zap that triggers on Webhook Catch Hook and creates a row in Google Sheets ‘Purefome Bot Log’ with message, then returns reply”

Agent will call `zapier_create_zap` / `zapier_google_sheets_create_row` tools.

## Env
```
VITE_ZAPIER_WEBHOOK=https://hooks.zapier.com/hooks/catch/...
```
Purefome uses `import.meta.env.VITE_ZAPIER_WEBHOOK` (`src/components/Chatbot.tsx:6`). Without it, bot runs in demo mode (logs locally, no real Sheets write).

## Admin
Orders & newsletter from Sheets can be surfaced in `src/pages/AdminDashboard.tsx` by adding a Zapier → Sheets → Polling Zap that syncs to admin store.

## GH Pages
Chatbot works on `https://sufiyan-sabeel.github.io/Purefome/` — webhook is CORS-enabled. Ensure Zapier Catch Hook allows `*`.
