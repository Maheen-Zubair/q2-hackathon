import React from "react";
import image from "../../public/Rectangle 102.png";
import Image from "next/image";
export default function Section7() {
  return (
    <div>
      <div className="mainContainer relative flex flex-col justify-center items-center">
        <Image src={image} alt="image" />
        <div className="w-1/2 flex top-[22%] lg:top-[24%] absolute flex-col justify-center items-center">
          <div className="text-[#151875] font-bold font-josefin text-[10px] xxmd:text-[15px] sm:text-[24px] md:text-[28px] lg:text-[35px] md:leading-[46.2px] tracking-[1.5%] text-center">
            Get Latest Update By Subscribe Our Newsletter
          </div>
          <button className="md:mt-6 mt-3 text-[5px] clxs:text-[9px] w-[80px] h-[18px] sm:w-[120px] sm:h-[28px] sl:w-[163px] sl:h-[47px] text-white bg-[#FB2E86] rounded-[2px] hover:bg-[#d73078] sl:text-[17px] leading-[19.92px] tracking-[2%] hover:shadow-black hover:shadow-sm">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
