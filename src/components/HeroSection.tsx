import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
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
                            <button className="group flex items-center gap-4 border-b-2 border-slate-900 pb-1 hover:gap-6 transition-all">
                                <span className="font-mono text-sm uppercase tracking-widest">Start the Journey</span>
                                <ArrowRight size={16} />
                            </button>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-[#F9F8F4]" />
                                    ))}
                                </div>
                                <span className="font-mono text-xs text-slate-500">Helping families since &apos;94</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: The Visual (Abstract/Bespoke) */}
                <div className="md:col-span-4 relative hidden md:block">
                    <div className="absolute top-0 right-0 w-64 h-80 bg-slate-200 overflow-hidden grayscale contrast-125 border-2 border-slate-900 rotate-3 z-0">
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 mix-blend-multiply"></div>
                    </div>

                    {/* Second Frame with Image */}
                    <div className="absolute top-12 right-12 w-64 h-80 border-2 border-slate-900 z-10 -rotate-2 overflow-hidden bg-slate-100">
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1460317442991-0ec2aa5a1199?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale contrast-125 mix-blend-multiply opacity-80"></div>
                    </div>

                    {/* The "Note" Card */}
                    <div className="absolute top-60 -left-12 bg-white p-6 shadow-xl border border-slate-100 max-w-xs rotate-1 z-20">
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
