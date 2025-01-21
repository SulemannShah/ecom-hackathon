"use client"

import React from "react";
import Header from "./Components/Header";
import Link from "next/link";

const Home = () => {
  return (
    <>
    

<section className="hero bg-[#FBEBB5] py-[113px] px-[30px]">
    <div className="hero__inner mx-auto w-full max-w-[1240px] grid grid-cols-1 xxs:gap-[20px] md:grid-cols-2 md2:grid-cols-[1fr_680px] ">
        
        <div className="hero__content-wrapper flex flex-col w-full h-full items-center justify-center md2:items-end ">
            <div className="hero__content flex flex-col items-center gap-[10px] md:items-start">
                <div className="hero__title-wrapper">
                    <h1 className="hero__title text-[35px] text-center max-w-[12ch] xs:text-[50px]  md:text-start  "> 
                        Rocket single seater
                    </h1>
                </div>
                <button className="btn-black text-[24px] font-medium text-black pb-[7px] border-b-2 border-black">
                    Shop Now
                </button>
            </div>
        </div>

        <div className="hero__media-wrapper flex  h-[270px] w-full justify-center xs:h-[400] md2:h-[680px] ">
            <img src="image1.png" className="hero__image w-[260px] h-full xs:w-[450]  md2:w-full " alt="" />
        </div>

    </div>
</section>



<section className="product-cards bg-[#FAF4F4] px-[30px] ">
      <div className="product-cards__inner grid grid-cols-2 max-w-[1240px] w-full  gap-x-4 mx-auto pt-20 pb-24 xxs:grid-cols-1 gap-[20px] sm:grid-cols-2">
        <div className="product-card ">
          <div className="product-card__media-wrapper pl-[60px]">
            <img src="image2.png" className="product-card__image w-[450px] h-[250px]" />
          </div>
          <div className="product-card__discription-wrapper flex flex-col ">
            <h3 className="product-card__title text-[25px] font-medium">Side Table</h3>
            <button className="btn-black max-w-[150px] px-3 py-4  ">
              View More
            </button>
          </div>
        </div>
        <div className="product-card">
          <div className="product-card__media-wrapper pl-[60px] " >
            <img src="image3.png" className="product-card__image w-[450px] h-[250px] " />
          </div>
          <div className="product-card__discription-wrapper flex flex-col ">
            <h3 className="product-card__title text-[25px] font-medium">Side Table</h3>
            <button className="btn-black max-w-[15px] px-3 py-4">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>


    <section className="top-products-sec px-[30px]">
      <div className="top-products-sec__inner flex w-full max-w-[1240px] mx-auto pt-[50px] pb-[70px] justify-center items-center flex-col gap-y-[72px]">
        <div className="top-products-sec__title-wrapper flex flex-col items-center gap-y-2 pb-[55px]">
          <h3 className="top-products-sec__heading text-[36px] text-center">Top Picks For You</h3>
          <p className="top-products-sec__discription text-center w-[85%]">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>

        <div className="top-products-sec__products-grid grid grid-cols-4 gap-x-[75px] xxs:grid-cols-1 xs2:grid-cols-2 gap-[30px] md:grid-cols-3 md2:grid-cols-4">
          <div className="product-cta flex flex-col gap-y-[40px] justify-between">
            <div className="product-cta__image-wrapper w-full h-[180px] flex justify-end pr-[40px]  ">
              <img className="product-cta__image w-[210px] h-[180px]" src="image6.png" alt="" />
            </div>
            <div className="product-cta__discription-wrapper flex flex-col gap-y-[5px] h-full justify-between w-4/5">
              <p className="product-cta__discription text-[16px]">Granite dining table with dining chair</p>
              <h4 className="product-cta__price text-[24px]">Rs. 25,000.00</h4>
            </div>
          </div>
          <div className="product-cta flex flex-col gap-y-[40px] justify-between">
            <div className="product-cta__image-wrapper w-full h-[180px] flex justify-end pr-[40px]">
              <img className="product-cta__image w-[210px] h-[180px]" src="image4.png" alt="" />
            </div>
            <div className="product-cta__discription-wrapper flex flex-col gap-y-[5px] h-full justify-between w-4/5">
              <p className="product-cta__discription text-[16px]">Granite dining table with dining chair</p>
              <h4 className="product-cta__price text-[24px]">Rs. 25,000.00</h4>
            </div>
          </div>
          <div className="product-cta flex flex-col gap-y-[40px] justify-between">
            <div className="product-cta__image-wrapper w-full h-[180px] flex justify-end pr-[40px]">
              <img className="product-cta__image w-[210px] h-[180px]" src="image5.png" alt="" />
            </div>
            <div className="product-cta__discription-wrapper flex flex-col gap-y-[5px] h-full justify-between w-4/5">
              <p className="product-cta__discription text-[16px]">Granite dining table with dining chair</p>
              <h4 className="product-cta__price text-[24px]">Rs. 25,000.00</h4>
            </div>
          </div>
          <div className="product-cta flex flex-col gap-y-[40px] justify-between">
            <div className="product-cta__image-wrapper w-full h-[180px] flex justify-end pr-[40px]">
              <img className="product-cta__image w-[210px] h-[180px]" src="image7.png" alt="" />
            </div>
            <div className="product-cta__discription-wrapper flex flex-col gap-y-[5px] h-full justify-between w-4/5">
              <p className="product-cta__discription text-[16px]">Outdoor bar table and stool</p>
              <h4 className="product-cta__price text-[24px]">Rs. 25,000.00</h4>
            </div>
          </div>
        </div>

        <Link href="/Shop" className="btn-black">View More</Link>
      </div>
    </section>


    <section className="new-arrival-sec bg-[#FFF9E5] w-full xxs:py-9 md:py-4">
      <div className="new-arrival-sec__inner grid grid-cols-[4fr_2fr] max-w-[2000px] w-full mx-auto  h-full lg:gap-[30px] xxs:grid-cols-1 gap-6 md:grid-cols-3 md:gap-0 ">
        <div className="new-arrival-sec__image-wrapper w-full xxs: h-[300px] xxs2:h-[350px] xs2:h-[400px] md:h-[450px] md:col-span-2 ">
          <img 
            className="new-arrival-sec__image ] w[100%] h-full  " 
            src="image12.png" 
            alt="" 
          />
        </div>
        <div className="new-arrival-sec__content-wrapper w-full flex flex-col justify-center xxs:items-start px-4 md:col-span-1 md:px-0">
          <div className="new-arrival-sec__content-wrapper">
            <h4 className="new-arrival-sec__accent-heading text-[20px] w-[10ch]">
              New Arrivals
            </h4>
            <h2 className="new-arrival-sec__heading xxs:text-[30px] w-[11ch] h-auto xxs2:text-[48px]">
              Asgaard sofa
            </h2>
            <button className="btn-outline-blog">Order Now</button>
          </div>
        </div>
      </div>
    </section>


<section className="blogs w-full py-20 bg-white">
  <div className="blogs__inner max-w-[1240px] mx-auto px-5 flex flex-col gap-[66px]">
    <div className="blogs__title-wrapper text-center">
      <h2 className="blogs-title text-3xl font-medium mb-3 text-black">Our Blogs</h2>
      <p className="blogs-subtitle text-base text-[#666666]">Find a bright ideal to suit your taste with our great selection</p>
    </div>

    <div className="blogs__grid grid grid-cols-3 gap-[30px] lg:grid-cols-3 xxs:grid-cols-1 sm:grid-cols-2 md2:grid-cols-3">
      <div className="blog-card flex flex-col">
        <div className="blog-card__image-wrapper w-full h-[270px] mb-6 overflow-hidden xs:h-[300px] md2:h-[390px] ">
          <img 
            className="blog-card__image w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" 
            src="image13.png" 
            alt="" 
          />
        </div>
        <div className="blog-card__content-wrapper flex flex-col gap-[5px] items-center">
          <p className="blog-card__content text-xl font-normal text-black mb-2 xxs:text-center">Going all-in with millennial design</p>
          <button className="btn-black-blog w-fit text-2xl text-black pb-[7px] border-b-2 border-black cursor-pointer bg-transparent xxs:text-[20px] md:text-[24px]">
            Read More
          </button>
          <div>
            <div className="blog-card__calender-wrapper flex gap-6 mt-2">
              <div className="blog-card__calender flex items-center gap-2 text-[#666666]">
                <span className="flex items-center">
                  <img className="w-4 h-4" src="image16.png"/>
                </span>
                <p className="text-sm text-black">5 min</p>
              </div>
              <div className="blog-card__calender flex items-center gap-2 text-[#666666]">
                <span className="flex items-center">
                  <img className="w-4 h-4" src="image17.png"/>
                </span>
                <p className="text-sm text-black">12th Oct 2022</p>
              </div>
            </div>      
          </div>
        </div>
      </div>

      <div className="blog-card flex flex-col">
        <div className="blog-card__image-wrapper w-full h-[270px] mb-6 overflow-hidden xs:h-[300px] md2:h-[390px] ">
          <img 
            className="blog-card__image w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" 
            src="image14.png" 
            alt="" 
          />
        </div>
        <div className="blog-card__content-wrapper flex flex-col gap-[5px] items-center">
          <p className="blog-card__content text-xl font-normal text-black mb-2 xxs:text-center">Going all-in with millennial design</p>
          <button className="btn-black-blog w-fit text-2xl text-black pb-[7px] border-b-2 border-black cursor-pointer bg-transparent xxs:text-[20px] md:text-[24px]">
            Read More
          </button>
          <div>
            <div className="blog-card__calender-wrapper flex gap-6 mt-2">
              <div className="blog-card__calender flex items-center gap-2 text-[#666666]">
                <span className="flex items-center">
                  <img className="w-4 h-4" src="image16.png"/>
                </span>
                <p className="text-sm text-black">5 min</p>
              </div>
              <div className="blog-card__calender flex items-center gap-2 text-[#666666]">
                <span className="flex items-center">
                  <img className="w-4 h-4" src="image17.png"/>
                </span>
                <p className="text-sm text-black">12th Oct 2022</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
      <div className="blog-card flex flex-col">
        <div className="blog-card__image-wrapper w-full h-[270px] mb-6 overflow-hidden xs:h-[300px] md2:h-[390px]">
          <img 
            className="blog-card__image w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" 
            src="image15.png" 
            alt="" 
          />
        </div>
        <div className="blog-card__content-wrapper flex flex-col gap-[5px] items-center">
          <p className="blog-card__content text-xl font-normal text-black mb-2 xxs:text-center">Going all-in with millennial design</p>
          <button className="btn-black-blog w-fit text-2xl text-black pb-[7px] border-b-2 border-black cursor-pointer bg-transparent xxs:text-[20px] md:text-[24px]">
            Read More
          </button>
          <div>
            <div className="blog-card__calender-wrapper flex gap-6 mt-2">
              <div className="blog-card__calender flex items-center gap-2 text-[#666666]">
                <span className="flex items-center">
                  <img className="w-4 h-4" src="image16.png"/>
                </span>
                <p className="text-sm text-black">5 min</p>
              </div>
              <div className="blog-card__calender flex items-center gap-2 text-[#666666]">
                <span className="flex items-center">
                  <img className="w-4 h-4" src="image17.png"/>
                </span>
                <p className="text-sm text-black">12th Oct 2022</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
      

      
    </div>

    <button className="btn-black-blog2 block mx-auto text-xl text-black pb-2 border-b-2 border-black cursor-pointer bg-transparent">
      View All Posts
    </button>
  </div>
</section>



<section className="contact-sec w-full h-full relative py-[136px] text-black">
  <div className="bg-image-wrapper w-full h-full absolute top-0 left-0 -z-10">
    <img src="image18.png" alt="" className="w-full h-full" />
  </div>
  
  <div className="contact-sec__inner max-w-[1240px] w-full mx-auto flex flex-col items-center">
    <div className="contact-sec__title-wrapper flex flex-col items-center">
      <h2 className="contact-sec-title text-[60px] font-semibold text-center xxs:text-[40px] w-[9ch]">Our Instagram</h2>
      <p className="contact-sec-subtitle">Follow our store on Instagram</p>
    </div>
    
    <div className="contact-sec__button-wrapper">
      <button className="btn-base py-[] mt-[15px] w-[280px] bg-white" id="bttn">Follow Us</button>
    </div>
  </div>
</section>

    
  </>
 )}
export default Home 