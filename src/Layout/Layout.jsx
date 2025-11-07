import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from "../assets/Logo.png"

const Layout = () => {
  return (
    <div className="w-[1400px] flex flex-col m-auto">

      {/* header */}
      <div className="w-[1200px] m-auto h-[42px] flex flex-row mt-[70px] justify-between items-center">
        <img src={logo} alt="" className="s" />
        <div className="w-[420px] h-10 flex flex-row justify-between items-center">
          <Link htmlFor="" className="text-[16px] text-[#0A2640] font-600" to="/">Home</Link>
          <Link htmlFor="" className="text-[16px] text-[#0A2640] font-600" to="/Second_Page">
            Services
          </Link>
          <Link htmlFor="" className="text-[16px] text-[#0A2640] font-600" to="/Third_Page">About</Link>
          <Link htmlFor="" className="text-[16px] text-[#0A2640] font-600" to="/Last_Page">Blog</Link>
          <button className="w-[130px] h-10 rounded-3xl border-solid border-2 border-[#0A2640] text-[16px] text-[#0A2640] font-700">Log in</button>
        </div>
      </div>

      <Outlet />

      {/* footer */}
      <div className="w-[1400px] m-auto flex flex-col items-center mb-20">
        <div className="w-[1200px] h-[400px] bg-[#0A2640] m-auto flex flex-col justify-center items-center">
          <label htmlFor="" className="w-[720px] font-400 text-[48px] text-white text-center mb-14">
            An enterprise template to ramp up your company website
          </label>
          <div className="w-[600px] h-[60px] flex flex-row justify-between">
            <input type="text" placeholder='Your email address' className="w-[370px] h-[60px] bg-white font-400 text-[20px] rounded-[60px] pl-8 pt-3 pb-3" />
            <button className="w-[210px] h-[60px] rounded-[56px] bg-[#65E4A3] font-400 text-[20px] text-[#0A2640]">Start now</button>
          </div>
        </div>
      </div>
      <div className="w-[1400px] flex flex-row">
        <div className="w-[300px] flex flex-col mt-[100px] ml-[100px] mb-[100px] mr-[180px]">
          <img src={logo} alt="" className="w-[156px] h-[41px] mb-10" />
          <label htmlFor="" className="w-[300px] font-400 text-[16px] text-[#777777] mb-16">
            Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
          </label>
          <label htmlFor="" className="font-400 text-[16px] text-[#777777]">All rights reserved.</label>
        </div>
        <div className="w-[150px] flex flex-col mr-24 mt-[120px]">
          <label htmlFor="" className="font-700 text-[20px] mb-8">Landings</label>
          <label htmlFor="" className="font-400 text-[16px] text-[#777777] mb-[30px]">Home</label>
          <label htmlFor="" className="font-400 text-[16px] text-[#777777] mb-[30px]">Products</label>
          <label htmlFor="" className="font-400 text-[16px] text-[#777777]">Services</label>
        </div>
        <div className="w-[150px] flex flex-col mr-24 mt-[120px]">
          <label htmlFor="" className="font-700 text-[20px] mb-8">Company</label>
          <label htmlFor="" className="font-400 text-[16px] text-[#777777] mb-[30px]">Home</label>
          <label htmlFor="" className="font-400 text-[16px] text-[#777777] mb-[30px]">
            Careers
              <button
                className="w-[72px] h-[30px] font-700 text-[13px] text-[#0A2640] rounded-[56px] bg-[#65E4A3] ml-3"
              >Hiring!</button> 
          </label>
          <label htmlFor="" className="font-400 text-[16px] text-[#777777]">Services</label>
        </div>
        <div className="w-[150px] flex flex-col mt-[120px]">
          <label htmlFor="" className="font-700 text-[20px] mb-8">Resources</label>
          <label htmlFor="" className="font-400 text-[16px] text-[#777777] mb-[30px]">Blog</label>
          <label htmlFor="" className="font-400 text-[16px] text-[#777777] mb-[30px]">Prodycts</label>
          <label htmlFor="" className="font-400 text-[16px] text-[#777777]">Services</label>
        </div>
      </div>

    </div>
  )
}

export default Layout