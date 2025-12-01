import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import pageBg from '../assets/page-bg.png';

const Layout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                {isHome ? (
                    <>
                        {/* Gradient Orbs */}
                        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

                        {/* Background Images */}
                        <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-10 bg-[url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000')] bg-contain bg-no-repeat bg-right-top"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-10 bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1000')] bg-contain bg-no-repeat bg-left-bottom"></div>
                    </>
                ) : (
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                        style={{ backgroundImage: `url(${pageBg})` }}
                    ></div>
                )}
            </div>

            <Navbar />
            <CartSidebar />
            <main className="flex-grow pt-16 relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
