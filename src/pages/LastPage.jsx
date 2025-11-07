import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


import cont from "../assets/cont.png"
import avatar from "../assets/avatar.png"
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.png"

const LastPage = () => {

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="w-[1400px] flex flex-col m-auto mt-[45px] mb-10">
      <div data-aos="fade-down" data-aos-delay="300" className="w-[800px] flex flex-col items-center m-auto">
        <label htmlFor="" className="text-[20px] text-[#0A2640] mt-[30px] mb-3">Blog</label>
        <label htmlFor="" className="text-[64px] text-[#0A2640] mb-[30px]">Thoughts and words</label>
      </div>
      <div data-aos="fade-up" data-aos-delay="400" className="w-[1200px] h-[500px] m-auto flex flex-row justify-between items-center border-b-solid border-b-[#0A2640] border-b mb-[100px]">
        <img src={cont} alt="" className="w-[550px] h-[400px]" />
        <div className="w-[550px] flex flex-col">
          <label htmlFor="" className="text-[30px]">Category</label>
          <label htmlFor="" className="w-[550px] text-[64px]">
            Pitch termsheet backing validation focus release.
          </label>
        </div>
      </div>

      <div className="w-[1000px] flex flex-row flex-wrap gap-[50px] justify-between m-auto">
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
        <div data-aos="flip-right" data-aos-delay="400" className="w-[300px] flex flex-col">
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
        <div data-aos="flip-right" data-aos-delay="500" className="w-[300px] flex flex-col">
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
        <div data-aos="flip-right" data-aos-delay="600" className="w-[300px] flex flex-col">
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

export default LastPage