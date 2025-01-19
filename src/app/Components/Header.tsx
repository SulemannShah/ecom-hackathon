"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartWindow from "./CartWindow";
import CartNotification from './CartNotification';
import CartPopup from './CartPopup';
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { resetCartCount, showPopup, setShowPopup } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (!isCartOpen) {
      resetCartCount(); // Reset cart count when opening cart
    }
  };

  return (
    <>
      <header className="w-full bg-[#FBEBB5] relative">
        <div className="header w-full mx-auto px-[30px]">
          <div className="header__inner flex flex-row justify-between py-[40px] gap-x-[154px] w-full max-w-[1280px] mx-auto xxs:gap-x-[0px]">
            <div className="header__logo-wrapper min-w-[120px] max-w-[185px] xxs:w-[120px]">
              <Image 
                src="/logo.png" 
                alt="logo"
                width={185}
                height={50}
                priority
              />
            </div>

            <div className="header__right flex flex-row gap-x-[70px] items-center w-fit md2:gap-x-[70px]">
              {/* Menu Button - Hidden on desktop, shown on mobile */}
              <button 
                onClick={toggleMenu} 
                className="header__menu-wrapper max-w-[25px] max-h-[25px] min-w-[25px] min-h-[25px] hidden xxs:flex cursor-pointer z-50"
              >
                <Image 
                  className="header__menu max-w-[28px] max-h[28px] md:hidden" 
                  src={isMenuOpen ? "/close.png" : "/menu.png"}
                  alt="menu"
                  width={28}
                  height={28}
                />
              </button>

              {/* Mobile Menu Overlay */}
              <div 
                className={`
                  fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
                  xxs:block md:hidden
                  ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `} 
                onClick={toggleMenu}
              />

              {/* Side Navigation Menu */}
              <div className={`
                fixed top-0 left-0 h-full w-[300px] bg-[#FBEBB5] shadow-lg
                transform transition-transform duration-300 ease-in-out z-40
                flex flex-col md:hidden
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
              `}>
                {/* Close Button */}
                <button 
                  onClick={toggleMenu}
                  className="absolute top-[20px] right-[20px] w-[28px] h-[28px] cursor-pointer"
                >
                  <Image 
                    src="/close.png" 
                    alt="close menu"
                    className="w-full h-full"
                    width={28}
                    height={28}
                  />
                </button>

                {/* Navigation Links */}
                <div className="header__nav flex flex-col gap-y-[30px] p-[30px] pt-[100px]">
                  <Link className="header__nav-links text-lg" href="/" onClick={toggleMenu}>Home</Link>
                  <Link className="header__nav-links text-lg" href="/Shop" onClick={toggleMenu}>Shop</Link>
                  <Link className="header__nav-links text-lg" href="/About" onClick={toggleMenu}>About</Link>
                  <Link className="header__nav-links text-lg" href="/Contact" onClick={toggleMenu}>Contact</Link>
                </div>

                {/* Mobile Icons */}
                <div className="header__icons-wrapper flex justify-center gap-x-[30px] p-[20px] mt-auto border-t border-[#00000020]">
                  <div className="header__icon-wrapper w-[28px] h-[28px]">
                    <Image 
                      className="header__icon w-full h-full block" 
                      src="/image8.png" 
                      alt="search"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="header__cartIcon-wrapper w-[28px] h-[28px] relative cursor-pointer" onClick={toggleCart}>
                    <CartNotification />
                    <CartPopup 
                      isVisible={showPopup} 
                      onHide={() => setShowPopup(false)} 
                    />
                    <Image 
                      className="header__cartIcon w-full h-full" 
                      src="/image9.png" 
                      alt="account"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="header__icon-wrapper w-[28px] h-[28px]">
                    <Image 
                      className="header__icon w-full h-full" 
                      src="/image10.png" 
                      alt="wishlist"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="header__icon-wrapper w-[28px] h-[28px]">
                    <Image 
                      className="header__icon w-full h-full" 
                      src="/image11.png" 
                      alt="cart"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="header__nav hidden md:flex gap-x-[70px] w-fit md2:gap-x-[50px]">
                <Link className="header__nav-links" href="/">Home</Link>
                <Link className="header__nav-links" href="/Shop">Shop</Link>
                <Link className="header__nav-links" href="/About">About</Link>
                <Link className="header__nav-links" href="/Contact">Contact</Link>
              </div>

              {/* Desktop Icons */}
              <div className="header__icons-wrapper hidden sm:flex flex-row gap-x-[47px] w-fit md2:gap-x-[30px]">
                <div className="header__icon-wrapper w-[28px] h-[28px]">
                  <Image 
                    className="header__icon w-full h-full block" 
                    src="/image8.png" 
                    alt="search"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="header__cartIcon-wrapper w-[28px] h-[28px] relative cursor-pointer" onClick={toggleCart}>
                  <CartNotification />
                  <CartPopup 
                    isVisible={showPopup} 
                    onHide={() => setShowPopup(false)} 
                  />
                  <Image 
                    className="header__cartIcon w-full h-full" 
                    src="/image9.png" 
                    alt="account"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="header__icon-wrapper w-[28px] h-[28px]">
                  <Image 
                    className="header__icon w-full h-full" 
                    src="/image10.png" 
                    alt="wishlist"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="header__icon-wrapper w-[28px] h-[28px]">
                  <Image 
                    className="header__icon w-full h-full" 
                    src="/image11.png" 
                    alt="cart"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CartWindow 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
}

export default Header;