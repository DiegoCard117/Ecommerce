"use client";

import React, {
  useState,
  ReactNode,
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: string;
  quantity: number;
  title?: string;
  thumbnail?: string;
  price?: number;
};

type ShoppingCartContextType = {
  getItemQuantity: (id: string) => number;
  //increaseCartQuantity: (id : string) => void
  increaseCartQuantity: (itemsToAdd: CartItem[]) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartItems: Array<CartItem>;
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(itemsToAdd: CartItem[]) {
    setCartItems((currentItems) => {
      const updatedItems = [...currentItems];

      itemsToAdd.forEach((itemToAdd) => {
        const itemIndex = updatedItems.findIndex(
          (item) => item.id === itemToAdd.id
        );
        if (itemIndex !== -1) {
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity: updatedItems[itemIndex].quantity + 1,
          };
        } else {
          updatedItems.push({ ...itemToAdd, quantity: 1 });
        }
      });

      return updatedItems;
    });
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: string) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
