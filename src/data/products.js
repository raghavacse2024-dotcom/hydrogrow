import basilImage from '../assets/basil.jpg';
import mintImage from '../assets/mint.jpg';
import corianderImage from '../assets/coriander.jpg';
import parsleyImage from '../assets/parsley.png';
import bokChoyImage from '../assets/bok-choy.jpg';

export const PRODUCTS = [
    {
        id: 1,
        name: 'Lettuce',
        price: 80,
        category: 'Plants',
        image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=800',
        description: 'Crisp and tender lettuce, grown without pesticides. The foundation of a perfect salad.',
        rating: 5,
        reviews: 210,
        weights: ['100g', '250g', '500g'],
        priceByWeight: {
            '100g': 80,
            '250g': 180,
            '500g': 320
        }
    },
    {
        id: 2,
        name: 'Spinach',
        price: 60,
        category: 'Plants',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800',
        description: 'Nutrient-dense fresh spinach leaves. Perfect for smoothies, salads, or cooking.',
        rating: 5,
        reviews: 94,
        weights: ['100g', '250g', '500g'],
        priceByWeight: {
            '100g': 60,
            '250g': 135,
            '500g': 240
        }
    },
    {
        id: 3,
        name: 'Basil',
        price: 120,
        category: 'Plants',
        image: basilImage,
        description: 'Aromatic fresh basil leaves, perfect for pesto and garnishing. Grown in our premium hydroponic systems.',
        rating: 5,
        reviews: 128,
        weights: ['100g', '250g', '500g'],
        priceByWeight: {
            '100g': 120,
            '250g': 270,
            '500g': 480
        }
    },
    {
        id: 4,
        name: 'Mint',
        price: 40,
        category: 'Plants',
        image: mintImage,
        description: 'Fresh and cooling mint leaves. Ideal for teas, desserts, and cocktails.',
        rating: 5,
        reviews: 76,
        weights: ['100g', '250g', '500g'],
        priceByWeight: {
            '100g': 40,
            '250g': 90,
            '500g': 160
        }
    },
    {
        id: 5,
        name: 'Coriander',
        price: 30,
        category: 'Plants',
        image: corianderImage,
        description: 'Fresh coriander leaves with a citrusy flavor. Essential for curries and salsas.',
        rating: 4,
        reviews: 112,
        weights: ['100g', '250g', '500g'],
        priceByWeight: {
            '100g': 30,
            '250g': 70,
            '500g': 120
        }
    },
    {
        id: 6,
        name: 'Parsley',
        price: 150,
        category: 'Plants',
        image: parsleyImage,
        description: 'Bright and herbaceous parsley. A versatile garnish and ingredient.',
        rating: 4,
        reviews: 89,
        weights: ['100g', '250g', '500g'],
        priceByWeight: {
            '100g': 150,
            '250g': 340,
            '500g': 600
        }
    },
    {
        id: 7,
        name: 'Cherry Tomato',
        price: 180,
        category: 'Veggies',
        image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&q=80&w=800',
        description: 'Sweet and juicy hydroponic cherry tomatoes. Bursting with flavor.',
        rating: 5,
        reviews: 85,
        weights: ['100g', '250g', '500g'],
        priceByWeight: {
            '100g': 180,
            '250g': 400,
            '500g': 720
        }
    },
    {
        id: 8,
        name: 'Bok Choy',
        price: 90,
        category: 'Veggies',
        image: bokChoyImage,
        description: 'Crunchy and mild bok choy. Perfect for stir-fries and soups.',
        rating: 5,
        reviews: 64,
        weights: ['100g', '250g', '500g'],
        priceByWeight: {
            '100g': 90,
            '250g': 200,
            '500g': 360
        }
    },
    {
        id: 9,
        name: 'Kale',
        price: 110,
        category: 'Plants',
        image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&q=80&w=800',
        description: 'Nutrient-packed kale leaves. Great for salads, chips, or smoothies.',
        rating: 4,
        reviews: 143,
        weights: ['100g', '250g', '500g'],
        priceByWeight: {
            '100g': 110,
            '250g': 250,
            '500g': 440
        }
    },
    {
        id: 10,
        name: 'Spring Onion',
        price: 50,
        category: 'Veggies',
        image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=800',
        description: 'Fresh spring onions with a mild onion flavor. Excellent garnish.',
        rating: 4,
        reviews: 98,
        weights: ['100g', '250g', '500g'],
        priceByWeight: {
            '100g': 50,
            '250g': 110,
            '500g': 200
        }
    }
];
