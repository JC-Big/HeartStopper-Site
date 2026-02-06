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
            {/* Download Link */}
            {book.pdfUrl && (
                <a 
                    href={book.pdfUrl} 
                    download 
                    className="hover:text-hs-greenLight transition-colors" 
                    title="Baixar PDF"
                >
                    <Download size={22} className="md:w-6 md:h-6" />
                </a>
            )}
            <button onClick={onClose} className="hover:text-hs-pink transition-colors">
              <X size={26} className="md:w-7 md:h-7" />
            </button>
          </div>
        </div>

        {/* Content - PDF Viewer */}
        <div className="flex-1 bg-gray-100 relative overflow-hidden flex flex-col">
            {book.pdfUrl ? (
                 <iframe
                    src={book.pdfUrl}
                    className="w-full h-full border-0"
                    title={`Leitor de PDF - ${book.title}`}
                 />
            ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                    PDF não encontrado.
                </div>
            )}
        </div>

        {/* Footer Controls - Removed as native PDF viewer handles navigation */}
        {/* Keeping the container visually if needed, or removing entirely. 
            Removing to maximize reading space as requested functionality update.
        */}

      </div>
    </div>
  );
};

export default PdfReader;