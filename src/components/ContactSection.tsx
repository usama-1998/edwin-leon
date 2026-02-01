import React from 'react';

const ContactSection = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-stone-100 border-t border-dashed border-slate-300 relative overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-slate-200 rotate-12 hidden md:block"></div>
            <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-slate-200 -rotate-6 hidden md:block"></div>

            {/* Floating Sticky Note - Top Left */}
            <div className="absolute top-16 left-[5%] bg-yellow-100 p-4 shadow-lg rotate-[-8deg] w-36 border border-yellow-200/50 z-10 hidden lg:block">
                <p className="font-hand text-sm text-slate-800 leading-snug">
                    Real talk. No fluff. Just numbers.
                </p>
            </div>

            {/* Floating Sticky Note - Top Right */}
            <div className="absolute top-24 right-[8%] bg-white border border-slate-200 p-4 shadow-md rotate-[4deg] w-40 z-10 hidden lg:block">
                <p className="font-mono text-[10px] text-slate-500 uppercase mb-1">Edwin's Promise</p>
                <p className="font-hand text-sm text-slate-700">
                    If I can't help, I'll say so. No games.
                </p>
            </div>

            <div className="max-w-3xl mx-auto relative">

                {/* Main Form Card */}
                <div className="bg-white p-8 md:p-16 border-2 border-slate-900 shadow-[10px_10px_0px_0px_rgba(30,41,59,1)] relative">

                    {/* Decorative Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/80 z-20"></div>

                    {/* Edwin's Photo Badge */}
                    <div className="absolute -top-10 -left-6 md:-left-10 w-20 h-20 rounded-full overflow-hidden border-4 border-slate-900 shadow-lg z-30">
                        <img
                            src="/images/edwin-leong-enhanced.png"
                            alt="Edwin Leong"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Handwritten Note Corner */}
                    <div className="absolute -bottom-6 -right-4 md:-right-8 bg-yellow-100 p-4 shadow-lg rotate-[6deg] w-44 border border-yellow-200/50 z-20 hidden sm:block">
                        <p className="font-hand text-sm text-slate-800 leading-snug">
                            30 years of lessons, ready when you are.
                        </p>
                        <div className="mt-2 font-mono text-[9px] text-slate-500">— Edwin</div>
                    </div>

                    <div className="text-center mb-10 md:mb-12 pt-8 md:pt-4">
                        <div className="font-mono text-xs uppercase tracking-widest text-red-600 mb-3">Let's Build Your Legacy</div>
                        <h2 className="font-serif text-3xl md:text-4xl mb-4 text-slate-900">Ready to Look at Your Numbers?</h2>
                        <p className="font-sans text-slate-600 text-sm md:text-base max-w-md mx-auto">
                            No sales pitch. No pressure. Just a strategy session to see if your portfolio is leak-proof.
                        </p>
                    </div>

                    <div className="space-y-5 md:space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-xs uppercase text-slate-500">Your Name</label>
                            <input
                                type="text"
                                className="w-full bg-[#F9F8F4] border-b-2 border-slate-300 focus:border-slate-900 outline-none p-3 font-serif text-lg md:text-xl transition-colors"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-xs uppercase text-slate-500">Email Address</label>
                            <input
                                type="email"
                                className="w-full bg-[#F9F8F4] border-b-2 border-slate-300 focus:border-slate-900 outline-none p-3 font-serif text-lg md:text-xl transition-colors"
                                placeholder="email@address.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-xs uppercase text-slate-500">What's on your mind?</label>
                            <input
                                type="text"
                                className="w-full bg-[#F9F8F4] border-b-2 border-slate-300 focus:border-slate-900 outline-none p-3 font-serif text-lg md:text-xl transition-colors"
                                placeholder="e.g. Can I afford to upgrade?"
                            />
                        </div>

                        <button className="w-full bg-slate-900 text-white py-4 mt-6 md:mt-8 font-mono uppercase tracking-widest hover:bg-red-800 transition-colors cursor-pointer">
                            Let's Talk →
                        </button>
                        <p className="text-center font-mono text-[10px] text-slate-400 mt-3 md:mt-4 uppercase">
                            Limited slots available for non-clients per month.
                        </p>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="font-serif text-2xl md:text-3xl text-slate-900">30+</div>
                        <div className="font-mono text-[10px] text-slate-500 uppercase">Years Experience</div>
                    </div>
                    <div>
                        <div className="font-serif text-2xl md:text-3xl text-slate-900">500+</div>
                        <div className="font-mono text-[10px] text-slate-500 uppercase">Families Helped</div>
                    </div>
                    <div>
                        <div className="font-serif text-2xl md:text-3xl text-slate-900">$2B+</div>
                        <div className="font-mono text-[10px] text-slate-500 uppercase">Property Value</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
