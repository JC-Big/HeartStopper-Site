import React from 'react';
import { Instagram, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hs-greenDark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        
        <div className="mb-6 flex space-x-6">
          <a href="#" className="hover:text-hs-pink transition-colors transform hover:scale-110">
            <Instagram size={32} />
          </a>
          <a href="#" className="hover:text-hs-pink transition-colors transform hover:scale-110">
            <Twitter size={32} />
          </a>
          <a href="#" className="hover:text-hs-pink transition-colors transform hover:scale-110">
             {/* TikTok Icon placeholder since Lucide might not have it in all versions, using Music note as proxy or custom svg */}
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
          </a>
        </div>

        <div className="mb-4">
          <h3 className="font-hand text-2xl flex items-center justify-center gap-2">
            Fanpage criada por fãs <Heart size={20} className="fill-hs-pink text-hs-pink" />
          </h3>
        </div>

        <p className="text-sm text-green-100/60 font-sans max-w-lg">
          Todos os direitos pertencem a Alice Oseman / Netflix. Este é um projeto sem fins lucrativos feito para aprendizado e apreciação da obra.
        </p>

        <div className="mt-8 pt-6 border-t border-white/10 w-full text-xs text-green-100/40">
           &copy; {new Date().getFullYear()} Heartstopper Fanpage.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
