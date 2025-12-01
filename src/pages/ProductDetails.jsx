import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, ArrowLeft, Check, User, MessageSquare } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = PRODUCTS.find(p => p.id === parseInt(id));

    const [selectedWeight, setSelectedWeight] = useState(product?.weights ? product.weights[0] : null);
    const [isAdded, setIsAdded] = useState(false);

    // Review State
    const [reviews, setReviews] = useState([
        { id: 1, user: "Sarah M.", rating: 5, comment: "Absolutely fresh and delicious! Will order again.", date: "2023-10-15" },
        { id: 2, user: "James L.", rating: 4, comment: "Great quality, but delivery was a bit late.", date: "2023-11-02" }
    ]);
    const [newReview, setNewReview] = useState({ rating: 5, comment: '', user: '' });
    const [averageRating, setAverageRating] = useState(product?.rating || 5);

    useEffect(() => {
        if (reviews.length > 0) {
            const total = reviews.reduce((acc, review) => acc + review.rating, 0);
            setAverageRating((total / reviews.length).toFixed(1));
        }
    }, [reviews]);

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

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (!newReview.comment || !newReview.user) return;

        const review = {
            id: reviews.length + 1,
            user: newReview.user,
            rating: newReview.rating,
            comment: newReview.comment,
            date: new Date().toISOString().split('T')[0]
        };

        setReviews([review, ...reviews]);
        setNewReview({ rating: 5, comment: '', user: '' });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <Link to="/shop" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
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
                                    <Star key={i} className={`w-5 h-5 ${i < Math.round(averageRating) ? 'fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <span className="text-primary-500 text-sm">({reviews.length} reviews)</span>
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

            {/* Reviews Section */}
            <div className="border-t border-primary-100 pt-16">
                <h2 className="text-3xl font-bold text-primary-900 mb-8 flex items-center gap-3">
                    <MessageSquare className="w-8 h-8 text-primary-600" />
                    Customer Reviews
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Review Form */}
                    <div className="bg-white p-6 rounded-2xl border border-primary-100 shadow-sm h-fit">
                        <h3 className="text-xl font-bold text-primary-900 mb-4">Write a Review</h3>
                        <form onSubmit={handleSubmitReview} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-primary-700 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={newReview.user}
                                    onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary-700 mb-1">Rating</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setNewReview({ ...newReview, rating: star })}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <Star
                                                className={`w-6 h-6 ${star <= newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary-700 mb-1">Review</label>
                                <textarea
                                    required
                                    rows="4"
                                    value={newReview.comment}
                                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                                    placeholder="Share your thoughts..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>

                    {/* Reviews List */}
                    <div className="lg:col-span-2 space-y-6">
                        {reviews.length === 0 ? (
                            <p className="text-primary-500 italic">No reviews yet. Be the first to review!</p>
                        ) : (
                            reviews.map((review) => (
                                <div key={review.id} className="bg-white p-6 rounded-2xl border border-primary-100 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary-100 p-2 rounded-full">
                                                <User className="w-5 h-5 text-primary-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-primary-900">{review.user}</h4>
                                                <span className="text-xs text-primary-400">{review.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-primary-700">{review.comment}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
