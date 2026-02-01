import React from 'react';

const ContactSection = () => {
    return (
        <section className="py-24 px-6 bg-stone-100 border-t border-dashed border-slate-300">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 border-2 border-slate-900 shadow-[10px_10px_0px_0px_rgba(30,41,59,1)] relative">

                {/* Stamp Effect */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-4 border-red-800 text-red-800 flex items-center justify-center font-mono text-xs font-bold uppercase rotate-12 opacity-80 mix-blend-multiply bg-transparent z-10 pointer-events-none">
                    <div className="text-center leading-tight">
                        No Fluff<br />Zone<br />★
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl mb-4 text-slate-900">Let&apos;s Look at Your Numbers</h2>
                    <p className="font-sans text-slate-600">No sales pitch. Just a strategy session to see if your portfolio is leak-proof.</p>
                </div>

                <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs uppercase text-slate-500">Name</label>
                        <input type="text" className="w-full bg-[#F9F8F4] border-b-2 border-slate-300 focus:border-slate-900 outline-none p-3 font-serif text-xl transition-colors" placeholder="Enter your full name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs uppercase text-slate-500">Email Address</label>
                        <input type="email" className="w-full bg-[#F9F8F4] border-b-2 border-slate-300 focus:border-slate-900 outline-none p-3 font-serif text-xl transition-colors" placeholder="email@address.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs uppercase text-slate-500">Biggest Property Concern?</label>
                        <input type="text" className="w-full bg-[#F9F8F4] border-b-2 border-slate-300 focus:border-slate-900 outline-none p-3 font-serif text-xl transition-colors" placeholder="e.g. Can I afford to upgrade?" />
                    </div>

                    <button className="w-full bg-slate-900 text-white py-4 mt-8 font-mono uppercase tracking-widest hover:bg-red-800 transition-colors">
                        Book The Chat
                    </button>
                    <p className="text-center font-mono text-[10px] text-slate-400 mt-4 uppercase">
                        Limited slots available for non-clients per month.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
