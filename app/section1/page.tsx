import React from "react";
import Image from "next/image";
import chair from "../../public/sofa promotional header.png";
import lamp from "../../public/image 32.png";
import star from "../../public/promotional page nav.png"
export default function Section1() {
  return (
    <div>
      {" "}
      <div className="mainContainer mt-6 relative flex  items-center  justify-center bg-[#F2F0FF] [570px] lg:h-[764px]  w-screen">
        <div className="subContainer flex   bg-[#F2F0FF] h-full w-[90%]">
          <div className="part1 flex justify-start  items-start mt-2">
            <Image src={lamp} alt="lamp" />
          </div>
          <div className="part2 flex flex-col md:gap-1   justify-center">
            <div className="font-semibold text-[5px] clxs:text-[7px] sm:text-[10px] md:text-[14px] elg:text-[16px]  text-[#FB2E86]">
              Best Furniture For Your Castle....
            </div>
            <div className="text-[8px] s:text-[18px] sm:text-[25px] md:text-[35px] lg:text-[40px] clg:text-[48px] elg:text-[53px] elg:leading-[81.98px] tracking-[1.5%] clxs:text-[12px] font-bold">
              New Furniture Collection Trends in 2020
            </div>
            <div className="font-semibold text-[5px] clxs:text-[7px] sm:text-[10px] md:text-[14px] elg:text-[16px] md:leading-[28px] text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </div>

            <button className=" md:mt-6 mt-3 text-[5px] clxs:text-[9px] w-[80px] h-[18px] sm:w-[120px] sm:h-[28px] sl:w-[163px] sl:h-[50px] text-white bg-[#FB2E86] rounded-[2px] hover:bg-[#d73078]  sl:text-[17px] leading-[19.92px] tracking-[2%] hover:shadow-black hover:shadow-sm">
            Add To Cart
            </button>
            <Image src={star} alt="" className="absolute md:bottom-10 md:w-[66px] w-[40px]  bottom-4 right-[55%] left-[45%]" />
          </div>
          <div className="part3 flex mt-8 mb-8  ">
            <Image
              src={chair}
              alt="chair"
              className=" xxmd:w-[500px] h-34 elg:w-[706px] elg:h-[689px] lg:w-[580px] lg:h-[510px] md:w-[400px] md:h-[389px]  xxmd:pt-3 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
