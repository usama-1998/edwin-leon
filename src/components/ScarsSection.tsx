import React from 'react';
import { ShieldAlert } from 'lucide-react';
import Polaroid from './ui/Polaroid';

const ScarsSection = () => {
    return (
        <section id="scars" className="py-32 px-6 border-t border-slate-200 bg-[#F5F4F0] overflow-hidden">
            <div className="max-w-7xl mx-auto relative">

                {/* Section Header */}
                <div className="text-center mb-24 relative z-10">
                    <span className="font-mono text-xs text-red-700 uppercase tracking-widest block mb-4">The Anti-Guru Methodology</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-slate-900">
                        My Scars, Your Education.
                    </h2>
                    <p className="font-hand text-2xl text-slate-500 mt-4 rotate-2">
                        (A visual history of mistakes I made)
                    </p>
                </div>

                {/* Timeline Line */}
                <div className="absolute top-40 bottom-0 left-1/2 w-0.5 border-l-2 border-dashed border-slate-300 -translate-x-1/2 hidden md:block z-0"></div>

                {/* Timeline Items */}
                <div className="space-y-32 relative z-10">

                    {/* ITEM 1: The '97 Crash */}
                    <div className="flex flex-col md:flex-row items-center justify-between relative group">
                        <div className="w-full md:w-5/12 text-right order-2 md:order-1 pr-0 md:pr-12 mt-8 md:mt-0">
                            <div className="inline-block relative">
                                <div className="font-mono text-sm text-red-600 mb-2 font-bold tracking-widest">OCTOBER 1997</div>
                                <h3 className="font-serif text-3xl md:text-4xl mb-4">The Asian Financial Crisis</h3>
                                <p className="font-sans text-slate-600 leading-relaxed">
                                    I was young. I thought leverage was free money. Then valuation dropped 40% overnight.
                                </p>
                                <div className="mt-4 font-hand text-xl text-slate-500 -rotate-1">
                                    &quot;Leverage cuts both ways...&quot;
                                </div>
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-red-700 rounded-full border-4 border-[#F5F4F0] shadow-sm z-20 hidden md:block"></div>

                        <div className="w-full md:w-5/12 order-1 md:order-2 pl-0 md:pl-12">
                            <Polaroid
                                imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
                                caption="Valuation Report: 1997"
                                rotation="rotate-3"
                            />
                        </div>
                    </div>

                    {/* ITEM 2: The Friend Deal */}
                    <div className="flex flex-col md:flex-row items-center justify-between relative group">
                        <div className="w-full md:w-5/12 order-1 pr-0 md:pr-12 flex justify-end">
                            <div className="relative">
                                <Polaroid
                                    imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                                    caption="The &quot;Handshake&quot; Deal"
                                    rotation="-rotate-2"
                                />
                                {/* Sticky Note */}
                                <div className="absolute -bottom-6 -right-6 bg-yellow-100 p-4 shadow-md rotate-6 w-32 border border-yellow-200/50">
                                    <p className="font-hand text-sm text-slate-800 leading-tight">Cost me a prime District 10 asset!</p>
                                </div>
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-[#F5F4F0] shadow-sm z-20 hidden md:block"></div>

                        <div className="w-full md:w-5/12 order-2 pl-0 md:pl-12 mt-8 md:mt-0">
                            <div className="inline-block relative">
                                <div className="font-mono text-sm text-slate-600 mb-2 font-bold tracking-widest">FEBRUARY 2004</div>
                                <h3 className="font-serif text-3xl md:text-4xl mb-4">The &quot;Friend&quot; Contract</h3>
                                <p className="font-sans text-slate-600 leading-relaxed">
                                    I trusted a friend over a lawyer. He walked away with the upside. I walked away with the lesson.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-slate-900 font-mono text-xs uppercase tracking-widest border-b border-slate-300 pb-1 w-fit">
                                    <ShieldAlert size={14} /> Lesson: Contracts First
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 3: Timing the Bottom */}
                    <div className="flex flex-col md:flex-row items-center justify-between relative group">
                        <div className="w-full md:w-5/12 text-right order-2 md:order-1 pr-0 md:pr-12 mt-8 md:mt-0">
                            <div className="inline-block relative">
                                <div className="font-mono text-sm text-amber-600 mb-2 font-bold tracking-widest">MAY 2009</div>
                                <h3 className="font-serif text-3xl md:text-4xl mb-4">Waiting for &quot;Perfect&quot;</h3>
                                <p className="font-sans text-slate-600 leading-relaxed">
                                    Prices were low. I waited for them to get lower. They didn&apos;t. I missed the rebound by 6 months.
                                </p>
                                <div className="mt-4 font-hand text-xl text-slate-500 -rotate-1">
                                    &quot;Time in market {'>'} Timing the market&quot;
                                </div>
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-[#F5F4F0] shadow-sm z-20 hidden md:block"></div>

                        <div className="w-full md:w-5/12 order-1 md:order-2 pl-0 md:pl-12">
                            <Polaroid
                                imageSrc="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80"
                                caption="Market Watch: 2009"
                                rotation="rotate-2"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ScarsSection;
