import { v4 as uuid } from "uuid";

export const mockBooks = [
  {
    id: uuid(),
    title: "O Grande Gatsby",
    img: "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UY327_FMwebp_QL65_.jpg",
    author: "F. Scott Fitzgerald",
    category: "Literatura Clássica",
  },
  {
    id: uuid(),
    title: "1984",
    img: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UY327_FMwebp_QL65_.jpg",
    author: "George Orwell",
    category: "Ficção Distópica",
  },
  {
    id: uuid(),
    title: "O Pequeno Príncipe",
    img: "https://m.media-amazon.com/images/I/61ATa0Pc4AL._AC_UF1000,1000_QL80_.jpg",
    author: "Antoine de Saint-Exupéry",
    category: "Literatura Infantojuvenil",
  },
  {
    id: uuid(),
    title: "Drácula",
    img: "https://m.media-amazon.com/images/I/61MgodE1s0L._AC_UF1000,1000_QL80_.jpg",
    author: "Bram Stoker",
    category: "Ficção de Terror",
  },
  {
    id: uuid(),
    title: "Cem Anos de Solidão",
    img: "https://m.media-amazon.com/images/I/816Yy5v+S5L._AC_UF1000,1000_QL80_.jpg",
    author: "Gabriel García Márquez",
    category: "Realismo Mágico",
  },
];
