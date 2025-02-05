import Image from "next/image";
import image1 from "../../../public/Vector 16.png";
import image2 from "../../../public/Ellipse 70.png";
import Section8 from "../../(heroSection)/section8/page";
import Link from "next/link";

export default function OrderCompleted() {
  return (
    <div>
      <div className="lg:h-[286px]  h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
        <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
          <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            Order Cancelled{" "}
          </h1>
          <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
            Home . Pages{" "}
            <span className="text-[#FB2E86]">. Order Cancelled</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-36 mb-28">
        <div className="h-[326px] w-[625px]  flex justify-between items-center flex-col ">
          <div className="flex flex-col items-center relative gap-3">
            <Image src={image1} alt="image1" className="" />
            <Image src={image2} alt="image2" className="absolute top-2" />
            <svg
              className="absolute top-3"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="50"
              height="50"
              viewBox="0 0 256 256"
              xmlSpace="preserve"
            >
              <g
                style={{
                  fill: "#FB2E86",
                  stroke: "none",
                  strokeWidth: 0,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 45 66.364 L 45 66.364 c -2.979 0 -5.429 -2.345 -5.56 -5.321 l -5.132 -49.519 C 33.841 5.304 38.762 0 45 0 h 0 c 6.238 0 11.159 5.304 10.692 11.524 L 50.56 61.043 C 50.429 64.019 47.979 66.364 45 66.364 z"
                  style={{
                    fill: "#FB2E86",
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                  strokeLinecap="round"
                />
                <circle
                  cx="44.998000000000005"
                  cy="81.128"
                  r="8.868"
                  style={{
                    fill: "#FB2E86",
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
              </g>
            </svg>

            <h1 className="text-[24px] lg:text-[36px] text-black font-bold">
             Order Has Been Cancelled!
            </h1>
          </div>
          <p className="text-[13px] mx-2 lg:text-[16px] text-[#8D92A7] text-center mb-6">
            We&apos;re sorry, but your order could not be processed and has been
            cancelled. If you have any questions or need assistance, please
            contact our support team.
          </p>
          <Link href={"/gridDefault"}>
          <button className="lg:h-[59px] text-center flex justify-center items-center lg:w-[208px] h-[40px] w-[180px] text-white  bg-[#FB2E86] hover:bg-pink-700 rounded-[3px] transition">
             <div className="ml-3"> Continue Shopping</div>
            </button>
          </Link>
        </div>
      </div>
      <Section8 />
    </div>
  );
}
