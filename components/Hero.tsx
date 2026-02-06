import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-hs-bg pb-20 pt-10 md:pt-16">
      
      {/* --- Graphic Background Elements (Custom Leaves based on request) --- */}
      
      {/* 1. Pink Leaf (3-pointed curvy, Top Left) */}
      <div className="absolute top-4 md:top-10 left-[2%] md:left-[5%] text-hs-pink opacity-90 animate-float w-12 h-12 md:w-16 md:h-16 transform -rotate-12 z-0">
         <svg viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="3">
            <path d="M50 85 C 50 85, 30 75, 20 60 C 10 45, 15 30, 30 35 C 40 38, 45 50, 45 50 C 45 50, 40 30, 50 15 C 60 5, 70 10, 75 25 C 80 40, 65 50, 65 50 C 65 50, 80 45, 90 55 C 100 65, 90 80, 70 75 C 60 72, 55 65, 50 85 Z" fill="#e88080" strokeLinejoin="round" />
            <path d="M50 85 C 50 85, 50 65, 50 50" stroke="black" strokeWidth="2" strokeLinecap="round"/>
         </svg>
      </div>

      {/* 2. Green Wavy Leaf (Top Right) */}
      <div className="absolute top-10 md:top-16 right-[5%] md:right-[10%] text-hs-green opacity-90 animate-float-delayed w-16 h-16 md:w-20 md:h-20 transform rotate-12 z-0">
        <svg viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="3">
            <path d="M50 90 C 50 90, 35 70, 20 60 C 5 50, 10 30, 25 35 C 35 38, 45 50, 45 50 C 45 50, 40 20, 55 10 C 70 0, 80 15, 75 30 C 70 45, 60 50, 60 50 C 60 50, 80 40, 90 50 C 100 60, 85 75, 70 70 C 60 65, 55 60, 50 90 Z" fill="#97cba9" strokeLinejoin="round" />
             <path d="M50 90 Q 55 70 50 40" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* 3. Blue Small Leaf (Bottom Left) */}
      <div className="absolute bottom-40 left-[5%] md:left-[12%] text-hs-blue opacity-80 animate-wiggle w-8 h-8 md:w-10 md:h-10 transform -rotate-45 z-0">
         <svg viewBox="0 0 50 50" fill="none" stroke="black" strokeWidth="3">
             <path d="M25 45 Q 10 35 5 20 Q 0 5 15 10 Q 25 15 25 25 Q 25 15 35 10 Q 50 5 45 20 Q 40 35 25 45 Z" fill="#a0c4ff" strokeLinejoin="round"/>
         </svg>
      </div>

      {/* 4. Yellow Simple Leaf (Bottom Right/Center) */}
      <div className="absolute bottom-20 right-[10%] md:right-[20%] text-hs-yellow opacity-80 animate-float w-10 h-10 md:w-14 md:h-14 hidden sm:block transform rotate-12 z-0">
         <svg viewBox="0 0 60 60" fill="none" stroke="black" strokeWidth="3">
             <path d="M30 55 Q 10 40 5 25 Q 0 5 20 10 Q 30 15 30 25 Q 30 15 40 10 Q 60 5 55 25 Q 50 40 30 55 Z" fill="#f4d35e" strokeLinejoin="round"/>
             <path d="M30 55 L 30 30" stroke="black" strokeWidth="2"/>
         </svg>
      </div>
      
      {/* 5. Orange Maple-ish Leaf (Floating middle left) */}
      <div className="absolute top-1/2 left-[2%] text-hs-orange opacity-70 animate-float-delayed w-8 h-8 md:w-12 md:h-12 transform rotate-45 hidden sm:block">
         <svg viewBox="0 0 24 24" fill="#ee964b" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8 6 2 12 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 12 16 6 12 2Z" />
            <path d="M12 22V10" />
            <path d="M12 18L8 14" />
            <path d="M12 18L16 14" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10 mb-12 md:mb-0 space-y-4">
          <div className="inline-flex flex-col items-center md:items-start relative">
            
            {/* Main Title - Sticker Style */}
            <h1 
                className="font-hand text-5xl sm:text-6xl lg:text-8xl tracking-[0.1em] leading-none"
                style={{
                    color: '#97cba9', // Soft Green Fill
                    WebkitTextStroke: '2px #3e7c59', // Dark Green Outline
                    paintOrder: 'stroke fill',
                    fontWeight: 700,
                    textShadow: '3px 3px 0px rgba(62, 124, 89, 0.4)' // Shadow adjusted for responsive
                }}
            >
              HEARTSTOPPER
            </h1>
            
            {/* Fanpage text directly below */}
            <h2 className="font-hand text-3xl sm:text-4xl text-hs-greenDark/90 font-bold tracking-widest mt-2 transform -rotate-1 decoration-wavy underline decoration-hs-pink">
                Fanpage
            </h2>

            <div className="absolute -top-6 -right-6 md:-top-8 md:-right-10 animate-bounce hidden sm:block">
                <Heart className="text-hs-pink fill-hs-pink w-8 h-8 md:w-12 md:h-12 rotate-12" style={{ filter: 'drop-shadow(2px 2px 0px #3e7c59)' }} />
            </div>
          </div>
          
          <div className="pt-2 md:pt-4">
             <h3 className="font-hand text-xl sm:text-2xl lg:text-3xl text-hs-greenDark/80 italic">
                "Boy meets Boy."
             </h3>
          </div>

          <p className="font-sans text-base sm:text-lg text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed pt-2 px-2 md:px-0">
            Uma história sobre amizade, amor, saúde mental e autodescoberta. Junte-se a Nick e Charlie nesta jornada emocionante.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6 md:pt-8">
            <a 
              href="#characters"
              className="px-6 py-2 md:px-8 md:py-3 bg-hs-yellow text-hs-text font-hand text-lg md:text-xl font-bold rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2 group"
            >
              Personagens <span className="group-hover:rotate-12 transition-transform">✨</span>
            </a>
            <a 
              href="#comics"
              className="px-6 py-2 md:px-8 md:py-3 bg-hs-blue text-hs-text font-hand text-lg md:text-xl font-bold rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
            >
              Ler Quadrinhos
            </a>
          </div>
        </div>

        {/* Image/Art Area */}
        <div className="w-full md:w-1/2 relative flex justify-center mt-6 md:mt-0">
            
            {/* Main Hero Image Simulation */}
            <div className="relative w-full max-w-xs md:max-w-md aspect-[4/5] transform rotate-3 hover:rotate-0 transition-transform duration-500">
                
                {/* Simulated Polaroid Stack */}
                <div className="absolute top-0 left-0 w-full h-full bg-white border-4 border-black rounded-lg transform -rotate-6 z-0 shadow-lg"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-hs-greenLight border-4 border-black rounded-lg transform rotate-3 z-0 shadow-lg"></div>

                <div className="relative w-full h-full bg-white border-4 border-black rounded-lg p-3 z-10 shadow-2xl flex flex-col">
                    <div className="flex-1 border-2 border-gray-200 overflow-hidden relative rounded-sm group">
                        <img 
                            src="https://picsum.photos/seed/hero/800/1000" 
                            alt="Nick and Charlie" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                         {/* Doodle on top of image */}
                        <div className="absolute top-2 right-2 animate-pulse">
                             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                             </svg>
                        </div>
                    </div>
                    <div className="h-12 md:h-16 flex items-center justify-center">
                         <p className="font-hand text-2xl md:text-3xl text-hs-text">Hi. <span className="text-hs-pink">♥</span></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Torn Paper Edge Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" width="100%" height="40">
           <path d="M0,0 Q10,20 20,0 T40,0 T60,0 T80,0 T100,0 T120,0 T140,0 T160,0 T180,0 T200,0 T220,0 T240,0 T260,0 T280,0 T300,0 T320,0 T340,0 T360,0 T380,0 T400,0 T420,0 T440,0 T460,0 T480,0 T500,0 T520,0 T540,0 T560,0 T580,0 T600,0 T620,0 T640,0 T660,0 T680,0 T700,0 T720,0 T740,0 T760,0 T780,0 T800,0 T820,0 T840,0 T860,0 T880,0 T900,0 T920,0 T940,0 T960,0 T980,0 T1000,0 T1020,0 T1040,0 T1060,0 T1080,0 T1100,0 T1120,0 T1140,0 T1160,0 T1180,0 T1200,0 V40 H0 Z" fill="#e8f3ea" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;