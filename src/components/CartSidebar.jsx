import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-primary-900/40 backdrop-blur-sm z-50"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white border-l border-primary-100 z-50 shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b border-primary-100 flex justify-between items-center bg-primary-50/50">
                            <h2 className="text-xl font-bold text-primary-900">Your Cart</h2>
                            <button onClick={() => setIsCartOpen(false)} className="text-primary-400 hover:text-primary-600 transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="text-center text-primary-400 mt-10">
                                    <p>Your cart is empty.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="mt-4 text-primary-600 hover:text-primary-800 hover:underline font-medium"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map(item => (
                                    <div key={item.id} className="flex gap-4 bg-white p-4 rounded-xl border border-primary-100 shadow-sm hover:shadow-md transition-shadow">
                                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                        <div className="flex-1">
                                            <h3 className="text-primary-900 font-medium">{item.name}</h3>
                                            <p className="text-primary-600 font-bold">₹{item.price}</p>
                                            {item.selectedWeight && (
                                                <p className="text-xs text-primary-400 mt-1">Weight: {item.selectedWeight}</p>
                                            )}

                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center gap-2 bg-primary-50 rounded-full px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:text-primary-600 disabled:opacity-50 text-primary-400 transition-colors"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-sm w-4 text-center text-primary-900 font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:text-primary-600 text-primary-400 transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-400 hover:text-red-500 p-1 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-6 border-t border-primary-100 bg-primary-50/30">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-primary-700 font-medium">Subtotal</span>
                                    <span className="text-2xl font-bold text-primary-900">₹{cartTotal.toFixed(2)}</span>
                                </div>
                                <Link
                                    to="/checkout"
                                    onClick={() => setIsCartOpen(false)}
                                    className="block w-full bg-primary-600 text-white font-bold text-center py-3.5 rounded-full hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-200 hover:-translate-y-0.5"
                                >
                                    Checkout
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
