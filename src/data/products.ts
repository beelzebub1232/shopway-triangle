
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  variants?: string[];
  tags?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Watch",
    price: 199.99,
    description: "A beautifully crafted timepiece with a clean, minimalist design. Perfect for everyday wear and special occasions alike.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 124,
    variants: ["Silver", "Gold", "Rose Gold"],
    tags: ["premium", "accessories", "gift"]
  },
  {
    id: 2,
    name: "Modern Desk Lamp",
    price: 89.99,
    description: "An elegant desk lamp with adjustable brightness and color temperature. The perfect addition to your workspace.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 89,
    variants: ["White", "Black", "Walnut"],
    tags: ["home", "lighting", "office"]
  },
  {
    id: 3,
    name: "Premium Leather Wallet",
    price: 79.99,
    description: "Handcrafted from the finest full-grain leather, this wallet combines functionality with timeless style.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: false,
    inStock: true,
    rating: 4.9,
    reviews: 56,
    variants: ["Brown", "Black", "Tan"],
    tags: ["accessories", "leather", "gift"]
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug",
    price: 24.99,
    description: "A handcrafted ceramic mug with a comfortable handle and perfect weight. Designed to enhance your coffee experience.",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 112,
    variants: ["White", "Black", "Speckled"],
    tags: ["kitchen", "ceramics", "coffee"]
  },
  {
    id: 5,
    name: "Wireless Headphones",
    price: 249.99,
    description: "Premium wireless headphones with active noise cancellation, delivering crystal-clear sound and all-day comfort.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 235,
    variants: ["Black", "White", "Navy"],
    tags: ["electronics", "audio", "premium"]
  },
  {
    id: 6,
    name: "Minimalist Backpack",
    price: 119.99,
    description: "A sleek, water-resistant backpack that combines style with functionality. Perfect for daily commutes or weekend adventures.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 78,
    variants: ["Charcoal", "Navy", "Olive"],
    tags: ["bags", "travel", "everyday"]
  },
  {
    id: 7,
    name: "Natural Scented Candle",
    price: 34.99,
    description: "Hand-poured soy wax candle with essential oils and a cotton wick. Creates a warm, inviting atmosphere in any space.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1603006905393-c3926b42228b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: false,
    inStock: true,
    rating: 4.8,
    reviews: 92,
    variants: ["Lavender", "Sandalwood", "Sea Salt"],
    tags: ["home", "decor", "gift"]
  },
  {
    id: 8,
    name: "Slim Metal Pen",
    price: 24.99,
    description: "Precision-engineered writing instrument with a smooth, consistent ink flow and comfortable grip.",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 45,
    variants: ["Silver", "Black", "Gold"],
    tags: ["stationery", "office", "gift"]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};
