'use client'

import React from 'react';
import type { Product } from '../data/products';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      href={`/Product-Single?id=${product.id}&name=${product.name}&price=${product.price}&image=${product.image}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="pt-6 pb-6 pr-4 pl-4">
        <h3 className="text-base font-normal mb-2">{product.name}</h3>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-medium text-gray-900">
             {product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;



