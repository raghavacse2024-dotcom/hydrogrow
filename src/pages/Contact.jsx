import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Clock } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Message sent successfully! (This is a demo)');
    };

    return (
        <div className="min-h-screen bg-neutral-50 pt-20">
            {/* Hero Section */}
            <section className="bg-primary-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-primary-100 max-w-2xl mx-auto"
                    >
                        Have questions about our hydroponic systems? We're here to help you grow.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-primary-900 mb-6">Contact Information</h2>
                            <p className="text-neutral-600 mb-8">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary-100 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary-900">Phone</h3>
                                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                                    <p className="text-neutral-500 text-sm">Mon-Fri 9am-6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary-100 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary-900">Email</h3>
                                    <p className="text-neutral-600">hello@hydrogrow.com</p>
                                    <p className="text-neutral-600">support@hydrogrow.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary-100 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary-900">Office</h3>
                                    <p className="text-neutral-600">RR3Q+CFM, Chennai - Nagapattinam Hwy</p>
                                    <p className="text-neutral-600">Annai Nagar, Nagapattinam, Tamil Nadu 611002</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-neutral-200">
                            <h3 className="font-semibold text-primary-900 mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="bg-white p-3 rounded-full shadow-sm hover:shadow-md hover:text-primary-600 transition-all duration-300 border border-neutral-100"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                >
                                    <option value="">Select a topic</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Product Support</option>
                                    <option value="sales">Sales & Bulk Orders</option>
                                    <option value="partnership">Partnership</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <section className="h-96 w-full bg-neutral-200 relative">
                <iframe
                    src="https://maps.google.com/maps?q=RR3Q%2BCFM%2C%20Chennai%20-%20Nagapattinam%20Hwy%2C%20Annai%20Nagar%2C%20Nagapattinam%2C%20Tamil%20Nadu%20611002&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Location Map"
                    className="filter grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-neutral-600">Can't find the answer you're looking for? Reach out to our support team.</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you ship internationally?",
                                a: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location."
                            },
                            {
                                q: "What is your return policy?",
                                a: "We offer a 30-day money-back guarantee on all our hydroponic systems. If you're not satisfied, simply return it for a full refund."
                            },
                            {
                                q: "Do you offer technical support?",
                                a: "Absolutely! Our team of hydroponic experts is available to help you with setup, maintenance, and troubleshooting."
                            },
                            {
                                q: "Are your seeds organic?",
                                a: "Yes, all our seed kits contain 100% organic, non-GMO seeds sourced from certified suppliers."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg font-semibold text-primary-900 mb-2">{faq.q}</h3>
                                <p className="text-neutral-600">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
