"use client"

import React from "react";
import Link from "next/link";


const Contact = () => {
  
  return (
    <>
    <section className="Single-prod-sec lg:w-full  pt-6 pb-[50px] bg-white px-[30px]">
        <div className="Single-prod-sec__inner lg:w-full max-w-[1240px] mx-auto">
          <div className="Single-prod-sec__head lg:py-[50px] flex flex-row gap-x-[50px] text-[13px] mb-8">
            <span>Home</span>
            <span>Shop</span>
            <span className="lg:pl-[50px] xxs:pl-[0]">Asgaard Sofa</span>
          </div>
          
          <div className="Single-prod-cta grid  grid-cols-[620px_1fr] gap-0 pb-[55px]  xxs:grid-cols-1 gap-6 md:grid-cols-[620px_1fr] gap-0 ">
            <div className="Single-prod-cta__gallerylg: grid gap-[35px] rounded-[10px] xxs:grid-cols-1 xs2:grid-cols-2 xs2:grid-cols-[100px_1fr] md:gap-6">
              <div className="Single-prod-cta__gallery-left grid grid-cols-1 gap-[33px]  xxs:gap-[20px] grid-cols-2 pb-0 xs2:grid-cols-1 md:pb-[360px]">
                <div className=" w-full h-full bg-[#FFF9E5] flex justify-center">
                  <img className="Single-prod-cta__gallery-left-img w-[100px] h-[80px] object-cover rounded-[10px] cursor-pointer bg-[#FFF9E5]" src="image23.png" alt="" />
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
                  <img className="Single-prod-cta__gallery-right-img h-full  object-cover rounded-[10px] sm:w-[500px]    " src="image27.png" alt=""  />
                </div>
              </div>
            </div>
            
            <div className="Single-prod-cta__content  grid grid-rows-[auto_auto_auto_auto_1fr] gap-[8px] pl-[100px] xxs:pl-0 md2:pl-[70px]">
              <h1 className="Single-prod-cta__prod-name text-[63px] leading-[1.2] text-black xxs:text-[36px]">Asgaard sofa</h1>
              <span className="Single-prod-cta__prod-price  text-[36px] text-[#9F9F9F] xxs:text-[18px]">Rs. 250,000.00</span>
              
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
                  <span className="Single-prod-cta__label block  text-[#666666] text-[14px] pb-[10px]">Size</span>
                  <div className="Single-prod-cta__size-options flex gap-[15px]">
                    <button className="Single-prod-cta__size-btn px-[15px] py-[5px] bg-transparent border-none rounded-[4px] cursor-pointer hover:bg-[#FFF9E5]">L</button>
                    <button className="Single-prod-cta__size-btn px-[15px] py-[5px] bg-transparent border-none rounded-[4px] cursor-pointer hover:bg-[#FFF9E5]">XL</button>
                    <button className="Single-prod-cta__size-btn px-[15px] py-[5px] bg-transparent border-none rounded-[4px] cursor-pointer hover:bg-[#FFF9E5]">XS</button>
                  </div>
                </div>
                
                <div className="Single-prod-cta__color">
                  <span className="Single-prod-cta__label block text-[#666666] text-[14px] pb-[10px]">Color</span>
                  <div className="Single-prod-cta__color-options flex gap-[15px]">
                    <button className="Single-prod-cta__color-btn w-[30px] h-[30px] border-none rounded-full cursor-pointer bg-[#816DFA]"></button>
                    <button className="Single-prod-cta__color-btn w-[30px] h-[30px] border-none rounded-full cursor-pointer bg-black"></button>
                    <button className="Single-prod-cta__color-btn w-[30px] h-[30px] border-none rounded-full cursor-pointer bg-[#B88E2F]"></button>
                  </div>
                </div>
                
                <div className="Single-prod-cta__purchase grid grid-cols-[auto_1fr] gap-[20px] pb-[35px] xxs:grid-cols-1">
                  <div className="Single-prod-cta__quantity grid grid-cols-[40px_40px_40px] border border-[#E8E8E8] rounded-[4px] w-fit">
                    <button className="Single-prod-cta__quantity-btn h-[40px] border-none bg-transparent cursor-pointer">-</button>
                    <input type="text" className="Single-prod-cta__quantity-input h-[40px] border-none text-center border-l border-r border-[#E8E8E8]" />
                    <button className="Single-prod-cta__quantity-btn h-[40px] border-none bg-transparent cursor-pointer">+</button>
                  </div>
                  <button className="Single-prod-cta__add-btn px-[35px] h-[40px] border border-black rounded-[4px] bg-transparent cursor-pointer justify-self-start">Add To Cart</button>
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

      


   <section className="related-prod-sec pl-[30px] pr-[30px] ">
   <div className="top-products-sec__inner flex w-full max-w-[1240px] mx-auto pt-[50px] pb-[70px] justify-center items-center flex-col gap-y-[72px]">
        <div className="top-products-sec__title-wrapper flex flex-col items-center gap-y-2 ">
          <h3 className="top-products-sec__heading text-[36px] text-center">Related Products</h3>
          
        </div>

        <div className="top-products-sec__products-grid grid grid-cols-4 gap-x-[75px] xxs:grid-cols-1 xs2:grid-cols-2 gap-[30px] md:grid-cols-3 md2:grid-cols-4">
        <div className="product-cta flex flex-col gap-y-[40px] justify-between">
            <div className="product-cta__image-wrapper w-full h-[180px] flex justify-end pl-[40px]  ">
              <img className="product-cta__image w-[210px] h-[180px]" src="image4.png" alt="" />
            </div>
            <div className="product-cta__discription-wrapper flex flex-col gap-y-[5px] h-full justify-between w-4/5">
              <p className="product-cta__discription text-[16px]">Granite dining table with dining chair</p>
              <h4 className="product-cta__price text-[24px]">Rs. 25,000.00</h4>
            </div>
          </div>
          <div className="product-cta flex flex-col gap-y-[40px] justify-between">
            <div className="product-cta__image-wrapper w-full h-[180px] flex justify-end pl-[40px]">
              <img className="product-cta__image w-[210px] h-[180px]" src="image4.png" alt="" />
            </div>
            <div className="product-cta__discription-wrapper flex flex-col gap-y-[5px] h-full justify-between w-4/5">
              <p className="product-cta__discription text-[16px]">Granite dining table with dining chair</p>
              <h4 className="product-cta__price text-[24px]">Rs. 25,000.00</h4>
            </div>
          </div>
          <div className="product-cta flex flex-col gap-y-[40px] justify-between">
            <div className="product-cta__image-wrapper w-full h-[180px] flex justify-end pl-[40px]">
              <img className="product-cta__image w-[210px] h-[180px]" src="image4.png" alt="" />
            </div>
            <div className="product-cta__discription-wrapper flex flex-col gap-y-[5px] h-full justify-between w-4/5">
              <p className="product-cta__discription text-[16px]">Granite dining table with dining chair</p>
              <h4 className="product-cta__price text-[24px]">Rs. 25,000.00</h4>
            </div>
          </div>
          <div className="product-cta flex flex-col gap-y-[40px] justify-between">
            <div className="product-cta__image-wrapper w-full h-[180px] flex justify-end pl-[40px]">
              <img className="product-cta__image w-[210px] h-[180px]" src="image6.png" alt="" />
            </div>
            <div className="product-cta__discription-wrapper flex flex-col gap-y-[5px] h-full justify-between w-4/5">
              <p className="product-cta__discription text-[16px]">Outdoor bar table and stool</p>
              <h4 className="product-cta__price text-[24px]">Rs. 25,000.00</h4>
            </div>
          </div> 
        </div>

        <button className="btn-black">View More</button>
      </div>
   </section> 
  
    </>
    
 )}
export default Contact