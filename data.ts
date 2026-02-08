import { Book, Character, Quote } from './types';

export const characters: Character[] = [
  { 
    id: 1, 
    name: 'Nicholas Nelson', 
    image: 'https://picsum.photos/seed/nick/300/300',
    age: '16 anos',
    birthday: '4 de setembro',
    schoolYear: '2° Ano',
    description: 'Namorado do Charlie. Nick é um jogador de rugby gentil e alegre. Ele começa a descobrir mais sobre si mesmo depois de fazer amizade com Charlie. Conhecido por seus "braços de rugby" e por ser incrivelmente leal.',
    category: 'Both'
  },
  { 
    id: 2, 
    name: 'Charles Spring', 
    image: 'https://picsum.photos/seed/charlie/300/300',
    age: '14 anos',
    birthday: '27 de Abril',
    schoolYear: '1° Ano',
    description: 'Namorado do Nick. Charlie é um pensador excessivo, músico talentoso (bateria) e muito carinhoso. Depois de um ano difícil onde sofreu bullying, ele encontra conforto e amor em sua amizade com Nick.',
    category: 'Both'
  },
  { 
    id: 3, 
    name: 'Elle Argent', 
    image: 'https://picsum.photos/seed/elle/300/300',
    age: '16 anos',
    birthday: 'Desconhecido',
    schoolYear: '2° Ano',
    description: 'Elle é artística, confiante e protetora de seus amigos. Ela se transferiu para a escola Higgs após sofrer transbição em Truham. Melhor amiga de Tao, Charlie e Isaac.',
    category: 'Both'
  },
  { 
    id: 4, 
    name: 'Tao Xu', 
    image: 'https://picsum.photos/seed/tao/300/300',
    age: '15 anos',
    birthday: '23 de setembro',
    schoolYear: '1° Ano',
    description: 'Amigo do Charlie. Tao é ferozmente leal e muito protetor de Charlie. Ele ama cinema e tem medo de que seu grupo de amigos se desfaça. Pode ser um pouco intenso, mas tem um grande coração.',
    category: 'Both'
  },
  { 
    id: 5, 
    name: 'Tara Jones', 
    image: 'https://picsum.photos/seed/tara/300/300',
    age: '15 anos',
    birthday: '3 de julho',
    schoolYear: '2° Ano',
    description: 'Amiga do Nick. Tara é doce, sábia e amiga de infância de Nick. Ela namora Darcy e se torna uma grande confidente para Nick e Elle.',
    category: 'Both'
  },
  { 
    id: 6, 
    name: 'Darcy Olsson', 
    image: 'https://picsum.photos/seed/darcy/300/300',
    age: '16 anos',
    birthday: 'Desconhecido',
    schoolYear: '2° Ano',
    description: 'Caótica, barulhenta e hilária. Darcy traz a diversão para o grupo e ama Tara incondicionalmente. Ela esconde algumas inseguranças por trás de seu humor.',
    category: 'Both'
  },
  { 
    id: 7, 
    name: 'Isaac Henderson', 
    image: 'https://picsum.photos/seed/isaac/300/300',
    age: '15 anos',
    birthday: 'Desconhecido',
    schoolYear: '1° Ano',
    description: 'O membro quieto e observador do grupo que está sempre lendo um livro. Isaac é o pilar de estabilidade e muitas vezes percebe as coisas antes de todo mundo.',
    category: 'Comic'
  },
  { 
    id: 8, 
    name: 'Imogen Heaney', 
    image: 'https://picsum.photos/seed/imogen/300/300',
    age: '16 anos',
    birthday: 'Desconhecido',
    schoolYear: '2° Ano',
    description: 'Uma personagem original da série Netflix. Imogen é enérgica e um pouco desajeitada socialmente, mas tem boas intenções e aprende muito sobre amizade verdadeira.',
    category: 'Series'
  },
  { 
    id: 9, 
    name: 'Victoria Spring', 
    image: 'https://picsum.photos/seed/tori/300/300',
    age: '15 anos',
    birthday: '5 de Abril',
    schoolYear: '2° Ano',
    description: 'Irmã do Charlie. Misteriosa, pessimista e tomando refrigerante o tempo todo. Ela é extremamente protetora com Charlie.',
    category: 'Both'
  },
  { 
    id: 10, 
    name: 'Benjamin Hope', 
    image: 'https://picsum.photos/seed/ben/300/300',
    age: '16 Anos',
    birthday: '1 de Dezembro',
    schoolYear: '2° Ano',
    description: 'Ex do Charlie. Uma figura complicada do passado de Charlie. Manipulador e tóxico, ele serve como contraste para o relacionamento saudável que Nick oferece.',
    category: 'Both'
  },
  { 
    id: 11, 
    name: 'Sahar Zahid', 
    image: 'https://picsum.photos/seed/sahar/300/300',
    age: '16 anos',
    birthday: 'Desconhecido',
    schoolYear: '2° Ano',
    description: 'Nova amiga que se junta ao grupo na viagem a Paris. Inteligente e direta.',
    category: 'Comic'
  },
  { 
    id: 12, 
    name: 'Oliver Spring', 
    image: 'https://picsum.photos/seed/oliver/300/300',
    age: '7 anos',
    birthday: 'Desconhecido',
    schoolYear: 'Ensino Fundamental',
    description: 'Irmão caçula de Charlie e Tori. Oliver é enérgico, adora brinquedos e muitas vezes interrompe momentos românticos de Nick e Charlie sem querer. (Exclusivo dos livros/quadrinhos).',
    category: 'Comic'
  },
  { 
    id: 13, 
    name: 'Mr. Nathan Ajayi', 
    image: 'https://picsum.photos/seed/ajayi/300/300',
    age: 'Adulto',
    birthday: 'Desconhecido',
    schoolYear: 'Professor de Arte (Truham)',
    description: 'O professor de arte solidário que ofereceu a Charlie um refúgio seguro na sala de arte durante seus momentos difíceis. Gentil, compreensivo e um mentor importante para os alunos LGBTQIA+.',
    category: 'Both'
  },
  { 
    id: 14, 
    name: 'Mr. Youssef Farouk', 
    image: 'https://picsum.photos/seed/farouk/300/300',
    age: 'Adulto',
    birthday: 'Desconhecido',
    schoolYear: 'Professor de Ciências (Truham)',
    description: 'Professor de ciências rigoroso e aparentemente mal-humorado, mas que esconde um coração mole. Ele desenvolve um relacionamento adorável com Mr. Ajayi durante a viagem a Paris.',
    category: 'Both'
  },
  { 
    id: 15, 
    name: 'Harry Greene', 
    image: 'https://picsum.photos/seed/harry/300/300',
    age: '16 anos',
    birthday: '17 de Abril',
    schoolYear: '2° Ano',
    description: 'Colega de Sala do Nick. Rico e popular, mas frequentemente faz comentários ofensivos e homofóbicos. Uma fonte de conflito constante para Nick e Charlie.',
    category: 'Both'
  },
  { 
    id: 16, 
    name: 'Sai Verma', 
    image: 'https://picsum.photos/seed/sai/300/300',
    age: '16 anos',
    birthday: 'Desconhecido',
    schoolYear: '2° Ano',
    description: 'Amigo de rugby de Nick. Ele é gentil e, junto com Otis e Christian, desaprova o comportamento de Harry, embora demore a se manifestar.',
    category: 'Both'
  },
  { 
    id: 17, 
    name: 'Christian Lal', 
    image: 'https://picsum.photos/seed/christian/300/300',
    age: '16 anos',
    birthday: 'Desconhecido',
    schoolYear: '2° Ano',
    description: 'Outro membro do trio de amigos do rugby. Christian apoia Nick e se torna um aliado importante dentro do time.',
    category: 'Both'
  },
  { 
    id: 18, 
    name: 'Otis Smith', 
    image: 'https://picsum.photos/seed/otis/300/300',
    age: '16 anos',
    birthday: 'Desconhecido',
    schoolYear: '2° Ano',
    description: 'O terceiro do grupo de amigos sensatos do rugby. Otis é tranquilo e leal a Nick.',
    category: 'Both'
  },
  { 
    id: 19, 
    name: 'Aled Last', 
    image: 'https://picsum.photos/seed/aled/300/300',
    age: '16 anos',
    birthday: 'Desconhecido',
    schoolYear: '2° Ano',
    description: 'Nos quadrinhos, é um dos melhores amigos de Charlie. Quieto, estudioso e criador do podcast "Universe City". Na série, seu papel foi adaptado para Isaac.',
    category: 'Comic'
  },
  { 
    id: 20, 
    name: 'Sarah Nelson', 
    image: 'https://picsum.photos/seed/sarah/300/300',
    age: 'Adulto',
    birthday: 'Desconhecido',
    schoolYear: 'Mãe de Nick',
    description: 'A mãe maravilhosa e compreensiva de Nick. Ela cria um lar seguro para ele e acolhe Charlie como parte da família desde o primeiro dia.',
    category: 'Both'
  },
  { 
    id: 21, 
    name: 'Stéphane Nelson', 
    image: 'https://picsum.photos/seed/stephane/300/300',
    age: 'Adulto',
    birthday: 'Desconhecido',
    schoolYear: 'Pai de Nick',
    description: 'Pai francês de Nick. Ele é frequentemente ausente e um pouco distante da vida cotidiana dos filhos, mas aparece em momentos importantes.',
    category: 'Both'
  },
  { 
    id: 22, 
    name: 'Jane Spring', 
    image: 'https://picsum.photos/seed/jane/300/300',
    age: 'Adulto',
    birthday: 'Desconhecido',
    schoolYear: 'Mãe de Charlie',
    description: 'Mãe de Charlie, Tori e Oliver. Ela é bastante rigorosa e protetora, o que às vezes gera atritos com Charlie, embora suas intenções venham da preocupação.',
    category: 'Both'
  },
  { 
    id: 23, 
    name: 'Julio Spring', 
    image: 'https://picsum.photos/seed/julio/300/300',
    age: 'Adulto',
    birthday: 'Desconhecido',
    schoolYear: 'Pai de Charlie',
    description: 'Pai de Charlie. Geralmente é o pacificador da casa, sendo carinhoso e apoiando muito seus filhos emocionalmente.',
    category: 'Both'
  },
  { 
    id: 24, 
    name: 'Nelie Nelson', 
    image: 'https://picsum.photos/seed/nellie/300/300',
    age: '65 (anos de cachorro)',
    birthday: 'Desconhecido',
    schoolYear: '----',
    description: 'Cachorrinha do Nick. A famosa Border Collie de Nick. Ela é a rainha da casa Nelson, adora Charlie e é extremamente fotogênica.',
    category: 'Both'
  },
  { 
    id: 25, 
    name: 'Henry Nelson', 
    image: 'https://picsum.photos/seed/henry/300/300',
    age: 'Cão',
    birthday: 'Desconhecido',
    schoolYear: 'Pug',
    description: 'O pug caótico e adorável da família Nelson. Ele é o irmão mais novo de quatro patas de Nelie e adora causar confusão.',
    category: 'Both'
  },
  { 
    id: 26, 
    name: 'David Nelson', 
    image: 'https://picsum.photos/seed/david/300/300',
    age: '19 anos',
    birthday: 'Desconhecido',
    schoolYear: 'Universidade',
    description: 'Irmão mais velho de Nick. Ele estuda na universidade e tem uma relação tensa com Nick, muitas vezes fazendo comentários bifóbicos e desaprovando o relacionamento dele com Charlie.',
    category: 'Both'
  }
];

