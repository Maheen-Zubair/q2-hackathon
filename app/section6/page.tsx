"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import divSlide from "../../public/hhhhh.png";

const GetProductData = () => {
  const res =
    client.fetch(`*[_type == "product" && "top" in tags]{
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
 
export default function Section6() {
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
      <div className="flex flex-col text-[#151875] pt-24 pb-24 items-center  gap-[10px] md:gap-[20px]">
        <h1 className="font-bold  text-[30px] md:text-[38px] lg:text-[42px] ">
          Top Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 sl:grid-cols-3 clg:grid-cols-4 gap-4 ">
        {product.map((item: Product,index) => (

          <div key={index} className="blog group w-[269px] h-[345px] ">
            <div className="part1 h-[269px] w-[269px] relative flex justify-center items-center bg-[#F6F7FB] rounded-full  ">
              <img src={item.imageURL} alt={item.name} height={180} width={180} />
              <div className="w-[94px] hidden group-hover:flex hover:shadow-black hover:shadow-sm  h-[29px] absolute top-[219px] left-[88px] rounded-[2px] justify-center items-center  text-[12px] bg-[#08D15F] ">
                <h4 className="text-white">View Shop</h4>
              </div>
            </div>

            <div className="part2 flex flex-col pt-2 justify-center items-center">
              <h1 className=" font-semibold">{item.name}</h1>
              <h1 className="font-semibold">${item.price}</h1>
            </div>
          </div>
        ))}
        </div>
        <Image src={divSlide} alt="slide" />
      </div>
    </div>
  );
}
