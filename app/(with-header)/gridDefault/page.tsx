"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Section8 from "../../section8/page";
const GetProductData = () => {
  const res =
    client.fetch(`*[_type == "product" && "allProducts" in tags]{
  name,
  price,
   "imageURL": image.asset->url,
   discountPercentage,
  }`);
  return res;
};

interface Product {
  name: string;
  imageURL: string;
  price: number;
  discountPercentage:number
}

export default function Grid() {
    const [product, setProduct] = useState<Product[]>([]);
      useEffect(() => {
        async function fetchCategoryData() {
          const categoryData: Product[] = await GetProductData();
          setProduct(categoryData);
        }
    
        fetchCategoryData();
      }, []);

  return (
    <div>
      <div className="lg:h-[286px] mt-5 h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
        <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
          <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            Shop Grid Default
          </h1>
          <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
            Home . Pages{" "}
            <span className="text-[#FB2E86]">. Shop Grid Default</span>
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
            <div className="flex items-center justify-center lg:gap-1.5 gap-1"></div>
          </div>
          <div className="lg:h-[30px] lg:w-[162px] h-[12px] w-[20px] md:h-[23px] md:w-[115px] border-[1px] border-[#E7E6EF]"></div>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-y-8   px-10 md:pl-40 lg:pl-10 pt-10 gap-x-6 gap-y-10">
          {product.map((item:Product,index) => (
            <div key={index} className="xl:h-[363px] xl:w-[270px] w-[90%] md:h-[300px]  md:w-[190px] flex flex-col justify-center items-center lg:gap-2 gap-1">
              <div className="xl:h-[280px] xl:w-[270px] md:h-[200px] md:w-[190px]  bg-[#F6F7FB] flex justify-center items-center">
                <img
                  width={150}
                  height={150}
                  src={item.imageURL}
                  alt={item.name}
                ></img>
              </div>
              <h1 className="xl:text-[18px] text-[11px] md:text-[13px] text-[#151875] font-semibold">
                {item.name}
              </h1>
              <div className="flex items-center justify-center lg:gap-1 gap-0.5 md:h-[10px]">
                <div className="lg:h-[10px] lg:w-[10px] w-[6px] h-[6px] rounded-full bg-[#DE9034]"></div>
                <div className="lg:h-[10px] lg:w-[10px] w-[6px] h-[6px] rounded-full bg-[#E60584]"></div>
                <div className="lg:h-[10px] lg:w-[10px] w-[6px] h-[6px] rounded-full bg-[#5E37FF]"></div>
              </div>
              <div className="flex lg:text-[14px] text-[8px] md:text-[13px] gap-3 ">
                <p className="text-[#111C85]">${item.price}</p>
                <p className="text-[#FF2AAA]">{item.discountPercentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Section8 />
    </div>
  );
}
