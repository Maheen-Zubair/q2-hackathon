"use client";
import Image from "next/image";
import star from "/public/Group 236.png";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import image1 from "@/public/one (1).png";
import image2 from "@/public/one (2).png";
import image3 from "@/public/one (3).png";
import image4 from "@/public/one (4).png";
import Section8 from "@/app/(heroSection)/section8/page";
import SocialShare from "@/app/funtionalities/social-sharing/page";
import Alert from "@/app/funtionalities/alerts/added-product";
import LikeButton from "@/app/funtionalities/likeButton/likeButton";
import addToCart from "@/app/funtionalities/cart/addToCart";
import ReviewList from "@/app/funtionalities/ReviewForm/ReviewList";
import ReviewForm from "@/app/funtionalities/ReviewForm/ReviewForm";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
}
interface Product {
  _id: string;
  name: string;
  imageURL: string;
  price: number;
  discountPercentage: number;
  category: string;
  description: string;
  quantity: number;
}

export default function Detail({ params }: { params: { id: string } }) {
  const [usproduct, setProduct] = useState<Product | undefined>(undefined);
  const [activeSection, setActiveSection] = useState("description"); // To toggle between sections

  const [alertData, setAlertData] = useState<{
    show: boolean;
    type: "success" | "error" | "wishlist-add" | "wishlist-remove";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });
  const [reviews, setReviews] = useState<Review[]>([]);
  const { id } = params;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && _id == $id ][0]{
              _id,
              name,
              price,
              discountPercentage,
              category,
              description,
              "imageURL": coalesce(image.asset->url, image.asset->url),
              "reviews": *[_type == "review" && product._ref == ^._id] | order(_createdAt desc)
            }`;

        const data = await client.fetch(query, { id });
        if (data) {
          setProduct(data);
          setReviews(data.reviews || []);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!usproduct) {
    return <div>Loading...</div>;
  }

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

  return (
    <div>
      <Header />
      <div className="lg:h-[286px] h-[120px] mt-5 md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
        <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
          <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            Product Details
          </h1>
          <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
            Home . Pages{" "}
            <span className="text-[#FB2E86]">. Product Details</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center pt-24 pb-24 items-center">
        {/* -----cart component----- */}
        <div className="sl:h-[500px] p-3 w-[90%] clg:w-[75%] flex flex-col  sl:flex-row sl:flex bg-[#F6F4FD] ">
          <div className="part1 flex  gap-3 sl:w-[50%] justify-center items-center">
            <div className="flex flex-row sm:flex-col  ">
              <div>
                <img
                  src={usproduct.imageURL}
                  alt={usproduct.imageURL}
                  width={151}
                  height={155}
                  className="object-contain"
                ></img>
                <img
                  src={usproduct.imageURL}
                  alt={usproduct.name}
                  width={151}
                  height={155}
                  className="object-contain"
                ></img>
                <img
                  src={usproduct.imageURL}
                  alt={usproduct.name}
                  width={151}
                  height={155}
                  className="object-contain"
                ></img>
              </div>
            </div>
            <div>
              {" "}
              <img
                src={usproduct.imageURL}
                alt={usproduct.name}
                width={320}
                height={487}
                className="object-contain"
              ></img>
            </div>
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
                  -{usproduct.discountPercentage}%
                </p>
              </div>
              <h1 className="text-base font-semibold ">Color</h1>
              <p className="text-base text-[#A9ACC6] leading-[29px] ">
                {usproduct.description}
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 pt-3 pb-3 sm:pl-2 md:pl-5 lg:pl-7">
              <div
                onClick={() => {
                  showAlert("success", "Added to Cart!");
                  addToCart(usproduct);
                }}
                className="text-base leading-[29px] "
              >
                Add To cart
              </div>

              <LikeButton item={usproduct} />
            </div>
            <div></div>
            <div>
              {/* Display alert */}
              <Alert
                show={alertData.show}
                type={alertData.type}
                message={alertData.message}
                onClose={() =>
                  setAlertData({ show: false, type: "success", message: "" })
                }
              />
            </div>
            <div className="text-base leading-[29px] sm:pl-2 md:pl-5 lg:pl-7">
              Categories: {usproduct.category}
            </div>
            <div className="text-base leading-[29px] sm:pl-2 md:pl-5 lg:pl-7">
              Tags: Latest
            </div>

            <div
              className="flex gap-6 items-center sm:pl-2 
            
            
            md:pl-5 lg:pl-7  "
            >
              <h2 className="text-base leading-[29px]">Share</h2>
              <SocialShare />
            </div>
          </div>
        </div>
      </div>

      {/* -------para component--------- */}
      <div className="flex pb-14 justify-center bg-[#F9F8FE] pt-[100px]">
        <div className="mainComponent font-josefin flex flex-col gap-2 llm:gap-6 clg:w-[75%] w-[90%]">
          <div className="part1 pb-6 text-[#151875] flex gap-2 md:gap-10">
            {/* Section Links */}
            <h1
              className={`hover:underline text-[12px] clxs:text-[15px] lg:text-[22px] font-bold cursor-pointer ${
                activeSection === "description" ? "text-blue-600" : "text-black"
              }`}
              onClick={() => setActiveSection("description")}
            >
              Description
            </h1>
            <h1
              className={`hover:underline text-[12px] clxs:text-[15px] lg:text-[22px] font-bold cursor-pointer ${
                activeSection === "additionalInfo"
                  ? "text-blue-600"
                  : "text-black"
              }`}
              onClick={() => setActiveSection("additionalInfo")}
            >
              Additional Info
            </h1>
            <h1
              className={`hover:underline text-[12px] clxs:text-[15px] lg:text-[22px] font-bold cursor-pointer ${
                activeSection === "reviews" ? "text-blue-600" : "text-black"
              }`}
              onClick={() => setActiveSection("reviews")}
            >
              Reviews
            </h1>
          </div>

          {/* Description Section */}
          {activeSection === "description" && (
            <div>
              <div className="part2 flex flex-col gap-3">
                <h1 className="text-[20px] lg:text-[22px] font-bold text-[#151875]">
                  Varius tempor.
                </h1>
                <p className=" text-[16px] text-[#A9ACC6]">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus
                  dolor ornare faucibus vel sed et eleifend habitasse amet.
                  Montes, mauris varius ac est bibendum. Scelerisque a, risus ac
                  ante. Velit consectetur neque, elit, aliquet. Non varius proin
                  sed urna, egestas consequat laoreet diam tincidunt. Magna eget
                  faucibus cras justo, tortor sed donec tempus. Imperdiet
                  consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
                  in fringilla vulputate nunc nec. Dui, massa viverr .
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
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
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
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
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
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
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
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Additional Info Section */}
          {activeSection === "additionalInfo" && (
            <div className="part3 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="flex items-center space-x-3 p-4 border rounded-lg shadow-md bg-white">
                <svg
                  width="20"
                  height="20"
                  fill="#151875"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <p className="text-[16px] text-[#151875]">
                  Material: High-Quality Mesh & Faux Leather
                </p>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg shadow-md bg-white">
                <svg
                  width="20"
                  height="20"
                  fill="#151875"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <p className="text-[16px] text-[#151875]">
                  Dimensions: 24&quot; x 24&quot; x 48&quot; (W x D x H)
                </p>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg shadow-md bg-white">
                <svg
                  width="20"
                  height="20"
                  fill="#151875"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <p className="text-[16px] text-[#151875]">
                  Adjustable Height & Armrests for Comfort
                </p>
              </div>
            </div>
          )}

          {/* Review Section */}
          {activeSection === "reviews" && (
            <div className="bg-[#F9F8FE] pb-5">
              <div className="text-center">
                <h2 className="text-2xl sm:text-[35px] font-bold text-[#151875]">
                  Customer Reviews
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  Share your own thoughts to help others make informed
                  decisions.
                </p>
              </div>
              <div className="px-3 sm:px-14">
                <ReviewList reviews={reviews} />
              </div>

              {/* Review Form */}
              <ReviewForm
                productId={usproduct._id}
                onNewReview={(newReview) =>
                  setReviews((prevReviews) => [newReview, ...prevReviews])
                }
                reviews={reviews}
              />
            </div>
          )}
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
                  Women’s Fashion{" "}
                </div>

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
                  Wolx Dummy Fashion{" "}
                </div>

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
                  Top Wall Digital Clock{" "}
                </div>

                <Image src={star} alt={"rating"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section8 />
      <Footer />
    </div>
  );
}
