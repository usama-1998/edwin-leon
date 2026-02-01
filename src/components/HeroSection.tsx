'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    onOpenModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
    // Close-up couple images for "Helping families since '94"
    const coupleImages = [
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1529156069898-49e6d2de825d?auto=format&fit=crop&w=100&h=100&q=80',
    ];

    return (
        <header className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                {/* Left Column: The Hook */}
                <div className="md:col-span-7 z-10">
                    <div className="inline-block border border-slate-800 px-3 py-1 font-mono text-xs uppercase tracking-widest mb-8 bg-white rotate-1">
                        Since 1994 • Singapore
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-slate-900 mb-12">
                        <span className="font-hand text-5xl md:text-6xl lg:text-7xl">I lost money</span> <br />
                        <span className="font-serif italic font-light text-slate-600">so you don&apos;t</span> <br />
                        <span className="font-serif hand-underline">have to.</span>
                    </h1>
                    <div className="max-w-xl">
                        <p className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed">
                            30 years in Singapore real estate. I&apos;m not here to sell you a dream.
                            I&apos;m here to show you the scars, the receipts, and the truth about building generational wealth.
                        </p>

                        {/* Personal Touch - Handwritten Note */}
                        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rotate-[-0.5deg] relative">
                            <p className="font-hand text-lg text-slate-700">
                                P.S. — If you&apos;re looking for a guru with a Lambo, I&apos;m not your guy.
                                But if you want someone who&apos;s actually been through the fire... let&apos;s talk.
                            </p>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-200 rotate-12"></div>
                        </div>

                        <div className="mt-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <button
                                onClick={onOpenModal}
                                className="group flex items-center gap-4 border-b-2 border-slate-900 pb-1 hover:gap-6 transition-all cursor-pointer"
                            >
                                <span className="font-mono text-sm uppercase tracking-widest">Start the Journey</span>
                                <ArrowRight size={16} />
                            </button>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {coupleImages.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`Happy couple ${i + 1}`}
                                            className="w-8 h-8 rounded-full border-2 border-[#F9F8F4] object-cover"
                                        />
                                    ))}
                                </div>
                                <span className="font-mono text-xs text-slate-500">Helping families since &apos;94</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Edwin's Photo (Extra Large) with Sticky Note */}
                <div className="md:col-span-5 relative hidden md:block">
                    {/* Edwin's Photo - Extra Large & Primary */}
                    <div className="relative">
                        <div className="w-full h-[500px] bg-slate-200 overflow-hidden border-2 border-slate-900 rotate-1 shadow-2xl">
                            <img
                                src="/images/edwin-leong-enhanced.png"
                                alt="Edwin Leong"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Sticky Note on Image */}
                        <div className="absolute -bottom-8 -left-8 bg-yellow-100 p-5 shadow-lg rotate-[-6deg] w-44 border border-yellow-200/50 z-20">
                            <p className="font-hand text-sm text-slate-800 leading-snug">
                                30 years of lessons. Zero sugar-coating.
                            </p>
                            <div className="mt-2 font-mono text-[9px] text-slate-500">— Your future advisor</div>
                        </div>
                    </div>

                    {/* The "Quote" Card - Positioned Below */}
                    <div className="absolute top-[460px] right-0 bg-white p-6 shadow-xl border border-slate-100 max-w-[280px] -rotate-1 z-10">
                        <div className="font-mono text-[10px] text-slate-400 mb-2 uppercase border-b pb-2">Memo: Re: Guru Culture</div>
                        <p className="font-serif text-base italic leading-tight text-slate-800">
                            &quot;Wealth is quiet. Rich is loud. We are building wealth.&quot;
                        </p>
                        <div className="mt-3 font-mono text-xs text-right">— E.L.</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
