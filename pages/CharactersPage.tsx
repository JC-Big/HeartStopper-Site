import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { characters } from '../data';
import { Character } from '../types';
import { X, Calendar, GraduationCap, User, Star } from 'lucide-react';

const CharacterCard = ({ character, onClick }: { character: Character; onClick: (c: Character) => void }) => (
  <div 
      onClick={() => onClick(character)}
      className="bg-white p-4 rounded-xl shadow-md border-4 border-transparent hover:border-hs-green cursor-pointer transition-all hover:scale-105 group relative overflow-hidden"
  >
      {/* Polaroid Effect */}
      <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-gray-100 relative">
          <img src={character.image} alt={character.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
           {/* "Click to expand" hint overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="text-white font-hand text-xl bg-black/50 px-3 py-1 rounded-full">+ Detalhes</span>
          </div>
      </div>
      <h3 className="font-hand text-2xl text-hs-greenDark text-center">{character.name}</h3>
      
      {/* Tape */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-hs-pink/50 rotate-2 opacity-80"></div>
  </div>
);

const CharactersPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const comicCharacters = characters.filter(c => c.category === 'Comic' || c.category === 'Both');
  const seriesCharacters = characters.filter(c => c.category === 'Series' || c.category === 'Both');

  return (
    <div className="min-h-screen flex flex-col bg-hs-bg font-sans">
      <Navbar />
      
      <main className="flex-grow py-12 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
            <h1 className="font-hand text-5xl md:text-6xl text-hs-greenDark relative z-10 inline-block">
                Todos os Personagens
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-hs-yellow/50 -rotate-1 -z-10 rounded-full"></div>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Conheça a turma completa de Truham, Higgs e muito mais. Clique nos cartões para ver detalhes exclusivos.
            </p>
        </div>

        {/* Comics Section */}
        <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
                <span className="bg-hs-blue/20 p-2 rounded-full text-hs-blue border-2 border-hs-blue"><User size={24}/></span>
                <h2 className="font-hand text-4xl text-hs-greenDark">Quadrinhos</h2>
                <div className="h-px bg-hs-greenDark flex-grow opacity-20 ml-4"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {comicCharacters.map(char => (
                    <CharacterCard key={`comic-${char.id}`} character={char} onClick={setSelectedCharacter} />
                ))}
            </div>
        </section>

        {/* Series Section */}
        <section>
             <div className="flex items-center gap-4 mb-8">
                <span className="bg-hs-pink/20 p-2 rounded-full text-hs-pink border-2 border-hs-pink"><Star size={24}/></span>
                <h2 className="font-hand text-4xl text-hs-greenDark">Série - Netflix</h2>
                <div className="h-px bg-hs-greenDark flex-grow opacity-20 ml-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {seriesCharacters.map(char => (
                    <CharacterCard key={`series-${char.id}`} character={char} onClick={setSelectedCharacter} />
                ))}
            </div>
        </section>

      </main>

      <Footer />

      {/* Expanded Character Modal */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedCharacter(null)}></div>
            
            {/* Modal Container: Max-height ensures it fits on mobile, flex-col stacks image on top */}
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row shadow-2xl overflow-hidden relative border-4 border-white">
                
                <button 
                    onClick={() => setSelectedCharacter(null)}
                    className="absolute top-4 right-4 z-20 text-gray-500 hover:text-hs-pink transition-colors bg-white/50 rounded-full p-1"
                >
                    <X size={32} />
                </button>

                {/* Left (Mobile Top): Image - Fixed height on mobile so it doesn't push content too far down */}
                <div className="w-full md:w-2/5 bg-hs-greenLight relative shrink-0 h-64 md:h-auto">
                    <img 
                        src={selectedCharacter.image} 
                        alt={selectedCharacter.name} 
                        className="w-full h-full object-cover"
                    />
                    {/* Decorative Doodles */}
                    <div className="absolute bottom-4 right-4 text-white opacity-80">
                         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>
                    </div>
                </div>

                {/* Right (Mobile Bottom): Info - Scrollable area */}
                <div className="w-full md:w-3/5 p-6 md:p-8 relative bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] overflow-y-auto custom-scrollbar">
                    {/* Paper Texture Background Effect */}
                    
                    <h2 className="font-hand text-4xl md:text-5xl text-hs-greenDark mb-6 border-b-2 border-dashed border-hs-green/30 pb-2">
                        {selectedCharacter.name}
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-hs-yellow/20 p-2 rounded-full text-hs-orange shrink-0"><User size={20}/></div>
                            <div>
                                <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider">Idade</h4>
                                <p className="font-hand text-2xl text-hs-text">{selectedCharacter.age || 'N/A'}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-hs-pink/20 p-2 rounded-full text-hs-pink shrink-0"><Calendar size={20}/></div>
                            <div>
                                <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider">Aniversário</h4>
                                <p className="font-hand text-2xl text-hs-text">{selectedCharacter.birthday || 'N/A'}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-hs-blue/20 p-2 rounded-full text-hs-blue shrink-0"><GraduationCap size={20}/></div>
                            <div>
                                <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider">Ano Escolar / Escola</h4>
                                <p className="font-hand text-2xl text-hs-text">{selectedCharacter.schoolYear || 'N/A'}</p>
                            </div>
                        </div>

                        <div className="mt-8 bg-hs-bg p-4 rounded-xl border border-black/5 shadow-inner">
                            <h4 className="font-bold text-hs-greenDark text-sm uppercase tracking-wider mb-2">Sobre</h4>
                            <p className="font-sans text-gray-600 leading-relaxed">
                                {selectedCharacter.description || 'Sem descrição disponível.'}
                            </p>
                        </div>
                    </div>

                    {/* Tape decoration top right */}
                    <div className="absolute -top-3 right-10 w-32 h-8 bg-hs-green/30 -rotate-2 shadow-sm"></div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default CharactersPage;