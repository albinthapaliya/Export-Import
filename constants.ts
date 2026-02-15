import { NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Collection', href: '#collection' },
  { label: 'Ayurveda AI', href: '#advisor' },
  { label: 'Contact', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Pure Himalayan Shilajit',
    category: 'Wellness',
    description: 'Sourced from the high altitude rocks of the Himalayas, our Shilajit is purified using traditional Ayurvedic methods to ensure maximum potency and purity.',
    price: '$45.00',
    imageUrl: 'https://picsum.photos/600/600',
    benefits: ['Energy Boost', 'Anti-Aging', 'Cognitive Health']
  },
  {
    id: 'p2',
    name: 'Organic Ashwagandha Root',
    category: 'Supplements',
    description: 'Known as "Indian Ginseng," our Ashwagandha is cultivated in the fertile valleys of Nepal, perfect for stress relief and vitality.',
    price: '$28.00',
    imageUrl: 'https://picsum.photos/600/601',
    benefits: ['Stress Relief', 'Immunity', 'Sleep Quality']
  },
  {
    id: 'p3',
    name: 'Cordyceps Sinensis (Yarsagumba)',
    category: 'Premium Rare',
    description: 'The legendary "Himalayan Gold." A rare fungus highly prized in traditional medicine for its ability to boost athletic performance and libido.',
    price: 'Inquire for Price',
    imageUrl: 'https://picsum.photos/600/602',
    benefits: ['Vitality', 'Respiratory Health', 'Stamina']
  },
  {
    id: 'p4',
    name: 'Triphala Powder',
    category: 'Digestion',
    description: 'A classic Ayurvedic herbal formulation consisting of three fruits: Amalaki, Bibhitaki, and Haritaki. Essential for digestive health.',
    price: '$22.00',
    imageUrl: 'https://picsum.photos/600/603',
    benefits: ['Digestion', 'Detox', 'Eye Health']
  },
];

export const FUTURE_EXPANSIONS = [
  { title: 'Pashmina & Cashmere', description: 'Luxurious, hand-woven textiles from the Himalayas.' },
  { title: 'Organic Spices', description: 'Timur, Cardamom, and authentic Himalayan salts.' },
  { title: 'Handicrafts', description: 'Traditional metal statues, singing bowls, and Thangka paintings.' }
];