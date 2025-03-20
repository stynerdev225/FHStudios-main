import React from 'react';
import { ProductDetail } from '../components/ProductDetail';

const merchProducts = [
  {
    id: 'street-legend-hoodie',
    name: "Street Legend Tour Hoodie",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      '100% Premium Cotton',
      'Embroidered Logo',
      'Front Kangaroo Pocket',
      'Machine Washable'
    ]
  },
  // Add other merch products here
];

const bookProducts = [
  {
    id: 'first-guitar-adventure',
    name: "My First Guitar Adventure",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=80",
    description: "Join little Maria on her magical journey discovering the wonderful world of music through her first guitar. This beautifully illustrated book introduces children to basic musical concepts while telling an engaging story.",
    details: [
      'Age Range: 5-8 years',
      'Hardcover: 32 pages',
      'Full-color illustrations',
      'Includes basic music terminology'
    ]
  },
  // Add other book products here
];

export function MerchDetail() {
  return <ProductDetail products={merchProducts} type="merch" />;
}

export function BookDetail() {
  return <ProductDetail products={bookProducts} type="book" />;
}