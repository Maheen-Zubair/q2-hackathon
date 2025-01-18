import Image from "next/image";
import image1 from "../../public/Vector 16.png";
import image2 from "../../public/Ellipse 70.png";
import image3 from "../../public/Vector 15 (1).png";
import Section8 from "../../section8/page";


export default function OrderCompleted() {
  return (
    <div>
        <div className="lg:h-[286px]  h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
          <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
            <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            Order Completed           </h1>
            <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
              Home . Pages <span className="text-[#FB2E86]">. Order Completed</span>
            </p>
          </div>
        </div>
      <div className="flex justify-center items-center mt-36 mb-28">
            <div className="h-[326px] w-[625px]  flex justify-between items-center flex-col ">
            <div className="flex flex-col items-center relative gap-3">
          <Image src={image1} alt="image1" className=""/>
          <Image src={image2} alt="image2" className="absolute top-2" />
          <Image src={image3} alt="image2" className="absolute top-5" />

          <h1 className="text-[36px] text-[#101750] font-bold">
            Your Order Is Completed!
          </h1>
          </div>
          <p className="text-[16px] text-[#8D92A7] text-center mb-6">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <button className="h-[59px] w-[208px] text-white  bg-[#FB2E86]  rounded-[3px]  hover:bg-pink-700 transition">
            Continue Shopping
          </button>
        </div>
      </div>
      <Section8/>
    </div>
  );
}
