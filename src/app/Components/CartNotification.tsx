"use client"

import React from 'react';
import { useCart } from '../context/CartContext';

const CartNotification = () => {
  const { cartCount } = useCart();

  if (cartCount === 0) return null;

  return (
    <div className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium">
      {cartCount}
    </div>
  );
};

export default CartNotification; 