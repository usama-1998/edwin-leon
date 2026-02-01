import React from 'react';
import { Check, Paperclip } from 'lucide-react';

const ReceiptsSection = () => {
    const ledgerItems = [
        { year: '1994', event: 'First Property Acquisition', sub: 'HDB Resale (Jurong West)', status: 'Asset Held (15y)' },
        { year: '1997', event: 'Market Crash Survival', sub: 'Navigated -40% Valuation Drop', status: 'Recovered' },
        { year: '2008', event: 'Crisis Acquisition Strategy', sub: 'District 15 Entry Point', status: 'High Yield' },
        { year: '2015', event: 'Legacy Trust Structuring', sub: 'Family Asset Protection', status: 'Completed' },
        { year: '2024', event: 'Active Market Position', sub: 'Conservative Growth Focus', status: 'Active' },
    ];

    return (
        <section id="receipts" className="py-24 px-6 bg-white relative border-t border-slate-200">
            <div className="max-w-5xl mx-auto">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b-2 border-slate-900 pb-6">
                    <div>
                        <h2 className="font-serif text-5xl text-slate-900 mb-2">The Track Record</h2>
                        <div className="font-mono text-xs uppercase tracking-widest text-slate-500">Official Portfolio Ledger • Est. 1994</div>
                    </div>
                    <div className="hidden md:block">
                        <div className="border border-slate-900 px-4 py-2 font-mono text-xs uppercase flex items-center gap-2">
                            <Check size={14} className="text-green-600" />
                            Audited & Verified
                        </div>
                    </div>
                </div>

                <div className="bg-[#fcfcfc] border border-slate-200 shadow-sm p-8 md:p-12 relative overflow-hidden">

                    {/* Decorative Background Lines */}
                    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '100% 40px', opacity: 0.5, marginTop: '55px' }}></div>

                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 pb-4 border-b-2 border-slate-900 font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">
                        <div className="col-span-2">Year</div>
                        <div className="col-span-6 md:col-span-7">Event / Action</div>
                        <div className="col-span-4 md:col-span-3 text-right">Status</div>
                    </div>

                    {/* Ledger Items */}
                    <div className="space-y-0 relative z-10 font-mono text-sm">
                        {ledgerItems.map((item, idx) => (
                            <div key={idx} className="grid grid-cols-12 gap-4 py-3 border-b border-dashed border-slate-300 hover:bg-yellow-50/50 transition-colors items-center group cursor-default h-[40px]">
                                <div className="col-span-2 text-slate-900 font-bold">{item.year}</div>
                                <div className="col-span-6 md:col-span-7">
                                    <span className="font-semibold text-slate-800">{item.event}</span>
                                    <span className="hidden md:inline text-slate-400 mx-2">—</span>
                                    <span className="hidden md:inline text-slate-500 text-xs italic font-serif">{item.sub}</span>
                                </div>
                                <div className="col-span-4 md:col-span-3 text-right">
                                    <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest border ${item.status === 'Active' ? 'border-green-600 text-green-700 bg-green-50' : 'border-slate-300 text-slate-500'}`}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stamp */}
                    <div className="absolute bottom-10 right-10 opacity-10 rotate-[-15deg] pointer-events-none">
                        <div className="w-40 h-40 border-4 border-slate-900 rounded-full flex items-center justify-center">
                            <span className="font-mono text-xl font-bold uppercase text-center">Verified<br />By Experience</span>
                        </div>
                    </div>
                </div>

                {/* Client Note */}
                <div className="mt-12 flex items-start gap-4 max-w-2xl mx-auto">
                    <Paperclip className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                    <div className="font-serif italic text-lg text-slate-600">
                        &quot;Most agents show you a brochure. Edwin showed us his actual bank statements from 1997. That level of honesty saved us from over-leveraging.&quot;
                        <div className="mt-2 font-sans text-sm not-italic font-bold text-slate-900">— Sarah & James, Clients since 2018</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ReceiptsSection;
