export type FragranceNotes = {
  top: string[];
  middle: string[];
  base: string[];
}

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: 'Sale' | 'Sold Out' | 'New';
  description: string;
  notes: FragranceNotes;
  size: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'pf-001',
    name: 'purefom Inception Extrait de Parfum',
    category: 'Unisex • Extrait',
    price: 2650,
    originalPrice: 3000,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 342,
    badge: 'Sale',
    description: 'A magnetic opening of ginger and sunlit lemon that settles into an aromatic heart before anchoring in smoked woods and golden amber.',
    notes: { top: ['Ginger', 'Lemon'], middle: ['Jasmine', 'Lavender'], base: ['Sandalwood', 'Musk', 'Amber'] },
    size: '100ml',
    inStock: true,
  },
  {
    id: 'pf-002',
    name: 'Noir Obsidian Pour Homme',
    category: 'Men • Eau de Parfum',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 189,
    badge: 'New',
    description: 'Deep charcoal woods, vetiver, and black pepper rendered through a lens of smoked vanilla and leather.',
    notes: { top: ['Bergamot', 'Black Pepper'], middle: ['Vetiver', 'Iris'], base: ['Leather', 'Vanilla', 'Cedar'] },
    size: '100ml',
    inStock: true,
  },
  {
    id: 'pf-003',
    name: 'Ambre Lumière Attar',
    category: 'Attars • Pure Oil',
    price: 2850,
    originalPrice: 3100,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviews: 267,
    badge: 'Sale',
    description: 'Concentrated amber attar with saffron, rose and smoked oud — anointed, not sprayed.',
    notes: { top: ['Saffron', 'Cardamom'], middle: ['Rose', 'Oud'], base: ['Amber', 'Musk', 'Patchouli'] },
    size: '12ml',
    inStock: true,
  },
  {
    id: 'pf-004',
    name: 'Velvet Rose Elixir',
    category: 'Women • Extrait',
    price: 2950,
    image: 'https://images.unsplash.com/photo-1593487568720-7992814f8728?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    reviews: 412,
    description: 'A powder-soft rose enveloped in peony, grounded by cashmeran and white musk for an editorial silhouette.',
    notes: { top: ['Pink Pepper', 'Peony'], middle: ['Damask Rose', 'Peony'], base: ['Cashmeran', 'White Musk', 'Sandalwood'] },
    size: '75ml',
    inStock: true,
  },
  {
    id: 'pf-005',
    name: 'Midnight Body Lustre',
    category: 'Body Lotions',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    reviews: 98,
    description: 'A luminous body lotion that leaves a soft amber-wood trail and brushed-gold glow.',
    notes: { top: ['Citrus Peel', 'Ginger'], middle: ['Jasmine'], base: ['Amber', 'Musk'] },
    size: '200ml',
    inStock: false,
    badge: 'Sold Out',
  },
  {
    id: 'pf-006',
    name: 'Cèdre Noir Intense',
    category: 'Men • Extrait',
    price: 3400,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 156,
    description: 'Smoked cedar, incense and labdanum — architecture in scent form, cut for evening air.',
    notes: { top: ['Lemon', 'Cypress'], middle: ['Cedar', 'Incense'], base: ['Labdanum', 'Musk', 'Amber'] },
    size: '100ml',
    inStock: true,
  },
  {
    id: 'pf-007',
    name: 'Lumière Blanche',
    category: 'Women • Eau de Parfum',
    price: 2700,
    originalPrice: 2900,
    image: 'https://images.unsplash.com/photo-1594032194509-0056023973b2?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviews: 203,
    badge: 'Sale',
    description: 'Transparent jasmine and orange blossom over sun-warmed skin musk — sheer, cinematic.',
    notes: { top: ['Bergamot', 'Ginger'], middle: ['Jasmine', 'Orange Blossom'], base: ['Musk', 'Amber', 'Sandalwood'] },
    size: '100ml',
    inStock: true,
  },
  {
    id: 'pf-008',
    name: 'Oud Imperial',
    category: 'Unisex • Extrait',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1587304886422-38a58a04d93e?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    reviews: 88,
    description: 'Rare Cambodian oud, smoked leather and amber — composed for collectors.',
    notes: { top: ['Ginger', 'Lemon'], middle: ['Oud', 'Leather'], base: ['Woods', 'Musk', 'Amber'] },
    size: '50ml',
    inStock: true,
  },
]

export const categories = [
  { id: 'men', label: 'Men', image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=800&auto=format&fit=crop', count: '42 Fragrances' },
  { id: 'women', label: 'Women', image: 'https://images.unsplash.com/photo-1613521140785-e85e427f8002?q=80&w=800&auto=format&fit=crop', count: '38 Fragrances' },
  { id: 'unisex', label: 'Unisex', image: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?q=80&w=800&auto=format&fit=crop', count: '26 Fragrances' },
  { id: 'attars', label: 'Attars', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop', count: '18 Oils' },
  { id: 'body', label: 'Body Lotions', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop', count: '12 Rituals' },
  { id: 'brands', label: 'Brands', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop', count: 'View A-Z' },
]

export const testimonials = [
  { id: 1, quote: 'Genuine products, beautiful presentation, and excellent service.', name: 'Aarav Sharma', role: 'Verified Buyer', rating: 5 },
  { id: 2, quote: 'The most cinematic unboxing. The scent lasts and evolves beautifully through the day.', name: 'Leila M.', role: 'Verified Buyer', rating: 5 },
  { id: 3, quote: 'Obsessed with the bottle design. Feels truly premium — like an editorial object.', name: 'Khalid R.', role: 'Collector', rating: 5 },
  { id: 4, quote: 'Customer care was exceptional. Found my signature in one order.', name: 'Sofia D.', role: 'Verified Buyer', rating: 4 },
]
