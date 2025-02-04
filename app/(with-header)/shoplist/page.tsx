import Image from "next/image";
import starfilled from "../../../public/ant-design_star-filled.png";
import starnotfilled from "../../../public/ant-design_star-filled (1).png";
import logos from "../../../public/Group 35.png";
import Section8 from "../../(heroSection)/section8/page";
interface ProductInterface {
  name: string;
  image: string;
}
export default function ShopList() {
  const productData: ProductInterface[] = [
    { name: "Accumsan tincidunt", image: "/Rectangle 32.png" },
    { name: "In nulla", image: "/Rectangle 32 (1).png" },
    { name: "Vel sem", image: "/Rectangle 32 (2).png" },
    { name: "Porttitor cum", image: "/Rectangle 32 (3).png" },
    { name: "Nunc in", image: "/Rectangle 32 (4).png" },
    { name: "Vitae facilisis", image: "/Rectangle 32 (5).png" },
    { name: "Curabitur lectus", image: "/Rectangle 32 (6).png" },
  ];
  return (
    <div className=" ">
      <div className="lg:h-[286px] mt-5 h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
        <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
          <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            Shop List
          </h1>
          <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
            Home . Pages <span className="text-[#FB2E86]">. Shop List</span>
          </p>
        </div>
      </div>

      <div className=" sm:mt-24 mt-10 sm:mb-20 mb-10 xl:w-full flex lg:flex-row flex-col gap-3 lg:gap-16 justify-center items-center ">
        <div className="">
          <h1 className="text-[#151875] lg:text-[22px] text-[15px] font-semibold">
            Ecommerce Acceories & Fashion item
          </h1>
          <p className="text-[#8A8FB9] lg:text[12px] text-[10px] md:text[10px]">
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        <div className="flex items-center lg:gap-4  gap-2 justify-center lg:justify-end ">
          <div className="flex lg:gap-2 gap-1">
            <h3 className="lg:text-[16px] text-[8px] md:text-[14px] text-[#3F509E]">
              Per Page:
            </h3>
            <div className="lg:h-[25px] lg:w-[55px] w-[15px] h-[10px] md:h-[18px] md:w-[35px] border-[1px] border-[#E7E6EF]"></div>
          </div>
          <div className=" flex lg:gap-2 gap-1">
            <h3 className="lg:text-[16px] text-[8px]  md:text-[14px] text-[#3F509E]">
              Sort By:
            </h3>
            <select
              name="sorts"
              className=" text-[#8A8FB9] border-[#E7E6EF] lg:text-[12px] text-[6px] md:text-[12px] lg:h-[28px] h-[13px] w-[30px] md:h-[20px] md:w-[28px] lg:w-[98px] border-[1px] flex items-center justify-center"
            >
              <option value="Best Match">Best Match</option>
              <option value="Best Offers">Best Offers</option>
            </select>
          </div>
          <div className="flex items-center justify-center lg:gap-2 gap-1">
            <h3 className="lg:text-[16px] text-[8px] md:text-[14px] text-[#3F509E]">
              View:
            </h3>
            <div className="flex items-center justify-center lg:gap-1.5 gap-1">
      
            </div>
          </div>
          <div className="lg:h-[30px] lg:w-[162px] h-[12px] w-[20px] md:h-[23px] md:w-[115px] border-[1px] border-[#E7E6EF]"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:mt-24 mt-16">
        <div>
          {productData.map((item,index ) => (
            <div key={index} className=" flex  flex-wrap  gap-3 lg:gap-5 mb-5 items-center justify-center">
              <div>
                <Image
                  width={313}
                  height={217}
                  src={item.image}
                  alt={item.name}
                ></Image>
              </div>
              <div className="flex flex-col lg:gap-3 gap-0.5">
                <div className="flex items-center lg:gap-6 gap-3">
                  <h1 className="text-[#111C85] lg:text-[19px]  text-[12px] md:text-[14px]  font-semibold">
                    {item.name}
                  </h1>
                  <div className="flex items-center justify-center lg:gap-1 gap-0.5">
                    <div className="lg:h-[12.15px] lg:w-[12.15px] w-[8px] h-[8px] rounded-full bg-[#DE9034]"></div>
                    <div className="lg:h-[12.15px] lg:w-[12.15px] w-[8px] h-[8px] rounded-full bg-[#E60584]"></div>
                    <div className="lg:h-[12.15px] lg:w-[12.15px] w-[8px] h-[8px] rounded-full bg-[#5E37FF]"></div>
                  </div>
                </div>
                <div className="flex lg:gap-4 gap-2 items-center">
                  <div className="flex lg:text-[15px] text-[10px] md:text-[13px] gap-3">
                    <p className="text-[#111C85]">$26.00</p>
                    <p className="text-[#FF2AAA]">$52.00</p>
                  </div>
                  <div className="flex gap-0.5 lg:gap-1">
                    <Image
                      width={13.25}
                      height={13.25}
                      src={starfilled}
                      alt="star filled"
                    ></Image>
                    <Image
                      width={13.25}
                      height={13.25}
                      src={starfilled}
                      alt="star filled"
                    ></Image>
                    <Image
                      width={13.25}
                      height={13.25}
                      src={starfilled}
                      alt="star filled"
                    ></Image>
                    <Image
                      width={13.25}
                      height={13.25}
                      src={starfilled}
                      alt="star filled"
                    ></Image>
                    <Image
                      width={13.25}
                      height={13.25}
                      src={starnotfilled}
                      alt="star not filled"
                    ></Image>
                  </div>
                </div>
                <p className="lg:text-[18px] text-[10px] md:text-[13px] text-[#9295AA]  w-[313px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div>
                  <Image
                    src={logos}
                    height={34}
                    width={144}
                    alt="logos"
                  ></Image>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Section8 />
      </div>
    </div>
  );
}
