'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    onOpenModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
    return (
        <header className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                {/* Left Column: The Hook */}
                <div className="md:col-span-7 z-10">
                    <div className="inline-block border border-slate-800 px-3 py-1 font-mono text-xs uppercase tracking-widest mb-8 bg-white rotate-1">
                        Since 1994 • Singapore
                    </div>

                    {/* Headline Style 1: Bold serif → Italic → Bold underline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-slate-900 mb-12">
                        <span className="font-serif font-bold">I lost money</span> <br />
                        <span className="font-serif italic font-light text-slate-600">so you don&apos;t</span> <br />
                        <span className="font-serif font-bold hand-underline">have to.</span>
                    </h1>

                    {/* Yellow sticky note with larger text and line breaks */}
                    <div className="max-w-xl bg-yellow-100 p-6 shadow-md rotate-[-1deg] border border-yellow-200/50 mb-10">
                        <p className="font-hand text-2xl md:text-3xl text-slate-800 leading-relaxed">
                            If you&apos;re looking for a guru with a Lambo,
                            <br />I&apos;m not your guy.
                            <br /><br />
                            But if you want someone who&apos;s actually been through the fire...
                            <br /><span className="text-slate-900 font-semibold">let&apos;s talk.</span>
                        </p>
                    </div>

                    <button
                        onClick={onOpenModal}
                        className="group flex items-center gap-4 border-b-2 border-slate-900 pb-1 hover:gap-6 transition-all cursor-pointer"
                    >
                        <span className="font-mono text-sm uppercase tracking-widest">Start the Journey</span>
                        <ArrowRight size={16} />
                    </button>
                </div>

                {/* Right Column: Edwin's Photo with Sticky Notes */}
                <div className="md:col-span-5 relative hidden md:block">
                    {/* Sticky Note - Top Left of Photo */}
                    <div className="absolute -top-4 -left-8 bg-yellow-100 p-4 shadow-lg rotate-[-8deg] w-40 border border-yellow-200/50 z-30">
                        <p className="font-hand text-sm text-slate-800 leading-snug">
                            30 years of lessons. Zero sugar-coating.
                        </p>
                        <div className="mt-2 font-mono text-[9px] text-slate-500">— Your future advisor</div>
                    </div>

                    {/* Edwin's Photo */}
                    <div className="relative">
                        <div className="w-full h-[500px] bg-slate-200 overflow-hidden border-2 border-slate-900 rotate-1 shadow-2xl">
                            <img
                                src="/images/edwin-leong-enhanced.png"
                                alt="Edwin Leong"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Quote Card - Below Photo */}
                    <div className="absolute top-[460px] right-0 bg-white p-6 shadow-xl border border-slate-100 max-w-[280px] -rotate-1 z-10">
                        <div className="font-mono text-[10px] text-slate-400 mb-2 uppercase border-b pb-2">A Note From Edwin</div>
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
