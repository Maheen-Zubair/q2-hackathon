"use client";

import React, { useState } from "react";
import { useWishlist } from "@/app/context/wishList-Context";
import addToCart from "@/app/funtionalities/cart/addToCart";
import Alert from "@/app/funtionalities/alerts/added-product";
import { Product } from "@/app/types/product";

export default function WishlistPage() {
  const [alertData, setAlertData] = useState<{
    show: boolean;
    type: "success" | "error" | "wishlist-add" | "wishlist-remove";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });

  const { wishlist, addToWishlist } = useWishlist();

  const handleToggle = (item: Product) => {
    addToWishlist(item); 
  };

  console.log("wishlist:", wishlist);

  const showAlert = (
    type: "success" | "error" | "wishlist-add" | "wishlist-remove",
    message: string
  ) => {
    setAlertData({ show: true, type, message });
    setTimeout(() => setAlertData({ show: false, type: "success", message: "" }), 1000);
  };

  return (
    <div>
      <div className="lg:h-[286px] h-[120px] mt-5 sm:mb-16 mb-10 md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
        <div className="flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
          <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            WishList
          </h1>
          <p className="text-black lg:text-[16px] text-[12px] md:text-[14px]">
            Home . Pages <span className="text-[#FB2E86]">. WishList</span>
          </p>
        </div>
      </div>
      <div className="h-full p-6 text-[#1D3178]">
        <div className="max-w-7xl sm:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-12">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
              {wishlist.length === 0 ? (
                <p>No items in wishlist</p>
              ) : (
                <div className="w-full">
                  {/* Mobile View: Display wishlist items in vertical stack */}
                  <div className="sm:hidden block">
                    {wishlist.map((item: Product, index: number) => (
                      <div key={index} className="border-b py-4">
                        <div className="flex flex-col md:flex-row items-center">
                          <img
                            src={item.imageURL}
                            alt={item.name}
                            className="w-24 h-24 rounded-lg mb-4 md:mb-0 md:mr-4"
                          />
                          <div className="flex-1">
                            <p className="font-semibold text-lg">{item.name}</p>
                            <p className="text-sm text-gray-500">Color: Brown</p>
                            <p className="text-sm text-gray-500">Size: XL</p>
                            <div className="flex justify-between mt-4">
                              {/* Additional product info can go here */}
                              <div className="flex items-center"></div>
                            </div>
                          </div>
                          <button
                            onClick={() => handleToggle(item)}
                            className="flex items-center space-x-2"
                          >
                            {/* Heart toggling logic */}
                            <svg
                              onClick={() =>
                                showAlert("wishlist-remove", "Removed from Wishlist!")
                              }
                              xmlns="http://www.w3.org/2000/svg"
                              fill={
                                wishlist.some((w: Product) => w._id === item._id)
                                  ? "red"
                                  : "none"
                              }
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6 cursor-pointer"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                              />
                            </svg>
                            <Alert
                              show={alertData.show}
                              type={alertData.type}
                              message={alertData.message}
                              onClose={() =>
                                setAlertData({
                                  show: false,
                                  type: "success",
                                  message: "",
                                })
                              }
                            />
                            <span>Remove</span>
                          </button>
                          <svg
                            onClick={() => {
                              addToCart(item);
                              showAlert("success", "Added to Cart!");
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            width="30px"
                            height="30px"
                          >
                            <path d="M 3 2 C 1.347656 2 0 3.347656 0 5 C 0 6.652344 1.347656 8 3 8 C 4.101563 8 5.054688 7.398438 5.578125 6.507813 C 7.148438 7.253906 8.296875 8.78125 8.441406 10.605469 L 11.234375 45.867188 C 11.625 50.828125 15.347656 54.847656 20.078125 55.785156 C 20.460938 58.167969 22.511719 60 25 60 C 27.414063 60 29.433594 58.277344 29.898438 56 L 39.003906 56 C 40.96875 60.691406 45.601563 64 51 64 C 58.167969 64 64 58.167969 64 51 C 64 45.863281 61 41.429688 56.667969 39.316406 L 60.808594 20 L 61 20 C 62.652344 20 64 18.652344 64 17 C 64 15.347656 62.652344 14 61 14 L 10.71875 14 L 10.4375 10.449219 C 10.21875 7.703125 8.398438 5.414063 5.945313 4.46875 C 5.695313 3.066406 4.472656 2 3 2 Z M 3 3.75 C 3.691406 3.75 4.25 4.3125 4.25 5 C 4.25 5.6875 3.691406 6.25 3 6.25 C 2.308594 6.25 1.75 5.6875 1.75 5 C 1.75 4.3125 2.308594 3.75 3 3.75 Z M 10.875 16 L 61 16 C 61.550781 16 62 16.449219 62 17 C 62 17.550781 61.550781 18 61 18 L 11.03125 18 Z M 11.191406 20 L 58.765625 20 L 54.785156 38.566406 C 53.585938 38.199219 52.316406 38 51 38 C 47.324219 38 44.007813 39.539063 41.640625 42 L 15 42 C 14.445313 42 14 42.449219 14 43 C 14 43.550781 14.445313 44 15 44 L 40.0625 44 C 39.65625 44.632813 39.296875 45.296875 39.003906 46 L 13.261719 46 C 13.25 45.902344 13.234375 45.808594 13.226563 45.710938 Z M 14 22 C 13.445313 22 13 22.449219 13 23 L 13 25 C 13 25.550781 13.445313 26 14 26 C 14.554688 26 15 25.550781 15 25 L 15 23 C 15 22.449219 14.554688 22 14 22 Z M 19 22 C 18.445313 22 18 22.449219 18 23 L 18 25 C 18 25.550781 18.445313 26 19 26 C 19.554688 26 20 25.550781 20 25 L 20 23 C 20 22.449219 19.554688 22 19 22 Z M 24 22 C 23.445313 22 23 22.449219 23 23 L 23 25 C 23 25.550781 23.445313 26 24 26 C 24.554688 26 25 25.550781 25 25 L 25 23 C 25 22.449219 24.554688 22 24 22 Z M 29 22 C 28.445313 22 28 22.449219 28 23 L 28 25 C 28 25.550781 28.445313 26 29 26 C 29.554688 26 30 25.550781 30 25 L 30 23 C 30 22.449219 29.554688 22 29 22 Z M 34 22 C 33.445313 22 33 22.449219 33 23 L 33 25 C 33 25.550781 33.445313 26 34 26 C 34.554688 26 35 25.550781 35 25 L 35 23 C 35 22.449219 34.554688 22 34 22 Z M 39 22 C 38.445313 22 38 22.449219 38 23 L 38 25 C 38 25.550781 38.445313 26 39 26 C 39.554688 26 40 25.550781 40 25 L 40 23 C 40 22.449219 39.554688 22 39 22 Z M 44 22 C 43.445313 22 43 22.449219 43 23 L 43 25 C 43 25.550781 43.445313 26 44 26 C 44.554688 26 45 25.550781 45 25 L 45 23 C 45 22.449219 44.554688 22 44 22 Z M 49 22 C 48.445313 22 48 22.449219 48 23 L 48 25 C 48 25.550781 48.445313 26 49 26 C 49.554688 26 50 25.550781 50 25 L 50 23 C 50 22.449219 49.554688 22 49 22 Z M 54 22 C 53.445313 22 53 22.449219 53 23 L 53 25 C 53 25.550781 53.445313 26 54 26 C 54.554688 26 55 25.550781 55 25 L 55 23 C 55 22.449219 54.554688 22 54 22 Z M 51 40 C 57.066406 40 62 44.933594 62 51 C 62 57.066406 57.066406 62 51 62 C 44.933594 62 40 57.066406 40 51 C 40 44.933594 44.933594 40 51 40 Z M 51 44 C 50.445313 44 50 44.449219 50 45 L 50 50 L 45 50 C 44.445313 50 44 50.449219 44 51 C 44 51.550781 44.445313 52 45 52 L 50 52 L 50 57 C 50 57.550781 50.445313 58 51 58 C 51.554688 58 52 57.550781 52 57 L 52 52 L 57 52 C 57.554688 52 58 51.550781 58 51 C 58 50.449219 57.554688 50 57 50 L 52 50 L 52 45 C 52 44.449219 51.554688 44 51 44 Z M 13.71875 48 L 38.363281 48 C 38.132813 48.964844 38 49.964844 38 51 C 38 52.035156 38.132813 53.035156 38.363281 54 L 29.898438 54 C 29.433594 51.722656 27.414063 50 25 50 C 22.675781 50 20.734375 51.601563 20.175781 53.753906 C 17.195313 53.058594 14.742188 50.871094 13.71875 48 Z M 25 51.566406 C 26.894531 51.566406 28.433594 53.105469 28.433594 55 C 28.433594 56.894531 26.890625 58.433594 25 58.433594 C 23.109375 58.433594 21.566406 56.894531 21.566406 55 C 21.566406 53.105469 23.105469 51.566406 25 51.566406 Z" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop View: Table format */}
                  <div className="hidden sm:block">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left border-b">
                          <th className="pb-4">Product</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlist.map((item: Product, index: number) => (
                          <tr key={index} className="border-b">
                            <td className="py-4">
                              <div className="flex items-center">
                                <img
                                  src={item.imageURL}
                                  alt={item.name}
                                  className="w-16 h-16 rounded-lg mr-4"
                                />
                                <div>
                                  <p className="font-semibold">{item.name}</p>
                                  <p className="text-sm text-gray-500">Color: Brown</p>
                                  <p className="text-sm text-gray-500">Size: XL</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4"></td>
                            <td>
                              <button
                                onClick={() => handleToggle(item)}
                                className="flex items-center space-x-2"
                              >
                                {/* Heart toggling logic */}
                                <svg
                                  onClick={() =>
                                    showAlert("wishlist-remove", "Removed from Wishlist!")
                                  }
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill={
                                    wishlist.some((w: Product) => w._id === item._id)
                                      ? "red"
                                      : "none"
                                  }
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-6 h-6 cursor-pointer"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                                  />
                                </svg>
                                <Alert
                                  show={alertData.show}
                                  type={alertData.type}
                                  message={alertData.message}
                                  onClose={() =>
                                    setAlertData({ show: false, type: "success", message: "" })
                                  }
                                />
                              </button>
                            </td>
                            <td>
                              <svg
                                onClick={() => {
                                  addToCart(item);
                                  showAlert("success", "Added to Cart!");
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 64 64"
                                width="30px"
                                height="30px"
                              >
                                <path d="M 3 2 C 1.347656 2 0 3.347656 0 5 C 0 6.652344 1.347656 8 3 8 C 4.101563 8 5.054688 7.398438 5.578125 6.507813 C 7.148438 7.253906 8.296875 8.78125 8.441406 10.605469 L 11.234375 45.867188 C 11.625 50.828125 15.347656 54.847656 20.078125 55.785156 C 20.460938 58.167969 22.511719 60 25 60 C 27.414063 60 29.433594 58.277344 29.898438 56 L 39.003906 56 C 40.96875 60.691406 45.601563 64 51 64 C 58.167969 64 64 58.167969 64 51 C 64 45.863281 61 41.429688 56.667969 39.316406 L 60.808594 20 L 61 20 C 62.652344 20 64 18.652344 64 17 C 64 15.347656 62.652344 14 61 14 L 10.71875 14 L 10.4375 10.449219 C 10.21875 7.703125 8.398438 5.414063 5.945313 4.46875 C 5.695313 3.066406 4.472656 2 3 2 Z M 3 3.75 C 3.691406 3.75 4.25 4.3125 4.25 5 C 4.25 5.6875 3.691406 6.25 3 6.25 C 2.308594 6.25 1.75 5.6875 1.75 5 C 1.75 4.3125 2.308594 3.75 3 3.75 Z M 10.875 16 L 61 16 C 61.550781 16 62 16.449219 62 17 C 62 17.550781 61.550781 18 61 18 L 11.03125 18 Z M 11.191406 20 L 58.765625 20 L 54.785156 38.566406 C 53.585938 38.199219 52.316406 38 51 38 C 47.324219 38 44.007813 39.539063 41.640625 42 L 15 42 C 14.445313 42 14 42.449219 14 43 C 14 43.550781 14.445313 44 15 44 L 40.0625 44 C 39.65625 44.632813 39.296875 45.296875 39.003906 46 L 13.261719 46 C 13.25 45.902344 13.234375 45.808594 13.226563 45.710938 Z M 14 22 C 13.445313 22 13 22.449219 13 23 L 13 25 C 13 25.550781 13.445313 26 14 26 C 14.554688 26 15 25.550781 15 25 L 15 23 C 15 22.449219 14.554688 22 14 22 Z M 19 22 C 18.445313 22 18 22.449219 18 23 L 18 25 C 18 25.550781 18.445313 26 19 26 C 19.554688 26 20 25.550781 20 25 L 20 23 C 20 22.449219 19.554688 22 19 22 Z M 24 22 C 23.445313 22 23 22.449219 23 23 L 23 25 C 23 25.550781 23.445313 26 24 26 C 24.554688 26 25 25.550781 25 25 L 25 23 C 25 22.449219 24.554688 22 24 22 Z M 29 22 C 28.445313 22 28 22.449219 28 23 L 28 25 C 28 25.550781 28.445313 26 29 26 C 29.554688 26 30 25.550781 30 25 L 30 23 C 30 22.449219 29.554688 22 29 22 Z M 34 22 C 33.445313 22 33 22.449219 33 23 L 33 25 C 33 25.550781 33.445313 26 34 26 C 34.554688 26 35 25.550781 35 25 L 35 23 C 35 22.449219 34.554688 22 34 22 Z M 39 22 C 38.445313 22 38 22.449219 38 23 L 38 25 C 38 25.550781 38.445313 26 39 26 C 39.554688 26 40 25.550781 40 25 L 40 23 C 40 22.449219 39.554688 22 39 22 Z M 44 22 C 43.445313 22 43 22.449219 43 23 L 43 25 C 43 25.550781 43.445313 26 44 26 C 44.554688 26 45 25.550781 45 25 L 45 23 C 45 22.449219 44.554688 22 44 22 Z M 49 22 C 48.445313 22 48 22.449219 48 23 L 48 25 C 48 25.550781 48.445313 26 49 26 C 49.554688 26 50 25.550781 50 25 L 50 23 C 50 22.449219 49.554688 22 49 22 Z M 54 22 C 53.445313 22 53 22.449219 53 23 L 53 25 C 53 25.550781 53.445313 26 54 26 C 54.554688 26 55 25.550781 55 25 L 55 23 C 55 22.449219 54.554688 22 54 22 Z M 51 40 C 57.066406 40 62 44.933594 62 51 C 62 57.066406 57.066406 62 51 62 C 44.933594 62 40 57.066406 40 51 C 40 44.933594 44.933594 40 51 40 Z M 51 44 C 50.445313 44 50 44.449219 50 45 L 50 50 L 45 50 C 44.445313 50 44 50.449219 44 51 C 44 51.550781 44.445313 52 45 52 L 50 52 L 50 57 C 50 57.550781 50.445313 58 51 58 C 51.554688 58 52 57.550781 52 57 L 52 52 L 57 52 C 57.554688 52 58 51.550781 58 51 C 58 50.449219 57.554688 50 57 50 L 52 50 L 52 45 C 52 44.449219 51.554688 44 51 44 Z M 13.71875 48 L 38.363281 48 C 38.132813 48.964844 38 49.964844 38 51 C 38 52.035156 38.132813 53.035156 38.363281 54 L 29.898438 54 C 29.433594 51.722656 27.414063 50 25 50 C 22.675781 50 20.734375 51.601563 20.175781 53.753906 C 17.195313 53.058594 14.742188 50.871094 13.71875 48 Z M 25 51.566406 C 26.894531 51.566406 28.433594 53.105469 28.433594 55 C 28.433594 56.894531 26.890625 58.433594 25 58.433594 C 23.109375 58.433594 21.566406 56.894531 21.566406 55 C 21.566406 53.105469 23.105469 51.566406 25 51.566406 Z" />
                              </svg>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between items-center mt-4"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
