"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from '../../../data/products';
import ProductCard from '../../Components/ProductCard';
import { useCart } from '../../../context/CartContext';

const ProductSingle = () => {
  const params = useParams();
  const { addToCart, getProductQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(params.id));

  // Update quantity when product changes
  useEffect(() => {
    if (product) {
      const cartQuantity = getProductQuantity(product.id);
      if (cartQuantity > 0) {
        setQuantity(cartQuantity);
      }
    }
  }, [product?.id]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }
  
  return (
    <>
    <section className="Single-prod-sec lg:w-full  pt-6 pb-[50px] bg-white px-[30px]">
        <div className="Single-prod-sec__inner lg:w-full max-w-[1240px] mx-auto">
          <div className="Single-prod-sec__head lg:py-[50px] flex flex-row gap-x-[50px] text-[13px] mb-8">
            <span>Home</span>
            <span>Shop</span>
            <span className="lg:pl-[50px] xxs:pl-[0]">{product.name}</span>
          </div>
          
          <div className="Single-prod-cta grid  grid-cols-[620px_1fr] gap-0 pb-[55px]  xxs:grid-cols-1 gap-6 md:grid-cols-[620px_1fr] gap-0 ">
            <div className="Single-prod-cta__gallerylg: grid gap-[35px] rounded-[10px] xxs:grid-cols-1 xs2:grid-cols-2 xs2:grid-cols-[100px_1fr] md:gap-6">
              <div className="Single-prod-cta__gallery-left grid grid-cols-1 gap-[33px]  xxs:gap-[20px] grid-cols-2 pb-0 xs2:grid-cols-1 md:pb-[360px]">
                <div className="w-full h-full bg-[#FFF9E5] flex justify-center">
                  <img className="Single-prod-cta__gallery-left-img w-[100px] h-[80px] object-cover rounded-[10px] cursor-pointer bg-[#FFF9E5]" src={product.image} alt="" />
                </div>
                <div className="w-full h-full bg-[#FFF9E5] flex justify-center">
                  <img className="Single-prod-cta__gallery-left-img w-[100px] h-[80px] object-cover rounded-[10px] cursor-pointer bg-[#FFF9E5]" src={product.image} alt="" />
                </div>
                <div className="w-full h-full bg-[#FFF9E5] flex justify-center">
                  <img className="Single-prod-cta__gallery-left-img w-[100px] h-[80px] object-cover rounded-[10px] cursor-pointer bg-[#FFF9E5]" src={product.image} alt="" />
                </div>
                <div className="w-full h-full bg-[#FFF9E5] flex justify-center">
                  <img className="Single-prod-cta__gallery-left-img w-[100px] h-[80px] object-cover rounded-[10px] cursor-pointer bg-[#FFF9E5]" src={product.image} alt="" />
                </div>
              </div>
              
              <div className="Single-prod-cta__gallery-right h-[280px] bg-[#FFF9E5] flex flex-col justify-center items-center xxs: h-[300px] grid-cols-2 order-[-1] xs2:order-1 sm:h-full md:h-[580px] ">
                <div className="Single-prod-cta__gallery-right-img-wrapper  sm:w-[500px]">
                  <img className="Single-prod-cta__gallery-right-img h-full  object-cover rounded-[10px] sm:w-[500px]" src={product.image} alt="" />
                </div>
              </div>
            </div>
            
            <div className="Single-prod-cta__content  grid grid-rows-[auto_auto_auto_auto_1fr] gap-[8px] pl-[100px] xxs:pl-0 md2:pl-[70px]">
              <h1 className="text-[48px] font-normal text-black mb-2">{product.name}</h1>
              <span className="text-[24px] text-[#9F9F9F] mb-4">{product.price}</span>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  <img src="/star-filled.png" alt="star" className="w-5 h-5" />
                  <img src="/star-filled.png" alt="star" className="w-5 h-5" />
                  <img src="/star-filled.png" alt="star" className="w-5 h-5" />
                  <img src="/star-filled.png" alt="star" className="w-5 h-5" />
                  <img src="/star-half.png" alt="star" className="w-5 h-5" />
                </div>
                <span className="text-sm text-[#666666] pl-4 border-l border-[#E8E8E8]">5 Customer Review</span>
              </div>
              
              <p className="text-base text-[#666666] leading-relaxed mb-8">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-[16px] text-[#666666] mb-4">Size</h3>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded bg-[#FFF9E5] hover:bg-[#FAF4F4] text-black">L</button>
                    <button className="w-10 h-10 rounded hover:bg-[#FAF4F4] text-black">XL</button>
                    <button className="w-10 h-10 rounded hover:bg-[#FAF4F4] text-black">XS</button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[16px] text-[#666666] mb-4">Color</h3>
                  <div className="flex gap-4">
                    <button className="w-8 h-8 rounded-full bg-[#816DFA]"></button>
                    <button className="w-8 h-8 rounded-full bg-black"></button>
                    <button className="w-8 h-8 rounded-full bg-[#B88E2F]"></button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex border border-[#9F9F9F] rounded">
                    <button 
                      className={`px-4 py-2 text-xl transition-opacity ${quantity <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input 
                      type="text" 
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-12 text-center border-x border-[#9F9F9F]" 
                    />
                    <button 
                      className={`px-4 py-2 text-xl transition-opacity ${quantity >= 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={increaseQuantity}
                      disabled={quantity >= 10}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={handleAddToCart}
                    className="px-7 py-[10px] border border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
                
                <hr className="my-8" />
                
                <div className="space-y-4 text-[#666666]">
                  <div className="flex gap-4">
                    <span className="w-20">SKU</span>
                    <span>:</span>
                    <span>SS001</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <span className="w-20">Category</span>
                    <span>:</span>
                    <span>Sofas</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <span className="w-20">Tags</span>
                    <span>:</span>
                    <span>Sofa, Chair, Home, Shop</span>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <span className="w-20">Share</span>
                    <span>:</span>
                    <div className="flex gap-4">
                      <a href="#" className="hover:opacity-80">
                        <img src="/facebook.png" alt="facebook" className="w-6 h-6" />
                      </a>
                      <a href="#" className="hover:opacity-80">
                        <img src="/linkedin.png" alt="linkedin" className="w-6 h-6" />
                      </a>
                      <a href="#" className="hover:opacity-80">
                        <img src="/twitter.png" alt="twitter" className="w-6 h-6" />
                      </a>
                    </div>
                    <button className="ml-auto">
                      <img src="/heart.png" alt="wishlist" className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="sec-divider" />
          
          <div className="single-prod__additional-info flex flex-col gap-[35px] pt-[50px] pb-[65px]">
            <div className="single-prod__additional-info-links-wrapper flex flex-row justify-center gap-x-[50px] xxs:gap-x-[0] grid grid-cols-2 xs:flex justify-between">
              <Link className="single-prod__additional-info-links text-[24px] text-[#9F9F9F] hover:text-black xxs:text-[14px]" href="/">Description</Link>
              <Link className="single-prod__additional-info-links text-[24px] text-[#9F9F9F] hover:text-black  xxs:text-[14px]" href="/Shop">Additional Information</Link>
              <Link className="single-prod__additional-info-links text-[24px] text-[#9F9F9F] hover:text-black  xxs:text-[14px]" href="/About">Reviews [5]</Link>
            </div>
            
            <div className="single-prod__additional-info-discription-wrapper flex flex-col gap-[35px]">
              <p className="single-prod__additional-info-discription text-[#9F9F9F] text-[16px]">
                Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </p>
              <p className="single-prod__additional-info-discription text-[#9F9F9F] text-[16px]">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            
            <div className="single-prod__additional-info-grid grid grid-cols-2 gap-x-[30px] xxs:grid-cols-1 gap-4 sm:grid-cols-2">
              <img src="image32.png" alt="" className="bg-[#FFF9E5] rounded-[10px] hover:scale-[1.02] transition-all duration-200 ease-in-out hover:shadow-[2px_3px_2px_-1px_rgba(0,0,0,0.15)]" />
              <img src="image33.png" alt="" className="bg-[#FFF9E5] rounded-[10px] hover:scale-[1.02] transition-all duration-200 ease-in-out hover:shadow-[2px_3px_2px_-1px_rgba(0,0,0,0.15)]" />
            </div>
          </div>
          
          <hr className="sec-divider"/>
        </div>
      </section>

      <section className="related-prod-sec pl-[30px] pr-[30px] ">
        <div className="top-products-sec__inner flex w-full max-w-[1240px] mx-auto pt-[50px] pb-[70px] justify-center items-center flex-col gap-y-[72px]">
          <div className="top-products-sec__title-wrapper flex flex-col items-center gap-y-2 ">
            <h3 className="top-products-sec__heading text-[36px] text-center">Related Products</h3>
          </div>

          <div className="top-products-sec__products-grid grid grid-cols-4 gap-x-[75px] xxs:grid-cols-1 xs2:grid-cols-2 gap-[30px] md:grid-cols-3 md2:grid-cols-4">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>

          <button className="btn-black">View More</button>
        </div>
      </section>
    </>
  );
}

export default ProductSingle; 