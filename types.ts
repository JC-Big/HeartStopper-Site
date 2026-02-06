export interface Character {
  id: number;
  name: string;
  image: string;
  age?: string;
  birthday?: string;
  schoolYear?: string;
  description?: string;
  category: 'Comic' | 'Series' | 'Both';
}

export interface Book {
  id: number;
  title: string;
  author: string;
  year: string;
  type: 'Quadrinho' | 'Livro';
  tags: string[];
  description: string;
  cover: string;
  buyLink: string;
  pdfUrl?: string; // Optional URL for the PDF reader
}

export interface Quote {
  id: number;
  text: string;
  translation: string;
  author: string;
  color: string;
}