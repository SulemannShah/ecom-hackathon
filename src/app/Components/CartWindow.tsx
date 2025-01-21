"use client"

import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

interface CartWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartWindow = ({ isOpen, onClose }: CartWindowProps) => {
  const { cartItems, removeFromCart, getCartTotal } = useCart();

  return (
    <>
      <div 
        className={`
          fixed inset-0 bg-black transition-opacity duration-300 z-40
          ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />
      
      {/* Cart Window */}
      <div 
        className={`
          fixed top-0 right-0 h-screen w-[400px] bg-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header - Fixed */}
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
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
        </div>

        {/* Cart Items - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-6 pb-6 border-b mb-4">
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
                      <span className="text-[#B88E2F] font-medium">
                        Rs. {item.price.toLocaleString()}
                      </span>
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
            </>
          )}
        </div>

        {/* Footer - Fixed */}
        <div className="p-6 border-t bg-white">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[16px] font-medium">Subtotal</span>
            <span className="text-[#B88E2F] text-[16px] font-medium">
              Rs. {getCartTotal().toLocaleString()}
            </span>
          </div>

          <div className="flex gap-4">
            <Link 
              href="/Cart" 
              className="flex-1 py-3 border border-black rounded hover:bg-black hover:text-white transition-colors text-center"
            >
              View Cart
            </Link>
            <Link 
              href="/Checkout"
              className="flex-1 py-3 border border-black rounded hover:bg-black hover:text-white transition-colors text-center"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartWindow; 