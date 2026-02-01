import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#F9F8F4] pt-20 pb-10 px-6 border-t border-slate-200">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                <div className="max-w-xs">
                    <div className="font-serif text-2xl font-bold mb-6">Edwin Leong.</div>
                    <p className="font-sans text-slate-500 text-sm mb-6">
                        Helping families build wealth through Singapore real estate safely, predictably, and honestly.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">IG</a>
                        <a href="#" className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">TT</a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-12 md:gap-24">
                    <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">Navigation</h4>
                        <ul className="space-y-4 font-sans text-sm text-slate-600">
                            <li><a href="#" className="hover:text-slate-900">About Edwin</a></li>
                            <li><a href="#" className="hover:text-slate-900">Success Stories</a></li>
                            <li><a href="#" className="hover:text-slate-900">The Wife&apos;s Blog</a></li>
                            <li><a href="#" className="hover:text-slate-900">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">Legal</h4>
                        <ul className="space-y-4 font-sans text-sm text-slate-600">
                            <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-slate-900">Terms of Use</a></li>
                            <li><a href="#" className="hover:text-slate-900">Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-400">
                <div>© {new Date().getFullYear()} Edwin Leong. All Rights Reserved.</div>
                <div className="mt-4 md:mt-0">Est. 1994</div>
            </div>
        </footer>
    );
};

export default Footer;
