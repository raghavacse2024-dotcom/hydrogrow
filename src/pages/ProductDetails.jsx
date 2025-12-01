import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, ArrowLeft, Check } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = PRODUCTS.find(p => p.id === parseInt(id));

    const [selectedWeight, setSelectedWeight] = useState(product?.weights ? product.weights[0] : null);
    const [isAdded, setIsAdded] = useState(false);

    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-primary-900">Product not found</h2>
                <Link to="/shop" className="mt-4 text-primary-600 hover:text-primary-700">Return to Shop</Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        const currentPrice = product.priceByWeight ? product.priceByWeight[selectedWeight] : product.price;
        addToCart({ ...product, price: currentPrice, selectedWeight });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <Link to="/shop" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {/* Image Section */}
                <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg border border-primary-100 aspect-square">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-center">
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-2">
                            {product.category}
                        </span>
                        <h1 className="text-4xl font-bold text-primary-900 mb-2">{product.name}</h1>
                        <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < product.rating ? 'fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <span className="text-primary-500 text-sm">({product.reviews} reviews)</span>
                        </div>
                    </div>

                    <p className="text-primary-700 text-lg leading-relaxed mb-8">
                        {product.description}
                    </p>

                    <div className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm mb-8">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-3xl font-bold text-primary-900">
                                ₹{product.priceByWeight ? product.priceByWeight[selectedWeight] : product.price}
                            </span>
                            <span className="text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full text-sm">In Stock</span>
                        </div>

                        {product.weights && (
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-primary-700 mb-3">Select Weight</label>
                                <div className="flex flex-wrap gap-3">
                                    {product.weights.map(weight => (
                                        <button
                                            key={weight}
                                            onClick={() => setSelectedWeight(weight)}
                                            className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${selectedWeight === weight
                                                ? 'border-primary-600 bg-primary-50 text-primary-900 font-bold'
                                                : 'border-primary-100 text-primary-600 hover:border-primary-300'
                                                }`}
                                        >
                                            {weight}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button
                            onClick={handleAddToCart}
                            disabled={isAdded}
                            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${isAdded
                                ? 'bg-primary-800 text-white cursor-default'
                                : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:-translate-y-1'
                                }`}
                        >
                            {isAdded ? (
                                <>
                                    <Check className="w-6 h-6" /> Added to Cart
                                </>
                            ) : (
                                <>
                                    <ShoppingCart className="w-6 h-6" /> Add to Cart
                                </>
                            )}
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 rounded-xl bg-primary-50 border border-primary-100">
                            <span className="block text-2xl mb-1">🚚</span>
                            <span className="text-sm text-primary-800 font-medium">Fast Delivery</span>
                        </div>
                        <div className="p-4 rounded-xl bg-primary-50 border border-primary-100">
                            <span className="block text-2xl mb-1">🌿</span>
                            <span className="text-sm text-primary-800 font-medium">Organic & Fresh</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
