// Sample bookshop listing. Replace image URLs and details with real book photos/content.
export const books = [
  {
    id: "gikuyu-proverbs",
    title: "Gĩkũyũ Proverbs and Their Meanings",
    category: "Culture",
    price: 1200,
    image: "https://picsum.photos/seed/gikuyu-book-1/600/800",
    description:
      "A collection of traditional Agĩkũyũ proverbs with English translations and context on when and how they were used.",
  },
  {
    id: "history-of-agikuyu",
    title: "A History of the Agĩkũyũ People",
    category: "History",
    price: 1800,
    image: "https://picsum.photos/seed/gikuyu-book-2/600/800",
    description:
      "An accessible history of Agĩkũyũ migration, settlement, clans, and social organisation from oral and written sources.",
  },
  {
    id: "gikuyu-for-beginners",
    title: "Gĩkũyũ for Beginners",
    category: "Language",
    price: 900,
    image: "https://picsum.photos/seed/gikuyu-book-3/600/800",
    description:
      "A friendly introduction to Gĩkũyũ vocabulary, greetings, and simple sentence structure for new learners.",
  },
  {
    id: "spirituality-and-rites",
    title: "Spirituality and Rites of Passage",
    category: "Spirituality",
    price: 1500,
    image: "https://picsum.photos/seed/gikuyu-book-4/600/800",
    description:
      "An exploration of traditional Agĩkũyũ belief systems, ceremonies, and rites from birth to eldership.",
  },
  {
    id: "children-folktales",
    title: "Folktales for Children",
    category: "Children",
    price: 800,
    image: "https://picsum.photos/seed/gikuyu-book-5/600/800",
    description:
      "Illustrated Agĩkũyũ folktales retold for young readers, with a short glossary of Gĩkũyũ words.",
  },
  {
    id: "women-in-agikuyu-society",
    title: "Women in Agĩkũyũ Society",
    category: "Culture",
    price: 1600,
    image: "https://picsum.photos/seed/gikuyu-book-6/600/800",
    description:
      "A look at the historical and evolving role of women within Agĩkũyũ family, economic, and community life.",
  },
];

export const categories = [...new Set(books.map((b) => b.category))];
