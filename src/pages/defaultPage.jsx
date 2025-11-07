import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


import img from "../assets/img.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import logo from "../assets/logo.png"
import logo_2 from "../assets/logo_2.png"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import follow from "../assets/follow.png"

import star from "../assets/star.png"
import eye from "../assets/eye.png"
import sun from "../assets/sun.png"

import card1 from "../assets/card1.png"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.png"

import icons from "../assets/icons.png"
import avatar from "../assets/avatar.png"

import content from "../assets/content.jpg"


const DefaultPage = () => {

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
      <div data-aos="fade-up" data-aos-duration="3000" className="w-[1200px] m-auto mt-[60px] flex flex-row justify-center">
        <div className="w-[600px] flex flex-col">
          <label htmlFor="" className="w-[600px] mt-[67px] font-400 text-[48px]">Save time by building fast with Boldo Template</label>
          <label htmlFor="" className="w-[600px] mt-4 text-[17px] text-[#777777] font-400">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</label>
          <div className="w-[600px] h-[60px] mt-[50px] mb-[30px] flex flexx-row gap-6">
            <button className="w-[250px] h-[60px] rounded-[56px] bg-[#0A2640] font-700 text-[white] text-[20px]">Buy template</button>
            <button className="w-[190px] h-[60px] rounded-[56px] font-700 text-[20px] text-[#0A2640] border-2 border-solid border-[#0A2640]">Explore</button>
          </div>
        </div>
        <div className="w-[500px] h-[423px] flex flex-col justify-between">
          <img src={img} className="w-[500px] h-[423px]" />
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className="w-[1200px] m-auto mt-[100px] mb-20 h-50px flex flex-row justify-between items-center">
        <img src={logo} className="w-[145px] h-[42px]" />
        <img src={logo_2} className="w-[145px] h-[42px]" />
        <img src={logo} className="w-[145px] h-[42px]" />
        <img src={logo_2} className="w-[145px] h-[42px]" />
        <img src={logo} className="w-[145px] h-[42px]" />
        <img src={logo_2} className="w-[145px] h-[42px]" />
      </div>
      <div className="w-[1400px] bg-[#0A2640] flex flex-col items-center">
        <div data-aos="fade-down" data-aos-delay="300" className="w-[850px] mt-[84px] flex flex-col items-center">
          <label htmlFor="" className="font-400 text-[20px] text-white">Our services</label>
          <label htmlFor="" className="font-400 text-[48px] text-white text-center mt-4">Handshake infographic mass market crowdfunding iteration.</label>
        </div>
        <div className="w-[1200px] flex flex-row justify-between mt-[72px]">
          <div data-aos="flip-left" data-aos-delay="400" className="w-[300px] flex flex-col">
            <img src={image1} className="w-[300px] h-[350px]" />
            <label htmlFor="" className="font-400 text-white text-[24px] mt-6 mb-7 ">Cool feature title</label>
            <label htmlFor="" className="w-[164px] h-[45px] font-700 text-5 text-white border-b-solid border-b-2 border-b-white">Explore page</label>
          </div>
          <div data-aos="flip-left" data-aos-delay="500" className="w-[300px] flex flex-col">
            <img src={image2} className="w-[300px] h-[350px]" />
            <label htmlFor="" className="font-400 text-white text-[24px] mt-6 mb-7 ">Cool feature title</label>
            <label htmlFor="" className="w-[164px] h-[45px] font-700 text-5 text-white border-b-solid border-b-2 border-b-white">Explore page</label>
          </div>
          <div data-aos="flip-left" data-aos-delay="600" className="w-[300px] flex flex-col mb-[60px]">
            <img src={image3} className="w-[300px] h-[350px]" />
            <label htmlFor="" className="font-400 text-white text-[24px] mt-6 mb-7 ">Cool feature title</label>
            <label htmlFor="" className="w-[164px] h-[45px] font-700 text-5 text-white border-b-solid border-b-2 border-b-white">Explore page</label>
          </div>
        </div>
      </div>
      <div className="w-[1400px] flex flex-col items-center">
        <div data-aos="fade-right" data-aos-delay="300" className="w-[1200px] mt-[120px] flex flex-row justify-between items-center">
          <img src={img1} alt="" className="w-[500px] h-[610px]" />
          <div className="w-[500px] flex flex-col">
            <label htmlFor="" className="w-[500px] font-400 text-[36px] mb-10">We connect our customers with the best, and help them keep up-and stay open.</label>
            <div className="w-[500px] flex flex-col gap-6 mb-[60px]">
              <label data-aos="fade-left" data-aos-delay="400" htmlFor="" className="flex flex-row font-400 text-[20px]">
                <img src={follow} alt="" className="w-9 h-9 mr-[27px]" />
                We connect our customers with the best.
              </label>
              <label data-aos="fade-left" data-aos-delay="500" htmlFor="" className="flex flex-row font-400 text-[20px]">
                <img src={follow} alt="" className="w-9 h-9 mr-[27px]" />
                Advisor success customer launch party.
              </label>
              <label data-aos="fade-left" data-aos-delay="600" htmlFor="" className="flex flex-row font-400 text-[20px]">
                <img src={follow} alt="" className="w-9 h-9 mr-[27px]" />
                Business-to-consumer long tail.
              </label>
            </div>
            <button data-aos="zoom-in" data-aos-delay="700" className="w-[210px] h-[60px] bg-[#0A2640] text-white font-700 text-[20px] rounded-[56px]">
              Start now
            </button>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="300" className="w-[1200px] mt-[120px] mb-[120px] flex flex-row justify-between items-center">
          <div className="w-[500px] flex flex-col gap-16">
            <label htmlFor="" className="w-[500px] font-400 text-[36px]">We connect our customers with the best, and help them keep up-and stay open.</label>
            <div className="w-[500px] flex flex-col justify-between gap-6">
              <div data-aos="zoom-in" data-aos-delay="400" className="w-[500px] h-[70px] flex flex-col justify-center bg-[#0A2640]">
                <div className="flex flex-row">
                  <img src={star} alt="" className="w-7 h-7 mr-3" />
                  <label htmlFor="" className="text-white font-600 text-[16px]">We connect our customers with the best.</label>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-delay="500" className="w-[500px] h-[70px] flex flex-col justify-center">
                <div className="flex flex-row">
                  <img src={eye} alt="" className="w-7 h-7 mr-3" />
                  <label htmlFor="" className="text-[16px] font-600">Advisor success customer launch party.</label>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-delay="600" className="w-[500px] h-[70px] flex flex-col justify-center">
                <div className="flex flex-row">
                  <img src={sun} alt="" className="w-7 h-7 mr-3" />
                  <label htmlFor="" className="text-[16px] font-600">Business-to-consumer long tail.</label>
                </div>
              </div>
            </div>
          </div>
          <img src={img2} alt="" className="w-[450px] h-[700px]" />
        </div>
      </div>
      <div className="w-[1400px] flex flex-col bg-[#0A2640]">
        <div data-aos="fade-down" data-aos-delay="300" className="w-[1200px] h-[140px] flex flex-row justify-between items-end m-auto mt-[100px]">
          <label htmlFor="" className="w-[720px] text-white text-[48px] font-400">An enterprise template to ramp up your company website</label>
          <img src={icons} alt="" className="w-[172px] h-[73px]" />
        </div>
        <div className="w-[1200px] flex flex-row justify-between m-auto mt-15">
          <div data-aos="flip-up" data-aos-delay="400" className="w-[350px] rounded-3 bg-white h-80 rounded-xl p-10">
            <label htmlFor="" className="w-[270px] font-400 text-[24px]">"Buyer buzz partner network disruptive non-disclosure agreement business"</label>
            <div className="w-[270px] h-[60px] flex flex-row mt-10">
              <img src={avatar} alt="" className="w-[58px] h-[58px] rounded-[60px] mr-4" />
              <div className="h-[60px] flex flex-col justify-between">
                <label htmlFor="" className="font-700 text-[16px]">Albus Dumbledore</label>
                <label htmlFor="" className="font-400 text-[14px]">Manager @ Howarts</label>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" data-aos-delay="500" className="w-[350px] rounded-3 bg-white h-100 rounded-xl p-10 mb-[100px]">
            <label htmlFor="" className="w-[270px] font-400 text-[24px]">"Learning curve <br /> infrastructure value <br /> proposition advisor <br /> strategy user <br /> experience hypotheses <br /> investor."</label>
            <div className="w-[270px] h-[60px] flex flex-row mt-10">
              <img src={avatar} alt="" className="w-[58px] h-[58px] rounded-[60px] mr-4" />
              <div className="h-[60px] flex flex-col justify-between">
                <label htmlFor="" className="font-700 text-[16px]">Albus Dumbledore</label>
                <label htmlFor="" className="font-400 text-[14px]">Manager @ Howarts</label>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" data-aos-delay="600" className="w-[350px] rounded-3 bg-white h-90 rounded-xl p-10">
            <label htmlFor="" className="w-[270px] font-400 text-[24px]">"Release facebook responsive web design business model canvas seed money monetization."</label>
            <div className="w-[270px] h-[60px] flex flex-row mt-10 items-center">
              <img src={avatar} alt="" className="w-[58px] h-[58px] rounded-[60px] mr-4" />
              <div className="h-[60px] flex flex-col justify-between">
                <label htmlFor="" className="font-700 text-[16px]">Albus Dumbledore</label>
                <label htmlFor="" className="font-400 text-[14px]">Manager @ Howarts</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="300" className="w-[1100px] h-[400px] m-auto bg-cover mt-[120px] mb-[60px]"
          style={{ backgroundImage: `url(${content})` }}
      ></div>
      <div className="w-[1100px] flex flex-row justify-between m-auto mb-[182px]">
        <label data-aos="fade-right" data-aos-delay="300" htmlFor="" className="w-[500px] font-400 text-[36px]">
          We connect our customers with the best, and help them keep up-and stay open.
        </label>
        <div className="w-[500px] flex flex-col">
          <div data-aos="fade-left" data-aos-delay="400" className="w-[500px] h-[60px] flex flex-row justify-between items-center">
            <label htmlFor="" className="font-400 text-[20px] border-b-solid border-b border-b-[#C4C4C4]">
              We connect our customers with the best?
            </label>
            <img src={follow} alt="" className="w-9 h-9" />
          </div>
          <div data-aos="fade-left" data-aos-delay="500" className="w-[500px] h-[60px] flex flex-row justify-between items-center">
            <label htmlFor="" className="font-400 text-[20px] border-b-solid border-b border-b-[#C4C4C4]">
              Android research & development rockstar?
            </label>
            <img src={follow} alt="" className="w-9 h-9" />
          </div>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-delay="300" className="w-[842px] flex flex-col items-center m-auto mb-20">
        <label htmlFor="" className="font-400 text-[20px] text-[#777777]">Our Blog</label>
        <label htmlFor="" className="w-[842px] font-400 text-[48px] text-center mt-3">Value proposition accelerator product management venture</label>
      </div>
      <div className="w-[1000px] flex flex-row justify-between m-auto">
        <div data-aos="flip-left" data-aos-delay="400" className="w-[300px] flex flex-col">
          <img src={card1} alt="" className="w-[300px] h-[200px] rounded-2xl mb-6" />
          <div className="w-[300px] flex flex-row mb-3 ">
            <label htmlFor="" className="font-700 text-[16px] text-[#0A2640] mr-3">Category</label>
            <label htmlFor="" className="font-400 text-[16px] text-[#777777]">November 22, 2021</label>
          </div>
          <label htmlFor="" className="w-[300px] h-[100px] font-400 text-[20px] mb-5">
            Pitch termsheet backing <br /> validation focus release.
          </label>
          <div className="w-[300px] flex flex-row mt-5">
            <img src={avatar} alt="" className="w-[30px] h-[30px] mr-3" />
            <label htmlFor="" className="font-400 text-[16px]">Chandler Bing</label>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="500" className="w-[300px] flex flex-col">
          <img src={card2} alt="" className="w-[300px] h-[200px] rounded-2xl mb-6" />
          <div className="w-[300px] flex flex-row mb-3 ">
            <label htmlFor="" className="font-700 text-[16px] text-[#0A2640] mr-3">Category</label>
            <label htmlFor="" className="font-400 text-[16px] text-[#777777]">November 22, 2021</label>
          </div>
          <label htmlFor="" className="w-[300px] h-[100px] font-400 text-[20px] mb-5">
            Seed round direct mailing non-<br />disclosure agreement graphical <br /> user interface rockstar.
          </label>
          <div className="w-[300px] flex flex-row mt-5">
            <img src={avatar} alt="" className="w-[30px] h-[30px] mr-3" />
            <label htmlFor="" className="font-400 text-[16px]">Rachel Green</label>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="600" className="w-[300px] flex flex-col">
          <img src={card3} alt="" className="w-[300px] h-[200px] rounded-2xl mb-6" />
          <div className="w-[300px] flex flex-row mb-3 ">
            <label htmlFor="" className="font-700 text-[16px] text-[#0A2640] mr-3">Category</label>
            <label htmlFor="" className="font-400 text-[16px] text-[#777777]">November 22, 2021</label>
          </div>
          <label htmlFor="" className="w-[300px] h-[100px] font-400 text-[20px] mb-5">
            Beta prototype sales iPad gen-z <br /> marketing network effects value <br /> proposition
          </label>
          <div className="w-[300px] flex flex-row mt-5">
            <img src={avatar} alt="" className="w-[30px] h-[30px] mr-3" />
            <label htmlFor="" className="font-400 text-[16px]">Monica Geller</label>
          </div>
        </div>
      </div>
        <button data-aos="zoom-in" data-aos-delay="700" className="w-[220px] h-[60px] mt-[85px] mb-[125px] rounded-[56px] border-[3px] border-solid border-[#0A2640] text-[20px] text-[#0A2640] font-700 m-auto">Load more</button>
    </div>
  )
}

export default DefaultPage