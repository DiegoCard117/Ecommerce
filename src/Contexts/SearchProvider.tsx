'use client'

import React, { useState, ReactNode, createContext } from "react";

interface ContextData {
  products: string[];
  setProducts: React.Dispatch<React.SetStateAction<string[]>>;
  cartItems: string[];
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
}

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext<ContextData | any>(undefined);

const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<string[]>([]);
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

export default SearchProvider;
