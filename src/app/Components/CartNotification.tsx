"use client"

import React from 'react';
import { useCart } from '../context/CartContext';

const CartNotification = () => {
  const { cartCount } = useCart();

  if (cartCount === 0) return null;

  return (
    <div className="absolute -top-3 -right-3 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium shadow-md">
      {cartCount}
    </div>
  );
};

export default CartNotification; 