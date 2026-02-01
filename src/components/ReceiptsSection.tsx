import React from 'react';
import { Play, Quote, Home } from 'lucide-react';

const ReceiptsSection = () => {
    const clientReviews = [
        {
            name: 'Angela Wu',
            property: 'District 15 Condo',
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80',
            quote: 'Edwin helped us see beyond the marketing. We avoided a new launch that would have cost us $200k more.',
            hasVideo: true,
        },
        {
            name: 'Ivan & Pearlyn',
            property: 'HDB to Private Upgrade',
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80',
            quote: 'Most agents pushed us to buy bigger. Edwin showed us the math and we stayed within our means.',
            hasVideo: true,
        },
        {
            name: 'Theresia',
            property: 'Investment Portfolio',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
            quote: 'He showed us his actual mistakes from 1997. That honesty saved us from over-leveraging.',
            hasVideo: false,
        },
    ];

    return (
        <section id="receipts" className="py-24 px-6 bg-white relative border-t border-slate-200">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b-2 border-slate-900 pb-6">
                    <div>
                        <h2 className="font-serif text-5xl text-slate-900 mb-2">The Track Record</h2>
                        <div className="font-mono text-xs uppercase tracking-widest text-slate-500">Client Properties & Reviews • Est. 1994</div>
                    </div>
                    <div className="hidden md:block">
                        <div className="border border-slate-900 px-4 py-2 font-mono text-xs uppercase flex items-center gap-2">
                            <Home size={14} className="text-slate-600" />
                            Real Results
                        </div>
                    </div>
                </div>

                {/* Client Property Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clientReviews.map((client, idx) => (
                        <div key={idx} className="group relative bg-[#fcfcfc] border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                            {/* Property Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={client.image}
                                    alt={client.property}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {client.hasVideo && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                            <Play size={24} className="text-slate-900 ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                )}
                                {/* Property Tag */}
                                <div className="absolute bottom-3 left-3 bg-white px-3 py-1 font-mono text-xs uppercase tracking-wide">
                                    {client.property}
                                </div>
                            </div>

                            {/* Review Content */}
                            <div className="p-6">
                                <Quote size={20} className="text-slate-300 mb-3" />
                                <p className="font-serif italic text-slate-600 leading-relaxed mb-4">
                                    &quot;{client.quote}&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-mono text-xs font-bold text-slate-600">
                                        {client.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="font-sans font-bold text-sm text-slate-900">{client.name}</div>
                                        <div className="font-mono text-[10px] text-slate-500 uppercase">Client</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">
                        These are real clients, real properties, real results
                    </p>
                    <button className="border-b-2 border-slate-900 pb-1 font-mono text-sm uppercase tracking-widest hover:text-red-700 hover:border-red-700 transition-colors">
                        See More Success Stories
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ReceiptsSection;
