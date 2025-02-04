"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import slide from "@/public/Group 141.png";

import divSlide from "@/public/Group 169.png";
import SmallLikeButton from "@/app/funtionalities/likeButton/smallLikeButton";
import Alert from "@/app/funtionalities/alerts/added-product";
import addToCart from "@/app/funtionalities/cart/addToCart";
const GetProductData = () => {
  const res = client.fetch(`*[_type == "product" && "featured" in tags]{
      _id,
  name,
  price,
   "imageURL": image.asset->url
  }`);
  return res;
};

interface Product {
  name: string;
  imageURL: string;
  price: number;
  discountPercentage: number;
  _id: number;
  category: string;
  description: string;
}
export default function Section2() {
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
    <div>
      <div className="flex flex-col  pt-24 pb-24 items-center  gap-[10px] md:gap-[20px]">
        <h1 className="font-bold text-[#151875] text-[20px] sm:[30px] md:text-[38px] lg:text-[42px] ">
          Featured Products
        </h1>
        <div className="sub grid eelg:grid-cols-4 gap-y-9 md:grid-cols-3 sm:grid-cols-2 sm:gap-[30px]  justify-center items-center  w-[60p%] lg:w-[75%] ">
          {product.map((item: Product, index) => (
            <div
              key={index}
              className="part1 group  w-[230px] h-[361px] bg-white flex flex-col  shadow-md hover:shadow-xl transition-shadow duration-300 "
            >
              <div className="imag relative h-[65%] bg-[#F6F7FB] flex justify-center items-center ">
                <img src={item.imageURL} alt="image" height={180} width={180} />
                <button className=" hidden group-hover:flex absolute justify-center items-center hover:shadow-black hover:shadow-sm w-[94px] h-[29px] top-[198px] left-[65px] text-white rounded-[2px] text-[12px] font-thin  bg-[#08D15F]">
                  <Link href={`/section2/${item._id}`}>View Details</Link>
                </button>
                <div
                  onClick={() => {
                    showAlert("success", "Added to Cart!");
                    addToCart(item);
                  }}
                  className=" hidden group-hover:flex w-[30px] h-[30px] absolute top-[11px] rounded-full justify-center items-center left-[11px] bg-[#EEEFFB]"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.979248 1.36456C0.979248 1.20709 1.0418 1.05607 1.15315 0.944718C1.2645 0.833369 1.41553 0.770813 1.573 0.770813H2.01475C2.76683 0.770813 3.21808 1.27669 3.47537 1.74694C3.64716 2.06044 3.77146 2.42381 3.86883 2.75315C3.89517 2.75107 3.92158 2.75001 3.948 2.74998H13.8422C14.4993 2.74998 14.9743 3.37856 14.7938 4.0111L13.3467 9.0849C13.2169 9.53999 12.9424 9.94041 12.5647 10.2255C12.187 10.5107 11.7267 10.665 11.2535 10.6651H6.54466C6.06768 10.6651 5.60389 10.5085 5.22458 10.2193C4.84527 9.93005 4.57144 9.52428 4.44516 9.06431L3.8435 6.86981L2.846 3.50681L2.84521 3.50048C2.72171 3.0516 2.60612 2.63123 2.43354 2.31773C2.26808 2.01294 2.13508 1.95831 2.01554 1.95831H1.573C1.41553 1.95831 1.2645 1.89576 1.15315 1.78441C1.0418 1.67306 0.979248 1.52204 0.979248 1.36456ZM4.99537 6.58165L5.58992 8.75002C5.70866 9.1791 6.09896 9.47756 6.54466 9.47756H11.2535C11.4686 9.47756 11.6778 9.40747 11.8495 9.27791C12.0212 9.14834 12.1461 8.96636 12.2051 8.75952L13.5802 3.93748H4.21321L4.98429 6.53969L4.99537 6.58165Z"
                      fill="#2F1AC4"
                    />
                    <path
                      d="M7.70842 13.0416C7.70842 13.4616 7.5416 13.8643 7.24467 14.1612C6.94773 14.4582 6.54501 14.625 6.12508 14.625C5.70516 14.625 5.30243 14.4582 5.0055 14.1612C4.70856 13.8643 4.54175 13.4616 4.54175 13.0416C4.54175 12.6217 4.70856 12.219 5.0055 11.9221C5.30243 11.6251 5.70516 11.4583 6.12508 11.4583C6.54501 11.4583 6.94773 11.6251 7.24467 11.9221C7.5416 12.219 7.70842 12.6217 7.70842 13.0416ZM6.52092 13.0416C6.52092 12.9367 6.47921 12.836 6.40498 12.7617C6.33075 12.6875 6.23006 12.6458 6.12508 12.6458C6.0201 12.6458 5.91942 12.6875 5.84518 12.7617C5.77095 12.836 5.72925 12.9367 5.72925 13.0416C5.72925 13.1466 5.77095 13.2473 5.84518 13.3215C5.91942 13.3958 6.0201 13.4375 6.12508 13.4375C6.23006 13.4375 6.33075 13.3958 6.40498 13.3215C6.47921 13.2473 6.52092 13.1466 6.52092 13.0416Z"
                      fill="#2F1AC4"
                    />
                    <path
                      d="M13.2502 13.0416C13.2502 13.4616 13.0833 13.8643 12.7864 14.1612C12.4895 14.4582 12.0868 14.625 11.6668 14.625C11.2469 14.625 10.8442 14.4582 10.5472 14.1612C10.2503 13.8643 10.0835 13.4616 10.0835 13.0416C10.0835 12.6217 10.2503 12.219 10.5472 11.9221C10.8442 11.6251 11.2469 11.4583 11.6668 11.4583C12.0868 11.4583 12.4895 11.6251 12.7864 11.9221C13.0833 12.219 13.2502 12.6217 13.2502 13.0416ZM12.0627 13.0416C12.0627 12.9367 12.021 12.836 11.9467 12.7617C11.8725 12.6875 11.7718 12.6458 11.6668 12.6458C11.5618 12.6458 11.4612 12.6875 11.3869 12.7617C11.3127 12.836 11.271 12.9367 11.271 13.0416C11.271 13.1466 11.3127 13.2473 11.3869 13.3215C11.4612 13.3958 11.5618 13.4375 11.6668 13.4375C11.7718 13.4375 11.8725 13.3958 11.9467 13.3215C12.021 13.2473 12.0627 13.1466 12.0627 13.0416Z"
                      fill="#2F1AC4"
                    />
                  </svg>
                </div>
                <Alert
                  show={alertData.show}
                  type={alertData.type}
                  message={alertData.message}
                  onClose={() =>
                    setAlertData({ show: false, type: "success", message: "" })
                  }
                />
                {/* <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[18px] left-[57px] hidden group-hover:flex "
                >
                  <path
                    d="M13.28 2.26539C12.528 1.51314 11.531 1.05578 10.4702 0.97649C9.40951 0.897195 8.35555 1.20123 7.50003 1.8333C6.59879 1.16296 5.47703 0.858999 4.36064 0.982621C3.24426 1.10624 2.21618 1.64827 1.48343 2.49955C0.750683 3.35083 0.367698 4.44813 0.4116 5.57048C0.455502 6.69283 0.923028 7.75686 1.72003 8.5483L6.99712 13.8254C7.06296 13.8918 7.14131 13.9445 7.22762 13.9804C7.31394 14.0164 7.40652 14.0349 7.50003 14.0349C7.59354 14.0349 7.68612 14.0164 7.77244 13.9804C7.85876 13.9445 7.9371 13.8918 8.00295 13.8254L13.28 8.5483C13.6927 8.13586 14.0201 7.64613 14.2435 7.1071C14.4669 6.56808 14.5819 5.99032 14.5819 5.40684C14.5819 4.82337 14.4669 4.24561 14.2435 3.70659C14.0201 3.16756 13.6927 2.67783 13.28 2.26539ZM12.2813 7.54955L7.50003 12.3237L2.71878 7.54955C2.29745 7.12646 2.01043 6.58838 1.89374 6.00279C1.77704 5.41721 1.83587 4.8102 2.06283 4.25792C2.2898 3.70564 2.67479 3.23268 3.16953 2.89837C3.66426 2.56406 4.2467 2.38328 4.84378 2.37872C5.64145 2.38067 6.40573 2.69912 6.96878 3.26414C7.03463 3.33053 7.11297 3.38322 7.19929 3.41918C7.28561 3.45515 7.37819 3.47366 7.4717 3.47366C7.56521 3.47366 7.65779 3.45515 7.74411 3.41918C7.83042 3.38322 7.90877 3.33053 7.97462 3.26414C8.55426 2.76184 9.30309 2.49853 10.0695 2.52749C10.836 2.55644 11.5628 2.87551 12.1029 3.4201C12.643 3.9647 12.956 4.69415 12.9786 5.46081C13.0012 6.22748 12.7317 6.97409 12.2246 7.54955H12.2813Z"
                    fill="url(#paint0_linear_1632_1637)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1632_1637"
                      x1="0.408203"
                      y1="0.955627"
                      x2="13.4454"
                      y2="15.0837"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1389FF" />
                      <stop offset="1" stop-color="#1DB4E7" />
                    </linearGradient>
                  </defs>
                </svg> */}

                <div className="absolute top-[18px] left-[57px] hidden group-hover:flex ">
                  <SmallLikeButton item={item} />
                </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[19px] left-[90px] hidden group-hover:flex"
                >
                  <path
                    d="M9.37512 6.25H7.50012V4.375C7.50012 4.20924 7.43428 4.05027 7.31707 3.93306C7.19985 3.81585 7.04088 3.75 6.87512 3.75C6.70936 3.75 6.55039 3.81585 6.43318 3.93306C6.31597 4.05027 6.25012 4.20924 6.25012 4.375V6.25H4.37512C4.20936 6.25 4.05039 6.31585 3.93318 6.43306C3.81597 6.55027 3.75012 6.70924 3.75012 6.875C3.75012 7.04076 3.81597 7.19973 3.93318 7.31694C4.05039 7.43415 4.20936 7.5 4.37512 7.5H6.25012V9.375C6.25012 9.54076 6.31597 9.69973 6.43318 9.81694C6.55039 9.93415 6.70936 10 6.87512 10C7.04088 10 7.19985 9.93415 7.31707 9.81694C7.43428 9.69973 7.50012 9.54076 7.50012 9.375V7.5H9.37512C9.54088 7.5 9.69985 7.43415 9.81707 7.31694C9.93428 7.19973 10.0001 7.04076 10.0001 6.875C10.0001 6.70924 9.93428 6.55027 9.81707 6.43306C9.69985 6.31585 9.54088 6.25 9.37512 6.25ZM13.5689 12.6813L11.2501 10.3813C12.1502 9.25901 12.5861 7.83456 12.4681 6.40081C12.3502 4.96706 11.6874 3.63299 10.6161 2.6729C9.54473 1.71282 8.14625 1.1997 6.7082 1.23905C5.27015 1.2784 3.90182 1.86723 2.88459 2.88446C1.86735 3.9017 1.27852 5.27003 1.23917 6.70808C1.19982 8.14613 1.71294 9.54461 2.67303 10.616C3.63311 11.6873 4.96719 12.3501 6.40094 12.468C7.83468 12.5859 9.25913 12.1501 10.3814 11.25L12.6814 13.55C12.7395 13.6086 12.8086 13.6551 12.8848 13.6868C12.9609 13.7185 13.0426 13.7349 13.1251 13.7349C13.2076 13.7349 13.2893 13.7185 13.3655 13.6868C13.4416 13.6551 13.5108 13.6086 13.5689 13.55C13.6815 13.4335 13.7445 13.2777 13.7445 13.1156C13.7445 12.9535 13.6815 12.7978 13.5689 12.6813ZM6.87512 11.25C6.00983 11.25 5.16397 10.9934 4.4445 10.5127C3.72504 10.0319 3.16428 9.34867 2.83315 8.54924C2.50202 7.74981 2.41538 6.87015 2.58419 6.02148C2.753 5.17281 3.16968 4.39326 3.78153 3.78141C4.39339 3.16955 5.17294 2.75288 6.0216 2.58407C6.87027 2.41526 7.74994 2.50189 8.54936 2.83303C9.34879 3.16416 10.0321 3.72492 10.5128 4.44438C10.9935 5.16385 11.2501 6.00971 11.2501 6.875C11.2501 8.03532 10.7892 9.14812 9.96872 9.96859C9.14824 10.7891 8.03545 11.25 6.87512 11.25Z"
                    fill="url(#paint0_linear_1632_1638)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1632_1638"
                      x1="1.23706"
                      y1="1.23694"
                      x2="13.735"
                      y2="13.7444"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1389FF" />
                      <stop offset="1" stop-color="#1DB4E7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="rate flex flex-col justify-center gap-2 items-center pt-3 pb-3 h-[35%]  group-hover:bg-[#2F1AC4]">
                <div className="font-bold text-[14px] sm:text-[18px] text-[#FB2E86] group-hover:text-white  ">
                  {item.name}
                </div>
                <div>
                  <Image src={slide} alt="slide" />
                </div>
                <div className=" text-[10px] sm:text-[14px] text-[#151875] group-hover:text-white">
                  Code - Y523201
                </div>
                <div className="font-normal text-[10px] text-[#151875] sm:text-[14px] group-hover:text-white">
                  ${item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Image src={divSlide} alt="slide" />
      </div>
    </div>
  );
}
