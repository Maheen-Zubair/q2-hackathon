"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import React from "react";
import Link from "next/link";
import addToCart from "@/app/funtionalities/cart/addToCart";
import Alert from "@/app/funtionalities/alerts/added-product";

const GetProductData = () => {
  const res =
    client.fetch(`*[_type == "product" && "discount" in tags]{
      _id,
  name,
  price,
   "imageURL": image.asset->url,
   discountPercentage,
  }`);
  return res;
};

interface Product {
  _id:number;
  name: string;
  imageURL: string;
  price: number;
  discountPercentage:number;
  category:string;
}
  
export default function Section5() {
    const [product, setProduct] = useState<Product[]>([]);
      const [alertData, setAlertData] = useState<{
        show: boolean;
        type: any;
        message: string;
      }>({
        show: false,
        type: "success",
        message: "",
      });
    
      const showAlert = (
        type: "success" | "error" | "wishlist-add" | "wishlist-remove",
        message: string
      ) => {
        setAlertData({ show: true, type, message });
        setTimeout(
          () => setAlertData({ show: false, type: "success", message: "" }),
          1000
        );
      };
      useEffect(() => {
        async function fetchCategoryData() {
          const categoryData: Product[] = await GetProductData();
          setProduct(categoryData);
        }
    
        fetchCategoryData();
      }, []);

  return (
    <div className="mainContainer pt-24 max-w-full overflow-hidden bg-white flex flex-col justify-center items-center">
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
        rel="stylesheet"
      />
      <div className="flex-col justify-center items-center gap-2 md:gap-5 flex">
        <h1 className="font-josefin text-[27px]  md:text-[38px] lg:text-[42px] leading-[49.22px]">
          Discount Item
        </h1>
        <div className="options justify-center text-[10px] lg:text-[15px] hilg:flex font-md h-[24px] gap-[35px] elg:gap-[40px] flex font-semibold items-center">
          <h1 className="hover:text-[#FB2E86] text-[10px] lg:text-[15px] font-[Lato]  leading-[21.6px] font-normal hover:underline">
            Wood Chair
          </h1>
          <h1 className="hover:text-[#FB2E86] text-[10px] lg:text-[15px] font-[Lato]  leading-[21.6px] font-normal">
            Plastic Chair
          </h1>
          <h1 className="hover:text-[#FB2E86] text-[10px] lg:text-[15px] font-[Lato] leading-[21.6px] font-normal">
            Sofa Collection
          </h1>
        </div>
      </div>
      {product.map((item: Product,index) => (

      <div key={index} className="subContainer sm:flex-row flex-col pb-8 justify-center items-center lg:w-[60%] md:w-[70%] w-[80%] h-full sm:[300px] md:h-[480px] lg:h-[597px] flex bg-white ">
        
        <div className="sm:w-[50%] flex flex-col md:gap-6">
          <h1 className="text-[#151875] font-bold text-[28px] lg:text-[35px] md:leading-[46.2px] tracking-[1.5%]">
           -{item.discountPercentage}% Discount Of All Products
          </h1>
          <ul className="list-non flex flex-col md:gap-2">
            <li className="flex items-center md:gap-2">
              <span className="font-[500] text-[10px] lg:text-[16px] sm:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </span>
            </li>
          </ul>
          <div className="grid grid-cols-2 lg:grid-cols-2">
            <div className="flex justify-center">
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-[13px] md:w-[18px] h-[7] w-[12px]"
              >
                <path
                  d="M17 1L6 12L1 7"
                  stroke="#7569B2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="font-[500] text-[10px] lg:text-[16px] sm:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">
                Material expose like metals
              </p>
            </div>
            <div className="flex justify-center">
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-[13px] md:w-[18px] h-[7] w-[12px]"
              >
                <path
                  d="M17 1L6 12L1 7"
                  stroke="#7569B2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

             
              <p className="font-[500] text-[10px] lg:text-[16px] sm:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">
                Material expose like metals
              </p>
            </div>
            <div className="flex justify-center">
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-[13px] md:w-[18px] h-[7] w-[12px]"
              >
                <path
                  d="M17 1L6 12L1 7"
                  stroke="#7569B2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="font-[500] text-[10px] lg:text-[16px] sm:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">
                Material expose like metals
              </p>
            </div>
            <div className="flex justify-center">
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-[13px] md:w-[18px] h-[7] w-[12px]"
              >
                <path
                  d="M17 1L6 12L1 7"
                  stroke="#7569B2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="font-[500] text-[10px] lg:text-[16px] sm:leading-[21.12px] tracking-[1.5%] text-[#ACABC3]">
                Material expose like metals
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center ">
            <button  onClick={() => {
                    showAlert("success", "Added to Cart!");
                    addToCart(item);
                  }} className="md:mt-6 mt-3 text-[12px]  w-[120px] h-[28px] sl:w-[163px] sl:h-[50px] text-white bg-[#FB2E86] rounded-[2px] hover:bg-[#d73078] sl:text-[17px] leading-[19.92px] tracking-[2%] hover:shadow-black hover:shadow-sm">
              Add To Cart
            </button>
             <Alert
                              show={alertData.show}
                              type={alertData.type}
                              message={alertData.message}
                              onClose={() =>
                                setAlertData({ show: false, type: "success", message: "" })
                              }
                            />
          </div>
        </div>
        <Link href={`/section5/${item._id}`}>

        <div className="relative mt-7 sm:mt-0 flex justify-center items-center overflow-hidden">
          {/* Pink Circle */}

          <div
            className="h-[200px] w-[200px] 
                  lg:h-[250px] lg:w-[250px] clg:h-[300px] clg:w-[300px] 
                  bg-pink-100 rounded-full z-0"
          ></div>

          {/* Image */}

          <img
            src={item.imageURL}
            alt={item.name}
            className="absolute  w-[100%] h-[100%] object-cover z-10"
          />
        </div>
        </Link>
      </div>
      ))}
    </div>
  );
}
