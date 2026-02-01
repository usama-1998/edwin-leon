'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    onOpenModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
    // Demo avatar images for "Helping families since '94"
    const avatarImages = [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80',
    ];

    return (
        <header className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                {/* Left Column: The Hook */}
                <div className="md:col-span-8 z-10">
                    <div className="inline-block border border-slate-800 px-3 py-1 font-mono text-xs uppercase tracking-widest mb-8 bg-white rotate-1">
                        Since 1994 • Singapore
                    </div>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-slate-900 mb-12">
                        I lost money <br />
                        <span className="italic font-light text-slate-600">so you don&apos;t</span> <br />
                        <span className="hand-underline">have to.</span>
                    </h1>
                    <div className="max-w-xl">
                        <p className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed">
                            30 years in Singapore real estate. I&apos;m not here to sell you a dream.
                            I&apos;m here to show you the scars, the receipts, and the truth about building generational wealth.
                        </p>
                        <div className="mt-12 flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <button
                                onClick={onOpenModal}
                                className="group flex items-center gap-4 border-b-2 border-slate-900 pb-1 hover:gap-6 transition-all"
                            >
                                <span className="font-mono text-sm uppercase tracking-widest">Start the Journey</span>
                                <ArrowRight size={16} />
                            </button>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {avatarImages.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`Client ${i + 1}`}
                                            className="w-8 h-8 rounded-full border-2 border-[#F9F8F4] object-cover"
                                        />
                                    ))}
                                </div>
                                <span className="font-mono text-xs text-slate-500">Helping families since &apos;94</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Edwin's Photo (Large) & Wife Placeholder (Smaller) */}
                <div className="md:col-span-4 relative hidden md:block">
                    {/* Edwin's Photo - Large & Primary */}
                    <div className="absolute top-0 right-0 w-72 h-96 bg-slate-200 overflow-hidden border-2 border-slate-900 rotate-2 z-10 shadow-xl">
                        <img
                            src="/images/edwin-leong-enhanced.png"
                            alt="Edwin Leong"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Wife Placeholder - Smaller & Below */}
                    <div className="absolute top-72 right-20 w-48 h-56 border-2 border-dashed border-slate-400 z-20 -rotate-3 overflow-hidden bg-[#F5F4F0] flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mb-3">
                            <span className="font-mono text-2xl text-slate-400">M</span>
                        </div>
                        <span className="font-mono text-xs text-slate-400 uppercase tracking-wide">Melina</span>
                        <span className="font-mono text-[10px] text-slate-300 mt-1">@ShopTravelLove</span>
                    </div>

                    {/* The "Note" Card */}
                    <div className="absolute top-48 -left-16 bg-white p-6 shadow-xl border border-slate-100 max-w-xs rotate-1 z-30">
                        <div className="font-mono text-[10px] text-slate-400 mb-2 uppercase border-b pb-2">Memo: Re: Guru Culture</div>
                        <p className="font-serif text-lg italic leading-tight text-slate-800">
                            &quot;Wealth is quiet. Rich is loud. We are building wealth.&quot;
                        </p>
                        <div className="mt-4 font-mono text-xs text-right">— E.L.</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
