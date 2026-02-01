'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#F9F8F4]/90 backdrop-blur-md border-b border-slate-200' : 'py-8 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="font-serif text-2xl font-bold tracking-tight text-slate-900 z-50 relative">
                        Edwin Leong<span className="text-red-700">.</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-12 font-mono text-xs uppercase tracking-widest text-slate-500 items-center">
                        <a href="#philosophy" className="hover:text-slate-900 transition-colors">Philosophy</a>
                        <a href="#scars" className="hover:text-slate-900 transition-colors">The Scars</a>
                        <a href="#receipts" className="hover:text-slate-900 transition-colors">Receipts</a>
                        <button className="bg-slate-900 text-[#F9F8F4] px-6 py-2 hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg">
                            Book Consultation
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center space-y-8 font-serif text-3xl">
                    <a href="#philosophy" onClick={() => setIsMenuOpen(false)}>Philosophy</a>
                    <a href="#scars" onClick={() => setIsMenuOpen(false)}>The Scars</a>
                    <a href="#receipts" onClick={() => setIsMenuOpen(false)}>Receipts</a>
                    <button className="font-mono text-sm bg-slate-900 text-white px-8 py-3">Book Consultation</button>
                </div>
            )}
        </>
    );
};

export default Navbar;
