"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import ConfirmationModal from '../Components/ConfirmationModal';

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    console.log('Form submitted:', data);
    setIsModalOpen(true);
    reset();
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[316px] flex items-center justify-center  ">
       <div className='pt-11 h-[520px]'>
       <div className="absolute inset-0 w-full h-full">
          <Image
            src="/image20.png"
            alt="Contact Banner"
            fill
            className="object-cover"
          />
        </div>
       </div>
        
        
        <div className="relative text-center z-10">
          <Image 
            src="/image19.png"
            alt="Logo" 
            width={60} 
            height={60} 
            className="mx-auto mb-4"
          />
          <h1 className="text-[48px] font-medium mb-2">Contact</h1>
          <div className="flex items-center justify-center gap-2">
            <Link href="/" className="text-[#000000] hover:text-[#B88E2F]">Home</Link>
            <span className="text-[#000000]">/</span>
            <span className="text-[#B88E2F]">Contact</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-medium mb-6">Get In Touch With Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto pb-16">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-4">Address</h3>
              <p className="text-gray-500">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Phone</h3>
              <p className="text-gray-500">
                Mobile: +(84) 546-6789<br />
                Hotline: +(84) 456-6789
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Working Time</h3>
              <p className="text-gray-500">
                Monday-Friday: 9:00 - 22:00<br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Your name</label>
                <input 
                  {...register("name", { 
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" }
                  })}
                  type="text"
                  placeholder="Abc"
                  className={`w-full h-[75px] px-4 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">Email address</label>
                <input 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { 
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  placeholder="Abc@def.com"
                  className={`w-full h-[75px] px-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">Subject</label>
                <input 
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  placeholder="This is an optional"
                  className={`w-full h-[75px] px-4 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea 
                  {...register("message", { 
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" }
                  })}
                  placeholder="Hi! I'd like to ask about"
                  className={`w-full h-[150px] px-4 py-4 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#B88E2F]`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                className="w-full h-[75px] bg-[#B88E2F] text-white rounded-lg font-medium hover:bg-[#a17928] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <section className="features-sec">
      <div className="features-sec__inner">
        <div className="features-sec__grid">
          <div className="cta-card">
            <h4 className="cta-card__heading">Free Delivery</h4>
            <p className="cta-card__discription">For all oders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="cta-card">
            <h4 className="cta-card__heading">90 Days Return</h4>
            <p className="cta-card__discription">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="cta-card">
            <h4 className="cta-card__heading">Secure Payment</h4>
            <p className="cta-card__discription">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </section>

    <ConfirmationModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      message="Your message has been sent successfully! We'll get back to you soon."
    />
    </>
  );
};

export default ContactPage;