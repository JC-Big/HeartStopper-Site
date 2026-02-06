import React, { useRef } from 'react';
import { Book } from '../types';
import { BookOpen, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

interface BookSectionProps {
  title: string;
  books: Book[];
  id: string;
  onRead: (book: Book) => void;
  icon?: React.ReactNode;
  variant?: 'grid' | 'carousel';
}

interface BookCardProps {
  book: Book;
  variant: 'grid' | 'carousel';
  onRead: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, variant, onRead }) => (
  <div className={`bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-hs-green/20 flex flex-col h-full ${variant === 'carousel' ? 'w-72 flex-none snap-center' : ''}`}>
    
    {/* Cover */}
    <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-4 group cursor-pointer" onClick={() => book.type === 'Quadrinho' && onRead(book)}>
      <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      
      {/* Overlay for interaction */}
      <div className="absolute inset-0 bg-hs-greenDark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-3">
         {book.type === 'Quadrinho' ? (
             <span className="text-white font-bold flex items-center gap-2">
                 <BookOpen size={24} /> Ler agora
             </span>
         ) : (
             <span className="text-white font-bold text-center px-4">
                 {book.description.substring(0, 80)}...
             </span>
         )}
      </div>
    </div>

    {/* Info */}
    <div className="flex-1 flex flex-col">
      <h3 className="font-sans font-bold text-lg text-hs-greenDark mb-1 leading-tight truncate" title={book.title}>{book.title}</h3>
      <p className="text-sm text-gray-500 mb-3">{book.year} • {book.type}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {book.tags.slice(0, 2).map(tag => (
          <span key={tag} className={`text-xs px-2 py-1 rounded font-bold ${tag === 'LGBTQIA+' ? 'bg-gradient-to-r from-red-200 via-green-200 to-blue-200 text-gray-700' : 'bg-hs-greenLight text-hs-greenDark'}`}>
            {tag}
          </span>
        ))}
        {book.tags.length > 2 && <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-500">+{book.tags.length - 2}</span>}
      </div>

      {/* Actions */}
      <div className="mt-auto grid grid-cols-2 gap-2">
         {book.type === 'Quadrinho' && (
              <button 
                  onClick={() => onRead(book)}
                  className="bg-hs-greenDark text-white py-2 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-colors flex justify-center items-center gap-1"
              >
                  <BookOpen size={16} /> Ler
              </button>
         )}
         
         <a 
           href={book.buyLink}
           target="_blank"
           rel="noreferrer"
           className={`${book.type === 'Quadrinho' ? 'col-span-1' : 'col-span-2'} border-2 border-hs-greenDark text-hs-greenDark py-2 rounded-lg text-sm font-bold hover:bg-hs-greenDark hover:text-white transition-colors flex justify-center items-center gap-1`}
         >
           <ShoppingCart size={16} /> Comprar
         </a>
      </div>
    </div>
  </div>
);

const BookSection: React.FC<BookSectionProps> = ({ title, books, id, onRead, icon, variant = 'grid' }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Aproximadamente a largura de um card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={id} className="py-16 bg-hs-bg relative overflow-hidden">
      <div className={variant === 'grid' ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "w-full"}>
        
        {/* Header */}
        <div className={`flex items-center justify-center gap-3 mb-12 ${variant === 'carousel' ? 'px-4' : ''}`}>
            {icon}
            <h2 className="font-hand text-4xl lg:text-5xl text-hs-greenDark text-center underline decoration-wavy decoration-hs-pink/50">
                {title}
            </h2>
             {icon && <span className="transform scale-x-[-1]">{icon}</span>}
        </div>

        {/* Content Layout */}
        {variant === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <BookCard key={book.id} book={book} variant={variant} onRead={onRead} />
            ))}
          </div>
        ) : (
          <div className="relative group max-w-[1920px] mx-auto">
             
             {/* Left Button (Desktop only) */}
             <button 
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow-lg text-hs-greenDark hover:bg-hs-greenDark hover:text-white transition-all hidden md:flex items-center justify-center border-2 border-hs-greenDark/10"
                aria-label="Scroll left"
             >
                <ChevronLeft size={24} />
             </button>

             {/* Carousel Wrapper */}
             <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-8 px-4 sm:px-16 no-scrollbar snap-x cursor-grab active:cursor-grabbing scroll-smooth"
             >
                {/* We can duplicate for infinite feel, or just list them. Let's just list them for now but allow smooth scroll */}
                {books.map((book) => (
                  <BookCard key={book.id} book={book} variant={variant} onRead={onRead} />
                ))}
                {/* Add a spacer at the end */}
                <div className="w-8 flex-none"></div>
             </div>
             
             {/* Right Button (Desktop only) */}
             <button 
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow-lg text-hs-greenDark hover:bg-hs-greenDark hover:text-white transition-all hidden md:flex items-center justify-center border-2 border-hs-greenDark/10"
                aria-label="Scroll right"
             >
                <ChevronRight size={24} />
             </button>
             
             {/* Scroll hints (optional) */}
             <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-hs-bg to-transparent pointer-events-none hidden md:block z-10"></div>
             <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-hs-bg to-transparent pointer-events-none hidden md:block z-10"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookSection;