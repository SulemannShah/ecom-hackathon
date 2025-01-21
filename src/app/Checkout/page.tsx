"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import ConfirmationModal from '../Components/ConfirmationModal';

interface CheckoutFormInputs {
  firstName: string;
  lastName: string;
  company?: string;
  country: string;
  address: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  notes?: string;
}

const countries = [
  { value: 'pakistan', label: 'Pakistan' },
  { value: 'usa', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'canada', label: 'Canada' },
  { value: 'australia', label: 'Australia' }
];

const pakistanProvinces = [
  { value: 'punjab', label: 'Punjab' },
  { value: 'sindh', label: 'Sindh' },
  { value: 'kpk', label: 'Khyber Pakhtunkhwa' },
  { value: 'balochistan', label: 'Balochistan' },
  { value: 'gilgit', label: 'Gilgit-Baltistan' }
];

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CheckoutFormInputs>();

  const handlePaymentChange = (method: string) => {
    setPaymentMethod(method);
  };

  const onSubmit = (data: CheckoutFormInputs) => {
    console.log('Order placed:', data, 'Payment Method:', paymentMethod);
    clearCart();
    setIsModalOpen(true);
    reset();
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[316px] flex items-center justify-center mt-10">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/image20.png"
            alt="Checkout Banner"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative text-center z-10">
          <h1 className="text-[48px] font-medium mb-2">Checkout</h1>
          <div className="flex items-center justify-center gap-2">
            <Link href="/" className="text-[#000000] hover:text-[#B88E2F]">Home</Link>
            <span className="text-[#000000]">/</span>
            <span className="text-[#B88E2F]">Checkout</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Left Side - Billing Details */}
          <div>
            <h2 className="text-2xl font-medium mb-8">Billing details</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">First Name</label>
                  <input 
                    {...register("firstName", { required: "First name is required" })}
                    type="text"
                    className={`w-full h-[75px] px-4 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name</label>
                  <input 
                    {...register("lastName", { required: "Last name is required" })}
                    type="text"
                    className={`w-full h-[75px] px-4 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Company Name (optional)</label>
                <input 
                  {...register("company")}
                  type="text"
                  className={`w-full h-[75px] px-4 border ${errors.company ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">Country / Region</label>
                <select 
                  {...register("country", { required: "Country is required" })}
                  className={`w-full h-[75px] px-4 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">Street address</label>
                <input 
                  {...register("address", { required: "Address is required" })}
                  type="text"
                  className={`w-full h-[75px] px-4 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                  placeholder="House number and street name"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">Town / City</label>
                <input 
                  {...register("city", { required: "City is required" })}
                  type="text"
                  className={`w-full h-[75px] px-4 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">Province</label>
                <select 
                  {...register("province", { required: "Province is required" })}
                  className={`w-full h-[75px] px-4 border ${errors.province ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                >
                  <option value="">Select a province</option>
                  {pakistanProvinces.map((province) => (
                    <option key={province.value} value={province.value}>
                      {province.label}
                    </option>
                  ))}
                </select>
                {errors.province && <p className="text-red-500 text-sm mt-1">{errors.province.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">ZIP code</label>
                <input 
                  {...register("zipCode", { required: "ZIP code is required" })}
                  type="text"
                  className={`w-full h-[75px] px-4 border ${errors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                />
                {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">Phone</label>
                <input 
                  {...register("phone", { required: "Phone is required" })}
                  type="tel"
                  className={`w-full h-[75px] px-4 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">Email address</label>
                <input 
                  {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })}
                  type="email"
                  className={`w-full h-[75px] px-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">Additional information</label>
                <textarea 
                  {...register("notes")}
                  className={`w-full h-[150px] px-4 py-4 border ${errors.notes ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div>
            <div className="bg-white p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl">Product</h3>
                <h3 className="text-xl">Subtotal</h3>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-gray-500 mb-4">
                  <span>{item.name} × {item.quantity}</span>
                  <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}

              <div className="flex justify-between items-center py-6 border-y">
                <span>Subtotal</span>
                <span>Rs. {getCartTotal().toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-6 border-b">
                <span>Total</span>
                <span className="text-[#B88E2F] text-2xl">Rs. {getCartTotal().toLocaleString()}</span>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <input 
                      type="radio" 
                      id="bank" 
                      name="payment" 
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={(e) => handlePaymentChange(e.target.value)}
                      className="accent-[#B88E2F]"
                    />
                    <label htmlFor="bank" className="font-medium">Direct Bank Transfer</label>
                  </div>
                  <p className="text-gray-500 text-sm ml-6">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    id="cash" 
                    name="payment" 
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => handlePaymentChange(e.target.value)}
                    className="accent-[#B88E2F]"
                  />
                  <label htmlFor="cash" className="font-medium">Cash On Delivery</label>
                </div>

                <p className="text-gray-500 text-sm">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                  <Link href="/privacy-policy" className="text-black hover:text-[#B88E2F]">
                    privacy policy
                  </Link>
                  .
                </p>

                <button 
                  type="submit"
                  className="w-full h-[75px] border-2 border-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <ConfirmationModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          router.push('/');
        }}
        message="Thank you for your order! Your order has been placed successfully."
      />
    </>
  );
};

export default CheckoutPage; 