"use client"
import React from "react";
import Image from "next/image";
import chair from "../../public/sofa promotional header.png";
import lamp from "../../public/image 32.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Section1() {
  
  return (
    <div >
         <Swiper
        modules={[Navigation, Pagination, Autoplay,]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
      >
      <SwiperSlide>
      <div className="mainContainer mt-6  relative flex  items-center  justify-center bg-[#F2F0FF] h-full   w-screen">

        <div className="subContainer sm:flex-row flex-col flex   bg-[#F2F0FF] h-full w-[90%] m-0 p-0">
          <div className="part1 flex justify-start sm:pl-10 items-start mt-2 ">
            <Image
              src={lamp}
              alt="lamp"
              className=" sm:h-[250px] h-[150px] sm:w-[400px] w-[130px]  "
            />
          </div>
          <div className="part2 flex flex-col md:gap-1 mt-4 sm:mt-0  justify-center">
            <div className="font-semibold text-[10px] md:text-[14px] elg:text-[16px]  text-[#FB2E86]">
              Best Furniture For Your Castle....
            </div>
            <div className="text-[32px] md:text-[36px] lg:text-[40px] clg:text-[48px] elg:text-[53px] elg:leading-[81.98px] tracking-[1.5%] font-bold">
              New Furniture Collection Trends in 2020
            </div>

            <div className="font-semibold text-[14px] elg:text-[16px] md:leading-[28px] text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </div>

            <button className=" md:mt-6 mt-3 text-[12px] w-[120px] h-[28px] sl:w-[163px] sl:h-[50px] text-white bg-[#FB2E86] rounded-[2px] hover:bg-[#d73078]  sl:text-[17px] leading-[19.92px] tracking-[2%] hover:shadow-black hover:shadow-sm">
              Add To Cart
            </button>
           
          </div>
          <div className="w-full  flex justify-center md:h-[689px] items-center">
            <div className="part3 flex mt-8 mb-8  w-[300px] sm:h-[550px] sm:w-[550px] flex-col items-center justify-center ">
              <Image
                src={chair}
                alt="chair"
                className=" xxmd:w-[500px] h-34 elg:w-[706px] elg:h-[689px] lg:w-[580px] lg:h-[510px] md:w-[400px] md:h-[389px]  xxmd:pt-3 "
              />
            </div>
          </div>
        </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="mainContainer mt-6 relative flex items-center justify-center bg-[#F2F0FF] h-full w-screen">
            <div className="subContainer sm:flex-row flex-col flex bg-[#F2F0FF] h-full w-[90%] m-0 p-0">
              <div className="part1 flex justify-start sm:pl-10 items-start mt-2">
                <Image
                  src={lamp}
                  alt="lamp"
                  className="sm:h-[250px] h-[150px] sm:w-[400px] w-[130px]"
                />
              </div>
              <div className="part2 flex flex-col md:gap-1 mt-4 sm:mt-0 justify-center">
                <div className="font-semibold text-[10px] md:text-[14px] elg:text-[16px] text-[#FB2E86]">
                  Best Furniture For Your Castle....
                </div>
                <div className="text-[32px] md:text-[36px] lg:text-[40px] clg:text-[48px] elg:text-[53px] elg:leading-[81.98px] tracking-[1.5%] font-bold">
                  New Furniture Collection Trends in 2020
                </div>
                <div className="font-semibold text-[14px] elg:text-[16px] md:leading-[28px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Magna in est adipiscing in phasellus non in justo.
                </div>
                <button className="md:mt-6 mt-3 text-[12px] w-[120px] h-[28px] sl:w-[163px] sl:h-[50px] text-white bg-[#FB2E86] rounded-[2px] hover:bg-[#d73078] sl:text-[17px] leading-[19.92px] tracking-[2%] hover:shadow-black hover:shadow-sm">
                  Add To Cart
                </button>
                {/* <Image
                  src={star}
                  alt="star"
                  className="absolute md:bottom-10 md:w-[66px] w-[40px] bottom-4 right-[55%] left-[45%]"
                /> */}
              </div>
              <div className="w-full flex justify-center lg:h-[689px] items-center">
                <div className="part3 flex mt-8 mb-8 w-[300px] sm:h-[550px] sm:w-[550px]  flex-col items-center justify-center">
                  <Image
                    src={chair}
                    alt="chair"
                    className="xxmd:w-[500px] h-34 elg:w-[706px] elg:h-[689px] lg:w-[580px] lg:h-[510px] md:w-[400px] md:h-[389px] xxmd:pt-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mainContainer mt-6 relative flex items-center justify-center bg-[#F2F0FF] h-full w-screen">
            <div className="subContainer sm:flex-row flex-col flex bg-[#F2F0FF] h-full w-[90%] m-0 p-0">
              <div className="part1 flex justify-start sm:pl-10 items-start mt-2">
                <Image
                  src={lamp}
                  alt="lamp"
                  className="sm:h-[250px] h-[150px] sm:w-[400px] w-[130px]"
                />
              </div>
              <div className="part2 flex flex-col md:gap-1 mt-4 sm:mt-0 justify-center">
                <div className="font-semibold text-[10px] md:text-[14px] elg:text-[16px] text-[#FB2E86]">
                  Best Furniture For Your Castle....
                </div>
                <div className="text-[32px] md:text-[36px] lg:text-[40px] clg:text-[48px] elg:text-[53px] elg:leading-[81.98px] tracking-[1.5%] font-bold">
                  New Furniture Collection Trends in 2020
                </div>
                <div className="font-semibold text-[14px] elg:text-[16px] md:leading-[28px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Magna in est adipiscing in phasellus non in justo.
                </div>
                <button className="md:mt-6 mt-3 text-[12px] w-[120px] h-[28px] sl:w-[163px] sl:h-[50px] text-white bg-[#FB2E86] rounded-[2px] hover:bg-[#d73078] sl:text-[17px] leading-[19.92px] tracking-[2%] hover:shadow-black hover:shadow-sm">
                  Add To Cart
                </button>
                {/* <Image
                  src={star}
                  alt="star"
                  className="absolute md:bottom-10 md:w-[66px] w-[40px] bottom-4 right-[55%] left-[45%]"
                /> */}
              </div>
              <div className="w-full flex justify-center lg:h-[689px] items-center">
                <div className="part3 flex mt-8 mb-8 w-[300px] sm:h-[550px] sm:w-[550px]  flex-col items-center justify-center">
                  <Image
                    src={chair}
                    alt="chair"
                    className="xxmd:w-[500px] h-34 elg:w-[706px] elg:h-[689px] lg:w-[580px] lg:h-[510px] md:w-[400px] md:h-[389px] xxmd:pt-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
  );
}