export const graphicNovels: Book[] = [
  {
    id: 1,
    title: 'Heartstopper Volume 1',
    author: 'Alice Oseman',
    year: '2019',
    type: 'Quadrinho',
    tags: ['Romance', 'LGBTQIA+'],
    description: 'Charlie e Nick estão na mesma escola, mas nunca se encontraram... até o dia em que são obrigados a sentar juntos.',
    cover: '/covers/volume-1.png',
    buyLink: 'https://a.co/d/02uoJ7ky',
    pdfUrl: '/quadrinhos/heartstopper-volume-1.pdf'
  },
  {
    id: 2,
    title: 'Heartstopper Volume 2',
    author: 'Alice Oseman',
    year: '2019',
    type: 'Quadrinho',
    tags: ['Romance', 'LGBTQIA+'],
    description: 'Nick e Charlie são melhores amigos. Nick sabe que Charlie é gay, e Charlie tem certeza que Nick não é.',
    cover: '/covers/volume-2.png',
    buyLink: 'https://a.co/d/077Yr4l3',
    pdfUrl: '/quadrinhos/heartstopper-volume-2.pdf'
  },
  {
    id: 3,
    title: 'Heartstopper Volume 3',
    author: 'Alice Oseman',
    year: '2020',
    type: 'Quadrinho',
    tags: ['Romance', 'LGBTQIA+'],
    description: 'O grupo de amigos vai para Paris! Segredos serão revelados na cidade do amor.',
    cover: '/covers/volume-3.png',
    buyLink: 'https://a.co/d/04RtbHp5',
    pdfUrl: '/quadrinhos/heartstopper-volume-3.pdf'
  },
  {
    id: 4.1,
    title: 'Heartstopper Volume 4',
    author: 'Alice Oseman',
    year: '2021',
    type: 'Quadrinho',
    tags: ['Romance', 'LGBTQIA+'],
    description: 'A vida não é sempre fácil, mas ter alguém ao seu lado faz toda a diferença.',
    cover: '/covers/volume-4.png',
    buyLink: 'https://a.co/d/0akYeRXP',
    pdfUrl: '/quadrinhos/heartstopper-volume-4-1.pdf'
  },
  {
    id: 4.2,
    title: 'Heartstopper Volume 4',
    author: 'Alice Oseman',
    year: '2021',
    type: 'Quadrinho',
    tags: ['Romance', 'LGBTQIA+'],
    description: 'A vida não é sempre fácil, mas ter alguém ao seu lado faz toda a diferença.',
    cover: '/covers/volume-4.png',
    buyLink: 'https://a.co/d/0akYeRXP',
    pdfUrl: '/quadrinhos/heartstopper-volume-4-2.pdf'
  },
  {
    id: 5,
    title: 'Heartstopper Volume 5',
    author: 'Alice Oseman',
    year: '2023',
    type: 'Quadrinho',
    tags: ['Romance', 'LGBTQIA+'],
    description: 'Nick e Charlie estão apaixonados, mas o que vem a seguir para o casal?',
    cover: '/covers/volume-5.png',
    buyLink: 'https://a.co/d/094DB6It',
    pdfUrl: '/quadrinhos/heartstopper-volume-5.pdf'
  }
];

