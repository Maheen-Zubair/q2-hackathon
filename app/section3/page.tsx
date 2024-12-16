import React from "react";
import Image from "next/image";
import image1 from "../../public/Group 153.png";
export default function Section3() {
  return (
    <div className="mainContainer w-screen mt-24 bg-[#F1F0FF] flex justify-center items-center">
      <div className="subContainer justify-center items-center lg:w-[60%] md:w-[70%] w-[80%]  h-[220px] sm:[300px] md:h-[480px] lg:h-[550px] flex  bg-[#F1F0FF] ">
        <div className="w-[50%] ">
        <Image src={image1} alt="image" />
        </div>
        <div className="w-[50%] flex flex-col md:gap-6  ">
          <h1 className="text-[#151875] font-bold font-josefin text-[15px] sm:text-[24px]  md:text-[28px] lg:text-[35px] md:leading-[46.2px] tracking-[1.5%]">Unique Features Of leatest & Trending Poducts</h1>
          <ul className="list-non flex flex-col md:gap-2 ">
            <li className="flex items-center md:gap-2">
              <div className="md:w-[11px] w-[7px] h-[7px] md:h-[11px] pr-1 bg-[#F52B70] rounded-full"></div>
              <span className="font-[500] text-[7px] sm:text-[8px]  md:text-[10px] lg:text-[16px] md:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">
                All frames constructed with hardwood solids and laminates
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="md:w-[11px] w-[7px] h-[7px] md:h-[11px] pr-2 bg-[#2B2BF5] rounded-full"></div>
              <span className="font-[500] text-[7px] sm:text-[8px]  md:text-[10px] lg:text-[16px] md:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">Reinforced with double wood dowels, glue, screw - nails corner 
              blocks and machine nails</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="md:w-[11px] w-[7px] h-[7px] md:h-[11px] pr-1 bg-[#2BF5CC] rounded-full"></div>
              <span className="font-[500] text-[7px] sm:text-[8px]  md:text-[10px] lg:text-[16px] md:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">Arms, backs and seats are structurally reinforced</span>
            </li>
            <div className="flex gap-3  items-center">
            <button className=" md:mt-6 mt-3 text-[5px] clxs:text-[9px] w-[80px] h-[18px] sm:w-[120px] sm:h-[28px] sl:w-[163px] sl:h-[50px] text-white bg-[#FB2E86] rounded-[2px] hover:bg-[#d73078]  sl:text-[17px] leading-[19.92px] tracking-[2%] hover:shadow-black hover:shadow-sm">
            Add To Cart
            </button>
            <div className="flex flex-col mt-5 ">
            <h1 className=" md:text-[14px] font-semibold tracking-[2%] text-[#151875] text-[5px] clxs:text-[9px]">B&B Italian Sofa</h1>
           <h1 className="font-normal md:text-[14px]  text-[#151875] text-[5px] clxs:text-[9px]">$32.00</h1> 
           </div>
            </div>
          </ul>
        </div>
        </div>
      </div>
  );
}
