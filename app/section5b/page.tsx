"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import React from "react";
const GetProductData = () => {
  const res =
    client.fetch(`*[_type == "product" && "trending" in tags]{
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


export default function Section5b() {
  const [product, setProduct] = useState<Product[]>([]);
      useEffect(() => {
        async function fetchCategoryData() {
          const categoryData: Product[] = await GetProductData();
          setProduct(categoryData);
        }
    
        fetchCategoryData();
      }, []);
  return (
    <div className="flex flex-col text-[#151875] pt-24 pb-24 items-center  gap-[10px] md:gap-[20px]">
    <h1 className="font-bold  text-[30px] md:text-[38px] lg:text-[42px] ">
    Trending Products
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
    {product.map((item: Product,index) => (

      <div key={index} className=" blog w-[270px] h-[350px]  flex-col flex items-center pt-3 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="w-[247px] h-[244px] bg-[#F5F6F8] flex justify-center items-center ">
          <img src={item.imageURL} alt={"image"} height={200} width={200} />
        </div>
        <div className="mt-4 ">
          <div className="font-semibold text-[16px] text-[#151875]">
            {item.name}
          </div>
          <div className=" flex gap-2 justify-center items-center">
            <h1 className="text-[14px] weight-semibold text-[#151875] ">
            ${item.price}
            </h1>
            <h1 className="text-[12px] font-[400] line-through text-[#1518754D]">
              {item.discountPercentage}%

            </h1>
          </div>
        </div>
      </div>
    ))} 
      </div>
    </div>
  );
}
