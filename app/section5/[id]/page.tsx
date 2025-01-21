"use client";
import Image from "next/image";
import star from "/public/Group 236.png";
import shareLogo from "/public/sharelogos.png";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import image1 from "../../../public/one (1).png";
import image2 from "../../../public/one (2).png";
import image3 from "../../../public/one (3).png";
import image4 from "../../../public/one (4).png";
import Section8 from "@/app/section8/page";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

interface Product {
  _id: number;
  name: string;
  imageURL: string;
  price: number;
  discountPercentage:number;
  category:string;

}

const GetProductData2 = () => {
  const res =
    client.fetch(`*[_type == "product" && "discount" in tags]{
      _id,
  name,
  price,
  "imageURL": image.asset->url,
  discountPercentage,
  category,

  }`);
  return res;
};

export default function Detail({ params }: { params: { id: string } }) {
  const [usproduct, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const categoryData: Product[] = await GetProductData2();
        const productData = categoryData.find(
          (data: Product) => String(data._id) === params.id
        );
        if (productData) {
          setProduct(productData);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchCategoryData();
  }, [params.id]);

  if (!usproduct) {
    return <div>Loading...</div>;  
  }
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
    <div className="">
        <Header/>
    <div className="lg:h-[286px] h-[120px] mt-5 md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
         <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
             <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">Product Details</h1>
             <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">Home . Pages <span className="text-[#FB2E86]">. Product Details</span></p>
         </div>

     </div>
   <div className="flex flex-col justify-center pt-24 pb-24 items-center">
     {/* -----cart component----- */}
     <div className="sl:h-[500px] p-3 w-[90%] clg:w-[75%] flex flex-col  sl:flex-row sl:flex bg-[#F6F4FD] ">
       <div className="part1 flex gap-3 sl:w-[50%] ">
         <div className=" w-[28%]  justify-center items-center flex flex-col gap-3">
           <img
             src={usproduct.imageURL}
             alt={usproduct.imageURL}
             width={151}
             height={155}
             className="h-[30%]"
           ></img>
           <img
             src={usproduct.imageURL}
             alt={usproduct.name}
             width={151}
             height={155}
             className="h-[30%]"
           ></img>
           <img
             src={usproduct.imageURL}
             alt={usproduct.name}
             width={151}
             height={155}
             className="h-[30%]"
           ></img>
         </div>
         <img
           src={usproduct.imageURL}
           alt={usproduct.name}
           width={375}
           height={487}
         ></img>
       </div>

       <div className="part2 pt-5 sl:pt-0 pl-4 sl:w-[50%] ">
         <div className="flex flex-col gap-3 sl:gap-4 pl-1 sm:pl-2 md:pl-5 lg:pl-7">
           <h1 className="text-black font-semibold text-[25x] xmd:text-[28px] lg:text-[36px]">
             {usproduct.name}
           </h1>
           <div className="flex gap-[10px]">
             <div>
               <Image src={star} width={100} alt="star logo"></Image>
             </div>
             <p className="text-[#151875] lg:text-[14px] font-semibold">
               (22)
             </p>
           </div>

           <div className="flex gap-2 sl:gap-4">
             <p className="text-base leading-[29px] text-[#151875] font-semibold ">
               ${usproduct.price}
             </p>
             <p className="text-base leading-[29px] line-through text-[#FB2E86] font-semibold">
              {usproduct.discountPercentage}%
             </p>
           </div>
           <h1 className="text-base font-semibold ">Color</h1>
           <p className="text-base text-[#A9ACC6] leading-[29px] ">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
             tellus porttitor purus, et volutpat sit.
           </p>
         </div>

         <div className="flex items-center justify-center gap-6 pt-3 pb-3 sm:pl-2 md:pl-5 lg:pl-7">
           <div  onClick={() => addToCart(usproduct)} className="text-base leading-[29px] ">Add To cart</div>
           <svg
             width="18"
             height="18"
             viewBox="0 0 18 18"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M15.1202 3.45748C14.3239 2.66099 13.2682 2.17673 12.1451 2.09277C11.022 2.00881 9.90605 2.33073 9.00021 2.99998C8.04595 2.29021 6.8582 1.96837 5.67615 2.09926C4.49409 2.23016 3.40554 2.80407 2.62969 3.70542C1.85384 4.60678 1.44832 5.76862 1.49481 6.95699C1.54129 8.14536 2.03632 9.27198 2.88021 10.11L8.46771 15.6975C8.53743 15.7678 8.62038 15.8236 8.71177 15.8617C8.80317 15.8997 8.9012 15.9193 9.00021 15.9193C9.09922 15.9193 9.19725 15.8997 9.28864 15.8617C9.38003 15.8236 9.46299 15.7678 9.53271 15.6975L15.1202 10.11C15.5572 9.67327 15.9039 9.15474 16.1404 8.58401C16.3769 8.01327 16.4986 7.40153 16.4986 6.78373C16.4986 6.16593 16.3769 5.55419 16.1404 4.98346C15.9039 4.41272 15.5572 3.89419 15.1202 3.45748ZM14.0627 9.05248L9.00021 14.1075L3.93771 9.05248C3.49159 8.60451 3.18769 8.03477 3.06413 7.41474C2.94057 6.79471 3.00285 6.152 3.24317 5.56723C3.48349 4.98246 3.89113 4.48168 4.41497 4.1277C4.9388 3.77372 5.5555 3.58231 6.18771 3.57748C7.03229 3.57955 7.84153 3.91673 8.43771 4.51498C8.50743 4.58528 8.59038 4.64107 8.68177 4.67915C8.77317 4.71723 8.8712 4.73683 8.97021 4.73683C9.06922 4.73683 9.16725 4.71723 9.25864 4.67915C9.35003 4.64107 9.43299 4.58528 9.50271 4.51498C10.1165 3.98314 10.9093 3.70434 11.7209 3.735C12.5324 3.76566 13.302 4.10349 13.8738 4.68012C14.4457 5.25675 14.7771 6.02911 14.8011 6.84087C14.825 7.65264 14.5396 8.44317 14.0027 9.05248H14.0627Z"
               fill="#535399"
             />
           </svg>
         </div>

         <div className="text-base leading-[29px] sm:pl-2 md:pl-5 lg:pl-7">
           Categories: {usproduct.category}
         </div>
         <div className="text-base leading-[29px] sm:pl-2 md:pl-5 lg:pl-7">
           Tags: Latest
         </div>

         <div className="flex gap-6 items-center sm:pl-2 md:pl-5 lg:pl-7  ">
           <h2 className="text-base leading-[29px]">Share</h2>

           <Image
             src={shareLogo}
             alt="share logo "
             className="h-[17px] w-[70px]"
           ></Image>
         </div>
       </div>
     </div>
   </div>
   {/* -------para component--------- */}
   <div className=" llm:h-[649px] flex  justify-center bg-[#F9F8FE] pt-[100px]">
     <div className="mainComponent font-josefin flex flex-col  gap-2 llm:gap-6 clg:w-[75%] w-[90%]">
       <div className="part1 pb-6 text-[#151875] flex  gap-2 md:gap-10">
         <h1 className=" hover:underline text-[12px] clxs:text-[15px]  lg:text-[22px] font-bold">
           Description
         </h1>
         <h1 className="hover:underline text-[12px] clxs:text-[15px] lg:text-[22px] font-bold">
           Additional Info
         </h1>
         <h1 className="hover:underline text-[12px] clxs:text-[15px] lg:text-[22px] font-bold">
           Reviews
         </h1>
         <h1 className="hover:underline text-[12px] clxs:text-[15px] lg:text-[22px] font-bold">
           Video
         </h1>
       </div>
       <div className="part2 flex flex-col gap-3">
         <h1 className="text-[20px] lg:text-[22px] font-bold text-[#151875]">
           Varius tempor.
         </h1>
         <p className=" text-[16px] text-[#A9ACC6]">
           Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
           ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
           varius ac est bibendum. Scelerisque a, risus ac ante. Velit
           consectetur neque, elit, aliquet. Non varius proin sed urna,
           egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
           justo, tortor sed donec tempus. Imperdiet consequat, quis diam
           arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
           nunc nec. Dui, massa viverr .
         </p>
       </div>
       <div className="part3 flex flex-col gap-3">
         <h1 className="text-[20px] lg:text-[22px] font-bold text-[#151875]">
           More details
         </h1>
         <div className=" flex gap-2 items-center">
           <svg
             width="18"
             height="16"
             viewBox="0 0 18 16"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M1 8L17 8"
               stroke="black"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
             <path
               d="M10 1L17 8L10 15"
               stroke="black"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
           </svg>
           <p className="text-[16px] text-[#A9ACC6]">
             Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
             diam arcu, nulla lobortis justo netus dis. Eu in fringilla
             vulputate nunc nec. Dui, massa viverr .
           </p>
         </div>
         <div className=" flex gap-2 items-center">
           <svg
             width="18"
             height="16"
             viewBox="0 0 18 16"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M1 8L17 8"
               stroke="black"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
             <path
               d="M10 1L17 8L10 15"
               stroke="black"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
           </svg>
           <p className="text-[16px] text-[#A9ACC6]">
             Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
             diam arcu, nulla lobortis justo netus dis. Eu in fringilla
             vulputate nunc nec. Dui, massa viverr .
           </p>
         </div>
         <div className=" flex gap-2 items-center">
           <svg
             width="18"
             height="16"
             viewBox="0 0 18 16"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M1 8L17 8"
               stroke="black"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
             <path
               d="M10 1L17 8L10 15"
               stroke="black"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
           </svg>
           <p className="text-[16px] text-[#A9ACC6]">
             Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
             diam arcu, nulla lobortis justo netus dis. Eu in fringilla
             vulputate nunc nec. Dui, massa viverr .
           </p>
         </div>
         <div className=" flex gap-2 items-center">
           <svg
             width="18"
             height="16"
             viewBox="0 0 18 16"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M1 8L17 8"
               stroke="black"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
             <path
               d="M10 1L17 8L10 15"
               stroke="black"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
           </svg>
           <p className="text-[16px] text-[#A9ACC6]">
             Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
             diam arcu, nulla lobortis justo netus dis. Eu in fringilla
             vulputate nunc nec. Dui, massa viverr .
           </p>
         </div>
       </div>
     </div>
   </div>
   {/* --------related products component------ */}
   <div className="flex flex-col text-[#151875] pt-24 pb-24 items-center  gap-[10px] md:gap-[20px]">
     <h1 className="font-bold  text-[30px] md:text-[38px] lg:text-[42px] ">
       Trending Products
     </h1>
     <div className="grid grid-cols-1 gap-2 md:grid-cols-2 clg:grid-cols-4 justify-center items-center">
       <div className=" blog1 w-[270px] h-[390px]  flex-col flex items-center  shadow-md hover:shadow-xl transition-shadow duration-300">
         <div className="w-full h-[370px] hover:h-[340] bg-[#F5F6F8] flex justify-center items-center ">
           <Image src={image1} alt={"image"} />
         </div>
         <div className="mt-1 flex h-[50px] justify-between overflow-y-hidden ">
           <div className="flex items-center gap-3 mb-4">
             <div className="font-semibold  text-[16px] text-[#151875]">
               Mens Fashion Wear{" "}
             </div>

             <Image src={star} alt={"rating"} />
           </div>
         </div>
       </div>
       <div className=" blog2 w-[270px] h-[390px]  flex-col flex items-center  shadow-md hover:shadow-xl transition-shadow duration-300">
         <div className="w-full h-[370px] hover:h-[340] bg-[#F5F6F8] flex justify-center items-center ">
           <Image src={image2} alt={"image"} />
         </div>
         <div className="mt-1 flex h-[50px] justify-between overflow-y-hidden ">
           <div className="flex items-center gap-3 mb-4">
             <div className="font-semibold  text-[16px] text-[#151875]">
             Women’s Fashion                </div>

             <Image src={star} alt={"rating"} />
           </div>
         </div>
       </div>
       <div className=" blog3 w-[270px] h-[390px]  flex-col flex items-center  shadow-md hover:shadow-xl transition-shadow duration-300">
         <div className="w-full h-[370px] hover:h-[340] bg-[#F5F6F8] flex justify-center items-center ">
           <Image src={image3} alt={"image"} />
         </div>
         <div className="mt-1 flex h-[50px] justify-between overflow-y-hidden ">
           <div className="flex items-center gap-3 mb-4">
             <div className="font-semibold  text-[16px] text-[#151875]">
             Wolx Dummy Fashion                </div>

             <Image src={star} alt={"rating"} />
           </div>
         </div>
       </div>
       <div className=" blog4 w-[270px] h-[390px]  flex-col flex items-center  shadow-md hover:shadow-xl transition-shadow duration-300">
         <div className="w-full h-[370px] hover:h-[340] bg-[#F5F6F8] flex justify-center items-center ">
           <Image src={image4} alt={"image"} />
         </div>
         <div className="mt-1 flex h-[50px] justify-between overflow-y-hidden ">
           <div className="flex items-center gap-3 mb-4">
             <div className="font-semibold  text-[16px] text-[#151875]">
             Top Wall Digital Clock                </div>

             <Image src={star} alt={"rating"} />
           </div>
         </div>
       </div>
     </div>
   </div>
   <Section8/>
   <Footer/>
 </div>
);
}
