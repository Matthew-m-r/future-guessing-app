import React from 'react';

export interface CardData {
    id: string;
    name: string;
    image: string;
    description?: string;
}

interface CardProps {
    card: CardData;
    isSelected: boolean;
    onSelect: (card: CardData) => void;
}

const Card: React.FC<CardProps> = ({ card, isSelected, onSelect }) => {
    return (
        <div
            className={`relative group cursor-pointer transition-all duration-300 ${isSelected ? 'opacity-100' : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
                }`}
            onClick={() => onSelect(card)}
        >
            <div
                className={`aspect-[2/3] w-full rounded-xl bg-cover bg-center border-2 relative overflow-hidden transition-transform active:scale-95 ${isSelected
                        ? 'border-mystic-gold animate-breathing'
                        : 'border-white/10 bg-card-dim'
                    }`}
                style={{ backgroundImage: `url(${card.image})` }}
            >
                {isSelected && (
                    <div className="absolute top-1 right-1 bg-mystic-gold text-black rounded-full p-0.5 shadow-lg">
                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                )}
                {!isSelected && (
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                )}
            </div>
            <p className={`text-[10px] text-center mt-1 font-bold uppercase tracking-wider transition-colors ${isSelected ? 'text-mystic-gold' : 'text-white/40 group-hover:text-white'
                }`}>
                {card.name}
            </p>
        </div>
    );
};

export default Card;
