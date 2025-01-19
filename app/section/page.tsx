"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import image1 from "/public/image 1162.png";

const GetProductData = () => {
  const res =
    client.fetch(`*[_type == "product" && "executiveSeat" in tags]{
  name,
  price,
  "imageURL": image.asset->url,
   discountPercentage,
  }`);
  return res;
};
const GetProductData2 = () => {
  const res =
    client.fetch(`*[_type == "product" && "wooden" in tags]{
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
  
export default function Section() {
   const [product, setProduct] = useState<Product[]>([]);
   const [product2, setProduct2] = useState<Product[]>([]);

      useEffect(() => {
        async function fetchCategoryData() {
          const categoryData:Product[] = await GetProductData();
          setProduct(categoryData);
        }
        async function fetchCategoryData2() {
          const categoryData2:Product[] = await GetProductData2();
          setProduct2(categoryData2);
        }
        fetchCategoryData();
        fetchCategoryData2();
      }, []);
  return (
    <div className="flex justify-center items-center  elg:ml-[10%] overflow-hidden">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 justify-center  gap-y-6 ml-5 lg:ml-0">
        <div className="xl:w-[420px] lg:w-full lg:h-[240px] xl:h-[270px] w-[90%] h-[200px]  bg-[#FFF6FB] flex flex-col justify-center px-8 lg:gap-2 shadow-sm shadow-gray-300">
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
        {product2.map((item: Product,index) => (

        <div key={index} className="xl:w-[420px] lg:w-[375px] lg:h-[240px] xl:h-[270px] w-[90%] h-[200px] bg-[#EEEFFB] flex flex-col justify-center px-8 shadow-sm shadow-gray-300">
          <div className="flex flex-col justify-between lg:gap-2">
            <h1 className="text-[#151875] font-semibold lg:text-[26px] text-[16px] md:text-[23px]">
              {item.discountPercentage}% off in all products
            </h1>
            <p className="lg:text-[16px] text-[8px] md:text-[14px] text-[#FB2E86] underline ">
              View Collection
            </p>
          </div>

          <div className="flex justify-end">
            <img
              src={item.imageURL}
              alt={item.name}
              height={173}
              width={312}
            ></img>
          </div>
        </div>
        ))}
        <div className="xl:w-[420px] lg:w-full lg:h-[240px] xl:h-[270px] w-[90%] h-[200px] bg-white flex flex-col justify-between shadow-sm shadow-gray-300">
        {product.map((item: Product,index) => (

          <div key={index} className="lg:h-[74px] lg:w-[267px] gap-2 flex items-center justify-center">
            <div className="lg:w-[107px] lg:h-[74px] bg-[#F5F6F8] flex justify-center items-center">
              <img width={64} height={71} src={item.imageURL} alt="image"></img>
            </div>
            <div className="lg:w-[151px] flex flex-col">
              <h1 className="lg:text-[16px] text-[13px] font-semibold text-[#151875]">
                {item.name}
              </h1>
              <p className="lg:text-[12px] text-[9px]  text-[#151875]">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
        
        </div>
      </div>
    </div>
  );
}
