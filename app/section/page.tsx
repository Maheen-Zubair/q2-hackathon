import Image from "next/image";
import image1 from "/public/image 1162.png";
import image2 from "/public/image 1161.png";
import img1 from "/public/image 30.png";
import img2 from "/public/image 19.png";
import img3 from "/public/image 28.png";

export default function Section() {
  return (
    <div className="flex justify-center items-center  elg:ml-[10%]">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 justify-center  gap-y-6 ml-5 lg:ml-0">
        <div className="xl:w-[420px] lg:w-[375px] lg:h-[240px] xl:h-[270px] w-[90%] h-[200px]  bg-[#FFF6FB] flex flex-col justify-center px-8 lg:gap-2 shadow-sm shadow-gray-300">
          <h1 className="text-[#151875] font-semibold lg:text-[26px] text-[16px] md:text-[23px]">
            23% off in all products
          </h1>

          <div className="flex justify-between gap-8">
            <p className="lg:text-[16px] text-[8px] md:text-[14px] text-[#FB2E86] underline ">
              Shop Now
            </p>
            <Image
              src={image1}
              alt="image"
              height={207}
              width={213}
            ></Image>
          </div>
        </div>
        <div className="xl:w-[420px] lg:w-[375px] lg:h-[240px] xl:h-[270px] w-[90%] h-[200px] bg-[#EEEFFB] flex flex-col justify-center px-8 shadow-sm shadow-gray-300">
          <div className="flex flex-col justify-between lg:gap-2">
            <h1 className="text-[#151875] font-semibold lg:text-[26px] text-[16px] md:text-[23px]">
              23% off in all products
            </h1>
            <p className="lg:text-[16px] text-[8px] md:text-[14px] text-[#FB2E86] underline ">
              View Collection
            </p>
          </div>

          <div className="flex justify-end">
            <Image
              src={image2}
              alt="image"
              height={173}
              width={312}
            ></Image>
          </div>
        </div>
        <div className="xl:w-[420px] lg:w-[375px] lg:h-[240px] xl:h-[270px] w-[90%] h-[200px] bg-white flex flex-col justify-between shadow-sm shadow-gray-300">
          <div className="lg:h-[74px] lg:w-[267px] gap-2 flex items-center justify-center">
            <div className="lg:w-[107px] lg:h-[74px] bg-[#F5F6F8] flex justify-center items-center">
              <Image width={64} height={71} src={img1} alt="image"></Image>
            </div>
            <div className="lg:w-[151px] flex flex-col">
              <h1 className="lg:text-[16px] text-[13px] font-semibold text-[#151875]">
                Executive Seat chair
              </h1>
              <p className="lg:text-[12px] text-[9px]  text-[#151875]">
                $32.00
              </p>
            </div>
          </div>

          <div className="lg:h-[74px] lg:w-[267px] gap-2 flex items-center justify-center">
            <div className="lg:w-[107px] lg:h-[74px] bg-[#F5F6F8] flex justify-center items-center">
              <Image width={64} height={71} src={img2} alt="image"></Image>
            </div>
            <div className="  lg:w-[151px] flex flex-col">
              <h1 className="lg:text-[16px] text-[13px] font-semibold text-[#151875]">
                Executive Seat chair
              </h1>
              <p className="lg:text-[12px] text-[9px] text-[#151875]">$32.00</p>
            </div>
          </div>

          <div className="lg:h-[74px] lg:w-[267px] gap-2 flex items-center justify-center">
            <div className="lg:w-[107px] lg:h-[74px] bg-[#F5F6F8] flex justify-center items-center">
              <Image width={64} height={71} src={img3} alt="image"></Image>
            </div>
            <div className=" lg:w-[151px] flex flex-col">
              <h1 className="lg:text-[16px] text-[13px] font-semibold text-[#151875]">
                Executive Seat chair
              </h1>
              <p className="lg:text-[12px] text-[9px] text-[#151875]">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
