import React from 'react';
import { Heart } from 'lucide-react';

const PartnershipSection = () => {
    return (
        <section className="py-32 px-6 overflow-hidden bg-[#F9F8F4]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                {/* Visual Collage */}
                <div className="relative h-[600px] w-full">
                    <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-slate-200 overflow-hidden border border-slate-900 z-10">
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-white p-4 border border-slate-900 z-20 shadow-2xl -rotate-2">
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                        <div className="absolute bottom-6 left-6 bg-white px-3 py-1 font-mono text-xs">@ShopTravelLove</div>
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
                        My wife Melina (@ShopTravelLove) and I have navigated 30 years of investments while raising a family. We don&apos;t just teach you how to buy; we teach you how to build a legacy that your family actually enjoys.
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
