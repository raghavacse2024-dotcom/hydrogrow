import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Search } from 'lucide-react';

const CATEGORIES = ['All', 'Plants', 'Veggies'];

const Shop = () => {
    const { addToCart } = useCart();
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = PRODUCTS.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 animate-fade-in">
                <h1 className="text-4xl font-bold text-primary-900">Shop Fresh Produce</h1>

                {/* Search */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search fresh greens..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white border border-primary-100 rounded-full py-3 pl-12 pr-4 text-primary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all shadow-sm placeholder-primary-300"
                    />
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {CATEGORIES.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === category
                            ? 'bg-primary-600 text-white border-primary-600 font-bold shadow-md transform scale-105'
                            : 'bg-white text-primary-600 border-primary-100 hover:border-primary-300 hover:bg-primary-50'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                    <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <ProductCard
                            product={product}
                            onAddToCart={addToCart}
                        />
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-primary-400">
                    <p className="text-xl">No products found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default Shop;
