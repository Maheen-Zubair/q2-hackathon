import Image from "next/image";
import notFound from "../../public/notFound.png";
import Section8 from "../section8/page";
export default function NotFound() {
  return (
    <div>
         <div className="lg:h-[286px] mt-5 h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
          <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
            <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            404 Not Found            </h1>
            <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
              Home . Pages <span className="text-[#FB2E86]">. 404 Not Found</span>
            </p>
          </div>
        </div>
      <div className="flex flex-col pt-24 items-center justify-center  ">
       
        <div className=" flex justify-center flex-col items-center">
          <Image src={notFound} alt="notFoundImage" />
          <button className="h-[44px] w-[165px] bg-[#FB2E86] text-white rounded-[3px]  hover:bg-pink-700 ">
            Back To Home
          </button>
        </div>
      </div>
      <Section8/>
    </div>
  );
}
