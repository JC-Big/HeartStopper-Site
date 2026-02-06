import React, { useState } from 'react';
import { Menu, Heart, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // We need to handle hash links differently if we are not on the home page
  // For simplicity in this demo, we assume we want to go home then scroll
  const navLinks = [
    { name: 'Home', href: '/', isHash: false },
    { name: 'Personagens', href: '/characters', isHash: false }, // Direct link to new page
    { name: 'Quadrinhos', href: '/#comics', isHash: true },
    { name: 'Livros', href: '/#novels', isHash: true },
    { name: 'Frases', href: '/#quotes', isHash: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-hs-bg/95 backdrop-blur-sm shadow-sm border-b border-hs-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Area */}
          <Link to="/" className="flex items-center group cursor-default relative">
            {/* Decorative small leaf for Navbar */}
            <div className="absolute -top-2 -left-4 text-hs-pink transform -rotate-12 opacity-80 hidden sm:block">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8 6 2 12 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 12 16 6 12 2Z"/></svg>
            </div>

            <div className="flex flex-col items-center sm:items-start relative">
                {/* Main Title - Sticker Style - GREEN */}
                <span 
                  className="font-hand text-4xl sm:text-5xl flex items-center gap-2 z-10 relative tracking-[0.15em] leading-none"
                  style={{
                    color: '#97cba9', // Soft Green Fill
                    WebkitTextStroke: '2px #3e7c59', // Dark Green Outline
                    paintOrder: 'stroke fill',
                    fontWeight: 700,
                    filter: 'drop-shadow(3px 3px 0px rgba(62, 124, 89, 0.3))' // Hard shadow
                  }}
                >
                  HEARTSTOPPER
                  {/* Heart Icon */}
                  <Heart 
                    className="w-5 h-5 text-hs-pink fill-hs-pink animate-pulse hidden sm:block absolute -right-6 -top-1" 
                    style={{ WebkitTextStroke: '0px', filter: 'drop-shadow(1px 1px 0px #3e7c59)' }}
                  />
                </span>
                
                {/* Fanpage Subtitle - Below the title */}
                <span className="font-hand text-xl text-hs-greenDark/80 font-bold transform -rotate-2 sm:ml-4 mt-1 decoration-wavy decoration-hs-pink/50">
                  Fanpage
                </span>
            </div>
            
            {/* The "Hi" Bubbles */}
            <div className="hidden lg:flex flex-col -space-y-4 ml-6 transform -rotate-6 scale-75 opacity-90 hover:scale-100 transition-transform duration-300">
                <div className="relative left-5 top-1">
                     <svg width="50" height="35" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.5 20C57.5 30.5 45.5 39 30.5 39C25.5 39 21 38 17 36L8 42L11 34C5 30 1.5 25 1.5 20C1.5 9.5 14.5 1 29.5 1C44.5 1 57.5 9.5 57.5 20Z" fill="white" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round"/>
                        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily='"Patrick Hand", cursive' fontSize="18" fill="#2c3e50">Hi</text>
                     </svg>
                </div>
                <div className="relative z-10">
                    <svg width="50" height="35" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.5 21C56.5 31.5 44.5 40 29.5 40C24.5 40 20 39 16 37L7 43L10 35C4 31 0.5 26 0.5 21C0.5 10.5 13.5 2 28.5 2C43.5 2 56.5 10.5 56.5 21Z" fill="white" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round"/>
                        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily='"Patrick Hand", cursive' fontSize="18" fill="#2c3e50">Hi</text>
                     </svg>
                </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
               link.isHash ? (
                   <a
                    key={link.name}
                    href={link.href}
                    className="text-hs-greenDark hover:text-hs-pink font-hand text-xl font-bold transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <svg className="absolute -bottom-2 left-0 w-0 transition-all duration-300 group-hover:w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="#e88080" strokeWidth="2" fill="none" />
                    </svg>
                  </a>
               ) : (
                   <Link
                    key={link.name}
                    to={link.href}
                    className="text-hs-greenDark hover:text-hs-pink font-hand text-xl font-bold transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <svg className="absolute -bottom-2 left-0 w-0 transition-all duration-300 group-hover:w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="#e88080" strokeWidth="2" fill="none" />
                    </svg>
                  </Link>
               )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-hs-greenDark hover:text-hs-pink focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-hs-bg border-t border-hs-green/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               link.isHash ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-hs-greenDark hover:text-hs-pink hover:bg-hs-greenLight font-hand text-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
               ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-hs-greenDark hover:text-hs-pink hover:bg-hs-greenLight font-hand text-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
               )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;