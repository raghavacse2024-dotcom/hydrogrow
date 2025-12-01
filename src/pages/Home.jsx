import React from 'react';
import Hero from '../components/Hero';
import Subscription from '../components/Subscription';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, Sun } from 'lucide-react';
import verticalFarmingImg from '../assets/vertical-farming.jpg';
import dailyHarvestImg from '../assets/daily-harvest.jpg';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Home = () => {
    return (
        <div className="bg-gray-50">
            <Hero />

            {/* Modern Farming Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white -z-10"></div>

                {/* Decorative blobs */}
                <div className="absolute top-20 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-20"
                    >
                        <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Promise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Sustainable & Pure</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                            Grown with 90% less water, 100% more love, and absolutely zero pesticides.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    >
                        {[
                            {
                                title: "Vertical Farming",
                                desc: "Maximizing space and efficiency with tiered growing systems.",
                                image: verticalFarmingImg,
                                icon: Sprout
                            },
                            {
                                title: "Zero Pesticides",
                                desc: "Pure, clean produce grown without harmful chemicals.",
                                image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=800",
                                icon: ShieldCheck
                            },
                            {
                                title: "Daily Harvest",
                                desc: "Picked at the peak of freshness, delivered to you.",
                                image: dailyHarvestImg,
                                icon: Sun
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                        <div className="bg-primary-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary-500/30">
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Subscription Section */}
            <Subscription />
        </div>
    );
};

export default Home;
