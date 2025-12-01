import React from 'react';
import { Droplets, Sun, Sprout, ShieldCheck, TrendingUp, Clock, Maximize, Wind, Zap, Award, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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

const About = () => {
    return (
        <div className="bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary-900/90 z-10"></div>
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1600"
                        alt="Modern Hydroponic Farm"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 text-primary-300 text-sm font-semibold tracking-wider mb-4 uppercase">
                            Future of Farming
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Cultivating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-400">Purity</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 font-light leading-relaxed">
                            HydroGrow is pioneering the next generation of sustainable agriculture in the Delta region.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-white rounded-full"></div>
                    </div>
                </motion.div>
            </section>



            {/* Key Advantages - Cards */}
            <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Hydroponics?</h2>
                        <p className="text-primary-200 max-w-2xl mx-auto">
                            Experience the benefits of modern farming. Cleaner, faster, and more sustainable.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: Droplets, title: "Water Efficiency", desc: "Reduces water consumption by up to 90%." },
                            { icon: Zap, title: "Nutrient Control", desc: "Fine-tuned composition for optimal growth." },
                            { icon: TrendingUp, title: "Higher Yield", desc: "Faster growth cycles and healthier plants." },
                            { icon: Clock, title: "Year-Round", desc: "Growing regardless of seasonal changes." },
                            { icon: ShieldCheck, title: "Pest Free", desc: "Controlled environment reduces disease risk." },
                            { icon: Maximize, title: "Space Saving", desc: "Vertical setups maximize output." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                            >
                                <div className="bg-primary-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-7 h-7 text-primary-300" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                <p className="text-primary-200 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process - Timeline */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-bold text-primary-900 mb-4">From Seed to Harvest</h2>
                        <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

                        {[
                            { title: "Seed Selection", desc: "Choosing the finest non-GMO seeds.", icon: Sprout },
                            { title: "Germination", desc: "Nurturing in controlled environments.", icon: Sun },
                            { title: "Hydroponic Transfer", desc: "Moving to nutrient-rich water systems.", icon: Droplets },
                            { title: "Growth & Care", desc: "Monitoring pH and nutrient levels daily.", icon: Heart },
                            { title: "Harvesting", desc: "Picking at peak freshness.", icon: Award },
                            { title: "System Reset", desc: "Cleaning for the next sustainable cycle.", icon: Wind }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className={`relative flex items-center justify-between mb-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className="hidden md:block w-5/12"></div>
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-primary-100 shadow-lg flex items-center justify-center z-10">
                                    <step.icon className="w-5 h-5 text-primary-600" />
                                </div>
                                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                                    <div className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                        <div className={`absolute top-6 ${idx % 2 === 0 ? 'md:-right-2 right-auto -left-2' : 'md:-left-2 -left-2'} w-4 h-4 bg-white transform rotate-45 border-l border-b border-gray-100`}></div>
                                        <h3 className="text-xl font-bold text-primary-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-500">{step.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission - Modern Cards */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-50 -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-10 text-white relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
                            <Sun className="w-12 h-12 text-yellow-400 mb-6 relative z-10" />
                            <h3 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h3>
                            <p className="text-primary-100 text-lg leading-relaxed relative z-10">
                                To become a leading producer of hydroponic greens in the delta region, pioneering sustainable, high-efficiency farming that respects our planet.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-50 rounded-full -ml-16 -mb-16 transition-transform duration-500 group-hover:scale-150"></div>
                            <Heart className="w-12 h-12 text-red-500 mb-6 relative z-10" />
                            <h3 className="text-3xl font-bold text-primary-900 mb-4 relative z-10">Our Mission</h3>
                            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                                To deliver fresh, high-quality, nutrient-rich vegetables to our community while conserving water and minimizing environmental impact.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
