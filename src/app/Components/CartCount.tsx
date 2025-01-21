"use client"

import React from 'react';
import { useCart } from '../context/CartContext';

const CartCount = () => {
  const { cartCount } = useCart();

  if (cartCount === 0) return null;

  return (
    <div className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {cartCount}
    </div>
  );
};

export default CartCount; 