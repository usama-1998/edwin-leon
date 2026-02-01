'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen && !mounted) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className={`relative bg-white w-full max-w-lg mx-4 p-8 md:p-12 border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                    <X size={20} />
                </button>



                <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl mb-3 text-slate-900">Let&apos;s Look at Your Numbers</h2>
                    <p className="font-sans text-slate-600 text-sm">No sales pitch. Just a strategy session to see if your portfolio is leak-proof.</p>
                </div>

                <form className="space-y-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs uppercase text-slate-500">Name</label>
                        <input
                            type="text"
                            className="w-full bg-[#F9F8F4] border-b-2 border-slate-300 focus:border-slate-900 outline-none p-3 font-serif text-lg transition-colors"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs uppercase text-slate-500">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-[#F9F8F4] border-b-2 border-slate-300 focus:border-slate-900 outline-none p-3 font-serif text-lg transition-colors"
                            placeholder="email@address.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs uppercase text-slate-500">Biggest Property Concern?</label>
                        <input
                            type="text"
                            className="w-full bg-[#F9F8F4] border-b-2 border-slate-300 focus:border-slate-900 outline-none p-3 font-serif text-lg transition-colors"
                            placeholder="e.g. Can I afford to upgrade?"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-900 text-white py-4 mt-6 font-mono uppercase tracking-widest hover:bg-red-800 transition-colors"
                    >
                        Book The Chat
                    </button>
                    <p className="text-center font-mono text-[10px] text-slate-400 mt-3 uppercase">
                        Limited slots available for non-clients per month.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
