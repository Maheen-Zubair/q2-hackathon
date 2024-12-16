import React from "react";
import Image from "next/image";
import image1 from "../../public/image 1171.png";
import image2 from "../../public/image 1170.png";
import image3 from "../../public/image 31.png";
import image4 from "../../public/chair black.png";

export default function Section5b() {
  return (
    <div className="flex flex-col text-[#151875] pt-24 pb-24 items-center  gap-[10px] md:gap-[20px]">
    <h1 className="font-bold  text-[30px] md:text-[38px] lg:text-[42px] ">
    Trending Products
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
    
      <div className=" blog1 w-[270px] h-[350px]  flex-col flex items-center pt-3 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="w-[247px] h-[244px] bg-[#F5F6F8] flex justify-center items-center ">
          <Image src={image1} alt={"image"} />
        </div>
        <div className="mt-4 ">
          <div className="font-semibold text-[16px] text-[#151875]">
            Cantilever chair
          </div>
          <div className=" flex gap-2 justify-center items-center">
            <h1 className="text-[14px] weight-semibold text-[#151875] ">
              $26.00
            </h1>
            <h1 className="text-[12px] font-[400] line-through text-[#1518754D]">
              $42.00
            </h1>
          </div>
        </div>
      </div>

      <div className=" blog2 w-[270px] h-[350px]  flex-col flex items-center pt-3 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="w-[247px] h-[244px] bg-[#F5F6F8] flex justify-center items-center  ">
          <Image src={image2} alt={"image"} />
        </div>
        <div className="mt-4 ">
          <div className="font-semibold text-[16px] text-[#151875]">
            Cantilever chair
          </div>
          <div className=" flex gap-2 justify-center items-center">
            <h1 className="text-[14px] weight-semibold text-[#151875] ">
              $26.00
            </h1>
            <h1 className="text-[12px] font-[400] line-through text-[#1518754D]">
              $42.00
            </h1>
          </div>
        </div>
      </div>
      <div className=" blog3 w-[270px] h-[350px]  flex-col flex items-center pt-3 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="w-[247px] h-[244px] bg-[#F5F6F8] flex justify-center items-center  ">
          <Image src={image3} alt={"image"} />
        </div>
        <div className="mt-4 ">
          <div className="font-semibold text-[16px] text-[#151875]">
            Cantilever chair
          </div>
          <div className=" flex gap-2 justify-center items-center">
            <h1 className="text-[14px] weight-semibold text-[#151875] ">
              $26.00
            </h1>
            <h1 className="text-[12px] font-[400] line-through text-[#1518754D]">
              $42.00
            </h1>
          </div>
        </div>
      </div>
      <div className=" blog4 w-[270px] h-[350px]  flex-col flex items-center pt-3 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="w-[247px] h-[244px] bg-[#F5F6F8] flex justify-center items-center  ">
          <Image src={image4} alt={"image"} />
        </div>
        <div className="mt-4 ">
          <div className="font-semibold text-[16px] text-[#151875]">
            Cantilever chair
          </div>
          <div className=" flex gap-2 justify-center items-center">
            <h1 className="text-[14px] weight-semibold text-[#151875] ">
              $26.00
            </h1>
            <h1 className="text-[12px] font-[400] line-through text-[#1518754D]">
              $42.00
            </h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
