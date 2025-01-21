"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
  totalPrice: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  getCartTotal: () => number;
  cartCount: number;
  getProductQuantity: (productId: number) => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  // Load data from localStorage
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    const savedCartCount = localStorage.getItem('cartCount');
    
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
    if (savedCartCount) {
      setCartCount(parseInt(savedCartCount));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartCount', String(cartCount));
  }, [cartItems, cartCount]);

  // Add this function to get quantity of a specific product
  const getProductQuantity = (productId: number) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { 
                ...item, 
                quantity: existingItem.quantity + quantity,
                totalPrice: (existingItem.quantity + quantity) * item.price
              }
            : item
        );
      }
      return [...prev, { 
        ...product, 
        quantity,
        totalPrice: quantity * product.price 
      }];
    });
    setCartCount(prev => prev + quantity);
  };

  const removeFromCart = (productId: number) => {
    const itemToRemove = cartItems.find(item => item.id === productId);
    if (itemToRemove) {
      setCartItems(prev => prev.filter(item => item.id !== productId));
      setCartCount(prev => {
        const newCount = Math.max(0, prev - itemToRemove.quantity);
        return newCount;
      });
    }
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return; // Don't allow quantities less than 1
    if (newQuantity > 10) return; // Optional: limit maximum quantity

    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === productId) {
          const difference = newQuantity - item.quantity;
          setCartCount(prevCount => prevCount + difference);
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.price
          };
        }
        return item;
      });
    });
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      return total + itemTotal;
    }, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart,
      updateQuantity,
      getCartTotal,
      cartCount,
      getProductQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 