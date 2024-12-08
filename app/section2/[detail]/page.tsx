import Image from "next/image";
import star from "/public/Group 236.png";
import shareLogo from "/public/sharelogos.png";

import React from "react";
interface pramsInterface {
  detail: string;
}
interface listInterface {
  [key: string]: {
    name: string;
    mainimage: string;
    image1: string;
    image2: string;
    image3: string;
  };
}
export default function Detail({ params }: { params: pramsInterface }) {
  const list: listInterface = {
    "1": {
      name: "Playwood arm chair",
      mainimage: "/Rectangle 138.png",
      image1: "/Rectangle 134.png",
      image2: "/Rectangle 136.png",
      image3: "/Rectangle 137.png",
    },
    "2": {
      name: "Recliner Chair",
      mainimage: "/image 1.png",
      image1: "/image 1.png",
      image2: "/image 1.png",
      image3: "/image 1.png",
    },
     "3": {
      name: "Rocking Chair",
      mainimage: "/image 1169.png",
      image1: "/image 1169.png",
      image2: "/image 1169.png",
      image3: "/image 1169.png",
    }, 
    "4": {
      name: "Armchair",
      mainimage: "/image 3.png",
      image1: "/image 3.png",
      image2: "/image 3.png",
      image3: "/image 3.png",
    },
  };
  const listData = list[params.detail];

  return (
   

    <div className="flex justify-center pt-24 pb-24 items-center">
      <div className="h-[500px] p-3 w-[75%] flex bg-[#F6F4FD] ">
        <div className="part1 flex gap-3 w-[50%] bg-tyello">
          <div className=" w-[28%]  justify-center items-center flex flex-col gap-3">
            <Image src={listData.image1} alt={listData.name} width={151} height={155} className="h-[30%]"></Image> 
            <Image src={listData.image2} alt={listData.name} width={151} height={155}  className="h-[30%]"></Image> 
            <Image src={listData.image3} alt={listData.name} width={151} height={155}  className="h-[30%]"></Image> 
          </div>
          <Image src={listData.mainimage} alt={listData.name} width={375} height={487} ></Image> 
        </div>

        <div className="part2 pl-4 w-[50%] ">

          <div className="flex flex-col gap-4 pl-1 sm:pl-2 md:pl-5 lg:pl-7">
            <h1 className="text-black font-semibold lg:text-[36px]">
              {listData.name}
            </h1>
            <div className="flex gap-[10px]">
              <div>
                <Image src={star} width={100} alt="star logo"></Image>
              </div>
              <p className="text-[#151875] lg:text-[14px] font-semibold">
                (22)
              </p>
            </div>

            <div className="flex gap-4">
              <p className="text-base leading-[29px] text-[#151875] font-semibold ">$32.00</p>
              <p className="text-base leading-[29px] line-through text-[#FB2E86] font-semibold">$32.00</p>
            </div>
            <h1 className="text-base font-semibold leading-[18.75px] ">Color</h1>
            <p className="text-base text-[#A9ACC6] leading-[29px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 pt-3 pb-3 sm:pl-2 md:pl-5 lg:pl-7">
            <div className="text-base leading-[29px] ">Add To cart</div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1202 3.45748C14.3239 2.66099 13.2682 2.17673 12.1451 2.09277C11.022 2.00881 9.90605 2.33073 9.00021 2.99998C8.04595 2.29021 6.8582 1.96837 5.67615 2.09926C4.49409 2.23016 3.40554 2.80407 2.62969 3.70542C1.85384 4.60678 1.44832 5.76862 1.49481 6.95699C1.54129 8.14536 2.03632 9.27198 2.88021 10.11L8.46771 15.6975C8.53743 15.7678 8.62038 15.8236 8.71177 15.8617C8.80317 15.8997 8.9012 15.9193 9.00021 15.9193C9.09922 15.9193 9.19725 15.8997 9.28864 15.8617C9.38003 15.8236 9.46299 15.7678 9.53271 15.6975L15.1202 10.11C15.5572 9.67327 15.9039 9.15474 16.1404 8.58401C16.3769 8.01327 16.4986 7.40153 16.4986 6.78373C16.4986 6.16593 16.3769 5.55419 16.1404 4.98346C15.9039 4.41272 15.5572 3.89419 15.1202 3.45748ZM14.0627 9.05248L9.00021 14.1075L3.93771 9.05248C3.49159 8.60451 3.18769 8.03477 3.06413 7.41474C2.94057 6.79471 3.00285 6.152 3.24317 5.56723C3.48349 4.98246 3.89113 4.48168 4.41497 4.1277C4.9388 3.77372 5.5555 3.58231 6.18771 3.57748C7.03229 3.57955 7.84153 3.91673 8.43771 4.51498C8.50743 4.58528 8.59038 4.64107 8.68177 4.67915C8.77317 4.71723 8.8712 4.73683 8.97021 4.73683C9.06922 4.73683 9.16725 4.71723 9.25864 4.67915C9.35003 4.64107 9.43299 4.58528 9.50271 4.51498C10.1165 3.98314 10.9093 3.70434 11.7209 3.735C12.5324 3.76566 13.302 4.10349 13.8738 4.68012C14.4457 5.25675 14.7771 6.02911 14.8011 6.84087C14.825 7.65264 14.5396 8.44317 14.0027 9.05248H14.0627Z" fill="#535399"/>
</svg>
          </div>

          <div className="text-base leading-[29px] sm:pl-2 md:pl-5 lg:pl-7">Categories:</div>
          <div className="text-base leading-[29px] sm:pl-2 md:pl-5 lg:pl-7">Tags</div>

          <div className="flex gap-6 items-center sm:pl-2 md:pl-5 lg:pl-7  ">
            <h2 className="text-base leading-[29px]">Share</h2>

              <Image src={shareLogo} alt="share logo "className="h-[17px] w-[70px]"></Image>
           
          </div>
        </div>
      </div>
    </div>
  );
}
