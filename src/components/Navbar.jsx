import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-primary-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <Leaf className="w-8 h-8 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                        <span className="text-2xl font-bold text-primary-900">
                            HydroGrow
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-primary-800 hover:text-primary-600 transition-colors font-medium">Home</Link>
                        <Link to="/shop" className="text-primary-800 hover:text-primary-600 transition-colors font-medium">Shop</Link>
                        <Link to="/about" className="text-primary-800 hover:text-primary-600 transition-colors font-medium">About</Link>
                        <a href="/#subscription" className="text-primary-800 hover:text-primary-600 transition-colors font-medium">Subscription</a>
                        <Link to="/contact" className="text-primary-800 hover:text-primary-600 transition-colors font-medium">Contact</Link>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 hover:bg-primary-50 rounded-full transition-colors group"
                        >
                            <ShoppingCart className="w-6 h-6 text-primary-800 group-hover:text-primary-600" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary-800 hover:text-primary-600 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-primary-100"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:text-primary-600 hover:bg-primary-50">Home</Link>
                            <Link to="/shop" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:text-primary-600 hover:bg-primary-50">Shop</Link>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:text-primary-600 hover:bg-primary-50">About</Link>
                            <a href="/#subscription" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:text-primary-600 hover:bg-primary-50">Subscription</a>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:text-primary-600 hover:bg-primary-50">Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
