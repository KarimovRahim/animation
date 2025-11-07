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
    <div className="w-full lg:w-[1200px] 2xl:w-[1400px] flex flex-col m-auto mt-[30px] lg:mt-[40px] 2xl:mt-[45px] mb-8 lg:mb-10 px-4 lg:px-6">
      {/* Header Section */}
      <div data-aos="fade-down" data-aos-delay="300" className="w-full lg:w-[700px] 2xl:w-[800px] flex flex-col items-center m-auto">
        <label className="text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#0A2640] mt-[20px] lg:mt-[25px] 2xl:mt-[30px] mb-2 lg:mb-3">Blog</label>
        <label className="text-[32px] lg:text-[48px] 2xl:text-[64px] text-[#0A2640] mb-[20px] lg:mb-[25px] 2xl:mb-[30px] text-center">
          Thoughts and words
        </label>
      </div>

      {/* Featured Post */}
      <div data-aos="fade-up" data-aos-delay="400" className="w-full lg:w-[1000px] 2xl:w-[1200px] h-auto lg:h-[400px] 2xl:h-[500px] m-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 border-b-solid border-b-[#0A2640] border-b mb-[60px] lg:mb-[80px] 2xl:mb-[100px] pb-8 lg:pb-0">
        <img src={cont} alt="" className="w-full lg:w-[450px] 2xl:w-[550px] h-auto lg:h-[300px] 2xl:h-[400px]" />
        <div className="w-full lg:w-[450px] 2xl:w-[550px] flex flex-col">
          <label className="text-[20px] lg:text-[24px] 2xl:text-[30px]">Category</label>
          <label className="w-full lg:w-[450px] 2xl:w-[550px] text-[32px] lg:text-[48px] 2xl:text-[64px]">
            Pitch termsheet backing validation focus release.
          </label>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="w-full lg:w-[900px] 2xl:w-[1000px] flex flex-row flex-wrap gap-6 lg:gap-8 2xl:gap-[50px] justify-between m-auto">
        {/* Card 1 */}
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

        {/* Card 2 */}
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

        {/* Card 3 */}
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

        {/* Card 4 */}
        <div data-aos="flip-right" data-aos-delay="400" className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-col">
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

        {/* Card 5 */}
        <div data-aos="flip-right" data-aos-delay="500" className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-col">
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

        {/* Card 6 */}
        <div data-aos="flip-right" data-aos-delay="600" className="w-full lg:w-[280px] 2xl:w-[300px] flex flex-col">
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

export default LastPage