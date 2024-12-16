import React from "react";
import Image from "next/image";
import logo from "../../public/hecko(footer).png";
import icon from "../../public/Group 205.png";
export default function Footer() {
  return (
    <div className="main relative flex lg:flex-row flex-col justify-center items-center bg-[#EEEFFB] pt-14 pb-14 w-screen text-[#8A8FB9]">
      <div className="sub flex lg:flex-row flex-col justify-center items-center lg:h-[326px] w-3/4  gap-10 ">
        <div className="box1 w-full lg:w-[30%]  lg:h-[326px]  ">
          <div className="part1 flex gap-4 flex-col ">
            <div className="flex flex-col gap-3">
              <Image
                src={logo}
                alt="logo"
                className=" w-[70px] h-[20px]  sl:w-[98px] sl:h-[30px] "
              />
            </div>
            <div className="relative w-[70%] lg:w-full flex justify-center items-center">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="h-[44px] w-full border-none bg-[#FFFFFF] relative  rounded-[3px] border-[1.5px] border-[#FAFAFA] placeholder:font-normal placeholder:text-[16px] placeholder:text-[#8A8FB9] placeholder:leading-[24px]  pr-10 pl-2"
              />
              <div className="absolute top-1 bottom-1  right-1 flex text-[#EEEFFB] justify-center items-center w-[35%] bg-[#FB2E86] rounded-[3px] hover:bg-[#d73078] ">
                <div className="">Sign Up</div>
              </div>
            </div>
            <h3 className="text-sm ">Contact Info</h3>
            <h2 className="text-sm ">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </h2>
          </div>
        </div>

        <div className="box2 lg:h-[326px] w-full lg:w-[20%] ">
          <div className="part1 flex gap-4 flex-col ">
            <div className=" text-lg font-semibold text-[#000000]">
              Catagories
            </div>
            <div className="flex flex-col gap-3">
              <h1 className=" text-sm ">Laptops & Computers</h1>
              <h2 className="text-sm ">Cameras & Photography</h2>
              <h3 className="text-sm ">Smart Phones & Tablets</h3>
              <h1 className=" text-sm ">Video Games & Consoles</h1>
              <h1 className=" text-sm ">Waterproof Headphones</h1>
            </div>
          </div>
        </div>
        <div className="box3 lg:h-[326px]  w-full lg:w-[20%]">
          <div className="part1 flex gap-4 flex-col ">
            <div className=" text-lg font-semibold text-[#000000]">
              Customer Care
            </div>
            <div className="flex flex-col gap-3">
              <h1 className=" text-sm ">My Account</h1>
              <h2 className="text-sm ">Discount</h2>
              <h3 className="text-sm ">Returns</h3>
              <h1 className=" text-sm ">Orders History</h1>
              <h1 className=" text-sm ">Order Tracking</h1>
            </div>
          </div>
        </div>

        <div className="box5 lg:h-[326px]  w-full lg:w-[20%] ">
          <div className="part1 flex gap-4 flex-col ">
            <div className=" text-lg text-[#000000] font-semibold">Pages</div>
            <div className="flex flex-col gap-3">
              <h1 className=" text-sm ">Blog</h1>
              <h2 className="text-sm ">Category</h2>
              <h3 className="text-sm ">Pre-Built Pages</h3>
              <h1 className=" text-sm ">
                Visual Composer Elements
              </h1>
              <h1 className=" text-sm ">WooCommerce Pages</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center  text-[#9DA0AE]  ">
        <div className="gap-2 flex items-center absolute bottom-3 left-[20%] ">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline "
          >
            <path
              d="M9.49984 18.3333C14.1022 18.3333 17.8332 14.6023 17.8332 9.99996C17.8332 5.39759 14.1022 1.66663 9.49984 1.66663C4.89746 1.66663 1.1665 5.39759 1.1665 9.99996C1.1665 14.6023 4.89746 18.3333 9.49984 18.3333Z"
              stroke="#716e6e"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9998 8.14811C11.9998 8.14811 10.9704 6.66663 9.25474 6.66663C7.53905 6.66663 6.1665 8.14811 6.1665 9.99996C6.1665 11.8518 7.53905 13.3333 9.25474 13.3333C10.9704 13.3333 11.9998 11.8518 11.9998 11.8518"
              stroke="#716e6e"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="">Copyright Rimel 2022. All right reserved</p>
        </div>

        <Image
          src={icon}
          alt="icon"
          className="absolute bottom-3 right-[20%] "
        />
      </div>
    </div>
  );
}
