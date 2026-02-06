import React, { useRef } from 'react';
import { characters } from '../data';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CharacterSection: React.FC = () => {
  // Duplicate list to create a "longer" scroll feel (Infinite scroll simulation)
  const displayCharacters = [...characters, ...characters, ...characters];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Width of card + gap
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="characters" className="py-16 bg-hs-greenLight relative overflow-hidden">
      <div className="max-w-full mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8 px-4 sm:px-8 max-w-7xl mx-auto">
            <span className="text-hs-greenDark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h10"/><path d="M9 16.5l3.5-4.5L9 8.5"/><path d="M14 12c0-4.4 3.6-8 8-8"/></svg>
            </span>
            <h2 className="font-hand text-4xl text-hs-greenDark">Personagens Principais</h2>
            <span className="h-px bg-hs-greenDark flex-grow opacity-30 ml-4 border-dashed border-t border-hs-greenDark"></span>
        </div>

        {/* Scrollable Container Wrapper */}
        <div className="relative w-full group">
            
            {/* Left Button (Desktop) */}
            <button 
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-hs-greenDark transition-all hidden md:flex items-center justify-center border-2 border-hs-greenDark/10 hover:scale-110"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Scroll Container */}
            <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-8 px-8 no-scrollbar snap-x cursor-grab active:cursor-grabbing scroll-smooth"
            >
                {displayCharacters.map((char, index) => (
                    <div 
                        key={`${char.id}-${index}`} 
                        className="flex-none w-64 snap-center transition-transform hover:scale-105 duration-300"
                    >
                        <div className="bg-white p-3 rounded-xl shadow-md border-2 border-white transform rotate-1 hover:rotate-0 transition-all hover:shadow-xl hover:border-hs-green">
                            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-3 relative group">
                                <img 
                                    src={char.image} 
                                    alt={char.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Tape Effect */}
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-yellow-100/80 rotate-2 shadow-sm"></div>
                            </div>
                            <h3 className="text-center font-hand text-2xl text-hs-greenDark">{char.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Right Button (Desktop) */}
            <button 
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-hs-greenDark transition-all hidden md:flex items-center justify-center border-2 border-hs-greenDark/10 hover:scale-110"
            >
                <ChevronRight size={24} />
            </button>
            
            {/* Fade effect on edges */}
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-hs-greenLight to-transparent pointer-events-none md:block hidden z-10"></div>
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-hs-greenLight to-transparent pointer-events-none md:block hidden z-10"></div>
        </div>

        {/* View All Button centered below */}
        <div className="flex justify-center mt-2">
            <Link 
                to="/characters"
                className="bg-hs-greenDark text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-opacity-90 flex items-center gap-2 hover:-translate-y-1 transition-transform"
            >
                Ver todos <ArrowRight size={18} />
            </Link>
        </div>
      </div>
      
      {/* Dashed Path Decoration simulated with absolute divs */}
      <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-hs-green/30 pointer-events-none -z-10"></div>
    </section>
  );
};

export default CharacterSection;