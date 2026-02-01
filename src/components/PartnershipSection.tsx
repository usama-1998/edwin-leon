import React from 'react';
import { Heart } from 'lucide-react';

const PartnershipSection = () => {
    return (
        <section className="py-32 px-6 overflow-hidden bg-[#F9F8F4]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                {/* Visual Collage - Edwin (Large) & Wife Placeholder (Smaller) */}
                <div className="relative h-[600px] w-full">
                    {/* Edwin's Photo - Main & Larger */}
                    <div className="absolute top-0 left-0 w-[80%] h-[75%] bg-slate-200 overflow-hidden border-2 border-slate-900 z-10 shadow-xl">
                        <img
                            src="/images/edwin-leong-enhanced.png"
                            alt="Edwin Leong"
                            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* Wife Placeholder - Smaller & Below */}
                    <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-white p-4 border-2 border-dashed border-slate-400 z-20 shadow-2xl -rotate-2">
                        <div className="w-full h-full bg-[#F5F4F0] flex flex-col items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mb-4">
                                <span className="font-serif text-3xl text-slate-400 italic">M</span>
                            </div>
                            <span className="font-mono text-sm text-slate-500 uppercase tracking-wide">Partner</span>
                            <span className="font-mono text-xs text-slate-400 mt-1">@ShopTravelLove</span>
                            <div className="mt-4 border border-slate-300 px-3 py-1">
                                <span className="font-mono text-[10px] text-slate-400 uppercase">Add Photo</span>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 bg-white px-3 py-1 font-mono text-xs">Partner</div>
                    </div>

                    {/* Decorative Tape */}
                    <div className="absolute top-[-10px] left-[40%] w-32 h-8 bg-yellow-100/80 rotate-2 z-30 mix-blend-multiply"></div>
                </div>

                {/* Text Content */}
                <div>
                    <div className="flex items-center gap-2 mb-6 text-red-700">
                        <Heart size={16} fill="currentColor" />
                        <span className="font-mono text-xs uppercase tracking-widest">The Partnership</span>
                    </div>
                    <h2 className="font-serif text-5xl text-slate-900 mb-8 leading-tight">
                        Building Wealth <br />
                        <span className="italic text-slate-500">Without</span> Breaking the Home.
                    </h2>
                    <p className="font-sans text-lg text-slate-600 mb-8 leading-relaxed">
                        Property is stressful. Marriage is hard. Doing both together? That takes a system.
                    </p>
                    <p className="font-sans text-lg text-slate-600 mb-12 leading-relaxed">
                        My wife and I have navigated 30 years of investments while raising a family. We don&apos;t just teach you how to buy; we teach you how to build a legacy that your family actually enjoys.
                    </p>
                    <a href="#" className="inline-block border-b-2 border-slate-900 pb-1 font-mono text-sm uppercase hover:text-red-700 hover:border-red-700 transition-colors">
                        Read Our Story
                    </a>
                </div>

            </div>
        </section>
    );
};

export default PartnershipSection;
