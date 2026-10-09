import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sampleProducts = [
  {
    id: 'prod_001',
    slug: 'midnight-otaku-overshirt',
    name: 'Midnight Otaku Overshirt',
    category: 'Streetwear',
    price: 3499,
    originalPrice: 4599,
    stock: 14,
    rating: 4.9,
    reviews: 178,
    featured: true,
    collection: 'Tokyo Night',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    description: 'Premium manga-inspired oversized shirt with heavyweight cotton and subtle anime-inspired artwork.',
    image: '/assets/images/prod-1.jpg',
    gallery: ['/assets/images/prod-1.jpg', '/assets/images/prod-2.jpg'],
    tags: ['anime streetwear', 'oversized anime t-shirts'],
    isNew: true,
    bestseller: true
  },
  {
    id: 'prod_002',
    slug: 'kyoto-ember-hoodie',
    name: 'Kyoto Ember Hoodie',
    category: 'Hoodies',
    price: 4299,
    originalPrice: 5299,
    stock: 9,
    rating: 4.8,
    reviews: 142,
    featured: true,
    collection: 'Urban Manga',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Orange'],
    description: 'Warm fleece hoodie designed for late-night anime marathons and city exploring.',
    image: '/assets/images/prod-2.jpg',
    gallery: ['/assets/images/prod-2.jpg', '/assets/images/prod-3.jpg'],
    tags: ['anime hoodies', 'limited edition anime drops'],
    isNew: true,
    bestseller: true
  },
  {
    id: 'prod_003',
    slug: 'hikari-figure-stand',
    name: 'Hikari Figure Stand',
    category: 'Collectibles',
    price: 2899,
    originalPrice: 3299,
    stock: 18,
    rating: 4.9,
    reviews: 134,
    featured: true,
    collection: 'Collector Vault',
    sizes: ['Standard'],
    colors: ['Black', 'White'],
    description: 'Collector-grade display stand with original anime-inspired silhouette and premium finish.',
    image: '/assets/images/prod-3.jpg',
    gallery: ['/assets/images/prod-3.jpg', '/assets/images/prod-4.jpg'],
    tags: ['manga collectibles', 'anime figures'],
    isNew: true,
    bestseller: false
  },
  {
    id: 'prod_004',
    slug: 'neon-archive-poster',
    name: 'Neon Archive Poster',
    category: 'Posters',
    price: 1899,
    originalPrice: 2499,
    stock: 24,
    rating: 4.7,
    reviews: 98,
    featured: false,
    collection: 'Editorial Drops',
    sizes: ['A3', 'A2'],
    colors: ['Black', 'White'],
    description: 'High-detail poster print featuring monochrome visuals with a bold orange accent treatment.',
    image: '/assets/images/prod-4.jpg',
    gallery: ['/assets/images/prod-4.jpg', '/assets/images/prod-5.jpg'],
    tags: ['anime posters', 'anime gifts'],
    isNew: false,
    bestseller: false
  },
  {
    id: 'prod_005',
    slug: 'tokyo-signal-keychain',
    name: 'Tokyo Signal Keychain',
    category: 'Accessories',
    price: 749,
    originalPrice: 999,
    stock: 42,
    rating: 4.8,
    reviews: 96,
    featured: false,
    collection: 'Daily Carry',
    sizes: ['One Size'],
    colors: ['Black', 'Orange'],
    description: 'Compact keychain built for daily carry with premium metal finish and anime-inspired insignia.',
    image: '/assets/images/prod-5.jpg',
    gallery: ['/assets/images/prod-5.jpg', '/assets/images/prod-6.jpg'],
    tags: ['anime accessories', 'anime keychains'],
    isNew: true,
    bestseller: false
  },
  {
    id: 'prod_006',
    slug: 'harbor-tattoo-tee',
    name: 'Harbor Tattoo Tee',
    category: 'T-Shirts',
    price: 2599,
    originalPrice: 3199,
    stock: 11,
    rating: 4.8,
    reviews: 212,
    featured: true,
    collection: 'Streetwear Essentials',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    description: 'Minimalist screen-printed T-shirt inspired by streetwear silhouettes and manga storytelling.',
    image: '/assets/images/prod-6.jpg',
    gallery: ['/assets/images/prod-6.jpg', '/assets/images/prod-1.jpg'],
    tags: ['anime streetwear', 'Japanese streetwear'],
    isNew: true,
    bestseller: true
  }
];

export const blogPosts = [
  {
    id: 'blog_001',
    slug: 'behind-the-scenes-tokyo-drop',
    title: 'Behind the Scenes of AKANESHI’s Tokyo-Inspired Drop',
    excerpt: 'A look into the design process, materials, and creative direction behind our latest collection.',
    image: '/assets/images/blog-1.jpg',
    category: 'Behind the Scenes',
    status: 'published',
    author: 'AKANESHI Studio',
    createdAt: '2026-09-01'
  },
  {
    id: 'blog_002',
    slug: 'how-to-style-anime-streetwear',
    title: 'How to Style Anime Streetwear Without Losing Minimalism',
    excerpt: 'Keep your look premium, layered, and balanced with a sharp monochrome base and orange accents.',
    image: '/assets/images/blog-2.jpg',
    category: 'Style Guide',
    status: 'published',
    author: 'AKANESHI Studio',
    createdAt: '2026-09-12'
  }
];

export const testimonials = [
  {
    name: 'Priya S.',
    location: 'Mumbai',
    rating: 5,
    comment: 'The quality is premium, and the design language feels authentically anime-inspired without being loud.'
  },
  {
    name: 'Rohit K.',
    location: 'Delhi',
    rating: 5,
    comment: 'Fast shipping, premium finish, and the hoodie feels like a collector piece. Highly recommended.'
  },
  {
    name: 'Aanya M.',
    location: 'Bengaluru',
    rating: 5,
    comment: 'Loved the packaging and the clarity of the product details. My order arrived exactly as described.'
  }
];

export const searchTrends = [
  'anime streetwear',
  'oversized anime t-shirts',
  'anime hoodies',
  'manga collectibles',
  'anime posters',
  'anime accessories',
  'Japanese streetwear',
  'anime gifts',
  'anime keychains',
  'anime figures',
  'manga merchandise',
  'limited edition anime drops'
];

export const defaultNav = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop.html' },
  { label: 'Collections', href: '/shop.html#collections' },
  { label: 'Latest Drops', href: '/shop.html#drops' },
  { label: 'Anime Blog', href: '/blog.html' },
  { label: 'About', href: '/index.html#story' },
  { label: 'Contact', href: '/contact.html' }
];

export function serializeProducts() {
  return JSON.parse(readFileSync(path.join(__dirname, '..', 'server', 'data.json'), 'utf8'));
}
