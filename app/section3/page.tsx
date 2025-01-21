"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import React from "react";
import Link from "next/link";

const GetProductData = () => {
  const res = client.fetch(`*[_type == "product" && "unique" in tags]{
  name,
  price,
  "imageURL": image.asset->url,
  _id,
  }`);
  return res;
};

interface Product {
  _id:number;
  name: string;
  imageURL: string;
  price: number;
}
export default function Section3() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchCategoryData() {
      const categoryData: Product[] = await GetProductData();
      setProduct(categoryData);
    }

    fetchCategoryData();
  }, []);
  const addToCart = (product: Product) => {
    const storedCart = localStorage.getItem('cart');
    const cart = storedCart ? JSON.parse(storedCart) : [];
  
    const existingProductIndex = cart.findIndex((item: Product) => item._id === product._id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      const productWithQuantity = { ...product, quantity: 1 };
      cart.push(productWithQuantity);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to the cart!`);
  };
  return (
    <div>
    {product.map((item: Product, index) => (
    <div key={index} className="mainContainer w-screen mt-24 bg-[#F1F0FF] flex justify-center items-center">
      <div className="subContainer flex flex-col pb-10 sm:pb-0 sm:flex-row justify-center items-center lg:w-[60%] md:w-[70%] w-[80%] h-full md:h-[480px] lg:h-[550px] bg-[#F1F0FF]">
            <div className="part1 sm:w-[50%] ">
            <Link href={`/section3/${item._id}`}>

              <img src={item.imageURL} alt="image" height={500} width={500}></img>
            </Link>
            </div>
            <div className="part2 sm:w-[50%] flex flex-col md:gap-6  ">
              <h1 className="text-[#151875] font-bold font-josefin text-[28px] lg:text-[35px] md:leading-[46.2px] tracking-[1.5%]">
                Unique Features Of leatest & Trending Poducts
              </h1>
              <ul className="list-non flex flex-col md:gap-2 ">
                <li className="flex items-center md:gap-2">
                  <div className="md:w-[11px] w-[7px] h-[7px] md:h-[11px] pr-1 bg-[#F52B70] rounded-full"></div>
                  <span className="font-[500] text-[8px]  md:text-[10px] lg:text-[16px] md:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">
                    All frames constructed with hardwood solids and laminates
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="md:w-[11px] w-[7px] h-[7px] md:h-[11px] pr-2 bg-[#2B2BF5] rounded-full"></div>
                  <span className="font-[500] text-[8px]  md:text-[10px] lg:text-[16px] md:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">
                    Reinforced with double wood dowels, glue, screw - nails
                    corner blocks and machine nails
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="md:w-[11px] w-[7px] h-[7px] md:h-[11px] pr-1 bg-[#2BF5CC] rounded-full"></div>
                  <span className="font-[500] text-[8px]  md:text-[10px] lg:text-[16px] md:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">
                    Arms, backs and seats are structurally reinforced
                  </span>
                </li>
                <div className="flex gap-3  items-center">
                  <button  onClick={() => addToCart(item)} className=" md:mt-6 mt-3   h-[28px] w-[163px] sl:h-[50px] text-white bg-[#FB2E86] rounded-[2px] hover:bg-[#d73078]  sl:text-[17px] leading-[19.92px] tracking-[2%] hover:shadow-black hover:shadow-sm">
                    Add To Cart
                  </button>
                  <div className="flex flex-col mt-5 ">
                    <h1 className=" md:text-[14px] font-semibold tracking-[2%] text-[#151875] text-[8px] clxs:text-[9px]">
                      B&B Italian Sofa
                    </h1>
                    <h1 className="font-normal md:text-[14px]  text-[#151875] text-[8px] clxs:text-[9px]">
                      ${item.price}
                    </h1>
                  </div>
                </div>
              </ul>
            </div>
          </div>
      </div>
            ))}
            </div>

  );
}