export const novels: Book[] = [
  {
    id: 101,
    title: 'Nick and Charlie',
    author: 'Alice Oseman',
    year: '2015',
    type: 'Livro',
    tags: ['Novela', 'Romance'],
    description: 'Uma novela sobre as incertezas do relacionamento à distância quando Nick vai para a universidade.',
    cover: '/covers/nick-e-charlie.png',
    buyLink: 'https://a.co/d/055VCUiO'
  },
  {
    id: 102,
    title: 'This Winter',
    author: 'Alice Oseman',
    year: '2015',
    type: 'Livro',
    tags: ['Novela', 'Drama'],
    description: 'Acompanhe o Natal difícil da família Spring e como eles lidam com recuperação e saúde mental.',
    cover: '/covers/this-winter.png',
    buyLink: 'https://a.co/d/06q8rQq4'
  },
  {
    id: 103,
    title: 'Solitaire',
    author: 'Alice Oseman',
    year: '2014',
    type: 'Livro',
    tags: ['Ficção', 'Mistério'],
    description: 'A história de Tori Spring, irmã de Charlie, lidando com o pessimismo e um blog misterioso.',
    cover: '/covers/solitaire.png',
    buyLink: 'https://a.co/d/01GuH4Bi'
  },
  {
    id: 104,
    title: 'Radio Silence',
    author: 'Alice Oseman',
    year: '2016',
    type: 'Livro',
    tags: ['Contemporâneo'],
    description: 'Frances Janvier é uma máquina de estudos, mas esconde um segredo fascinante.',
    cover: '/covers/radio-silence.png',
    buyLink: 'https://a.co/d/09Afkoop'
  },
  {
    id: 105,
    title: 'I Was Born for This',
    author: 'Alice Oseman',
    year: '2018',
    type: 'Livro',
    tags: ['Ficção', 'Fandom'],
    description: 'Para Angel Rahimi a vida é sobre apenas uma coisa: The Ark, uma boyband pop-rock.',
    cover: '/covers/i-was-born.png',
    buyLink: 'https://a.co/d/08DOCagn'
  },
  {
    id: 106,
    title: 'Loveless',
    author: 'Alice Oseman',
    year: '2020',
    type: 'Livro',
    tags: ['Asexualidade', 'Drama'],
    description: 'Georgia nunca se apaixonou, nunca beijou ninguém e nunca teve um crush. Mas ela tem certeza que um dia vai acontecer.',
    cover: '/covers/loveless.png',
    buyLink: 'https://a.co/d/0hrlJnj3'
  }
];

