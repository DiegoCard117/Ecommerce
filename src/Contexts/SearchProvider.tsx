'use client'

import React, { useState, ReactNode, createContext, useContext } from "react";

interface ProductProps {
  thumbnail: string;
  id: number;
  title: string;
  price: number;
  original_price: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  original_price: number;
  thumbnail: string;
  products : Array<ProductProps>
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

interface ContextData {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  cartItems: string[];
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
}

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext<ContextData | Product>({} as Product);

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const value: ContextData = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    favorites,
    setFavorites,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => useContext(SearchContext)
