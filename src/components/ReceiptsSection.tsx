'use client';

import React, { useState } from 'react';
import { Play, Quote, Home, X } from 'lucide-react';

interface PropertyModalProps {
    isOpen: boolean;
    onClose: () => void;
    property: {
        name: string;
        property: string;
        image: string;
        quote: string;
        hasVideo: boolean;
        location?: string;
        year?: string;
        type?: string;
    } | null;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ isOpen, onClose, property }) => {
    if (!isOpen || !property) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <div
                className="relative bg-white w-full max-w-2xl mx-4 border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                    <X size={20} />
                </button>

                <div className="relative h-64 md:h-80">
                    <img src={property.image} alt={property.property} className="w-full h-full object-cover" />
                    {property.hasVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/30">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <Play size={32} className="text-slate-900 ml-1" fill="currentColor" />
                            </div>
                        </div>
                    )}
                    <div className="absolute bottom-4 left-4 bg-white px-4 py-2 font-mono text-sm uppercase tracking-wide">
                        {property.property}
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-mono text-sm font-bold text-slate-600">
                            {property.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <div className="font-sans font-bold text-lg text-slate-900">{property.name}</div>
                            <div className="font-mono text-[10px] text-slate-500 uppercase">Verified Client</div>
                        </div>
                    </div>

                    <Quote size={24} className="text-red-600 mb-4" />
                    <p className="font-serif text-xl italic text-slate-700 leading-relaxed mb-6">
                        &quot;{property.quote}&quot;
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="bg-slate-100 px-3 py-1 font-mono text-xs uppercase">
                            {property.type || 'Residential'}
                        </div>
                        <div className="bg-slate-100 px-3 py-1 font-mono text-xs uppercase">
                            {property.location || 'Singapore'}
                        </div>
                        <div className="bg-slate-100 px-3 py-1 font-mono text-xs uppercase">
                            {property.year || '2023'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ReceiptsSection = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState<typeof allProperties[0] | null>(null);

    const allProperties = [
        {
            name: 'Angela Wu',
            property: 'District 15 Condo',
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80',
            quote: 'Edwin helped us see beyond the marketing. We avoided a new launch that would have cost us $200k more.',
            hasVideo: true,
            location: 'District 15',
            year: '2023',
            type: 'Private Condo',
        },
        {
            name: 'Ivan & Pearlyn',
            property: 'HDB to Private Upgrade',
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80',
            quote: 'Most agents pushed us to buy bigger. Edwin showed us the math and we stayed within our means.',
            hasVideo: true,
            location: 'Jurong East',
            year: '2022',
            type: 'HDB Upgrade',
        },
        {
            name: 'Theresia',
            property: 'Investment Portfolio',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
            quote: 'He showed us his actual mistakes from 1997. That honesty saved us from over-leveraging.',
            hasVideo: false,
            location: 'Orchard',
            year: '2021',
            type: 'Investment',
        },
        {
            name: 'Michael & Sarah Tan',
            property: 'Landed Property',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
            quote: 'We thought landed was out of reach. Edwin found us a corner terrace at 15% below market value.',
            hasVideo: true,
            location: 'Serangoon',
            year: '2023',
            type: 'Landed',
        },
        {
            name: 'David Lim',
            property: 'Executive Condo',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
            quote: 'The EC route saved us $300k compared to private. Edwin walked us through every calculation.',
            hasVideo: false,
            location: 'Sengkang',
            year: '2022',
            type: 'EC',
        },
        {
            name: 'Jenny & Marcus',
            property: 'Resale HDB',
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80',
            quote: 'We were first-time buyers. Edwin made the process stress-free and we got our dream flat.',
            hasVideo: true,
            location: 'Tampines',
            year: '2023',
            type: 'HDB',
        },
        {
            name: 'Patricia Wong',
            property: 'Freehold Condo',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
            quote: 'Freehold vs leasehold - Edwin broke down the real numbers. We made an informed choice.',
            hasVideo: false,
            location: 'Newton',
            year: '2022',
            type: 'Freehold',
        },
        {
            name: 'Raymond & Lisa',
            property: 'Dual Property Strategy',
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
            quote: 'Edwin helped us structure a dual property strategy that generates passive income for retirement.',
            hasVideo: true,
            location: 'East Coast',
            year: '2021',
            type: 'Investment',
        },
        {
            name: 'Susan Chen',
            property: 'Penthouse Unit',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            quote: 'We never thought a penthouse was achievable. Edwin structured the deal to make it work.',
            hasVideo: false,
            location: 'River Valley',
            year: '2023',
            type: 'Luxury',
        },
        {
            name: 'The Ng Family',
            property: 'Multi-Gen Living',
            image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80',
            quote: 'A 3-generation home was complex. Edwin found solutions we never knew existed.',
            hasVideo: true,
            location: 'Bishan',
            year: '2022',
            type: 'Multi-Gen',
        },
    ];

    const displayedProperties = showAll ? allProperties : allProperties.slice(0, 3);

    return (
        <section id="receipts" className="py-24 px-6 bg-white relative border-t border-slate-200">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b-2 border-slate-900 pb-6">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-2">The Track Record</h2>
                        <div className="font-mono text-xs uppercase tracking-widest text-slate-500">Client Properties & Reviews • Est. 1994</div>
                    </div>
                    <div className="hidden md:block">
                        <div className="border border-slate-900 px-4 py-2 font-mono text-xs uppercase flex items-center gap-2">
                            <Home size={14} className="text-slate-600" />
                            Real Results
                        </div>
                    </div>
                </div>

                {/* See More CTA - Now at Top */}
                <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="border-b-2 border-slate-900 pb-1 font-mono text-sm uppercase tracking-widest hover:text-red-700 hover:border-red-700 transition-colors cursor-pointer"
                    >
                        {showAll ? 'Show Less' : 'See More Success Stories'} →
                    </button>
                    <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                        These are real clients, real properties, real results
                    </p>
                </div>

                {/* Client Property Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {displayedProperties.map((client, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[#fcfcfc] border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedProperty(client)}
                        >
                            {/* Property Image */}
                            <div className="relative h-48 md:h-56 overflow-hidden">
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
                            <div className="p-5 md:p-6">
                                <Quote size={20} className="text-slate-300 mb-3" />
                                <p className="font-serif italic text-slate-600 leading-relaxed mb-4 text-sm md:text-base line-clamp-3">
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

            </div>

            {/* Property Detail Modal */}
            <PropertyModal
                isOpen={!!selectedProperty}
                onClose={() => setSelectedProperty(null)}
                property={selectedProperty}
            />
        </section>
    );
};

export default ReceiptsSection;
