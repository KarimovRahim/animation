import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import elem1 from "../assets/elem1.jpg"
import elem2 from "../assets/elem2.png"
import elem3 from "../assets/elem4.jpg"
import elem4 from "../assets/elem3.png"
import elem5 from "../assets/elem5.jpg"
import elem6 from "../assets/elem6.png"

import av1 from "../assets/av1.png"
import av2 from "../assets/av2.png"
import av3 from "../assets/av3.png"

const SecondPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="w-full lg:w-[1200px] 2xl:w-[1400px] flex flex-col px-4 lg:px-6">
      {/* Hero Section */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] h-auto lg:h-[450px] 2xl:h-[520px] flex flex-col items-center bg-[#0A2640] mt-5">
        <div data-aos="fade-down" data-aos-delay="300" className="w-full lg:w-[800px] 2xl:w-[900px] h-auto flex flex-col items-center mt-[40px] lg:mt-[60px] 2xl:mt-[70px] px-4">
          <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-white mb-[10px] lg:mb-[15px]">About</label>
          <label className="w-full lg:w-[800px] 2xl:w-[840px] font-400 text-[32px] lg:text-[48px] 2xl:text-[64px] text-white text-center mb-4 lg:mb-5">
            We love to make great things, things that matter.
          </label>
          <label className="w-full lg:w-[700px] 2xl:w-[740px] font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-white text-center">
            Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage <br className="hidden lg:block" /> innovator success deployment non-disclosure.
          </label>
        </div>
      </div>

      {/* Image Grid */}
      <div className="w-full lg:w-[1000px] 2xl:w-[1100px] flex flex-col lg:flex-row justify-between gap-6 lg:gap-4 mt-[-40px] lg:mt-[-70px] 2xl:mt-[-90px] m-auto mb-[60px] lg:mb-[80px] 2xl:mb-[120px]">
        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-0">
          <img data-aos="flip-right" data-aos-delay="400" src={elem1} alt="" className="w-full lg:w-[250px] 2xl:w-[300px] h-[200px] lg:h-[250px] 2xl:h-[285px] rounded-3xl mb-6 lg:mb-10" />
          <img data-aos="flip-right" data-aos-delay="500" src={elem2} alt="" className="w-full lg:w-[250px] 2xl:w-[300px] h-[200px] lg:h-[250px] 2xl:h-[300px] rounded-3xl" />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <img data-aos="zoom-in" data-aos-delay="450" src={elem3} alt="" className="w-full lg:w-[350px] 2xl:w-[400px] h-[300px] lg:h-[500px] 2xl:h-[630px] rounded-3xl" />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-0">
          <img data-aos="flip-left" data-aos-delay="400" src={elem4} alt="" className="w-full lg:w-[250px] 2xl:w-[300px] h-[200px] lg:h-[250px] 2xl:h-[300px] rounded-3xl mb-6 lg:mb-10" />
          <img data-aos="flip-left" data-aos-delay="500" src={elem5} alt="" className="w-full lg:w-[250px] 2xl:w-[300px] h-[200px] lg:h-[250px] 2xl:h-[285px] rounded-3xl" />
        </div>
      </div>

      {/* Story Section */}
      <div data-aos="fade-up" data-aos-delay="300" className="w-full lg:w-[700px] 2xl:w-[800px] flex flex-col m-auto px-4 lg:px-0">
        <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777]">Our story</label>
        <label className="w-full lg:w-[700px] 2xl:w-[800px] font-400 text-[28px] lg:text-[36px] 2xl:text-[48px] mt-2 lg:mt-3">
          Handshake infographic mass market <br className="hidden lg:block" /> crowdfunding iteration.
        </label>
        <label className="w-full lg:w-[700px] 2xl:w-[800px] font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777] mt-[20px] lg:mt-[25px] 2xl:mt-[30px] mb-[60px] lg:mb-[80px] 2xl:mb-[100px]">
          Conversion angel investor entrepreneur first mover advantage. Handshake <br className="hidden lg:block" /> infographic mass market crowdfunding iteration. Traction stock user experience <br className="hidden lg:block" /> deployment beta innovator incubator focus. Sales user experience branding growth <br className="hidden lg:block" /> hacking holy grail monetization conversion prototype stock network effects. Learning <br className="hidden lg:block" /> curve network effects return on investment bootstrapping business-to-consumer. 
        </label>
      </div>

      {/* Numbers Section */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] flex flex-col items-center bg-[#0A2640] mb-[60px] lg:mb-[80px] 2xl:mb-[100px]">
        <label data-aos="fade-down" data-aos-delay="300" className="mt-[60px] lg:mt-[80px] 2xl:mt-[100px] font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-white">Our numbers</label>
        <label data-aos="fade-down" data-aos-delay="400" className="w-full lg:w-[700px] 2xl:w-[840px] font-400 text-[28px] lg:text-[36px] 2xl:text-[48px] text-white text-center mt-2 lg:mt-3 mb-[40px] lg:mb-[60px] 2xl:mb-[82px] px-4">
          Handshake infographic mass market crowdfunding iteration.
        </label>
        <div className="w-full lg:w-[900px] 2xl:w-[1000px] m-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 px-4 lg:px-0">
          <div data-aos="zoom-in" data-aos-delay="500" className="flex flex-col items-center lg:items-start">
            <label className="font-400 text-[60px] lg:text-[80px] 2xl:text-[96px] text-[#4FE9A4]">120m</label>
            <label className="font-400 text-[18px] lg:text-[20px] 2xl:text-[24px] text-[#F1F1F1] mb-[40px] lg:mb-[60px] 2xl:mb-[100px] text-center lg:text-left">Cool feature title</label>
          </div>
          <div data-aos="zoom-in" data-aos-delay="600" className="flex flex-col items-center lg:items-start">
            <label className="font-400 text-[60px] lg:text-[80px] 2xl:text-[96px] text-[#4FE9A4]">10.000</label>
            <label className="font-400 text-[18px] lg:text-[20px] 2xl:text-[24px] text-[#F1F1F1] mb-[40px] lg:mb-[60px] 2xl:mb-[100px] text-center lg:text-left">Cool feature title</label>
          </div>
          <div data-aos="zoom-in" data-aos-delay="700" className="flex flex-col items-center lg:items-start">
            <label className="font-400 text-[60px] lg:text-[80px] 2xl:text-[96px] text-[#4FE9A4]">240</label>
            <label className="font-400 text-[18px] lg:text-[20px] 2xl:text-[24px] text-[#F1F1F1] text-center lg:text-left">Cool feature title</label>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full lg:w-[900px] 2xl:w-[1000px] flex flex-col m-auto items-center">
        <div data-aos="fade-right" data-aos-delay="300" className="w-full lg:w-[700px] 2xl:w-[800px] flex flex-col px-4 lg:px-0">
          <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777] mb-2 lg:mb-3">Our team</label>
          <label className="font-400 text-[36px] lg:text-[48px] 2xl:text-[72px] mb-[15px] lg:mb-[20px] 2xl:mb-[23px]">The leadership team</label>
          <label className="w-full lg:w-[650px] 2xl:w-[750px] font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777] mb-[30px] lg:mb-[40px] 2xl:mb-[52px]">
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
            <img src={av2} alt="" className="w-full lg:w-[250px] 2xl:w-[300px] h-[250px] lg:h-[300px] 2xl:h-[350px] rounded-3xl mb-6 lg:mb-8" />
            <label className="font-400 text-[22px] lg:text-[24px] 2xl:text-[28px] mb-2 lg:mb-3 text-center lg:text-left">Dwight Schrute</label>
            <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777] text-center lg:text-left">General Manager</label>
          </div>
          <div data-aos="flip-up" data-aos-delay="600" className="w-full lg:w-[250px] 2xl:w-[300px] flex flex-col items-center lg:items-start">
            <img src={av3} alt="" className="w-full lg:w-[250px] 2xl:w-[300px] h-[250px] lg:h-[300px] 2xl:h-[350px] rounded-3xl mb-6 lg:mb-8" />
            <label className="font-400 text-[22px] lg:text-[24px] 2xl:text-[28px] mb-2 lg:mb-3 text-center lg:text-left">Pam Beetsley</label>
            <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777] text-center lg:text-left">General Manager</label>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] bg-[#0A2640] flex flex-col items-center">
        <div data-aos="fade-left" data-aos-delay="300" className="w-full lg:w-[700px] 2xl:w-[800px] flex flex-col mt-[60px] lg:mt-[80px] 2xl:mt-[120px] px-4 lg:px-0">
          <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#F1F1F1] mb-2 lg:mb-3">Our values</label>
          <label className="font-400 text-[36px] lg:text-[48px] 2xl:text-[72px] text-white mb-[15px] lg:mb-[20px] 2xl:mb-[23px]">The leadership team</label>
          <label className="w-full lg:w-[650px] 2xl:w-[750px] font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#F1F1F1] mb-[30px] lg:mb-[40px] 2xl:mb-[52px]">
            Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. 
          </label>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] mb-[60px] lg:mb-[80px] 2xl:mb-[124px] bg-[#0A2640]">
        <div className="w-full lg:w-[700px] 2xl:w-[800px] h-auto flex flex-col justify-between m-auto mt-[40px] lg:mt-[50px] 2xl:mt-[60px] px-4 lg:px-0">
          <div data-aos="fade-right" data-aos-delay="400" className="w-full lg:w-[700px] 2xl:w-[800px] flex flex-col lg:flex-row gap-4 lg:gap-0 mb-8 lg:mb-0">
            <img src={elem2} alt="" className="w-full lg:w-[120px] 2xl:w-[150px] h-[120px] lg:h-[120px] 2xl:h-[150px] rounded-3xl mr-0 lg:mr-[30px] 2xl:mr-[50px] mb-4 lg:mb-0" />
            <div className="flex flex-col">
              <label className="text-[22px] lg:text-[24px] 2xl:text-[28px] text-white mb-3 lg:mb-4 text-center lg:text-left">We are commited.</label>
              <label className="w-full lg:w-[500px] 2xl:w-[600px] text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#F1F1F1] text-center lg:text-left">
                Conversion angel investor entrepreneur first mover advantage. <br className="hidden lg:block" /> Handshake infographic mass market crowdfunding iteration.
              </label>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="500" className="w-full lg:w-[700px] 2xl:w-[800px] flex flex-col lg:flex-row gap-4 lg:gap-0 mb-8 lg:mb-0">
            <img src={elem4} alt="" className="w-full lg:w-[120px] 2xl:w-[150px] h-[120px] lg:h-[120px] 2xl:h-[150px] rounded-3xl mr-0 lg:mr-[30px] 2xl:mr-[50px] mb-4 lg:mb-0" />
            <div className="flex flex-col">
              <label className="text-[22px] lg:text-[24px] 2xl:text-[28px] text-white mb-3 lg:mb-4 text-center lg:text-left">We are commited.</label>
              <label className="w-full lg:w-[500px] 2xl:w-[600px] text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#F1F1F1] text-center lg:text-left">
                Conversion angel investor entrepreneur first mover advantage. <br className="hidden lg:block" /> Handshake infographic mass market crowdfunding iteration.
              </label>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="600" className="w-full lg:w-[700px] 2xl:w-[800px] flex flex-col lg:flex-row gap-4 lg:gap-0 mb-[60px] lg:mb-[80px] 2xl:mb-[120px]">
            <img src={elem6} alt="" className="w-full lg:w-[120px] 2xl:w-[150px] h-[120px] lg:h-[120px] 2xl:h-[150px] rounded-3xl mr-0 lg:mr-[30px] 2xl:mr-[50px] mb-4 lg:mb-0" />
            <div className="flex flex-col">
              <label className="text-[22px] lg:text-[24px] 2xl:text-[28px] text-white mb-3 lg:mb-4 text-center lg:text-left">We are commited.</label>
              <label className="w-full lg:w-[500px] 2xl:w-[600px] text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#F1F1F1] text-center lg:text-left">
                Conversion angel investor entrepreneur first mover advantage. <br className="hidden lg:block" /> Handshake infographic mass market crowdfunding iteration.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondPage