import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import ResponsiveNav from './ResponsiveNav'

const Header = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  return (
    <div className='bg-gradient-to-r from-[#08132f] to-[#0c2b59] text-[#fff] sticky top-0 z-20'>
      <div className='flex w-[95%] mx-auto justify-center items-center  py-4'>
      {/* <Logo/>  gap-[33%] */}
      <Navbar scrollToSection={scrollToSection} isScrolled={isScrolled}/>
      {/* <div className='max-md:hidden'>Call logo</div> */}
      <ResponsiveNav scrollToSection={scrollToSection} isScrolled={isScrolled}/>
      </div>
      </div>
  )
}

export default Header