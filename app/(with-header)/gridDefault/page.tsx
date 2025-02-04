"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Section8 from "../../(heroSection)/section8/page";
import Link from "next/link";
import SmallLikeButton from "@/app/funtionalities/likeButton/smallLikeButton";
import addToCart from "@/app/funtionalities/cart/addToCart";
import Alert from "@/app/funtionalities/alerts/added-product";
const GetProductData = () => {
  const res =
    client.fetch(`*[_type == "product" ]{
  name,
  price,
   "imageURL": image.asset->url,
   discountPercentage,
   _id,
   category,
   description
  }`);
  return res;
};

interface Product {
  name: string;
  imageURL: string;
  price: number;
  discountPercentage:number;
  _id:string;
  category:string,
  description:string,
  quantity: number
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


    const [selectedCategory, setSelectedCategory] = useState<string>(""); // Category filter
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
   
    const [alertData, setAlertData] = useState<{ show: boolean; type: "success" | "error" | "wishlist-add" | "wishlist-remove"; message: string }>({
      show: false,
      type: "success",
      message: "",
    });

    const showAlert = (type: "success" | "error" | "wishlist-add" | "wishlist-remove", message: string) => {
      setAlertData({ show: true, type, message });
      setTimeout(() => setAlertData({ show: false, type: "success", message: "" }), 1000); 
    };

    useEffect(() => {
      const results = product.filter((product: Product) => {
   
          
        const isCategoryMatch = selectedCategory ? product.category === selectedCategory : true;

        return isCategoryMatch;
      });
      setFilteredProducts(results);

    }, [selectedCategory,product]);
   

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
<div>

</div>

      <div className=" sm:mt-24 mt-10 sm:mb-20 mb-10 xl:w-full flex lg:flex-row flex-col gap-3 lg:gap-16 justify-center items-center ">
        <div >
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
             value={selectedCategory}
             onChange={(e) => setSelectedCategory(e.target.value)}
              name="sorts"
              className=" text-[#8A8FB9] border-[#E7E6EF] lg:text-[12px] text-[6px] md:text-[12px] lg:h-[28px] h-[13px] w-[30px] md:h-[20px] md:w-[28px] lg:w-[98px] border-[1px] flex items-center justify-center"
            >            
            <option value="">All Categories</option>
            <option value="Sofa">Sofa</option>
            <option value="Chair">Chair</option>
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

      <div className="flex justify-center  items-center ">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-y-8   px-10 md:pl-40 lg:pl-10 pt-10 gap-x-6 gap-y-10">
          {filteredProducts.map((item:Product,index) => (
            <div key={index} className="relative group xl:h-[363px] xl:w-[270px] w-[90%]  bg-[#F6F7FB] md:h-[300px] shadow-md hover:shadow-lg  md:w-[190px] flex flex-col justify-center items-center lg:gap-2 gap-1">
                     <Link href={`/gridDefault/${item._id}`}>

              <div className="xl:h-[280px] xl:w-[270px] md:h-[200px] md:w-[190px]  bg-[#F6F7FB] flex justify-center items-center">
                <img
                  width={180}
                  height={180}
                  src={item.imageURL}
                  alt={item.name}
                ></img>
              </div>
              <div className=" bg-white pb-10 pt-2 px-1 flex flex-col gap-1">
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
                <p className="text-[#FF2AAA] line-through">-{item.discountPercentage}%</p>
              </div>
              </div>
              </Link>

              <div   className=" hidden group-hover:flex w-[30px] h-[30px] absolute top-[2px] rounded-full justify-center items-center left-[11px] ">
                  <svg
                  onClick={() => {
                    showAlert("success", "Added to Cart!");
                    addToCart(item)}}
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
                        <Alert show={alertData.show} type={alertData.type} message={alertData.message} onClose={() => setAlertData({ show: false, type: "success", message: "" })} />
                  
                </div>
     
                <div  className="absolute  top-[9px] left-[57px] hidden group-hover:flex ">
              <SmallLikeButton item={item} />
              </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[9px] left-[90px] hidden group-hover:flex"
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
          ))}
        </div>
      </div>
      <Section8 />
    </div>
  );
}
