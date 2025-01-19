"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { products } from '../data/products';
import ProductCard from '../Components/ProductCard';
import { useCart } from '../context/CartContext';

const ProductSingle = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('#816DFA');
  const [showAll, setShowAll] = useState(false);
  const [randomProducts, setRandomProducts] = useState<typeof products>([]);
  const { addToCart } = useCart();

  // Get product data from URL parameters
  const productId = searchParams.get('id');
  const productName = searchParams.get('name');
  const productPrice = searchParams.get('price');
  const productImage = searchParams.get('image');

  // Error handling for missing parameters
  useEffect(() => {
    if (!productId || !productName || !productPrice || !productImage) {
      router.push('/Shop'); // Redirect to shop if parameters are missing
    }
  }, [productId, productName, productPrice, productImage, router]);

  // Get random products excluding current product
  const getRandomProducts = () => {
    const otherProducts = products.filter(p => p.id !== Number(productId));
    // Use Fisher-Yates shuffle algorithm for better randomization
    for (let i = otherProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherProducts[i], otherProducts[j]] = [otherProducts[j], otherProducts[i]];
    }
    return otherProducts;
  };

  // Initialize random products
  useEffect(() => {
    setRandomProducts(getRandomProducts());
  }, [productId]);

  const toggleShowAll = () => {
    if (showAll) {
      // When hiding, get new random 4 products
      setRandomProducts(getRandomProducts());
    }
    setShowAll(!showAll);
  };

  const displayedProducts = showAll ? randomProducts : randomProducts.slice(0, 4);

  // Quantity handlers
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) { // Add maximum limit
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  // Size and Color handlers
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: Number(productId),
      name: productName || '',
      price: Number(productPrice),
      image: productImage || ''
    };
    
    addToCart(productToAdd, quantity);
  };

  return (
    <>
    <section className="Single-prod-sec lg:w-full  pt-6 pb-[50px] bg-white px-[30px]">
        <div className="Single-prod-sec__inner lg:w-full max-w-[1240px] mx-auto">
          <div className="Single-prod-sec__head lg:py-[50px] flex flex-row gap-x-[50px] text-[13px] mb-8">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link href="/Shop" className="hover:text-gray-600 transition-colors">
              Shop
            </Link>
            <span className="lg:pl-[50px] xxs:pl-[0]">{productName}</span>
          </div>
          
          <div className="Single-prod-cta grid  grid-cols-[620px_1fr] gap-0 pb-[55px]  xxs:grid-cols-1 gap-6 md:grid-cols-[620px_1fr] gap-0 ">
            <div className="Single-prod-cta__gallerylg: grid gap-[35px] rounded-[10px] xxs:grid-cols-1 xs2:grid-cols-2 xs2:grid-cols-[100px_1fr] md:gap-6">
              <div className="Single-prod-cta__gallery-left grid grid-cols-1 gap-[33px]  xxs:gap-[20px] grid-cols-2 pb-0 xs2:grid-cols-1 md:pb-[360px]">
                <div className=" w-full h-full bg-[#FFF9E5] flex justify-center">
                  <img className="Single-prod-cta__gallery-left-img w-[100px] h-[80px] object-cover rounded-[10px] cursor-pointer bg-[#FFF9E5]" src={productImage || ''} alt="" />
                </div>
                <div className=" w-full h-full bg-[#FFF9E5] flex justify-center">
                  <img className="Single-prod-cta__gallery-left-img w-[100px] h-[80px] object-cover rounded-[10px] cursor-pointer bg-[#FFF9E5]" src="image24.png" alt="" />
                </div>
                <div className=" w-full h-full bg-[#FFF9E5] flex justify-center">
                  <img className="Single-prod-cta__gallery-left-img w-[100px] h-[80px] object-cover rounded-[10px] cursor-pointer bg-[#FFF9E5]" src="image25.png" alt="" />
                </div>
                <div className=" w-full h-full bg-[#FFF9E5] flex justify-center">
                  <img className="Single-prod-cta__gallery-left-img w-[100px] h-[80px] object-cover rounded-[10px] cursor-pointer bg-[#FFF9E5]" src="image26.png" alt="" />
                </div>
              </div>
              
              <div className="Single-prod-cta__gallery-right h-[280px] bg-[#FFF9E5] flex flex-col justify-center items-center xxs: h-[300px] grid-cols-2 order-[-1] xs2:order-1 sm:h-full md:h-[580px] ">
                <div className="Single-prod-cta__gallery-right-img-wrapper  sm:w-[500px]">
                  <img className="Single-prod-cta__gallery-right-img h-full  object-cover rounded-[10px] sm:w-[500px]    " src={productImage || ''} alt=""  />
                </div>
              </div>
            </div>
            
            <div className="Single-prod-cta__content  grid grid-rows-[auto_auto_auto_auto_1fr] gap-[8px] pl-[100px] xxs:pl-0 md2:pl-[70px]">
              <h1 className="Single-prod-cta__prod-name text-[63px] leading-[1.2] text-black xxs:text-[36px]">{productName}</h1>
              <span className="Single-prod-cta__prod-price  text-[36px] text-[#9F9F9F] xxs:text-[18px]">{productPrice}</span>
              
              <div className="Single-prod-cta__ratings-wrapper flex items-center gap-[20px] xxs:gap-1 pt-2">
                <div className="Single-prod-cta__ratings-star-wrapper flex gap-[5px]">
                  <img className="Single-prod-cta__ratings-star" src="image22.png" alt="" />
                  <img className="Single-prod-cta__ratings-star" src="image22.png" alt="" />
                  <img className="Single-prod-cta__ratings-star" src="image22.png" alt="" />
                  <img className="Single-prod-cta__ratings-star" src="image22.png" alt="" />
                  <img className="Single-prod-cta__ratings-star" src="image21.png" alt="" />
                </div>
                <span className="Single-prod-cta__ratings text-[13px] text-[#666666] pl-[20px] border-l border-[#E8E8E8]">5 Customer Review</span>
              </div>
              
              <p className="Single-prod-cta__discription text-[13px] leading-[1.6] text-[#666666] py-[12px] w-[75%] xxs:w-full xs2:w-[80%]">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </p>
              
              <div className="Single-prod-cta__variants grid gap-[20px]">
                <div className="Single-prod-cta__size">
                  <span className="Single-prod-cta__label block text-[#666666] text-[14px] pb-[10px]">Size</span>
                  <div className="Single-prod-cta__size-options flex gap-[15px]">
                    {['L', 'XL', 'XS'].map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(size)}
                        className={`Single-prod-cta__size-btn px-[15px] py-[5px] rounded-[4px] cursor-pointer transition-all
                          ${selectedSize === size ? 'bg-[#FFF9E5]' : 'bg-transparent'} 
                          hover:bg-[#FFF9E5]`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="Single-prod-cta__color">
                  <span className="Single-prod-cta__label block text-[#666666] text-[14px] pb-[10px]">Color</span>
                  <div className="Single-prod-cta__color-options flex gap-[15px]">
                    {['#816DFA', '#000000', '#B88E2F'].map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorSelect(color)}
                        className={`w-8 h-8 rounded-full transition-transform
                          ${selectedColor === color ? 'scale-110 ring-2 ring-offset-2 ring-gray-300' : ''}
                          hover:scale-110`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="Single-prod-cta__purchase flex flex-col gap-[20px] pb-[35px] xxs:flex-row">
                  <div className="flex gap-8 items-center">
                    <div className="flex border border-[#9F9F9F] rounded">
                      <button 
                        className={`px-4 py-2 text-xl transition-opacity ${quantity <= 1 ? 'opacity-50' : ''}`}
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
                        className={`px-4 py-2 text-xl transition-opacity ${quantity >= 10 ? 'opacity-50' : ''}`}
                        onClick={increaseQuantity}
                        disabled={quantity >= 10}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={handleAddToCart}
                    className="px-7 py-[10px] border border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
                
                <hr className="Single-prod-cta__divider border-t border-[#E8E8E8] pb-[15px]" />
                
                <div className="Single-prod-cta__details grid gap-[15px]">
                  <div className="Single-prod-cta__detail-item grid grid-cols-[80px_10px_1fr] items-center">
                    <span className="Single-prod-cta__detail-label text-[#666666] text-[16px]">SKU</span>
                    <span className="Single-prod-cta__detail-colon text-[#666666]">:</span>
                    <span className="Single-prod-cta__detail-value text-[#666666] text-[14px]">SS001</span>
                  </div>
                  
                  <div className="Single-prod-cta__detail-item grid grid-cols-[80px_10px_1fr] items-center">
                    <span className="Single-prod-cta__detail-label text-[#666666] text-[16px]">Category</span>
                    <span className="Single-prod-cta__detail-colon text-[#666666]">:</span>
                    <span className="Single-prod-cta__detail-value text-[#666666] text-[14px]">Sofas</span>
                  </div>
                  
                  <div className="Single-prod-cta__detail-item grid grid-cols-[80px_10px_1fr] items-center">
                    <span className="Single-prod-cta__detail-label text-[#666666] text-[16px]">Tags</span>
                    <span className="Single-prod-cta__detail-colon text-[#666666]">:</span>
                    <span className="Single-prod-cta__detail-value text-[#666666] text-[14px]">Sofa, Chair, Home, Shop</span>
                  </div>
                  
                  <div className="Single-prod-cta__detail-item grid grid-cols-[80px_10px_1fr] items-center">
                    <span className="Single-prod-cta__detail-label text-[#666666] text-[16px]">Share</span>
                    <span className="Single-prod-cta__detail-colon text-[#666666]">:</span>
                    <div className="Single-prod-cta__social flex items-center gap-[20px] w-[60%]">
                      <a href="#" className="Single-prod-cta__social-link text-[#666666] no-underline min-w-[24px] min-height-[24px]">
                        <img src="image30.png" alt="" />
                      </a>
                      <a href="#" className="Single-prod-cta__social-link text-[#666666] no-underline min-w-[24px] min-height-[24px]">
                        <img src="image29.png" alt="" />
                      </a>
                      <a href="#" className="Single-prod-cta__social-link text-[#666666] no-underline min-w-[24px] min-height-[24px]">
                        <img src="image28.png" alt="" />
                      </a>
                      <button className="Single-prod-cta__wishlist border-none bg-transparent text-[#666666] cursor-pointer ml-auto pb-[4px] min-w-[24px] min-height-[32px]">
                        <img src="image31.png" alt="" />
                      </button>
                    </div>
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

      


   <section className="related-prod-sec pl-[30px] pr-[30px]">
   <div className="top-products-sec__inner flex w-full max-w-[1240px] mx-auto pt-[50px] pb-[70px] justify-center items-center flex-col gap-y-[72px]">
        <div className="top-products-sec__title-wrapper flex flex-col items-center gap-y-2 ">
          <h3 className="top-products-sec__heading text-[36px] text-center">Related Products</h3>
          
        </div>

        <div className="top-products-sec__products-grid grid grid-cols-4 gap-[30px] xxs:grid-cols-1 xs2:grid-cols-2 md:grid-cols-3 md2:grid-cols-4">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={toggleShowAll}
            className="text-[24px] font-medium"
          >
            {showAll ? 'Hide' : 'View More'}
          </button>
          <div className="w-[222px] h-[2px] bg-black"></div>
        </div>
      </div>
   </section> 
  
    </>
    
 )}
export default ProductSingle