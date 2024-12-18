import React from "react";
import Image from "next/image";
import image1 from "../../public/Rectangle 56.png";
import logo1 from "../../public/free-delivery 1.png";
import logo2 from "../../public/cashback 1.png";
import logo3 from "../../public/premium-quality 1.png";
import logo4 from "../../public/24-hours-support 1.png";
import slide from "../../public/Group 89.png";
import picture from "../../public/Group 200.png";

export default function AboutUs() {
  return (
    <div>
      <div className="flex flex-col mt-5 items-center justify-center min-h-screen ">
        <div className="lg:h-[286px] h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
          <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
            <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            About Us
            </h1>
            <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
              Home . Pages <span className="text-[#FB2E86]">. About Us</span>
            </p>
          </div>
        </div>
        <div className="flex sm:mt-36 mt-10 justify-center items-center  flex-col ">
          <div className="grid elg:grid-cols-2 grid-cols-1 sm:gap-6 ">
            <div className=" md:h-[409px] p-4 md:w-[550px] xxmd:h-[350px] xxmd:w-[400px] w-[350] h-[300px]">
              <Image src={image1} alt="image1" />
            </div>
            <div className="md:w-[550px] p-4  xxmd:w-[400px] w-[350] gap-4 flex flex-col sm:pt-8">
              <h1 className="text-[36px] font-josefin text-[#151875] font-bold">
                {" "}
                Know About Our Ecomerce Business, History
              </h1>
              <p className="text-[#8A8FB9] font-semi">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <button className="h-[44px] w-[145px] bg-[#FB2E86] rounded-[3px] hover:bg-pink-600 transition duration-300 text-white text-[18px] mt-[50px] ">
                Contact Us
              </button>
            </div>
          </div>
          {/* ---------------Our Features----------- */}
          <div className=" flex justify-center flex-col mt-[100px]  items-center gap-2 sm:gap-5 md:gap-10">
            <h1 className="font-bold  text-[30px]   md:text-[38px] lg:text-[42px] ">
              Our Features
            </h1>
            <div className=" grid  grid-cols-1 sm:grid-cols-2 clg:grid-cols-4 gap-5  ">
              <div className="blog1 w-[270px] h-[320px]  flex justify-center items-center gap-5 flex-col shadow-xl  hover:shadow-2xl transition-shadow duration-300">
                <Image src={logo1} alt="logo1" />
                <h1 className="text-[22px] font-semibold">24/7 Support</h1>
                <p className="text-[#1A0B5B4D] font-bold text-[16px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>

              <div className="blog2 w-[270px] h-[320px]  flex justify-center items-center gap-5 flex-col shadow-lg  hover:shadow-xl transition-shadow duration-300">
                <Image src={logo2} alt="logo2" />
                <h1 className="text-[22px] font-semibold">24/7 Support</h1>
                <p className="text-[#1A0B5B4D] font-bold text-[16px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
              <div className="blog3 w-[270px] h-[320px]  flex justify-center items-center gap-5 flex-col shadow-lg  hover:shadow-xl transition-shadow duration-300">
                <Image src={logo3} alt="logo3" />
                <h1 className="text-[22px] font-semibold">24/7 Support</h1>
                <p className="text-[#1A0B5B4D] font-bold text-[16px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
              <div className="blog4 w-[270px] h-[320px]  flex justify-center items-center gap-5 flex-col shadow-lg  hover:shadow-xl transition-shadow duration-300">
                <Image src={logo4} alt="logo4" />
                <h1 className="text-[22px] font-semibold">24/7 Support</h1>
                <p className="text-[#1A0B5B4D] font-bold text-[16px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* -------------Client Say!----------- */}
        <div className="h-[500px] w-screen mt-32 mb-20 sm:mb-80 bg-[#FBFBFF] flex justify-center gap-10 pb-3 flex-col items-center">
          <div className="text-[42px] font-bold">Our Client Say!</div>
          <div className="w-[689px] h-[265px]">
            <div className="h-[89px] flex justify-center items-center">
              <Image src={picture} alt="picture" />
            </div>
            <div className="h-[176px]  flex flex-col justify-between  items-center">
              <div className="">
                <h1 className="text-[22px]">Selina Gomez</h1>
                <p className="text-[10px] text-[#8A8FB9]">
                  Ceo At Webecy Digital
                </p>
              </div>
              <p className="text-[#8A8FB9] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices
                dolor aliquam lacus volutpat praesent.
              </p>
              <div className="flex justify-center items-center">
                <Image src={slide} alt="slide" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
