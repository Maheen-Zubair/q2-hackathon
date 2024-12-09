import React from "react";
import Image from "next/image";
import image2 from "../../public/image 1168.png";
import image3 from "../../public/image 1171.png";
import image4 from "../../public/image 20.png";
import divSlide from "../../public/hhhhh.png";
import image1 from "../../public/image 20.png";
export default function Section6() {
  return (
    <div>
      <div className="flex flex-col text-[#151875] pt-24 pb-24 items-center  gap-[10px] md:gap-[20px]">
        <h1 className="font-bold  text-[30px] md:text-[38px] lg:text-[42px] ">
          Top Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 sl:grid-cols-3 clg:grid-cols-4 gap-4 ">
          <div className="blog1 group w-[269px] h-[345px] ">
            <div className="part1 h-[269px] w-[269px] relative flex justify-center items-center bg-[#F6F7FB] rounded-full  ">
              <Image src={image1} alt="image" className="" />
              <div className="w-[94px] hidden group-hover:flex hover:shadow-black hover:shadow-sm  h-[29px] absolute top-[219px] left-[88px] rounded-[2px] justify-center items-center  text-[12px] bg-[#08D15F] ">
                <h4 className="text-white">View Shop</h4>
              </div>
            </div>

            <div className="part2 flex flex-col pt-2 justify-center items-center">
              <h1 className=" font-semibold">Mini LCW Chair</h1>
              <h1 className="font-semibold">$56.00</h1>
            </div>
          </div>
          <div className="blog2 group w-[269px] h-[345px] ">
            <div className="part2 h-[269px] w-[269px] relative flex justify-center items-center bg-[#F6F7FB] rounded-full  ">
              <Image src={image2} alt="image2" className="" />
              <div className="w-[94px] hidden group-hover:flex  h-[29px] absolute top-[219px] left-[88px] rounded-[2px] justify-center items-center  text-[12px] bg-[#08D15F] ">
                <h4 className="text-white hover:shadow-black hover:shadow-sm ">
                  View Shop
                </h4>
              </div>
            </div>

            <div className="part2 flex flex-col pt-2 justify-center items-center">
              <h1 className=" font-semibold">Mini LCW Chair</h1>
              <h1 className="font-semibold">$56.00</h1>
            </div>
          </div>
          <div className="blog3 group w-[269px] h-[345px] ">
            <div className="part3 h-[269px] w-[269px] relative flex justify-center items-center bg-[#F6F7FB] rounded-full  ">
              <Image src={image3} alt="image" className="" />
              <div className="w-[94px] hidden group-hover:flex  h-[29px] absolute top-[219px] left-[88px] rounded-[2px] justify-center items-center  text-[12px] bg-[#08D15F] ">
                <h4 className="text-white hover:shadow-black hover:shadow-sm ">
                  View Shop
                </h4>
              </div>
            </div>

            <div className="part2 flex flex-col pt-2 justify-center items-center">
              <h1 className=" font-semibold">Mini LCW Chair</h1>
              <h1 className="font-semibold">$56.00</h1>
            </div>
          </div>
          <div className="blog4 group w-[269px] h-[345px] ">
            <div className="part4 h-[269px] w-[269px] relative flex justify-center items-center bg-[#F6F7FB] rounded-full  ">
              <Image src={image4} alt="image" className="" />
              <div className="w-[94px] hidden group-hover:flex  h-[29px] absolute top-[219px] left-[88px] rounded-[2px] justify-center items-center  text-[12px] bg-[#08D15F] ">
                <h4 className="text-white hover:shadow-black hover:shadow-sm ">
                  View Shop
                </h4>
              </div>
            </div>

            <div className="part2 flex flex-col pt-2 justify-center items-center">
              <h1 className=" font-semibold">Mini LCW Chair</h1>
              <h1 className="font-semibold">$56.00</h1>
            </div>
          </div>
        </div>
        <Image src={divSlide} alt="slide" />
      </div>
    </div>
  );
}
