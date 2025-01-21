"use client"

import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { BsTrash } from 'react-icons/bs';

const CartPage = () => {
  const { cartItems, removeFromCart, getCartTotal, updateQuantity } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  return (
    <>
      {/* Hero Banner - Matching Shop page style */}
      <section className="relative h-[316px] flex items-center justify-center mt-10">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/image20.png"  // Updated to correct image path
            alt="Cart Banner"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative text-center z-10">
          <h1 className="text-[48px] font-medium mb-2">Cart</h1>
          <div className="flex items-center justify-center gap-2">
            <Link href="/" className="text-[#000000] hover:text-[#B88E2F]">
              Home
            </Link>
            <span className="text-[#000000]">/</span>
            <span className="text-[#B88E2F]">Cart</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 text-sm mb-12">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Cart</span>
        </div>

        <div className="grid lg:grid-cols-[3fr_1fr] gap-8">
          {/* Left Side - Cart Items */}
          <div className="bg-white rounded-lg shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-4 bg-[#FFF9E5] p-6 rounded-t-lg font-medium">
              <div className="col-span-2">Product</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Subtotal</div>
            </div>

            {/* Cart Items */}
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-4 items-center p-6">
                  {/* Product */}
                  <div className="col-span-2 flex items-center gap-6">
                    <div className="w-24 h-24 bg-[#FFF9E5] rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-[#B88E2F]">Rs. {item.price.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex justify-center">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button 
                        className="px-4 py-2 text-gray-500 hover:text-black disabled:opacity-50"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input 
                        type="text" 
                        value={item.quantity}
                        readOnly
                        className="w-12 text-center border-x border-gray-300 py-2"
                      />
                      <button 
                        className="px-4 py-2 text-gray-500 hover:text-black disabled:opacity-50"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="flex items-center justify-end gap-4">
                    <span className="font-medium text-[#B88E2F]">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#B88E2F] hover:text-red-500 p-1 transition-colors"
                    >
                      <BsTrash size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Cart Totals */}
          <div className="bg-[#FFF9E5] p-8 rounded-lg h-fit">
            <h2 className="text-2xl font-medium mb-8">Cart Totals</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">Rs. {getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                <span className="text-gray-600">Total</span>
                <span className="text-xl font-medium text-[#B88E2F]">
                  Rs. {getCartTotal().toLocaleString()}
                </span>
              </div>
            </div>

            <Link 
              href="/Checkout"
              className="w-full py-4 bg-[#B88E2F] text-white rounded-lg font-medium hover:bg-[#a17928] transition-colors"
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage; 