export const quotes: Quote[] = [
  {
    id: 1,
    text: "I like Charlie Spring. In a romantic way.",
    translation: "Eu gosto de Charlie Spring. De um jeito romântico.",
    author: "Nick",
    color: "bg-[#ffe4e1]" // Light pink
  },
  {
    id: 2,
    text: "I don't want to break up. I want to fall in love.",
    translation: "Eu não quero terminar. Eu quero me apaixonar.",
    author: "Charlie",
    color: "bg-[#e8f3ea]" // Light green
  },
  {
    id: 3,
    text: "You don't have to figure out your sexuality immediately.",
    translation: "Você não precisa descobrir sua sexualidade imediatamente.",
    author: "Mr. Ajayi",
    color: "bg-[#fdf6d9]" // Light yellow
  },
  {
    id: 4,
    text: "You are my favorite person. I need you to know that.",
    translation: "Você é minha pessoa favorita. Eu preciso que você saiba disso.",
    author: "Nick",
    color: "bg-[#dbeafe]" // Light blue
  },
  {
    id: 5,
    text: "Boy meets boy. Boys become friends. Boys fall in love.",
    translation: "Garoto conhece garoto. Garotos viram amigos. Garotos se apaixonam.",
    author: "Narrator",
    color: "bg-[#ffe4e1]" // Light pink
  },
  {
    id: 6,
    text: "Sorry! I'm sorry.",
    translation: "Desculpa! Me desculpa.",
    author: "Charlie",
    color: "bg-[#e8f3ea]" // Light green
  },
  {
    id: 7,
    text: "I'm having a proper full-on gay crisis!",
    translation: "Eu estou tendo uma crise gay completa!",
    author: "Nick",
    color: "bg-[#e8f3ea]"
  },
  {
    id: 8,
    text: "Don't let anyone make you disappear, Charlie.",
    translation: "Não deixe ninguém fazer você desaparecer, Charlie.",
    author: "Mr. Ajayi",
    color: "bg-[#dbeafe]"
  }
];

