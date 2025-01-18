"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import logo1 from "../../public/free-delivery 1.png";
import logo2 from "../../public/cashback 1.png";
import logo3 from "../../public/premium-quality 1.png";
import logo4 from "../../public/24-hours-support 1.png";
import sale from "../../public/Group 27.png";

export const GetProductData = () => {
  const res =
    client.fetch(`*[_type == "product" && "latest" in tags]{
  name,
  price,
   "imageURL": image.asset->url,
   discountPercentage,
  }`);
  return res;
};

export interface Product {
  name: string;
  imageURL: string;
  price: number;
  discountPercentage:number,
  index:number
}
  
export default function Section4() {
  const [product, setProduct] = useState<Product[]>([]);
    useEffect(() => {
      async function fetchCategoryData() {
        const categoryData: Product[] = await GetProductData();
        setProduct(categoryData);
      }
  
      fetchCategoryData();
    }, []);
  return (
    <div className="text-[#151875]">
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
        rel="stylesheet"
      />
      <div className="flex-col justify-center items-center gap-2 md:gap-5 flex">
        <h1 className="font-bold  text-[30px]  md:text-[38px] lg:text-[42px] ">
          Leatest Products
        </h1>
        <div className="options justify-center text-[10px] lg:text-[15px] hilg:flex font-md h-[24px] gap-[35px] elg:gap-[40px] flex font-semibold items-center">
          <h1 className="hover:text-[#FB2E86] text-[10px] lg:text-[15px] font-[Lato]   font-normal hover:underline">
            Best Seller{" "}
          </h1>
          <h1 className="hover:text-[#FB2E86] text-[10px] lg:text-[15px] font-[Lato]   font-normal">
            Featured{" "}
          </h1>
          <h1 className="hover:text-[#FB2E86] text-[10px] lg:text-[15px] font-[Lato]  font-normal">
            Special Offer{" "}
          </h1>
          <h1 className="hover:text-[#FB2E86] text-[10px] lg:text-[15px] font-[Lato]  font-normal">
            New Arrival{" "}
          </h1>
        </div>

        <div className="subContainer grid grid-cols-1 sm:grid-cols-2  clg:grid-cols-3 gap-5 ">
        {product.map((item: Product,index) => (

          <div key={index} className="  w-[280px] sm:w-[300px] llm:w-[365px] group  h-[306px] shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="h-[87%] flex relative justify-center items-center  hover:bg-white bg-[#F7F7F7]">
              <img src={item.imageURL} alt="image1" height={220} width={220} />
              <Image
                src={sale}
                alt="sale"
                className="absolute hidden group-hover:flex left-3 top-3"
              />
              <div className=" hidden group-hover:flex w-[30px] h-[30px] absolute top-[146px] left-[15px] rounded-full justify-center items-center bg-[#EEEFFB]">
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
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="top-[190px] left-[23px] absolute hidden group-hover:flex"
              >
                <path
                  d="M13.28 2.26542C12.528 1.51317 11.531 1.05581 10.4702 0.97652C9.40951 0.897226 8.35555 1.20126 7.50003 1.83333C6.59879 1.16299 5.47703 0.859029 4.36064 0.982652C3.24426 1.10627 2.21618 1.6483 1.48343 2.49958C0.750683 3.35086 0.367698 4.44816 0.4116 5.57051C0.455502 6.69286 0.923028 7.75689 1.72003 8.54833L6.99712 13.8254C7.06296 13.8918 7.14131 13.9445 7.22762 13.9805C7.31394 14.0164 7.40652 14.0349 7.50003 14.0349C7.59354 14.0349 7.68612 14.0164 7.77244 13.9805C7.85876 13.9445 7.9371 13.8918 8.00295 13.8254L13.28 8.54833C13.6927 8.13589 14.0201 7.64616 14.2435 7.10713C14.4669 6.56811 14.5819 5.99035 14.5819 5.40687C14.5819 4.8234 14.4669 4.24564 14.2435 3.70662C14.0201 3.16759 13.6927 2.67786 13.28 2.26542ZM12.2813 7.54958L7.50003 12.3237L2.71878 7.54958C2.29745 7.12649 2.01043 6.58841 1.89374 6.00282C1.77704 5.41724 1.83587 4.81023 2.06283 4.25795C2.2898 3.70567 2.67479 3.23271 3.16953 2.8984C3.66426 2.56409 4.2467 2.38331 4.84378 2.37875C5.64145 2.3807 6.40573 2.69915 6.96878 3.26417C7.03463 3.33056 7.11297 3.38325 7.19929 3.41921C7.28561 3.45518 7.37819 3.47369 7.4717 3.47369C7.56521 3.47369 7.65779 3.45518 7.74411 3.41921C7.83042 3.38325 7.90877 3.33056 7.97462 3.26417C8.55426 2.76188 9.30309 2.49856 10.0695 2.52752C10.836 2.55647 11.5628 2.87554 12.1029 3.42013C12.643 3.96473 12.956 4.69418 12.9786 5.46084C13.0012 6.22751 12.7317 6.97413 12.2246 7.54958H12.2813Z"
                  fill="#2F1AC4"
                />
              </svg>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="top-[220px] left-[24px] absolute hidden group-hover:flex"
              >
                <path
                  d="M8.37512 5.25H6.50012V3.375C6.50012 3.20924 6.43428 3.05027 6.31707 2.93306C6.19985 2.81585 6.04088 2.75 5.87512 2.75C5.70936 2.75 5.55039 2.81585 5.43318 2.93306C5.31597 3.05027 5.25012 3.20924 5.25012 3.375V5.25H3.37512C3.20936 5.25 3.05039 5.31585 2.93318 5.43306C2.81597 5.55027 2.75012 5.70924 2.75012 5.875C2.75012 6.04076 2.81597 6.19973 2.93318 6.31694C3.05039 6.43415 3.20936 6.5 3.37512 6.5H5.25012V8.375C5.25012 8.54076 5.31597 8.69973 5.43318 8.81694C5.55039 8.93415 5.70936 9 5.87512 9C6.04088 9 6.19985 8.93415 6.31707 8.81694C6.43428 8.69973 6.50012 8.54076 6.50012 8.375V6.5H8.37512C8.54088 6.5 8.69985 6.43415 8.81707 6.31694C8.93428 6.19973 9.00012 6.04076 9.00012 5.875C9.00012 5.70924 8.93428 5.55027 8.81707 5.43306C8.69985 5.31585 8.54088 5.25 8.37512 5.25ZM12.5689 11.6813L10.2501 9.38125C11.1502 8.25901 11.5861 6.83456 11.4681 5.40081C11.3502 3.96706 10.6874 2.63299 9.61607 1.6729C8.54473 0.712818 7.14625 0.199695 5.7082 0.239045C4.27015 0.278396 2.90182 0.867227 1.88459 1.88446C0.86735 2.9017 0.278518 4.27003 0.239167 5.70808C0.199817 7.14613 0.71294 8.54461 1.67303 9.61595C2.63311 10.6873 3.96719 11.3501 5.40094 11.468C6.83468 11.5859 8.25913 11.1501 9.38137 10.25L11.6814 12.55C11.7395 12.6086 11.8086 12.6551 11.8848 12.6868C11.9609 12.7185 12.0426 12.7349 12.1251 12.7349C12.2076 12.7349 12.2893 12.7185 12.3655 12.6868C12.4416 12.6551 12.5108 12.6086 12.5689 12.55C12.6815 12.4335 12.7445 12.2777 12.7445 12.1156C12.7445 11.9535 12.6815 11.7978 12.5689 11.6813ZM5.87512 10.25C5.00983 10.25 4.16397 9.99341 3.4445 9.51268C2.72504 9.03195 2.16428 8.34867 1.83315 7.54924C1.50202 6.74981 1.41538 5.87015 1.58419 5.02148C1.753 4.17281 2.16968 3.39326 2.78153 2.78141C3.39339 2.16955 4.17294 1.75288 5.0216 1.58407C5.87027 1.41526 6.74994 1.50189 7.54936 1.83303C8.34879 2.16416 9.03207 2.72492 9.5128 3.44438C9.99353 4.16385 10.2501 5.00971 10.2501 5.875C10.2501 7.03532 9.78919 8.14812 8.96872 8.96859C8.14824 9.78907 7.03545 10.25 5.87512 10.25Z"
                  fill="#2F1AC4"
                />
              </svg>
            </div>

            <div className="flex justify-between p-2 overflow-y-hidden items-center">
              <div className=" font-semibold">{item.name}</div>
              <div className="flex gap-2 justify-center items-center">
                <div className=" font-semibold ">${item.price}</div>
                <div className=" font-semibold text-[12px]  line-through text-[#FB2448]">
                  {item.discountPercentage}%
                </div>
              </div>
            </div>
          </div>
        ))}
       
        </div>
        {/* ---------------what shop offers----------- */}
        <div className=" flex justify-center flex-col mt-10  items-center gap-2 sm:gap-5 md:gap-10">
          <h1 className="font-bold  text-[30px]   md:text-[38px] lg:text-[42px] ">
            What Shop Offers
          </h1>
          <div className=" grid  grid-cols-1 sm:grid-cols-2 clg:grid-cols-4 gap-5 ">
            <div className="blog1 w-[270px] h-[320px] mb-8  flex justify-center items-center gap-5 flex-col shadow-lg  hover:shadow-xl transition-shadow duration-300">
              <Image src={logo1} alt="logo1" />
              <h1 className="text-[22px] font-semibold">24/7 Support</h1>
              <p className="text-[#1A0B5B4D] font-bold text-[16px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>

            <div className="blog2 w-[270px] h-[320px]  flex justify-center items-center gap-5 flex-col shadow-lg  hover:shadow-xl transition-shadow duration-300">
              <Image src={logo2} alt="logo2" />
              <h1 className="text-[22px] font-semibold">24/7 Support</h1>
              <p className="text-[#1A0B5B4D] font-bold text-[16px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="blog3 w-[270px] h-[320px]  flex justify-center items-center gap-5 flex-col shadow-lg  hover:shadow-xl transition-shadow duration-300">
              <Image src={logo3} alt="logo3" />
              <h1 className="text-[22px] font-semibold">24/7 Support</h1>
              <p className="text-[#1A0B5B4D] font-bold text-[16px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="blog4 w-[270px] h-[320px]  flex justify-center items-center gap-5 flex-col shadow-lg  hover:shadow-xl transition-shadow duration-300">
              <Image src={logo4} alt="logo4" />
              <h1 className="text-[22px] font-semibold">24/7 Support</h1>
              <p className="text-[#1A0B5B4D] font-bold text-[16px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          

          </div>
        </div>
      </div>
    </div>
  );
}
