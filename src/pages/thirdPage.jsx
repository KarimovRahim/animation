import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


import av1 from "../assets/av1.png"
import av2 from "../assets/av2.png"
import av3 from "../assets/av3.png"

const ThirdPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="w-[1400px]">
      <div className="w-[1400px] h-[480px] flex flex-row items-center bg-[#65E4A3]">
        <div className="flex flex-row items-center">
          <div data-aos="fade-right" data-aos-delay="300" className="flex flex-col mr-[100px] md-[170px]">
            <label htmlFor="" className="font-400 text-[20px] ml-[100px] mb-[15px]">About</label>
            <label htmlFor="" className="w-[600px] font-400 text-[48px] ml-[100px] mb-5">
              We love to make great things, things that matter.
            </label>
          </div>
          <label data-aos="fade-left" data-aos-delay="400" htmlFor="" className="w-[455px] font-400 text-[16px]">
            Funding handshake buyer business-to-business metrics iPad <br /> partnership. First mover advantage innovator success <br /> deployment non-disclosure.
          </label>
        </div>
      </div>
      <div className="w-[1400px] flex flex-col items-center mb-[100px]">
        <label data-aos="fade-down" data-aos-delay="300" htmlFor="" className="mt-[100px] font-400 text-[20px] text-[#0A2640]">Our numbers</label>
        <label data-aos="fade-down" data-aos-delay="400" htmlFor="" className="w-[840px] font-400 text-[48px] text-[#0A2640] text-center mt-3 mb-[82px]">
          Handshake infographic mass market crowdfunding iteration.
        </label>
        <div className="w-[1000px] m-auto flex flex-row justify-between">
          <div data-aos="zoom-in" data-aos-delay="500" className="flex flex-col">
            <label htmlFor="" className="font-400 text-[96px] text-[#0A2640]">120m</label>
            <label htmlFor="" className="font-400 text-[24px] text-[#0A2640] mb-[100px]">Cool feature title</label>
          </div>
          <div data-aos="zoom-in" data-aos-delay="600" className="flex flex-col">
            <label htmlFor="" className="font-400 text-[96px] text-[#0A2640]">10.000</label>
            <label htmlFor="" className="font-400 text-[24px] text-[#0A2640] mb-[100px]">Cool feature title</label>
          </div>
          <div data-aos="zoom-in" data-aos-delay="700" className="flex flex-col">
            <label htmlFor="" className="font-400 text-[96px] text-[#0A2640]">240</label>
            <label htmlFor="" className="font-400 text-[24px] text-[#0A2640]">Cool feature title</label>
          </div>
        </div>
      </div>
      <div className="w-[1400px] h-[600px] flex flex-row bg-[#0A2640]">
        <div data-aos="fade-up" data-aos-delay="300" className="w-[800px] flex flex-col m-auto mt-[120px]">
          <label htmlFor="" className="font-400 text-[20px] text-[#F1F1F1]"> Our story</label>
          <label htmlFor="" className="w-[800px] font-400 text-[48px] text-white mt-3">
            Handshake infographic mass market <br /> crowdfunding iteration.
          </label>
          <label htmlFor="" className="w-[800px] font-400 text-[20px] text-[#F1F1F1] mt-[30px] mb-[100px]">
            Conversion angel investor entrepreneur first mover advantage. Handshake <br /> infographic mass market crowdfunding iteration. Traction stock user experience <br /> deployment beta innovator incubator focus. Sales user experience branding growth <br /> hacking holy grail monetization conversion prototype stock network effects. Learning <br /> curve network effects return on investment bootstrapping business-to-consumer.
          </label>
        </div>
      </div>
      <div className="w-[1000px] flex flex-col m-auto items-center">
        <div data-aos="fade-right" data-aos-delay="300" className="w-[800px] flex flex-col mt-[120px]">
          <label htmlFor="" className="font-400 text-[20px] text-[#777777] mb-3">Our team</label>
          <label htmlFor="" className="font-400 text-[72px] mb-[23px]">The leadership team</label>
          <label htmlFor="" className="w-[750px] font-400 text-[20px] text-[#777777] mb-[52px]">
            Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. 
          </label>
        </div>
        <div className="w-[1000px] flex flex-row justify-between mb-[120px]">
          <div data-aos="flip-up" data-aos-delay="400" className="w-[300px] flex flex-col">
            <img src={av1} alt="" className="w-[300px] h-[350px] rounded-3xl mb-8" />
            <label htmlFor="" className="font-400 text-[28px] mb-3">Michael Scott</label>
            <label htmlFor="" className="font-400 text-[20px] text-[#777777]">General Manager</label>
          </div>
          <div data-aos="flip-up" data-aos-delay="500" className="w-[300px] flex flex-col">
            <img src={av1} alt="" className="w-[300px] h-[350px] rounded-3xl mb-8" />
            <label htmlFor="" className="font-400 text-[28px] mb-3">Michael Scott</label>
            <label htmlFor="" className="font-400 text-[20px] text-[#777777]">General Manager</label>
          </div>
          <div data-aos="flip-up" data-aos-delay="600" className="w-[300px] flex flex-col">
            <img src={av1} alt="" className="w-[300px] h-[350px] rounded-3xl mb-8" />
            <label htmlFor="" className="font-400 text-[28px] mb-3">Michael Scott</label>
            <label htmlFor="" className="font-400 text-[20px] text-[#777777]">General Manager</label>
          </div>
        </div>
        <div className="w-[1200px] flex flex-row mb-[120px]">
          <div data-aos="fade-right" data-aos-delay="400" className="w-[400px] h-[120px] flex flex-row gap-6">
            <img src={av1} alt="" className="w-[120px] h-[120px] rounded-3xl" />
            <div className="h-[90px] flex flex-col justify-between">
              <label htmlFor="" className="text-[28px]">Michael Scott</label>
              <label htmlFor="" className="text-[20px] text-[#777777]">General Manager</label>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="w-[400px] h-[120px] flex flex-row gap-6">
            <img src={av2} alt="" className="w-[120px] h-[120px] rounded-3xl" />
            <div className="h-[90px] flex flex-col justify-between">
              <label htmlFor="" className="text-[28px]">Michael Scott</label>
              <label htmlFor="" className="text-[20px] text-[#777777]">General Manager</label>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="600" className="w-[400px] h-[120px] flex flex-row gap-6">
            <img src={av3} alt="" className="w-[120px] h-[120px] rounded-3xl" />
            <div className="h-[90px] flex flex-col justify-between">
              <label htmlFor="" className="text-[28px]">Michael Scott</label>
              <label htmlFor="" className="text-[20px] text-[#777777]">General Manager</label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1400px] mb-[120px] flex flex-col bg-[#0A2640] m-auto">
        <div data-aos="fade-down" data-aos-delay="300" className="w-[842px] flex flex-col items-center mt-[100px] m-auto border-b-solid border-b-white border-b-2">
          <label htmlFor="" className="text-[20px] text-white text-center mb-3">Our Blog</label>
          <label htmlFor="" className="text-[48px] text-white text-center mb-16">
            Value proposition accelerator product management venture
          </label>
        </div>
        <div className="w-[1100px] flex flex-col mt-[84px] gap-20 m-auto mb-[120px]">
          <div data-aos="fade-right" data-aos-delay="400" className="w-[1100px] h-[130px] flex flex-row justify-between">
            <label htmlFor="" className="text-[48px] text-white">We aim for <span className="text-[#69E6A6]">progress.</span></label>
            <label htmlFor="" className="w-[510px] text-white text-[20px]">
              Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. 
            </label>
          </div>
          <div data-aos="fade-right" data-aos-delay="500" className="w-[1100px] h-[130px] flex flex-row justify-between">
            <label htmlFor="" className="text-[48px] text-white">We aim for <span className="text-[#69E6A6]">progress.</span></label>
            <label htmlFor="" className="w-[510px] text-white text-[20px]">
              Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. 
            </label>
          </div>
          <div data-aos="fade-right" data-aos-delay="600" className="w-[1100px] h-[130px] flex flex-row justify-between">
            <label htmlFor="" className="text-[48px] text-white">We aim for <span className="text-[#69E6A6]">progress.</span></label>
            <label htmlFor="" className="w-[510px] text-white text-[20px]">
              Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. 
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage