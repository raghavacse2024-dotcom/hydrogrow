import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary-900">
            {/* Background Image with Parallax/Zoom Effect */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1600"
                    alt="Hydroponic Farm"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20"
                    >
                        <Leaf className="w-4 h-4 text-green-400" />
                        <span className="text-green-100 text-sm font-medium tracking-wide uppercase">Future of Agriculture</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight"
                    >
                        Purest Greens, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                            Grown by Technology
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed font-light"
                    >
                        Experience the difference of pesticide-free, nutrient-rich produce grown in our advanced hydroponic vertical farms. Sustainable, fresh, and delivered to you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Link
                            to="/shop"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-primary-500 hover:scale-105 hover:shadow-lg hover:shadow-primary-600/30"
                        >
                            <span className="relative z-10 flex items-center">
                                Shop Fresh
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            Our Process
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-20 hidden lg:block"
            >
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl max-w-xs">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-green-500/20 p-3 rounded-full">
                            <Droplets className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <p className="text-white font-bold">Water Saving</p>
                            <p className="text-green-200 text-sm">90% less water used</p>
                        </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full w-[90%]"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
