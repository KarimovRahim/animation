import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import img from "../assets/img.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import logo from "../assets/Logo.png"
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
    <div className="w-full lg:w-[1200px] 2xl:w-[1400px] flex flex-col px-4 lg:px-6">
      {/* Hero Section */}
      <div data-aos="fade-up" data-aos-duration="3000" className="w-full lg:w-[1000px] 2xl:w-[1200px] m-auto mt-[40px] lg:mt-[50px] 2xl:mt-[60px] flex flex-col lg:flex-row justify-center gap-8 lg:gap-0">
        <div className="w-full lg:w-[500px] 2xl:w-[600px] flex flex-col">
          <label className="w-full lg:w-[500px] 2xl:w-[600px] mt-[20px] lg:mt-[50px] 2xl:mt-[67px] font-400 text-[28px] lg:text-[36px] 2xl:text-[48px]">
            Save time by building fast with Boldo Template
          </label>
          <label className="w-full lg:w-[500px] 2xl:w-[600px] mt-4 text-[14px] lg:text-[16px] 2xl:text-[17px] text-[#777777] font-400">
            Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
          </label>
          <div className="w-full lg:w-[500px] 2xl:w-[600px] h-auto lg:h-[60px] mt-[30px] lg:mt-[40px] 2xl:mt-[50px] mb-[20px] lg:mb-[30px] flex flex-col lg:flex-row gap-4 lg:gap-6">
            <button className="w-full lg:w-[200px] 2xl:w-[250px] h-[50px] lg:h-[55px] 2xl:h-[60px] rounded-[56px] bg-[#0A2640] font-700 text-white text-[16px] lg:text-[18px] 2xl:text-[20px]">
              Buy template
            </button>
            <button className="w-full lg:w-[170px] 2xl:w-[190px] h-[50px] lg:h-[55px] 2xl:h-[60px] rounded-[56px] font-700 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#0A2640] border-2 border-solid border-[#0A2640]">
              Explore
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[400px] 2xl:w-[500px] h-auto lg:h-[350px] 2xl:h-[423px] flex flex-col justify-between">
          <img src={img} className="w-full lg:w-[400px] 2xl:w-[500px] h-auto lg:h-[350px] 2xl:h-[423px]" />
        </div>
      </div>

      {/* Logos Section */}
      <div data-aos="zoom-in" data-aos-delay="200" className="w-full lg:w-[1000px] 2xl:w-[1200px] m-auto mt-[60px] lg:mt-[80px] 2xl:mt-[100px] mb-12 lg:mb-16 2xl:mb-20 h-auto flex flex-row flex-wrap justify-center gap-6 lg:gap-4 lg:justify-between items-center">
        <img src={logo} className="w-[100px] lg:w-[120px] 2xl:w-[145px] h-[30px] lg:h-[35px] 2xl:h-[42px]" />
        <img src={logo_2} className="w-[100px] lg:w-[120px] 2xl:w-[145px] h-[30px] lg:h-[35px] 2xl:h-[42px]" />
        <img src={logo} className="w-[100px] lg:w-[120px] 2xl:w-[145px] h-[30px] lg:h-[35px] 2xl:h-[42px]" />
        <img src={logo_2} className="w-[100px] lg:w-[120px] 2xl:w-[145px] h-[30px] lg:h-[35px] 2xl:h-[42px]" />
        <img src={logo} className="w-[100px] lg:w-[120px] 2xl:w-[145px] h-[30px] lg:h-[35px] 2xl:h-[42px]" />
        <img src={logo_2} className="w-[100px] lg:w-[120px] 2xl:w-[145px] h-[30px] lg:h-[35px] 2xl:h-[42px]" />
      </div>

      {/* Services Section */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] bg-[#0A2640] flex flex-col items-center">
        <div data-aos="fade-down" data-aos-delay="300" className="w-full lg:w-[700px] 2xl:w-[850px] mt-[40px] lg:mt-[60px] 2xl:mt-[84px] flex flex-col items-center px-4">
          <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-white">Our services</label>
          <label className="font-400 text-[28px] lg:text-[36px] 2xl:text-[48px] text-white text-center mt-3 lg:mt-4">
            Handshake infographic mass market crowdfunding iteration.
          </label>
        </div>
        <div className="w-full lg:w-[1000px] 2xl:w-[1200px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 mt-[40px] lg:mt-[60px] 2xl:mt-[72px] px-4 lg:px-0">
          <div data-aos="flip-left" data-aos-delay="400" className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-col items-center lg:items-start">
            <img src={image1} className="w-full lg:w-[280px] 2xl:w-[300px] h-auto lg:h-[300px] 2xl:h-[350px]" />
            <label className="font-400 text-white text-[20px] lg:text-[22px] 2xl:text-[24px] mt-4 lg:mt-6 mb-4 lg:mb-7 text-center lg:text-left">Cool feature title</label>
            <label className="w-[140px] lg:w-[150px] 2xl:w-[164px] h-[35px] lg:h-[40px] 2xl:h-[45px] font-700 text-[14px] lg:text-[16px] text-white border-b-solid border-b-2 border-b-white text-center lg:text-left">
              Explore page
            </label>
          </div>
          <div data-aos="flip-left" data-aos-delay="500" className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-col items-center lg:items-start">
            <img src={image2} className="w-full lg:w-[280px] 2xl:w-[300px] h-auto lg:h-[300px] 2xl:h-[350px]" />
            <label className="font-400 text-white text-[20px] lg:text-[22px] 2xl:text-[24px] mt-4 lg:mt-6 mb-4 lg:mb-7 text-center lg:text-left">Cool feature title</label>
            <label className="w-[140px] lg:w-[150px] 2xl:w-[164px] h-[35px] lg:h-[40px] 2xl:h-[45px] font-700 text-[14px] lg:text-[16px] text-white border-b-solid border-b-2 border-b-white text-center lg:text-left">
              Explore page
            </label>
          </div>
          <div data-aos="flip-left" data-aos-delay="600" className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-col items-center lg:items-start mb-[40px] lg:mb-[60px]">
            <img src={image3} className="w-full lg:w-[280px] 2xl:w-[300px] h-auto lg:h-[300px] 2xl:h-[350px]" />
            <label className="font-400 text-white text-[20px] lg:text-[22px] 2xl:text-[24px] mt-4 lg:mt-6 mb-4 lg:mb-7 text-center lg:text-left">Cool feature title</label>
            <label className="w-[140px] lg:w-[150px] 2xl:w-[164px] h-[35px] lg:h-[40px] 2xl:h-[45px] font-700 text-[14px] lg:text-[16px] text-white border-b-solid border-b-2 border-b-white text-center lg:text-left">
              Explore page
            </label>
          </div>
        </div>
      </div>

      {/* Features Section 1 */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] flex flex-col items-center">
        <div data-aos="fade-right" data-aos-delay="300" className="w-full lg:w-[1000px] 2xl:w-[1200px] mt-[60px] lg:mt-[80px] 2xl:mt-[120px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          <img src={img1} alt="" className="w-full lg:w-[400px] 2xl:w-[500px] h-auto lg:h-[500px] 2xl:h-[610px]" />
          <div className="w-full lg:w-[450px] 2xl:w-[500px] flex flex-col">
            <label className="w-full lg:w-[450px] 2xl:w-[500px] font-400 text-[24px] lg:text-[30px] 2xl:text-[36px] mb-6 lg:mb-8 2xl:mb-10">
              We connect our customers with the best, and help them keep up-and stay open.
            </label>
            <div className="w-full lg:w-[450px] 2xl:w-[500px] flex flex-col gap-4 lg:gap-5 2xl:gap-6 mb-[40px] lg:mb-[50px] 2xl:mb-[60px]">
              <label data-aos="fade-left" data-aos-delay="400" className="flex flex-row font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] items-center">
                <img src={follow} alt="" className="w-7 h-7 lg:w-8 lg:h-8 2xl:w-9 2xl:h-9 mr-[20px] lg:mr-[24px] 2xl:mr-[27px]" />
                We connect our customers with the best.
              </label>
              <label data-aos="fade-left" data-aos-delay="500" className="flex flex-row font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] items-center">
                <img src={follow} alt="" className="w-7 h-7 lg:w-8 lg:h-8 2xl:w-9 2xl:h-9 mr-[20px] lg:mr-[24px] 2xl:mr-[27px]" />
                Advisor success customer launch party.
              </label>
              <label data-aos="fade-left" data-aos-delay="600" className="flex flex-row font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] items-center">
                <img src={follow} alt="" className="w-7 h-7 lg:w-8 lg:h-8 2xl:w-9 2xl:h-9 mr-[20px] lg:mr-[24px] 2xl:mr-[27px]" />
                Business-to-consumer long tail.
              </label>
            </div>
            <button data-aos="zoom-in" data-aos-delay="700" className="w-full lg:w-[180px] 2xl:w-[210px] h-[50px] lg:h-[55px] 2xl:h-[60px] bg-[#0A2640] text-white font-700 text-[16px] lg:text-[18px] 2xl:text-[20px] rounded-[56px]">
              Start now
            </button>
          </div>
        </div>

        {/* Features Section 2 */}
        <div data-aos="fade-left" data-aos-delay="300" className="w-full lg:w-[1000px] 2xl:w-[1200px] mt-[60px] lg:mt-[80px] 2xl:mt-[120px] mb-[60px] lg:mb-[80px] 2xl:mb-[120px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          <div className="w-full lg:w-[450px] 2xl:w-[500px] flex flex-col gap-10 lg:gap-12 2xl:gap-16">
            <label className="w-full lg:w-[450px] 2xl:w-[500px] font-400 text-[24px] lg:text-[30px] 2xl:text-[36px]">
              We connect our customers with the best, and help them keep up-and stay open.
            </label>
            <div className="w-full lg:w-[450px] 2xl:w-[500px] flex flex-col justify-between gap-4 lg:gap-5 2xl:gap-6">
              <div data-aos="zoom-in" data-aos-delay="400" className="w-full lg:w-[450px] 2xl:w-[500px] h-[60px] lg:h-[65px] 2xl:h-[70px] flex flex-col justify-center bg-[#0A2640] px-4">
                <div className="flex flex-row items-center">
                  <img src={star} alt="" className="w-6 h-6 lg:w-7 lg:h-7 mr-3" />
                  <label className="text-white font-600 text-[14px] lg:text-[15px] 2xl:text-[16px]">We connect our customers with the best.</label>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-delay="500" className="w-full lg:w-[450px] 2xl:w-[500px] h-[60px] lg:h-[65px] 2xl:h-[70px] flex flex-col justify-center px-4">
                <div className="flex flex-row items-center">
                  <img src={eye} alt="" className="w-6 h-6 lg:w-7 lg:h-7 mr-3" />
                  <label className="text-[14px] lg:text-[15px] 2xl:text-[16px] font-600">Advisor success customer launch party.</label>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-delay="600" className="w-full lg:w-[450px] 2xl:w-[500px] h-[60px] lg:h-[65px] 2xl:h-[70px] flex flex-col justify-center px-4">
                <div className="flex flex-row items-center">
                  <img src={sun} alt="" className="w-6 h-6 lg:w-7 lg:h-7 mr-3" />
                  <label className="text-[14px] lg:text-[15px] 2xl:text-[16px] font-600">Business-to-consumer long tail.</label>
                </div>
              </div>
            </div>
          </div>
          <img src={img2} alt="" className="w-full lg:w-[350px] 2xl:w-[450px] h-auto lg:h-[550px] 2xl:h-[700px]" />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full lg:w-[1200px] 2xl:w-[1400px] flex flex-col bg-[#0A2640]">
        <div data-aos="fade-down" data-aos-delay="300" className="w-full lg:w-[1000px] 2xl:w-[1200px] h-auto lg:h-[120px] 2xl:h-[140px] flex flex-col lg:flex-row justify-between items-end m-auto mt-[60px] lg:mt-[80px] 2xl:mt-[100px] px-4 lg:px-0">
          <label className="w-full lg:w-[600px] 2xl:w-[720px] text-white text-[28px] lg:text-[36px] 2xl:text-[48px] font-400 text-center lg:text-left">
            An enterprise template to ramp up your company website
          </label>
          <img src={icons} alt="" className="w-[120px] lg:w-[150px] 2xl:w-[172px] h-auto lg:h-[60px] 2xl:h-[73px] mt-4 lg:mt-0 mx-auto lg:mx-0" />
        </div>
        <div className="w-full lg:w-[1000px] 2xl:w-[1200px] flex flex-col lg:flex-row justify-between gap-6 lg:gap-4 m-auto mt-8 lg:mt-12 2xl:mt-15 px-4 lg:px-0">
          <div data-aos="flip-up" data-aos-delay="400" className="w-full lg:w-[300px] 2xl:w-[350px] rounded-3 bg-white h-auto rounded-xl p-6 lg:p-8 2xl:p-10">
            <label className="w-full lg:w-[250px] 2xl:w-[270px] font-400 text-[18px] lg:text-[20px] 2xl:text-[24px]">"Buyer buzz partner network disruptive non-disclosure agreement business"</label>
            <div className="w-full lg:w-[250px] 2xl:w-[270px] h-[50px] lg:h-[55px] 2xl:h-[60px] flex flex-row mt-6 lg:mt-8 2xl:mt-10">
              <img src={avatar} alt="" className="w-[45px] lg:w-[50px] 2xl:w-[58px] h-[45px] lg:h-[50px] 2xl:h-[58px] rounded-[60px] mr-3 lg:mr-4" />
              <div className="h-[45px] lg:h-[50px] 2xl:h-[60px] flex flex-col justify-between">
                <label className="font-700 text-[14px] lg:text-[15px] 2xl:text-[16px]">Albus Dumbledore</label>
                <label className="font-400 text-[12px] lg:text-[13px] 2xl:text-[14px]">Manager @ Howarts</label>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" data-aos-delay="500" className="w-full lg:w-[300px] 2xl:w-[350px] rounded-3 bg-white h-auto rounded-xl p-6 lg:p-8 2xl:p-10 mb-[60px] lg:mb-[80px] 2xl:mb-[100px]">
            <label className="w-full lg:w-[250px] 2xl:w-[270px] font-400 text-[18px] lg:text-[20px] 2xl:text-[24px]">"Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."</label>
            <div className="w-full lg:w-[250px] 2xl:w-[270px] h-[50px] lg:h-[55px] 2xl:h-[60px] flex flex-row mt-6 lg:mt-8 2xl:mt-10">
              <img src={avatar} alt="" className="w-[45px] lg:w-[50px] 2xl:w-[58px] h-[45px] lg:h-[50px] 2xl:h-[58px] rounded-[60px] mr-3 lg:mr-4" />
              <div className="h-[45px] lg:h-[50px] 2xl:h-[60px] flex flex-col justify-between">
                <label className="font-700 text-[14px] lg:text-[15px] 2xl:text-[16px]">Albus Dumbledore</label>
                <label className="font-400 text-[12px] lg:text-[13px] 2xl:text-[14px]">Manager @ Howarts</label>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" data-aos-delay="600" className="w-full lg:w-[300px] 2xl:w-[350px] rounded-3 bg-white h-auto rounded-xl p-6 lg:p-8 2xl:p-10">
            <label className="w-full lg:w-[250px] 2xl:w-[270px] font-400 text-[18px] lg:text-[20px] 2xl:text-[24px]">"Release facebook responsive web design business model canvas seed money monetization."</label>
            <div className="w-full lg:w-[250px] 2xl:w-[270px] h-[50px] lg:h-[55px] 2xl:h-[60px] flex flex-row mt-6 lg:mt-8 2xl:mt-10 items-center">
              <img src={avatar} alt="" className="w-[45px] lg:w-[50px] 2xl:w-[58px] h-[45px] lg:h-[50px] 2xl:h-[58px] rounded-[60px] mr-3 lg:mr-4" />
              <div className="h-[45px] lg:h-[50px] 2xl:h-[60px] flex flex-col justify-between">
                <label className="font-700 text-[14px] lg:text-[15px] 2xl:text-[16px]">Albus Dumbledore</label>
                <label className="font-400 text-[12px] lg:text-[13px] 2xl:text-[14px]">Manager @ Howarts</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Image */}
      <div data-aos="zoom-in" data-aos-delay="300" className="w-full lg:w-[1000px] 2xl:w-[1100px] h-[200px] lg:h-[300px] 2xl:h-[400px] m-auto bg-cover mt-[60px] lg:mt-[80px] 2xl:mt-[120px] mb-[40px] lg:mb-[50px] 2xl:mb-[60px]"
          style={{ backgroundImage: `url(${content})` }}
      ></div>

      {/* FAQ Section */}
      <div className="w-full lg:w-[1000px] 2xl:w-[1100px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 m-auto mb-[80px] lg:mb-[120px] 2xl:mb-[182px]">
        <label data-aos="fade-right" data-aos-delay="300" className="w-full lg:w-[450px] 2xl:w-[500px] font-400 text-[24px] lg:text-[30px] 2xl:text-[36px]">
          We connect our customers with the best, and help them keep up-and stay open.
        </label>
        <div className="w-full lg:w-[450px] 2xl:w-[500px] flex flex-col">
          <div data-aos="fade-left" data-aos-delay="400" className="w-full lg:w-[450px] 2xl:w-[500px] h-[50px] lg:h-[55px] 2xl:h-[60px] flex flex-row justify-between items-center pb-2 border-b-solid border-b border-b-[#C4C4C4]">
            <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px]">
              We connect our customers with the best?
            </label>
            <img src={follow} alt="" className="w-7 h-7 lg:w-8 lg:h-8 2xl:w-9 2xl:h-9" />
          </div>
          <div data-aos="fade-left" data-aos-delay="500" className="w-full lg:w-[450px] 2xl:w-[500px] h-[50px] lg:h-[55px] 2xl:h-[60px] flex flex-row justify-between items-center pb-2 border-b-solid border-b border-b-[#C4C4C4]">
            <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px]">
              Android research & development rockstar?
            </label>
            <img src={follow} alt="" className="w-7 h-7 lg:w-8 lg:h-8 2xl:w-9 2xl:h-9" />
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div data-aos="fade-down" data-aos-delay="300" className="w-full lg:w-[700px] 2xl:w-[842px] flex flex-col items-center m-auto mb-12 lg:mb-16 2xl:mb-20">
        <label className="font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#777777]">Our Blog</label>
        <label className="w-full lg:w-[700px] 2xl:w-[842px] font-400 text-[28px] lg:text-[36px] 2xl:text-[48px] text-center mt-2 lg:mt-3">
          Value proposition accelerator product management venture
        </label>
      </div>

      {/* Blog Cards */}
      <div className="w-full lg:w-[900px] 2xl:w-[1000px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 m-auto">
        <div data-aos="flip-left" data-aos-delay="400" className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-col">
          <img src={card1} alt="" className="w-full lg:w-[280px] 2xl:w-[300px] h-[150px] lg:h-[180px] 2xl:h-[200px] rounded-2xl mb-4 lg:mb-6" />
          <div className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-row mb-3">
            <label className="font-700 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#0A2640] mr-2 lg:mr-3">Category</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777]">November 22, 2021</label>
          </div>
          <label className="w-full lg:w-[280px] 2xl:w-[300px] h-auto font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] mb-4 lg:mb-5">
            Pitch termsheet backing validation focus release.
          </label>
          <div className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-row mt-4 lg:mt-5">
            <img src={avatar} alt="" className="w-[25px] h-[25px] lg:w-[28px] lg:h-[28px] 2xl:w-[30px] 2xl:h-[30px] mr-2 lg:mr-3" />
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px]">Chandler Bing</label>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="500" className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-col">
          <img src={card2} alt="" className="w-full lg:w-[280px] 2xl:w-[300px] h-[150px] lg:h-[180px] 2xl:h-[200px] rounded-2xl mb-4 lg:mb-6" />
          <div className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-row mb-3">
            <label className="font-700 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#0A2640] mr-2 lg:mr-3">Category</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777]">November 22, 2021</label>
          </div>
          <label className="w-full lg:w-[280px] 2xl:w-[300px] h-auto font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] mb-4 lg:mb-5">
            Seed round direct mailing non-disclosure agreement graphical user interface rockstar.
          </label>
          <div className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-row mt-4 lg:mt-5">
            <img src={avatar} alt="" className="w-[25px] h-[25px] lg:w-[28px] lg:h-[28px] 2xl:w-[30px] 2xl:h-[30px] mr-2 lg:mr-3" />
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px]">Rachel Green</label>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="600" className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-col">
          <img src={card3} alt="" className="w-full lg:w-[280px] 2xl:w-[300px] h-[150px] lg:h-[180px] 2xl:h-[200px] rounded-2xl mb-4 lg:mb-6" />
          <div className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-row mb-3">
            <label className="font-700 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#0A2640] mr-2 lg:mr-3">Category</label>
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#777777]">November 22, 2021</label>
          </div>
          <label className="w-full lg:w-[280px] 2xl:w-[300px] h-auto font-400 text-[16px] lg:text-[18px] 2xl:text-[20px] mb-4 lg:mb-5">
            Beta prototype sales iPad gen-z marketing network effects value proposition
          </label>
          <div className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-row mt-4 lg:mt-5">
            <img src={avatar} alt="" className="w-[25px] h-[25px] lg:w-[28px] lg:h-[28px] 2xl:w-[30px] 2xl:h-[30px] mr-2 lg:mr-3" />
            <label className="font-400 text-[14px] lg:text-[15px] 2xl:text-[16px]">Monica Geller</label>
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <button data-aos="zoom-in" data-aos-delay="700" className="w-full lg:w-[200px] 2xl:w-[220px] h-[50px] lg:h-[55px] 2xl:h-[60px] mt-[40px] lg:mt-[60px] 2xl:mt-[85px] mb-[60px] lg:mb-[80px] 2xl:mb-[125px] rounded-[56px] border-[2px] lg:border-[3px] border-solid border-[#0A2640] text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#0A2640] font-700 m-auto">
        Load more
      </button>
    </div>
  )
}

export default DefaultPage