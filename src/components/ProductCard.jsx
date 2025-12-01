import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [selectedWeight, setSelectedWeight] = useState(product.weights ? product.weights[0] : null);

    const handleAddToCart = (e) => {
        e.preventDefault();
        const currentPrice = product.priceByWeight ? product.priceByWeight[selectedWeight] : product.price;
        addToCart({ ...product, price: currentPrice, selectedWeight });
    };

    return (
        <div className="group relative bg-white rounded-2xl p-4 border border-primary-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary-100 hover:-translate-y-1 flex flex-col h-full">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-primary-50 lg:aspect-none group-hover:opacity-75 lg:h-60 relative">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="h-full w-full flex items-center justify-center text-6xl">🌿</div>
                )}

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[2px]">
                    <button
                        onClick={handleAddToCart}
                        className="bg-white text-primary-600 px-6 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-50"
                    >
                        Quick Add
                    </button>
                </div>
            </div>

            <div className="mt-4 flex justify-between flex-grow">
                <div>
                    <h3 className="text-lg font-medium text-primary-900">
                        <Link to={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-primary-500">{product.category}</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-xl font-bold text-primary-600">
                        ₹{product.priceByWeight ? product.priceByWeight[selectedWeight] : product.price}
                    </span>
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm text-primary-400">{product.rating}</span>
                    </div>
                </div>
            </div>

            {/* Weight/Variant indicator if applicable */}
            {product.weights && (
                <div className="mt-2 text-xs text-primary-400">
                    {product.weights.length} sizes available
                </div>
            )}
        </div>
    );
};

export default ProductCard;
