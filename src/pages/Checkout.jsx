import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { CheckCircle, FileText } from 'lucide-react';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: ''
    });
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(20);
        doc.setTextColor(22, 163, 74); // Green color
        doc.text("Hydroponics Store Receipt", 105, 20, null, null, "center");

        // Customer Info
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 40);
        doc.text(`Customer: ${formData.name}`, 20, 50);
        doc.text(`Email: ${formData.email}`, 20, 60);
        doc.text(`Phone: ${formData.phone}`, 20, 70);
        doc.text(`Address: ${formData.address}, ${formData.city} - ${formData.zip}`, 20, 80);

        // Table
        const tableColumn = ["Item", "Weight", "Qty", "Price", "Total"];
        const tableRows = [];

        cart.forEach(item => {
            const itemData = [
                item.name,
                item.selectedWeight || 'N/A',
                item.quantity,
                `Rs. ${item.price}`,
                `Rs. ${(item.price * item.quantity).toFixed(2)}`
            ];
            tableRows.push(itemData);
        });

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 90,
            theme: 'grid',
            headStyles: { fillColor: [22, 163, 74] },
            styles: { fontSize: 10 }
        });

        // Total
        const finalY = doc.lastAutoTable.finalY || 150;
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text(`Grand Total: Rs. ${cartTotal.toFixed(2)}`, 140, finalY + 20);

        // Footer
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.text("Thank you for shopping with us!", 105, finalY + 40, null, null, "center");

        doc.save(`receipt_${Date.now()}.pdf`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        generatePDF();
        setIsOrderPlaced(true);
        setTimeout(() => {
            clearCart();
            navigate('/');
        }, 3000);
    };

    if (cart.length === 0 && !isOrderPlaced) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-bold text-primary-900 mb-4">Your cart is empty</h2>
                <p className="text-primary-600 mb-8">Add some fresh greens to get started!</p>
                <button
                    onClick={() => navigate('/shop')}
                    className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors"
                >
                    Browse Shop
                </button>
            </div>
        );
    }

    if (isOrderPlaced) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4">Order Placed Successfully!</h2>
                <p className="text-primary-600 mb-8 max-w-md">
                    Thank you for your purchase, {formData.name}. Your receipt has been downloaded automatically.
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-primary-900 mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form Section */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary-100">
                    <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary-600" />
                        Shipping Details
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-primary-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary-700 mb-2">Shipping Address</label>
                            <textarea
                                name="address"
                                required
                                rows="3"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                placeholder="123 Green Street, Eco Valley"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-primary-700 mb-2">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                    placeholder="Mumbai"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary-700 mb-2">ZIP Code</label>
                                <input
                                    type="text"
                                    name="zip"
                                    required
                                    value={formData.zip}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                    placeholder="400001"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-200 hover:-translate-y-1 mt-6"
                        >
                            Place Order & Download Receipt
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="bg-primary-50 p-8 rounded-2xl h-fit border border-primary-100">
                    <h2 className="text-xl font-bold text-primary-900 mb-6">Order Summary</h2>
                    <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                        {cart.map(item => (
                            <div key={item.id} className="flex gap-4 bg-white p-4 rounded-xl border border-primary-100">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                                <div className="flex-1">
                                    <h3 className="font-medium text-primary-900">{item.name}</h3>
                                    <p className="text-sm text-primary-500">Qty: {item.quantity} × ₹{item.price}</p>
                                    {item.selectedWeight && <p className="text-xs text-primary-400">Weight: {item.selectedWeight}</p>}
                                </div>
                                <div className="font-bold text-primary-700">
                                    ₹{(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-primary-200 pt-6 space-y-2">
                        <div className="flex justify-between text-primary-600">
                            <span>Subtotal</span>
                            <span>₹{cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-primary-600">
                            <span>Shipping</span>
                            <span className="text-green-600 font-medium">Free</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-primary-900 pt-4 border-t border-primary-200 mt-4">
                            <span>Total</span>
                            <span>₹{cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
