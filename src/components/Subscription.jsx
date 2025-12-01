import React, { useState } from 'react';
import { Check, MapPin, Leaf } from 'lucide-react';

const Subscription = () => {
    const [isLocal, setIsLocal] = useState(false);

    const plans = [
        {
            name: 'Weekly Harvest',
            price: 49,
            discountPrice: 39,
            period: 'week',
            description: 'Perfect for small families who love fresh greens.',
            features: [
                '5 varieties of seasonal veggies',
                'Free delivery',
                'Recipe cards included',
                'Cancel anytime'
            ],
            color: 'bg-primary-50',
            buttonColor: 'bg-primary-600 hover:bg-primary-700',
            popular: false
        },
        {
            name: 'Monthly Abundance',
            price: 189,
            discountPrice: 149,
            period: 'month',
            description: 'Best value for consistent healthy eating.',
            features: [
                '8 varieties of seasonal veggies',
                'Priority delivery slot',
                'Weekly surprise herb bundle',
                'Recipe cards & meal prep guide',
                '10% off on extra orders'
            ],
            color: 'bg-primary-600 text-white',
            buttonColor: 'bg-white text-primary-600 hover:bg-gray-100',
            popular: true
        },
        {
            name: 'Yearly Roots',
            price: 1999,
            discountPrice: 1599,
            period: 'year',
            description: 'Commit to a year of health and sustainability.',
            features: [
                'Full customization of box',
                'VIP delivery service',
                'Exclusive farm visits',
                'Quarterly chef workshops',
                '20% off on extra orders'
            ],
            color: 'bg-primary-50',
            buttonColor: 'bg-primary-600 hover:bg-primary-700',
            popular: false
        }
    ];

    return (
        <section id="subscription" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl mb-4">Farm to Table Subscription</h2>
                    <p className="text-xl text-primary-500 mb-8">Fresh, organic produce delivered directly to your doorstep.</p>

                    {/* Radius Toggle */}
                    <div className="flex items-center justify-center space-x-4 bg-primary-50 inline-flex p-2 rounded-full">
                        <span className={`text-sm font-medium ${!isLocal ? 'text-primary-900' : 'text-primary-400'}`}>Standard Delivery</span>
                        <button
                            onClick={() => setIsLocal(!isLocal)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${isLocal ? 'bg-primary-600' : 'bg-gray-200'}`}
                        >
                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isLocal ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                        <div className="flex items-center space-x-1">
                            <span className={`text-sm font-medium ${isLocal ? 'text-primary-900' : 'text-primary-400'}`}>Within 10km</span>
                            {isLocal && <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-bold animate-pulse">Save up to 20%</span>}
                        </div>
                    </div>
                    {isLocal && (
                        <p className="mt-4 text-sm text-primary-600 flex items-center justify-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            Local discount applied! We love our neighbors.
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.color} ${plan.popular ? 'ring-4 ring-primary-200 scale-105 md:scale-110 z-10' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-sm">
                                    Most Popular
                                </div>
                            )}

                            <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-primary-900'}`}>{plan.name}</h3>
                            <p className={`mb-6 ${plan.popular ? 'text-primary-100' : 'text-primary-500'}`}>{plan.description}</p>

                            <div className="flex items-baseline mb-8">
                                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-primary-900'}`}>
                                    ₹{isLocal ? plan.discountPrice : plan.price}
                                </span>
                                <span className={`ml-2 text-lg ${plan.popular ? 'text-primary-100' : 'text-primary-400'}`}>/{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-primary-200' : 'text-primary-600'}`} />
                                        <span className={plan.popular ? 'text-primary-50' : 'text-gray-600'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 px-6 rounded-xl font-bold transition-colors shadow-sm ${plan.buttonColor}`}>
                                Subscribe Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Subscription;
