import React, { useState } from 'react';
import { wallpapers } from '../data';
import { Download, ImageIcon, ArrowRight, X } from 'lucide-react';

const WallpaperSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleDownload = (url: string, title: string) => {
    window.open(url, '_blank');
  };

  // Always show 4 items on the main page
  const displayedWallpapers = wallpapers.slice(0, 4);

  return (
    <section id="wallpapers" className="py-20 bg-hs-greenLight relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-12">
            <h2 className="font-hand text-5xl text-hs-greenDark flex items-center gap-3">
               <ImageIcon /> Wallpapers
            </h2>
            <p className="text-gray-600 font-sans max-w-xl text-center">
                Personalize seu celular ou computador com essas imagens exclusivas.
            </p>
        </div>

        {/* Grid Layout (Preview) */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6`}>
            {displayedWallpapers.map((wall) => (
                <div key={wall.id} className="group relative overflow-hidden rounded-xl shadow-md border-4 border-white bg-white hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[9/16] overflow-hidden">
                        <img 
                            src={wall.url} 
                            alt={wall.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                        <h3 className="font-hand text-white text-xl md:text-2xl mb-4 text-center">{wall.title}</h3>
                        <button 
                            onClick={() => handleDownload(wall.url, wall.title)}
                            className="bg-hs-yellow text-hs-text font-bold px-4 py-2 text-sm rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg border-2 border-black"
                        >
                            <Download size={16} /> Baixar
                        </button>
                    </div>

                    {/* Corner Tape */}
                    <div className="absolute top-3 -right-6 w-24 h-6 bg-hs-pink/80 rotate-45 transform translate-x-2 shadow-sm pointer-events-none"></div>
                </div>
            ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
            <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-white border-2 border-hs-greenDark text-hs-greenDark px-8 py-3 rounded-full font-hand text-xl font-bold hover:bg-hs-greenDark hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(62,124,89,0.3)] hover:shadow-none translate-x-0 hover:translate-x-[2px] hover:translate-y-[2px]"
            >
                <span className="flex items-center gap-2">
                    Ver Todos <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform"/>
                </span>
            </button>
        </div>

        {/* Full Gallery Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
                    onClick={() => setIsModalOpen(false)}
                ></div>

                {/* Modal Container - Removed animate-float */}
                <div className="bg-hs-bg w-full max-w-7xl h-[85vh] rounded-2xl shadow-2xl relative flex flex-col overflow-hidden border-4 border-white">
                    
                    {/* Modal Header */}
                    <div className="bg-hs-greenLight p-4 md:p-6 flex justify-between items-center border-b border-hs-green/20">
                         <h2 className="font-hand text-3xl md:text-4xl text-hs-greenDark flex items-center gap-2">
                            <ImageIcon size={32} /> Galeria Completa
                         </h2>
                         <button 
                            onClick={() => setIsModalOpen(false)} 
                            className="p-2 hover:bg-black/5 rounded-full text-hs-greenDark transition-colors group"
                        >
                            <X size={32} className="group-hover:scale-110 transition-transform" />
                         </button>
                    </div>

                    {/* Scrollable Grid Content */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-hs-bg custom-scrollbar">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {wallpapers.map(wall => (
                                <div key={wall.id} className="group relative overflow-hidden rounded-xl shadow-md border-4 border-white bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="aspect-[9/16] overflow-hidden">
                                        <img 
                                            src={wall.url} 
                                            alt={wall.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    
                                    {/* Hover Content */}
                                    <div className="absolute inset-0 bg-hs-greenDark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                        <h3 className="font-hand text-white text-xl md:text-2xl mb-4 text-center">{wall.title}</h3>
                                        <button 
                                            onClick={() => handleDownload(wall.url, wall.title)}
                                            className="bg-white text-hs-greenDark font-bold px-6 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                                        >
                                            <Download size={18} /> Baixar
                                        </button>
                                    </div>

                                    {/* Corner Tape */}
                                    <div className="absolute top-3 -right-6 w-24 h-6 bg-hs-pink/80 rotate-45 transform translate-x-2 shadow-sm pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Footer hint */}
                    <div className="p-3 text-center text-sm text-gray-400 bg-white/50 border-t border-hs-green/10">
                        Total de {wallpapers.length} wallpapers disponíveis
                    </div>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default WallpaperSection;