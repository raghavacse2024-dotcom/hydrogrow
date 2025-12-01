import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-primary-100 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <Leaf className="w-6 h-6 text-primary-600" />
                            <span className="text-xl font-bold text-primary-900">HydroGrow</span>
                        </div>
                        <p className="text-primary-700 text-sm">
                            Bringing the future of farming to your home. Fresh, sustainable, and pesticide-free.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-primary-900 font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2 text-primary-600 text-sm">
                            <li><a href="#" className="hover:text-primary-800 transition-colors">Hydroponic Kits</a></li>
                            <li><a href="#" className="hover:text-primary-800 transition-colors">Nutrients</a></li>
                            <li><a href="#" className="hover:text-primary-800 transition-colors">Seeds</a></li>
                            <li><a href="#" className="hover:text-primary-800 transition-colors">Grow Lights</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-primary-900 font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-primary-600 text-sm">
                            <li><a href="#" className="hover:text-primary-800 transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-primary-800 transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-primary-800 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary-800 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-primary-900 font-semibold mb-4">Stay Updated</h3>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-primary-50 border border-primary-100 rounded px-4 py-2 text-primary-900 focus:outline-none focus:border-primary-500 placeholder-primary-300"
                            />
                            <button className="bg-primary-600 text-white font-bold py-2 rounded hover:bg-primary-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <Facebook className="w-5 h-5 text-primary-400 hover:text-primary-600 cursor-pointer" />
                            <Twitter className="w-5 h-5 text-primary-400 hover:text-primary-600 cursor-pointer" />
                            <Instagram className="w-5 h-5 text-primary-400 hover:text-primary-600 cursor-pointer" />
                            <Mail className="w-5 h-5 text-primary-400 hover:text-primary-600 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-primary-100 text-center text-primary-400 text-sm">
                    &copy; {new Date().getFullYear()} HydroGrow. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
