import React from "react";
import Image from "next/image";
import image1 from "../../public/image 1171.png";
import image2 from "../../public/image 1170.png";
import image3 from "../../public/image 31.png";
import image4 from "../../public/chair black.png";

export default function Section5b() {
  return (
    //   <div className="p-8">
    //   {/* Grid Container */}
    //   <div className="grid grid-cols-4 gap-6">
    //     {/* First Chair Card */}
    //     <div className="flex flex-col items-center text-center border p-4 rounded-lg">
    //       <img
    //         src="/images/chair1.png"
    //         alt="Cantilever chair"
    //         className="w-full h-32 object-cover rounded-lg"
    //       />
    //       <h3 className="mt-4 text-lg font-semibold">Cantilever chair</h3>
    //       <p className="text-gray-500">$250.00</p>
    //     </div>

    //     {/* Second Chair Card */}
    //     <div className="flex flex-col items-center text-center border p-4 rounded-lg">
    //       <img
    //         src="/images/chair2.png"
    //         alt="Cantilever chair"
    //         className="w-full h-32 object-cover rounded-lg"
    //       />
    //       <h3 className="mt-4 text-lg font-semibold">Cantilever chair</h3>
    //       <p className="text-gray-500">$250.00</p>
    //     </div>

    //     {/* Third Chair Card */}
    //     <div className="flex flex-col items-center text-center border p-4 rounded-lg">
    //       <img
    //         src="/images/chair3.png"
    //         alt="Cantilever chair"
    //         className="w-full h-32 object-cover rounded-lg"
    //       />
    //       <h3 className="mt-4 text-lg font-semibold">Cantilever chair</h3>
    //       <p className="text-gray-500">$250.00</p>
    //     </div>

    //     {/* Fourth Chair Card */}
    //     <div className="flex flex-col items-center text-center border p-4 rounded-lg">
    //       <img
    //         src="/images/chair4.png"
    //         alt="Cantilever chair"
    //         className="w-full h-32 object-cover rounded-lg"
    //       />
    //       <h3 className="mt-4 text-lg font-semibold">Cantilever chair</h3>
    //       <p className="text-gray-500">$250.00</p>
    //     </div>

    //     {/* First Promotional Box */}
    //     <div className="col-span-2 flex flex-col items-center justify-center bg-blue-100 p-8 text-center rounded-lg">
    //       <h2 className="text-xl font-bold">23% off in all products</h2>
    //       <a href="#" className="mt-4 text-blue-600 hover:underline">
    //         Shop Now
    //       </a>
    //     </div>

    //     {/* Second Promotional Box */}
    //     <div className="col-span-2 flex flex-col items-center justify-center bg-blue-200 p-8 text-center rounded-lg">
    //       <h2 className="text-xl font-bold">23% off in all products</h2>
    //       <a href="#" className="mt-4 text-blue-600 hover:underline">
    //         View Collection
    //       </a>
    //     </div>

    //     {/* Executive Chair 1 */}
    //     <div className="col-span-2">
    //       <h3 className="text-xl font-bold mb-4">Executive Seat Chair</h3>
    //       <ul className="space-y-4">
    //         <li className="flex items-center justify-between border-b pb-2">
    //           <img
    //             src="/images/executive1.png"
    //             alt="Executive Chair"
    //             className="w-16 h-16 object-cover rounded-lg"
    //           />
    //           <p className="font-medium">$200</p>
    //         </li>
    //         <li className="flex items-center justify-between border-b pb-2">
    //           <img
    //             src="/images/executive2.png"
    //             alt="Executive Chair"
    //             className="w-16 h-16 object-cover rounded-lg"
    //           />
    //           <p className="font-medium">$200</p>
    //         </li>
    //         <li className="flex items-center justify-between border-b pb-2">
    //           <img
    //             src="/images/executive3.png"
    //             alt="Executive Chair"
    //             className="w-16 h-16 object-cover rounded-lg"
    //           />
    //           <p className="font-medium">$200</p>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
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
