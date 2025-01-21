"use client"

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const ConfirmationModal = ({ isOpen, onClose, message }: ConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg z-50 w-[90%] max-w-[400px] shadow-xl">
        <div className="text-center">
          <FaCheckCircle className="text-[#B88E2F] text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-medium mb-4">Order Confirmed!</h3>
          <p className="text-gray-600 mb-6">{message}</p>
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-[#a17928] transition-colors w-full"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal; 