import React from 'react';

interface PolaroidProps {
    imageSrc: string;
    caption: string;
    rotation?: string;
    className?: string;
}

const Polaroid: React.FC<PolaroidProps> = ({
    imageSrc,
    caption,
    rotation = 'rotate-3',
    className = ''
}) => {
    return (
        <div className={`relative w-64 h-64 mx-auto md:mx-0 ${rotation} transition-transform hover:rotate-0 duration-500 ${className}`}>
            {/* Polaroid Frame */}
            <div className="absolute inset-0 bg-white p-3 pb-12 shadow-xl border border-slate-200 transform">
                <div className="w-full h-full bg-slate-200 overflow-hidden grayscale contrast-125">
                    <img
                        src={imageSrc}
                        alt={caption}
                        className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    />
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center font-mono text-[10px] text-slate-400 uppercase">
                    {caption}
                </div>
            </div>
            {/* Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 tape"></div>
        </div>
    );
};

export default Polaroid;
