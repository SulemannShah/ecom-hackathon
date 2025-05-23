"use client"

import React, { useState } from "react";
import ProductCard from '../Components/ProductCard';
import { products } from '../data/products';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Pagination from '../Components/Pagination';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  
  // Calculate total pages and ranges
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate the display ranges for "Showing X-Y of Z results"
  const startRange = indexOfFirstProduct + 1;
  const endRange = Math.min(indexOfLastProduct, products.length);
  const totalProducts = products.length;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <section className="cta-sec">
      <div className="cta-sec__inner">
        <div className="cta-sec-image-wrapper">
          <img className="cta-sec-image-wrapper"src="image20.png" alt="" />
        </div>
        <div className="cta-sec__banner">
           <div className="cta-sec__logo-wrapper">
            <img className="cta-sec__logo" src="image19.png" alt="" />
           </div>
           <h2 className="cta-sec__heading">Shop</h2>
           <p>Home  shop</p>
        </div>
      </div>
    </section>

    <section className="all-products-head">
      <div className="all-products-sec__top">
        <div className="all-products-sec__left">
          <button className="filter-btn">
            <span className="filter-icon">☰</span>
            Filter
          </button>
          <button className="view-btn grid-view">
            <span className="grid-icon">⋮⋮</span>
          </button>
          <button className="view-btn list-view">
            <span className="list-icon">≡</span>
          </button>
          <span className="separator">|</span>
          <span className="results-text">
            Showing {startRange}-{endRange} of {totalProducts} results
          </span>
        </div>
        <div className="all-products-sec__right">
          <div className="show-wrapper">
            <label>Show</label>
            <select id="show-select" className="show-select">
              <option value="16">16</option>
            </select>
          </div>
          
          <div className="sort-wrapper">
            <label>Short by</label>
            <select id="sort-select" className="sort-select">
              <option value="default">Default</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <section className="all-products-sec pt-12">
      <div className="all-products-sec__inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {currentProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>

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
    </>
  )
}

export default Shop