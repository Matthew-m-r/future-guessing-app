import React from 'react';

interface HeaderProps {
    currentStep: number;
    totalSteps: number;
    title: string;
    subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ currentStep, totalSteps, title, subtitle }) => {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-dark/80 border-b border-white/5 pb-4 pt-6 px-4">
            <div className="flex w-full flex-row items-center justify-center gap-3 mb-6">
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${i < currentStep
                                ? 'bg-primary shadow-cyan-glow'
                                : i === currentStep
                                    ? 'bg-white animate-pulse'
                                    : 'bg-white/10'
                            }`}
                    />
                ))}
            </div>
            <div className="text-center">
                <h1 className="text-white text-2xl md:text-[28px] font-bold tracking-tight leading-tight mb-1 uppercase">
                    {title.split(' ').map((word, i) => (
                        word === '7' || word === 'HILOS' ? (
                            <span key={i} className="text-primary drop-shadow-[0_0_8px_rgba(13,204,242,0.8)] px-1">{word}</span>
                        ) : (
                            <React.Fragment key={i}>{word} </React.Fragment>
                        )
                    ))}
                </h1>
                <p className="text-white/60 text-sm font-normal">{subtitle}</p>
            </div>
        </header>
    );
};

export default Header;
