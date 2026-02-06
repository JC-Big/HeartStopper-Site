import React from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Book } from '../types';

interface PdfReaderProps {
  book: Book;
  onClose: () => void;
}

const PdfReader: React.FC<PdfReaderProps> = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-4">
      <div className="bg-white w-full h-full md:max-w-5xl md:h-[85vh] md:rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-hs-greenDark text-white p-3 md:p-4 flex justify-between items-center shrink-0">
          <h2 className="font-hand text-xl md:text-2xl tracking-wide truncate pr-4">{book.title}</h2>
          <div className="flex gap-3 md:gap-4 shrink-0">
            <button className="hover:text-hs-greenLight transition-colors" title="Baixar PDF">
                <Download size={22} className="md:w-6 md:h-6" />
            </button>
            <button onClick={onClose} className="hover:text-hs-pink transition-colors">
              <X size={26} className="md:w-7 md:h-7" />
            </button>
          </div>
        </div>

        {/* Content - Mocking a PDF Viewer */}
        <div className="flex-1 bg-gray-100 relative overflow-y-auto flex justify-center items-start p-4 md:p-8">
            <div className="bg-white shadow-lg w-full max-w-2xl min-h-[500px] md:min-h-[1000px] flex flex-col items-center justify-center text-center p-6 md:p-12 space-y-4 md:space-y-6">
                <p className="text-gray-400 font-mono text-xs md:text-sm">Página 1 de 288</p>
                <img 
                    src={book.cover} 
                    alt="Cover preview" 
                    className="w-32 md:w-64 h-auto shadow-md rounded-sm opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                />
                <h1 className="font-hand text-3xl md:text-6xl text-hs-greenDark mt-4 md:mt-8 leading-tight">{book.title}</h1>
                <p className="text-base md:text-xl text-gray-600 font-sans max-w-md">
                    Este é um visualizador de demonstração. Em um ambiente de produção, este componente renderizaria o arquivo PDF real localizado em:
                </p>
                <code className="bg-gray-200 px-2 py-1 rounded text-xs md:text-sm text-pink-600 break-all">
                    {book.pdfUrl || 'Nenhum URL fornecido'}
                </code>
                
                <div className="w-full h-px bg-gray-300 my-4 md:my-8"></div>
                
                <p className="font-hand text-xl md:text-2xl text-hs-pink">"Hi." "Hi."</p>
            </div>
        </div>

        {/* Controls */}
        <div className="bg-white border-t p-3 md:p-4 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] shrink-0">
            <button className="flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-gray-100 text-hs-greenDark font-bold disabled:opacity-50 text-sm md:text-base">
                <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">Anterior</span>
            </button>
            <span className="font-mono text-xs md:text-sm text-gray-500">1 / 288</span>
            <button className="flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-gray-100 text-hs-greenDark font-bold text-sm md:text-base">
                <span className="hidden sm:inline">Próxima</span> <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
        </div>

      </div>
    </div>
  );
};

export default PdfReader;