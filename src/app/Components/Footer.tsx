"use client"

import React , { useState} from "react";
import Link from "next/link";




const Footer = () => {
 
  return (
    <>
    
        
       
    <footer className="w-full h-full">
      <section className="footer-bravo w-full mx-auto px-[30px]">
        <div className="footer-bravo__inner w-full max-w-[1240px] mx-auto grid grid-cols-[2fr_4fr] gap-x-0 pb-[45px] pt-[100px] xxs:grid-cols-1 gap-10 md:grid-cols-[2fr_4fr]">
          <div className="footer-bravo__contact-wrapper w-full h-full flex flex-col gap-y-[30px] xxs:flex-col justify-center md2:justify-start md2: gap-y-[80px]">
            <img src="logo.png" alt="" className="max-w-[180px] max-h-[50px] " />
            <p className="footer-bravo__contact w-[100%] text-[#9F9F9F] md2:w-[70%] "> 
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          
          <div className="footer-bravo__right grid grid-cols-2 gap-[40px] xxs:grid-cols-1 xs2:grid-cols-2">
            <div className="footer-bravo__links-wrapper grid grid-cols-2 xs:flex flex-row gap-[40px] xs2:grid-cols-2 xs:grid">
              <div className="footer-bravo__link-wrapper flex flex-col gap-y-[57px] xxs:gap-6 md2:gap-y-[57px]">
                <h5 className="text-[#9F9F9F]">Links</h5>
                <div className="footer-bravo__wrapper flex flex-col gap-y-[45px] xxs:gap-4 md2:gap-[45px]">
                  
                    <Link className="footer-bravo__link font-medium" href="/">
                      Home
                    </Link>
                  
                  
                    <Link className="footer-bravo__link font-medium" href="/Shop">
                      Shop
                    </Link>
                  
                  
                    <Link className="footer-bravo__link font-medium" href="/About">
                      About
                    </Link>
                  
                  
                    <Link className="footer-bravo__link font-medium" href="/Contact">
                      Contact
                    </Link>
                  
                </div>
              </div>
              
              <div className="footer-bravo__link-wrapper flex flex-col gap-y-[57px] xxs:gap-6 md2:gap-y-[57px]">
                <h5 className="text-[#9F9F9F]">Help</h5>
                <div className="footer-bravo__wrapper flex flex-col gap-y-[45px] xxs:gap-4 md2:gap-y-[45px]">
                 
                    <Link className="footer-bravo__link font-medium" href="/Shop">
                      Payment Options
                    </Link>
                
                  
                    <Link className="footer-bravo__link font-medium" href="/About">
                      Returns
                    </Link>
                  
                  
                    <Link className="footer-bravo__link font-medium" href="/Contact">
                      Privacy Policies
                    </Link>
                  
                </div>
              </div>
            </div>
            
            <div className="footer-bravo__form-wrapper flex flex-col  xxs:gap-[20px] items-start md2:gap-y-[55px] ">
              <h5 className="text-[#9F9F9F]">Newsletter</h5>
              <form className="flex items-start xxs:flex flex-col justify-start  gap-3 float-left w-full md2:flex-row  ">
                <input 
                  type="text" 
                  placeholder="Enter Your Email Address" 
                  className="pb-[4px] border-b-[1px] border-b-black border-b-[1.5px] mr-[13px]"
                />
                <button className="btn-black sm:text-[17px] pb-[3px] xxs:text-[16px]">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-bottom w-full px-[30px]">
        <div className="footer-bottom__inner w-full max-w-[1240px] mx-auto py-[35px] border-t border-[#D9D9D9]">
          <p className="footer-bottom__discription">
            2022 Meubel House. All rights reverved
          </p>
        </div>
      </section>
    </footer>

    </>
    
 )}
export default Footer