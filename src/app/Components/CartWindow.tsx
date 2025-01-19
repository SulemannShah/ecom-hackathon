"use client"

import React from 'react';
import Image from 'next/image';

interface CartWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartWindow = ({ isOpen, onClose }: CartWindowProps) => {
  return (
    <>
      {/* Backdrop with fade transition */}
      <div 
        className={`
          fixed inset-0 bg-black transition-opacity duration-300 z-40
          ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />
      
      {/* Cart Window with slide transition */}
      <div 
        className={`
          fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 p-6
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[24px]">Shopping Cart</h2>
          <button onClick={onClose}>
            <Image 
              src="/close.png" 
              alt="close" 
              width={24} 
              height={24}
            />
          </button>
        </div>

        <div className="flex items-center gap-6 pb-6 border-b">
          <div className="w-[100px] h-[100px] bg-[#FFF9E5] rounded-lg overflow-hidden">
            <img 
              src="/product1.png" 
              alt="Product" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="text-[16px] mb-2">Asgaard sofa</h3>
            <div className="flex items-center gap-2">
              <span>1</span>
              <span>x</span>
              <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
          </div>

          <button className="text-gray-400 hover:text-gray-600">
            <Image 
              src="/close.png" 
              alt="remove" 
              width={16} 
              height={16}
            />
          </button>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[16px]">Subtotal</span>
            <span className="text-[#B88E2F] text-[16px]">Rs. 250,000.00</span>
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
      </div>
    </>
  );
};

export default CartWindow; 