export const wallpapers = [
    { id: 1, url: 'https://picsum.photos/seed/wall1/1920/1080', title: 'Nick & Charlie' },
    { id: 2, url: 'https://picsum.photos/seed/wall2/1920/1080', title: 'The Gang' },
    { id: 3, url: 'https://picsum.photos/seed/wall3/1920/1080', title: 'Leaves' },
    { id: 4, url: 'https://picsum.photos/seed/wall4/1080/1920', title: 'Nellie the Dog' },
    { id: 5, url: 'https://picsum.photos/seed/wall5/1080/1920', title: 'Paris Squad' },
    { id: 6, url: 'https://picsum.photos/seed/wall6/1920/1080', title: 'Beach Day' },
    { id: 7, url: 'https://picsum.photos/seed/wall7/1920/1080', title: 'School Trip' },
    { id: 8, url: 'https://picsum.photos/seed/wall8/1080/1920', title: 'Snow Day' },
    { id: 9, url: 'https://picsum.photos/seed/wall9/1920/1080', title: 'Truham Uniform' },
    { id: 10, url: 'https://picsum.photos/seed/wall10/1080/1920', title: 'Higgs Uniform' },
    { id: 11, url: 'https://picsum.photos/seed/wall11/1920/1080', title: 'Milkshake' },
    { id: 12, url: 'https://picsum.photos/seed/wall12/1080/1920', title: 'Rainy Day' },
    { id: 13, url: 'https://picsum.photos/seed/wall13/1920/1080', title: 'Cinema Date' },
    { id: 14, url: 'https://picsum.photos/seed/wall14/1080/1920', title: 'Bowling Fun' },
    { id: 15, url: 'https://picsum.photos/seed/wall15/1920/1080', title: 'Prom Night' },
    { id: 16, url: 'https://picsum.photos/seed/wall16/1080/1920', title: 'Art Room' },
    { id: 17, url: 'https://picsum.photos/seed/wall17/1920/1080', title: 'Tori Spring' },
    { id: 18, url: 'https://picsum.photos/seed/wall18/1920/1080', title: 'Nelson Family' },
    { id: 19, url: 'https://picsum.photos/seed/wall19/1080/1920', title: 'Spring Siblings' },
    { id: 20, url: 'https://picsum.photos/seed/wall20/1920/1080', title: 'Rugby Match' },
    { id: 21, url: 'https://picsum.photos/seed/wall21/1080/1920', title: 'Music Room' },
    { id: 22, url: 'https://picsum.photos/seed/wall22/1080/1920', title: 'Milkshake Date' },
    { id: 23, url: 'https://picsum.photos/seed/wall23/1920/1080', title: 'Paris Tower' },
    { id: 24, url: 'https://picsum.photos/seed/wall24/1080/1920', title: 'Louvre Museum' },
    { id: 25, url: 'https://picsum.photos/seed/wall25/1920/1080', title: 'Bookstore Date' },
    { id: 26, url: 'https://picsum.photos/seed/wall26/1080/1920', title: 'Summer Party' },
];