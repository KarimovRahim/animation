import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from "../assets/Logo.png"

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full lg:w-[1200px] 2xl:w-[1400px] flex flex-col m-auto px-4 lg:px-6 relative">

      {/* header */}
      <div className="w-full lg:w-[1000px] 2xl:w-[1200px] m-auto h-auto lg:h-[42px] flex flex-row mt-[40px] lg:mt-[60px] 2xl:mt-[70px] justify-between items-center">
        <img src={logo} alt="" className="w-32 lg:w-36 2xl:w-auto" />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:w-[380px] 2xl:w-[420px] h-10 flex-row justify-between items-center">
          <Link className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#0A2640] font-600 hover:text-[#65E4A3] transition-colors duration-300" to="/">Home</Link>
          <Link className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#0A2640] font-600 hover:text-[#65E4A3] transition-colors duration-300" to="/Second_Page">
            Services
          </Link>
          <Link className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#0A2640] font-600 hover:text-[#65E4A3] transition-colors duration-300" to="/Third_Page">About</Link>
          <Link className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#0A2640] font-600 hover:text-[#65E4A3] transition-colors duration-300" to="/Last_Page">Blog</Link>
          <button className="w-[110px] lg:w-[120px] 2xl:w-[130px] h-8 lg:h-9 2xl:h-10 rounded-3xl border-solid border-2 border-[#0A2640] text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#0A2640] font-700 hover:bg-[#0A2640] hover:text-white transition-colors duration-300">
            Log in
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-10 h-10 text-[#0A2640] text-2xl font-bold flex items-center justify-center"
          onClick={toggleMobileMenu}
        >
          =
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-4 py-6">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <img src={logo} alt="" className="w-32" />
            <button 
              className="w-10 h-10 text-[#0A2640] text-2xl font-bold flex items-center justify-center"
              onClick={closeMobileMenu}
            >
              ×
            </button>
          </div>
          
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-6 mb-8">
            <Link 
              className="text-[18px] text-[#0A2640] font-600 py-3 border-b border-gray-200 hover:text-[#65E4A3] transition-colors duration-300"
              to="/"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              className="text-[18px] text-[#0A2640] font-600 py-3 border-b border-gray-200 hover:text-[#65E4A3] transition-colors duration-300"
              to="/Second_Page"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              className="text-[18px] text-[#0A2640] font-600 py-3 border-b border-gray-200 hover:text-[#65E4A3] transition-colors duration-300"
              to="/Third_Page"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              className="text-[18px] text-[#0A2640] font-600 py-3 border-b border-gray-200 hover:text-[#65E4A3] transition-colors duration-300"
              to="/Last_Page"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </div>
          
          {/* Mobile Login Button */}
          <button className="w-full h-12 rounded-3xl border-solid border-2 border-[#0A2640] text-[16px] text-[#0A2640] font-700 hover:bg-[#0A2640] hover:text-white transition-colors duration-300 mb-4">
            Log in
          </button>
        </div>
      </div>

      <Outlet />

      {/* footer */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] m-auto flex flex-col items-center mb-10 lg:mb-16 2xl:mb-20">
        <div className="w-full lg:w-[1000px] 2xl:w-[1200px] h-auto lg:h-[350px] 2xl:h-[400px] bg-[#0A2640] m-auto flex flex-col justify-center items-center py-8 lg:py-0 px-4 lg:px-0">
          <label className="w-full lg:w-[600px] 2xl:w-[720px] font-400 text-[24px] lg:text-[32px] 2xl:text-[48px] text-white text-center mb-8 lg:mb-12 2xl:mb-14">
            An enterprise template to ramp up your company website
          </label>
          <div className="w-full lg:w-[500px] 2xl:w-[600px] h-auto lg:h-[50px] 2xl:h-[60px] flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
            <input 
              type="text" 
              placeholder='Your email address' 
              className="w-full lg:w-[300px] 2xl:w-[370px] h-[50px] lg:h-[55px] 2xl:h-[60px] bg-white font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] rounded-[60px] pl-6 lg:pl-8 pt-2 pb-2" 
            />
            <button className="w-full lg:w-[180px] 2xl:w-[210px] h-[50px] lg:h-[55px] 2xl:h-[60px] rounded-[56px] bg-[#65E4A3] font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#0A2640]">
              Start now
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] flex flex-col lg:flex-row px-4 lg:px-0">
        <div className="w-full lg:w-[250px] 2xl:w-[300px] flex flex-col mt-[40px] lg:mt-[80px] 2xl:mt-[100px] ml-0 lg:ml-[50px] 2xl:ml-[100px] mb-[40px] lg:mb-[80px] 2xl:mb-[100px] mr-0 lg:mr-[100px] 2xl:mr-[180px]">
          <img src={logo} alt="" className="w-[120px] lg:w-[140px] 2xl:w-[156px] h-[32px] lg:h-[36px] 2xl:h-[41px] mb-6 lg:mb-8 2xl:mb-10" />
          <label className="w-full lg:w-[250px] 2xl:w-[300px] font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777] mb-10 lg:mb-12 2xl:mb-16">
            Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
          </label>
          <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777]">All rights reserved.</label>
        </div>
        
        <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-8 lg:gap-12 2xl:gap-24">
          <div className="w-full lg:w-[120px] 2xl:w-[150px] flex flex-col mt-[20px] lg:mt-[80px] 2xl:mt-[120px]">
            <label className="font-700 text-[18px] lg:text-[19px] 2xl:text-[20px] mb-6 lg:mb-7 2xl:mb-8">Landings</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777] mb-[20px] lg:mb-[25px] 2xl:mb-[30px]">Home</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777] mb-[20px] lg:mb-[25px] 2xl:mb-[30px]">Products</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777]">Services</label>
          </div>
          
          <div className="w-full lg:w-[120px] 2xl:w-[150px] flex flex-col mt-[20px] lg:mt-[80px] 2xl:mt-[120px]">
            <label className="font-700 text-[18px] lg:text-[19px] 2xl:text-[20px] mb-6 lg:mb-7 2xl:mb-8">Company</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777] mb-[20px] lg:mb-[25px] 2xl:mb-[30px]">Home</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777] mb-[20px] lg:mb-[25px] 2xl:mb-[30px] flex items-center">
              Careers
              <button className="w-[60px] lg:w-[65px] 2xl:w-[72px] h-[24px] lg:h-[26px] 2xl:h-[30px] font-700 text-[11px] lg:text-[12px] 2xl:text-[13px] text-[#0A2640] rounded-[56px] bg-[#65E4A3] ml-2 lg:ml-3">
                Hiring!
              </button> 
            </label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777]">Services</label>
          </div>
          
          <div className="w-full lg:w-[120px] 2xl:w-[150px] flex flex-col mt-[20px] lg:mt-[80px] 2xl:mt-[120px] mb-10 lg:mb-0">
            <label className="font-700 text-[18px] lg:text-[19px] 2xl:text-[20px] mb-6 lg:mb-7 2xl:mb-8">Resources</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777] mb-[20px] lg:mb-[25px] 2xl:mb-[30px]">Blog</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777] mb-[20px] lg:mb-[25px] 2xl:mb-[30px]">Products</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777]">Services</label>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Layout