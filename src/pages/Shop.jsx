import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

const CATEGORIES = ['All', 'Plants', 'Veggies'];
const SORT_OPTIONS = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Name: A-Z', value: 'name-asc' },
    { label: 'Name: Z-A', value: 'name-desc' },
];

const Shop = () => {
    const { addToCart } = useCart();
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('featured');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [showFilters, setShowFilters] = useState(false);

    // Calculate max price dynamically
    const maxProductPrice = useMemo(() => {
        return Math.max(...PRODUCTS.map(p => p.price || 0), 1000);
    }, []);

    const filteredProducts = useMemo(() => {
        let result = PRODUCTS.filter(product => {
            const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesPrice = (product.price >= priceRange.min) && (product.price <= priceRange.max);
            return matchesCategory && matchesSearch && matchesPrice;
        });

        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                // Keep original order for 'featured'
                break;
        }

        return result;
    }, [activeCategory, searchQuery, sortBy, priceRange]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 animate-fade-in">
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

            {/* Controls Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-primary-100 mb-8 animate-slide-up">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-primary-600 text-white shadow-md'
                                    : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        {/* Sort Dropdown */}
                        <div className="relative flex items-center gap-2">
                            <ArrowUpDown className="w-4 h-4 text-primary-500" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-transparent text-primary-800 font-medium focus:outline-none cursor-pointer"
                            >
                                {SORT_OPTIONS.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`p-2 rounded-lg transition-colors ${showFilters ? 'bg-primary-100 text-primary-700' : 'hover:bg-primary-50 text-primary-500'}`}
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Expanded Filters */}
                {showFilters && (
                    <div className="mt-6 pt-6 border-t border-primary-100 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                        <div>
                            <label className="block text-sm font-medium text-primary-700 mb-2">Price Range: ₹{priceRange.min} - ₹{priceRange.max}</label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="0"
                                    max={maxProductPrice}
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                                    className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                                />
                            </div>
                        </div>
                    </div>
                )}
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
                    <button
                        onClick={() => {
                            setActiveCategory('All');
                            setSearchQuery('');
                            setPriceRange({ min: 0, max: 1000 });
                        }}
                        className="mt-4 text-primary-600 hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default Shop;
