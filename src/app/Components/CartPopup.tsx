"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartPopup = ({ isOpen, onClose }: CartPopupProps) => {
  const { cartItems, removeFromCart, getCartTotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[24px] font-medium">Shopping Cart</h2>
          <button onClick={onClose} className="p-2">
            <Image 
              src="/close.png" 
              alt="close" 
              width={24} 
              height={24}
            />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-6 pb-6 border-b mb-6">
                <div className="w-[100px] h-[100px] bg-[#FFF9E5] rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-[16px] mb-2">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    <span>{item.quantity}</span>
                    <span>x</span>
                    <span className="text-[#B88E2F]">{item.price}</span>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Image 
                    src="/close.png" 
                    alt="remove" 
                    width={16} 
                    height={16}
                  />
                </button>
              </div>
            ))}

            <div className="mt-8">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[16px]">Subtotal</span>
                <span className="text-[#B88E2F] text-[16px]">
                  Rs. {getCartTotal().toLocaleString()}.00
                </span>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-3 border border-black rounded hover:bg-black hover:text-white transition-colors">
                  View Cart
                </button>
                <button className="flex-1 py-3 border border-black rounded hover:bg-black hover:text-white transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPopup; 