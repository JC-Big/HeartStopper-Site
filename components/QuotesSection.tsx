import React, { useState } from 'react';
import { quotes } from '../data';
import { Quote as QuoteIcon, Heart, Globe } from 'lucide-react';

const QuotesSection: React.FC = () => {
  // State to track which quotes are translated (array of IDs)
  const [translatedIds, setTranslatedIds] = useState<number[]>([]);

  const toggleTranslation = (id: number) => {
    setTranslatedIds((prev) => 
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="quotes" className="py-12 md:py-20 bg-hs-bg relative overflow-hidden">
      
      {/* --- Graphic Doodles Background --- */}
      {/* Sparkles */}
      <div className="absolute top-10 left-10 text-hs-yellow opacity-60">
         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"/></svg>
      </div>
      <div className="absolute bottom-20 left-1/4 text-hs-pink opacity-40 rotate-12 hidden sm:block">
         <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"/></svg>
      </div>
      {/* Leaves */}
      <div className="absolute top-1/4 right-10 text-hs-green opacity-40 rotate-45 hidden sm:block">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20.5C12 20.5 7 17 5 12C3 7 7 2 12 2C17 2 21 7 19 12C17 17 12 20.5 12 20.5Z"/></svg>
      </div>
      <div className="absolute bottom-10 right-20 text-hs-orange opacity-50 -rotate-12">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12Z"/></svg>
      </div>


      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-2 mb-10 md:mb-16">
            <h2 className="font-hand text-4xl md:text-5xl text-hs-greenDark relative text-center">
                Frases Marcantes
                {/* Underline doodle */}
                <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 200 15" preserveAspectRatio="none">
                    <path d="M5 10 Q 50 15 100 5 T 195 10" fill="none" stroke="#e88080" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {quotes.map((quote) => {
            const isTranslated = translatedIds.includes(quote.id);
            
            return (
              <div key={quote.id} className={`${quote.color} p-6 md:p-8 pb-14 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md border-2 border-black/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] relative group hover:scale-[1.02] md:hover:scale-105 transition-transform duration-300 flex flex-col justify-between min-h-[220px] md:min-h-[250px]`}>
                
                {/* "Hi" Onomatopoeia Bubble - Top Right Corner */}
                <div className="absolute -top-4 -right-2 md:-top-6 md:-right-4 w-12 h-10 md:w-16 md:h-12 transform rotate-12 opacity-90 z-10">
                  <svg viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm w-full h-full">
                      <path d="M57.5 20C57.5 30.5 45.5 39 30.5 39C25.5 39 21 38 17 36L8 42L11 34C5 30 1.5 25 1.5 20C1.5 9.5 14.5 1 29.5 1C44.5 1 57.5 9.5 57.5 20Z" fill="white" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round"/>
                      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily='"Patrick Hand", cursive' fontSize="18" fill="#2c3e50">Hi</text>
                  </svg>
                </div>

                <div className="absolute -top-3 -left-2 md:-top-5 md:-left-3 text-hs-greenDark/80 transform -rotate-12">
                  <QuoteIcon size={24} className="md:w-8 md:h-8" fill="currentColor" />
                </div>
                
                <div className="relative">
                  <p className="font-hand text-2xl md:text-3xl text-hs-greenDark mb-4 pt-2 leading-relaxed transition-opacity duration-300">
                    "{isTranslated ? quote.translation : quote.text}"
                  </p>
                </div>
                
                {/* Bottom Area with Author and Translate Button */}
                <div className="flex justify-between items-end mt-4">
                  
                  {/* Translate Button */}
                  <button 
                    onClick={() => toggleTranslation(quote.id)}
                    className="flex items-center gap-1.5 px-3 py-1 bg-white/60 hover:bg-white border border-black/10 rounded-full text-xs font-bold text-hs-greenDark transition-all shadow-sm hover:shadow"
                    title={isTranslated ? "Ver original" : "Traduzir para Português"}
                  >
                    <Globe size={14} />
                    {isTranslated ? "Original" : "PT-BR"}
                  </button>

                  <div className="flex items-center gap-2">
                    <div className="w-6 md:w-8 h-px bg-hs-greenDark/40"></div>
                    <span className="font-sans font-bold text-hs-greenDark uppercase tracking-wider text-xs md:text-sm">{quote.author}</span>
                  </div>
                </div>
                
                {/* Corner Doodle inside card */}
                <div className="absolute bottom-2 right-2 opacity-10 pointer-events-none">
                  {quote.id % 2 === 0 ? <Heart size={20} className="md:w-6 md:h-6"/> : <div className="text-xl md:text-2xl font-hand">*</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;