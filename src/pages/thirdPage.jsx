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
    <div className="w-full lg:w-[1200px] 2xl:w-[1400px] px-4 lg:px-6">
      {/* Hero Section */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] h-auto lg:h-[400px] 2xl:h-[480px] flex flex-col lg:flex-row items-center bg-[#65E4A3] py-8 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 w-full">
          <div data-aos="fade-right" data-aos-delay="300" className="flex flex-col mr-0 lg:mr-[80px] 2xl:mr-[100px] w-full lg:w-auto">
            <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] ml-0 lg:ml-[50px] 2xl:ml-[100px] mb-[10px] lg:mb-[15px] text-center lg:text-left">About</label>
            <label className="w-full lg:w-[500px] 2xl:w-[600px] font-400 text-[28px] lg:text-[36px] 2xl:text-[48px] ml-0 lg:ml-[50px] 2xl:ml-[100px] mb-4 lg:mb-5 text-center lg:text-left">
              We love to make great things, things that matter.
            </label>
          </div>
          <label data-aos="fade-left" data-aos-delay="400" className="w-full lg:w-[400px] 2xl:w-[455px] font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-center lg:text-left">
            Funding handshake buyer business-to-business metrics iPad <br className="hidden lg:block" /> partnership. First mover advantage innovator success <br className="hidden lg:block" /> deployment non-disclosure.
          </label>
        </div>
      </div>

      {/* Numbers Section */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] flex flex-col items-center mb-[60px] lg:mb-[80px] 2xl:mb-[100px]">
        <label data-aos="fade-down" data-aos-delay="300" className="mt-[60px] lg:mt-[80px] 2xl:mt-[100px] font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#0A2640]">Our numbers</label>
        <label data-aos="fade-down" data-aos-delay="400" className="w-full lg:w-[700px] 2xl:w-[840px] font-400 text-[28px] lg:text-[36px] 2xl:text-[48px] text-[#0A2640] text-center mt-2 lg:mt-3 mb-[40px] lg:mb-[60px] 2xl:mb-[82px] px-4">
          Handshake infographic mass market crowdfunding iteration.
        </label>
        <div className="w-full lg:w-[900px] 2xl:w-[1000px] m-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-4">
          <div data-aos="zoom-in" data-aos-delay="500" className="flex flex-col items-center lg:items-start">
            <label className="font-400 text-[60px] lg:text-[80px] 2xl:text-[96px] text-[#0A2640]">120m</label>
            <label className="font-400 text-[18px] lg:text-[20px] 2xl:text-[24px] text-[#0A2640] mb-[40px] lg:mb-[60px] 2xl:mb-[100px] text-center lg:text-left">Cool feature title</label>
          </div>
          <div data-aos="zoom-in" data-aos-delay="600" className="flex flex-col items-center lg:items-start">
            <label className="font-400 text-[60px] lg:text-[80px] 2xl:text-[96px] text-[#0A2640]">10.000</label>
            <label className="font-400 text-[18px] lg:text-[20px] 2xl:text-[24px] text-[#0A2640] mb-[40px] lg:mb-[60px] 2xl:mb-[100px] text-center lg:text-left">Cool feature title</label>
          </div>
          <div data-aos="zoom-in" data-aos-delay="700" className="flex flex-col items-center lg:items-start">
            <label className="font-400 text-[60px] lg:text-[80px] 2xl:text-[96px] text-[#0A2640]">240</label>
            <label className="font-400 text-[18px] lg:text-[20px] 2xl:text-[24px] text-[#0A2640] text-center lg:text-left">Cool feature title</label>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] h-auto lg:h-[500px] 2xl:h-[600px] flex flex-row bg-[#0A2640] py-8 lg:py-0">
        <div data-aos="fade-up" data-aos-delay="300" className="w-full lg:w-[700px] 2xl:w-[800px] flex flex-col m-auto mt-0 lg:mt-[80px] 2xl:mt-[120px] px-4 lg:px-0">
          <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#F1F1F1]">Our story</label>
          <label className="w-full lg:w-[700px] 2xl:w-[800px] font-400 text-[28px] lg:text-[36px] 2xl:text-[48px] text-white mt-2 lg:mt-3">
            Handshake infographic mass market <br className="hidden lg:block" /> crowdfunding iteration.
          </label>
          <label className="w-full lg:w-[700px] 2xl:w-[800px] font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#F1F1F1] mt-[20px] lg:mt-[25px] 2xl:mt-[30px] mb-[40px] lg:mb-[60px] 2xl:mb-[100px]">
            Conversion angel investor entrepreneur first mover advantage. Handshake <br className="hidden lg:block" /> infographic mass market crowdfunding iteration. Traction stock user experience <br className="hidden lg:block" /> deployment beta innovator incubator focus. Sales user experience branding growth <br className="hidden lg:block" /> hacking holy grail monetization conversion prototype stock network effects. Learning <br className="hidden lg:block" /> curve network effects return on investment bootstrapping business-to-consumer.
          </label>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full lg:w-[900px] 2xl:w-[1000px] flex flex-col m-auto items-center">
        <div data-aos="fade-right" data-aos-delay="300" className="w-full lg:w-[700px] 2xl:w-[800px] flex flex-col mt-[60px] lg:mt-[80px] 2xl:mt-[120px] px-4 lg:px-0">
          <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777] mb-2 lg:mb-3">Our team</label>
          <label className="font-400 text-[36px] lg:text-[48px] 2xl:text-[72px] mb-[15px] lg:mb-[20px] 2xl:mb-[23px] text-center lg:text-left">The leadership team</label>
          <label className="w-full lg:w-[650px] 2xl:w-[750px] font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777] mb-[30px] lg:mb-[40px] 2xl:mb-[52px] text-center lg:text-left">
            Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. 
          </label>
        </div>
        <div className="w-full lg:w-[900px] 2xl:w-[1000px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 mb-[60px] lg:mb-[80px] 2xl:mb-[120px] px-4 lg:px-0">
          <div data-aos="flip-up" data-aos-delay="400" className="w-full lg:w-[250px] 2xl:w-[300px] flex flex-col items-center lg:items-start">
            <img src={av1} alt="" className="w-full lg:w-[250px] 2xl:w-[300px] h-[250px] lg:h-[300px] 2xl:h-[350px] rounded-3xl mb-6 lg:mb-8" />
            <label className="font-400 text-[22px] lg:text-[24px] 2xl:text-[28px] mb-2 lg:mb-3 text-center lg:text-left">Michael Scott</label>
            <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777] text-center lg:text-left">General Manager</label>
          </div>
          <div data-aos="flip-up" data-aos-delay="500" className="w-full lg:w-[250px] 2xl:w-[300px] flex flex-col items-center lg:items-start">
            <img src={av1} alt="" className="w-full lg:w-[250px] 2xl:w-[300px] h-[250px] lg:h-[300px] 2xl:h-[350px] rounded-3xl mb-6 lg:mb-8" />
            <label className="font-400 text-[22px] lg:text-[24px] 2xl:text-[28px] mb-2 lg:mb-3 text-center lg:text-left">Michael Scott</label>
            <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777] text-center lg:text-left">General Manager</label>
          </div>
          <div data-aos="flip-up" data-aos-delay="600" className="w-full lg:w-[250px] 2xl:w-[300px] flex flex-col items-center lg:items-start">
            <img src={av1} alt="" className="w-full lg:w-[250px] 2xl:w-[300px] h-[250px] lg:h-[300px] 2xl:h-[350px] rounded-3xl mb-6 lg:mb-8" />
            <label className="font-400 text-[22px] lg:text-[24px] 2xl:text-[28px] mb-2 lg:mb-3 text-center lg:text-left">Michael Scott</label>
            <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777] text-center lg:text-left">General Manager</label>
          </div>
        </div>

        {/* Team Members Row */}
        <div className="w-full lg:w-[1000px] 2xl:w-[1200px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 mb-[60px] lg:mb-[80px] 2xl:mb-[120px] px-4 lg:px-0">
          <div data-aos="fade-right" data-aos-delay="400" className="w-full lg:w-[350px] 2xl:w-[400px] h-auto lg:h-[120px] flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
            <img src={av1} alt="" className="w-[80px] lg:w-[100px] 2xl:w-[120px] h-[80px] lg:h-[100px] 2xl:h-[120px] rounded-3xl" />
            <div className="h-auto lg:h-[90px] flex flex-col justify-between text-center lg:text-left">
              <label className="text-[22px] lg:text-[24px] 2xl:text-[28px]">Michael Scott</label>
              <label className="text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777]">General Manager</label>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="w-full lg:w-[350px] 2xl:w-[400px] h-auto lg:h-[120px] flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
            <img src={av2} alt="" className="w-[80px] lg:w-[100px] 2xl:w-[120px] h-[80px] lg:h-[100px] 2xl:h-[120px] rounded-3xl" />
            <div className="h-auto lg:h-[90px] flex flex-col justify-between text-center lg:text-left">
              <label className="text-[22px] lg:text-[24px] 2xl:text-[28px]">Michael Scott</label>
              <label className="text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777]">General Manager</label>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="600" className="w-full lg:w-[350px] 2xl:w-[400px] h-auto lg:h-[120px] flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
            <img src={av3} alt="" className="w-[80px] lg:w-[100px] 2xl:w-[120px] h-[80px] lg:h-[100px] 2xl:h-[120px] rounded-3xl" />
            <div className="h-auto lg:h-[90px] flex flex-col justify-between text-center lg:text-left">
              <label className="text-[22px] lg:text-[24px] 2xl:text-[28px]">Michael Scott</label>
              <label className="text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777]">General Manager</label>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] mb-[60px] lg:mb-[80px] 2xl:mb-[120px] flex flex-col bg-[#0A2640] m-auto">
        <div data-aos="fade-down" data-aos-delay="300" className="w-full lg:w-[700px] 2xl:w-[842px] flex flex-col items-center mt-[60px] lg:mt-[80px] 2xl:mt-[100px] m-auto border-b-solid border-b-white border-b-2 pb-8 lg:pb-16 px-4 lg:px-0">
          <label className="text-[16px] lg:text-[18px] 2xl:text-[20px] text-white text-center mb-2 lg:mb-3">Our Blog</label>
          <label className="text-[28px] lg:text-[36px] 2xl:text-[48px] text-white text-center mb-8 lg:mb-12 2xl:mb-16">
            Value proposition accelerator product management venture
          </label>
        </div>
        <div className="w-full lg:w-[900px] 2xl:w-[1100px] flex flex-col mt-[40px] lg:mt-[60px] 2xl:mt-[84px] gap-8 lg:gap-12 2xl:gap-20 m-auto mb-[60px] lg:mb-[80px] 2xl:mb-[120px] px-4 lg:px-0">
          <div data-aos="fade-right" data-aos-delay="400" className="w-full lg:w-[900px] 2xl:w-[1100px] h-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
            <label className="text-[28px] lg:text-[36px] 2xl:text-[48px] text-white text-center lg:text-left">We aim for <span className="text-[#69E6A6]">progress.</span></label>
            <label className="w-full lg:w-[450px] 2xl:w-[510px] text-white text-[16px] lg:text-[18px] 2xl:text-[20px] text-center lg:text-left">
              Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. 
            </label>
          </div>
          <div data-aos="fade-right" data-aos-delay="500" className="w-full lg:w-[900px] 2xl:w-[1100px] h-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
            <label className="text-[28px] lg:text-[36px] 2xl:text-[48px] text-white text-center lg:text-left">We aim for <span className="text-[#69E6A6]">progress.</span></label>
            <label className="w-full lg:w-[450px] 2xl:w-[510px] text-white text-[16px] lg:text-[18px] 2xl:text-[20px] text-center lg:text-left">
              Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. 
            </label>
          </div>
          <div data-aos="fade-right" data-aos-delay="600" className="w-full lg:w-[900px] 2xl:w-[1100px] h-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
            <label className="text-[28px] lg:text-[36px] 2xl:text-[48px] text-white text-center lg:text-left">We aim for <span className="text-[#69E6A6]">progress.</span></label>
            <label className="w-full lg:w-[450px] 2xl:w-[510px] text-white text-[16px] lg:text-[18px] 2xl:text-[20px] text-center lg:text-left">
              Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. 
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage