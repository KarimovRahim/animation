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
    <div className="w-[1400px] flex flex-col">
      <div className="w-[1400px] h-[520px] flex flex-col items-center bg-[#0A2640] mt-5">
        <div data-aos="fade-down" data-aos-delay="300" className="w-[900px] h-[280px] flex flex-col items-center mt-[70px]">
          <label htmlFor="" className="font-400 text-[20px] text-white mb-[15px]">About</label>
          <label htmlFor="" className="w-[840px] font-400 text-[64px] text-white text-center mb-5">
            We love to make great things, things that matter.
          </label>
          <label htmlFor="" className="w-[740px] font-400 text-[16px] text-white text-center">
            Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage <br /> innovator success deployment non-disclosure.
          </label>
        </div>
      </div>
      <div className="w-[1100px] flex felx-row justify-between mt-[-90px] m-auto mb-[120px]">
        <div className="s">
          <img data-aos="flip-right" data-aos-delay="400" src={elem1} alt="" className="w-[300px] h-[285px] rounded-3xl mb-10" />
          <img data-aos="flip-right" data-aos-delay="500" src={elem2} alt="" className="w-[300px] h-[300px] rounded-3xl" />
        </div>
        <div className="s">
          <img data-aos="zoom-in" data-aos-delay="450" src={elem3} alt="" className="w-[400px] h-[630px] rounded-3xl" />
        </div>
        <div className="s">
          <img data-aos="flip-left" data-aos-delay="400" src={elem4} alt="" className="w-[300px] h-[300px] rounded-3xl mb-10" />
          <img data-aos="flip-left" data-aos-delay="500" src={elem5} alt="" className="w-[300px] h-[285px] rounded-3xl" />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className="w-[800px] flex flex-col m-auto">
        <label htmlFor="" className="font-400 text-[20px] text-[#777777]"> Our story</label>
        <label htmlFor="" className="w-[800px] font-400 text-[48px] mt-3">
          Handshake infographic mass market <br /> crowdfunding iteration.
        </label>
        <label htmlFor="" className="w-[800px] font-400 text-[20px] text-[#777777] mt-[30px] mb-[100px]">
          Conversion angel investor entrepreneur first mover advantage. Handshake <br /> infographic mass market crowdfunding iteration. Traction stock user experience <br /> deployment beta innovator incubator focus. Sales user experience branding growth <br /> hacking holy grail monetization conversion prototype stock network effects. Learning <br /> curve network effects return on investment bootstrapping business-to-consumer. 
        </label>
      </div>
      <div className="w-[1400px] flex flex-col items-center bg-[#0A2640] mb-[100px]">
        <label data-aos="fade-down" data-aos-delay="300" htmlFor="" className="mt-[100px] font-400 text-[20px] text-white">Our numbers</label>
        <label data-aos="fade-down" data-aos-delay="400" htmlFor="" className="w-[840px] font-400 text-[48px] text-white text-center mt-3 mb-[82px]">
          Handshake infographic mass market crowdfunding iteration.
        </label>
        <div className="w-[1000px] m-auto flex flex-row justify-between">
          <div data-aos="zoom-in" data-aos-delay="500" className="flex flex-col">
            <label htmlFor="" className="font-400 text-[96px] text-[#4FE9A4]">120m</label>
            <label htmlFor="" className="font-400 text-[24px] text-[#F1F1F1] mb-[100px]">Cool feature title</label>
          </div>
          <div data-aos="zoom-in" data-aos-delay="600" className="flex flex-col">
            <label htmlFor="" className="font-400 text-[96px] text-[#4FE9A4]">10.000</label>
            <label htmlFor="" className="font-400 text-[24px] text-[#F1F1F1] mb-[100px]">Cool feature title</label>
          </div>
          <div data-aos="zoom-in" data-aos-delay="700" className="flex flex-col">
            <label htmlFor="" className="font-400 text-[96px] text-[#4FE9A4]">240</label>
            <label htmlFor="" className="font-400 text-[24px] text-[#F1F1F1]">Cool feature title</label>
          </div>
        </div>
      </div>
      <div className="w-[1000px] flex flex-col m-auto items-center">
        <div data-aos="fade-right" data-aos-delay="300" className="w-[800px] flex flex-col">
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
            <img src={av2} alt="" className="w-[300px] h-[350px] rounded-3xl mb-8" />
            <label htmlFor="" className="font-400 text-[28px] mb-3">Dwight Schrute</label>
            <label htmlFor="" className="font-400 text-[20px] text-[#777777]">General Manager</label>
          </div>
          <div data-aos="flip-up" data-aos-delay="600" className="w-[300px] flex flex-col">
            <img src={av3} alt="" className="w-[300px] h-[350px] rounded-3xl mb-8" />
            <label htmlFor="" className="font-400 text-[28px] mb-3">Pam Beetsley</label>
            <label htmlFor="" className="font-400 text-[20px] text-[#777777]">General Manager</label>
          </div>
        </div>
      </div>
      <div className="w-[1400px] bg-[#0A2640] flex flex-col items-center">
        <div data-aos="fade-left" data-aos-delay="300" className="w-[800px] flex flex-col mt-[120px]">
          <label htmlFor="" className="font-400 text-[20px] text-[#F1F1F1] mb-3">Our team</label>
          <label htmlFor="" className="font-400 text-[72px] text-white mb-[23px]">The leadership team</label>
          <label htmlFor="" className="w-[750px] font-400 text-[20px] text-[#F1F1F1] mb-[52px]">
            Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. 
          </label>
        </div>
      </div>
      <div className="w-[1400px] mb-[124px] bg-[#0A2640]">
        <div className="w-[800px] h-[650px] flex flex-col justify-between m-auto mt-[60px]">
          <div data-aos="fade-right" data-aos-delay="400" className="w-[800px] flex flex-row">
            <img src={elem2} alt="" className="w-[150px] h-[150px] rounded-3xl mr-[50px]" />
            <div className="flex flex-col">
              <label htmlFor="" className="text-[28px] text-white mb-4">We are commited.</label>
              <label htmlFor="" className="w-[600px] text-[20px] text-[#F1F1F1]">
                Conversion angel investor entrepreneur first mover advantage. <br /> Handshake infographic mass market crowdfunding iteration.
              </label>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="500" className="w-[800px] flex flex-row">
            <img src={elem4} alt="" className="w-[150px] h-[150px] rounded-3xl mr-[50px]" />
            <div className="flex flex-col">
              <label htmlFor="" className="text-[28px] text-white mb-4">We are commited.</label>
              <label htmlFor="" className="w-[600px] text-[20px] text-[#F1F1F1]">
                Conversion angel investor entrepreneur first mover advantage. <br /> Handshake infographic mass market crowdfunding iteration.
              </label>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="600" className="w-[800px] flex flex-row mb-[120px]">
            <img src={elem6} alt="" className="w-[150px] h-[150px] rounded-3xl mr-[50px]" />
            <div className="flex flex-col">
              <label htmlFor="" className="text-[28px] text-white mb-4">We are commited.</label>
              <label htmlFor="" className="w-[600px] text-[20px] text-[#F1F1F1]">
                Conversion angel investor entrepreneur first mover advantage. <br /> Handshake infographic mass market crowdfunding iteration.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondPage