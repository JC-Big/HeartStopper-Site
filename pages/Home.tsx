import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CharacterSection from '../components/CharacterSection';
import BookSection from '../components/BookSection';
import QuotesSection from '../components/QuotesSection';
import WallpaperSection from '../components/WallpaperSection';
import Footer from '../components/Footer';
import PdfReader from '../components/PdfReader';
import { graphicNovels, novels } from '../data';
import { Book } from '../types';
import { Book as BookIcon } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleReadBook = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseReader = () => {
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-hs-bg font-sans selection:bg-hs-pink selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <CharacterSection />

        {/* Quotes Section */}
        <QuotesSection />
        
        {/* Graphic Novels Section */}
        <BookSection 
            id="comics" 
            title="Quadrinhos - HEARTSTOPPER" 
            books={graphicNovels} 
            onRead={handleReadBook}
            variant="grid"
            icon={<div className="text-hs-greenDark opacity-70"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12Z" /><path d="M8 12L16 12"/></svg></div>}
        />

        {/* Separator */}
        <div className="w-full flex justify-center py-4 bg-hs-bg overflow-hidden">
            <div className="w-2/3 border-t-2 border-dashed border-hs-greenDark/20"></div>
        </div>

        {/* Novels Section */}
        <BookSection 
            id="novels" 
            title="Livros da Série" 
            books={novels} 
            onRead={handleReadBook}
            variant="carousel"
            icon={<BookIcon size={32} className="text-hs-greenDark" />}
        />

        {/* Wallpapers Section */}
        <WallpaperSection />
      </main>

      <Footer />

      {/* PDF Reader Modal */}
      {selectedBook && (
        <PdfReader book={selectedBook} onClose={handleCloseReader} />
      )}
    </div>
  );
};

export default Home;