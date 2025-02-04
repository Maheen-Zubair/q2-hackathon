"use client";
import React from "react";

import Link from "next/link";
import { useEffect, useState } from "react";
import Alert from "@/app/funtionalities/alerts/added-product";
import { loadStripe } from "@stripe/stripe-js";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
  quantity: number;
};

export default function ShopppingCart() {
  const [cart, setCart] = useState<Product[]>([]);

  const [alertData, setAlertData] = useState<{
    show: boolean;
    type: "success" | "error" | "wishlist-add" | "wishlist-remove";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });
  // Remove a single product from the cart
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Handle quantity change for a specific product
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      alert("Quantity cannot be less than 1.");
      return;
    }

    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Calculate Subtotal and Total
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  //temporary shipment taxes
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 15;
    const tax = subtotal * 0.1;
    return subtotal + shipping + tax;
  };

  const showAlert = (
    type: "success" | "error" | "wishlist-add" | "wishlist-remove",
    message: string
  ) => {
    setAlertData({ show: true, type, message });
    setTimeout(
      () => setAlertData({ show: false, type: "success", message: "" }),
      3000
    ); 
  };

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: cart }),
    });
  
    const data = await response.json();
    console.log("Checkout Session Response:", data); 
  
    if (!data.sessionId) {
      console.error("Error: No sessionId received");
      return;
    }
  
    const stripeUI = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");
    if (!stripeUI) {
      console.error("Stripe.js failed to load");
      return;
    }
  
    const { error } = await stripeUI.redirectToCheckout({
      sessionId: data.sessionId,
    });
  
    if (error) console.error("Stripe Checkout Error:", error.message);
    };


  return (
    <div>
      <div className="lg:h-[286px] h-[120px] mt-5 sm:mb-16 mb-10 md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
        <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
          <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            Shopping Curt
          </h1>
          <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
            Home . Pages <span className="text-[#FB2E86]">. Shopping Curt</span>
          </p>
        </div>
      </div>
      <div className="h-full p-6 text-[#1D3178]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
              {cart.length > 0 ? (
                <div className="w-full">
                  {/* Mobile View: Display cart items in vertical stack */}
                  <div className="sm:hidden block">
                    {cart.map((item: Product, index) => (
                      <div key={index} className="border-b py-4">
                        <div className="flex flex-col md:flex-row items-center">
                          <img
                            src={item.imageURL}
                            alt={item.name}
                            className="w-24 h-24 rounded-lg mb-4 md:mb-0 md:mr-4"
                          />
                          <div className="flex-1">
                            <p className="font-semibold text-lg">{item.name}</p>
                            <p className="text-sm text-gray-500">
                              Color: Brown
                            </p>
                            <p className="text-sm text-gray-500">Size: XL</p>
                            <div className="flex justify-between mt-4">
                              <span className="text-lg">${item.price}</span>
                              <div className="flex items-center">
                                <input
                                  type="number"
                                  className="w-16 text-center border rounded-lg"
                                  value={item.quantity}
                                  min="1"
                                  onChange={(e) =>
                                    handleQuantityChange(
                                      item._id,
                                      Number(e.target.value)
                                    )
                                  }
                                />
                              </div>
                              <span className="font-semibold text-lg">
                                ${item.price * item.quantity}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              removeFromCart(item._id);
                              showAlert("error", "Removed from Cart!");
                            }}
                            className="bg-gray-100 mt-4 h-10 w-18 p-1 pl-5 pr-5 rounded-lg text-[#FB2E86]  hover:bg-gray-200 md:mt-0 ml-4"
                          >
                            Remove
                          </button>
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
                          <th className="pb-4">Price</th>
                          <th className="pb-4">Quantity</th>
                          <th className="pb-4">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item: Product, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-4">
                              <div className="flex items-center">
                                <img
                                  src={item.imageURL}
                                  alt={item.name}
                                  className="w-16 h-16 rounded-lg mr-4"
                                />
                                <div>
                                  <p className="font-semibold">{item.name}</p>{" "}
                                  <p className="text-sm text-gray-500">
                                    Color: Brown
                                  </p>{" "}
                                  <p className="text-sm text-gray-500">
                                    {" "}
                                    Size: XL
                                  </p>{" "}
                                </div>{" "}
                              </div>{" "}
                            </td>
                            <td className="py-4">${item.price}</td>
                            <td className="py-4">
                              <input
                                type="number"
                                className="w-16 text-center border rounded-lg"
                                value={item.quantity}
                                min="1"
                                onChange={(e) =>
                                  handleQuantityChange(
                                    item._id,
                                    Number(e.target.value)
                                    
                                  )
                                }
                              />
                            </td> <Alert
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
                            <td className="py-4">
                              ${item.price * item.quantity}
                            </td>
                            <td>
                              <button
                                onClick={() => {
                                  removeFromCart(item._id);
                                  showAlert("error", "Removed from Cart!");
                                }}
                                className=""
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  width="23"
                                  height="23"
                                  viewBox="0 0 50 50"
                                >
                                  <path d="M 25 8 C 15.611 8 8 15.611 8 25 C 8 34.389 15.611 42 25 42 C 34.389 42 42 34.389 42 25 C 42 15.611 34.389 8 25 8 z M 25 9 C 33.837 9 41 16.163 41 25 C 41 33.837 33.837 41 25 41 C 16.163 41 9 33.837 9 25 C 9 16.163 16.163 9 25 9 z M 18.990234 18.490234 C 18.862234 18.490234 18.734219 18.539219 18.636719 18.636719 C 18.441719 18.831719 18.441719 19.14875 18.636719 19.34375 L 24.292969 25 L 18.636719 30.65625 C 18.441719 30.85125 18.441719 31.168281 18.636719 31.363281 C 18.831719 31.558281 19.14875 31.558281 19.34375 31.363281 L 25 25.707031 L 30.65625 31.363281 C 30.85125 31.558281 31.168281 31.558281 31.363281 31.363281 C 31.558281 31.168281 31.558281 30.85125 31.363281 30.65625 L 25.707031 25 L 31.363281 19.34375 C 31.558281 19.14875 31.558281 18.831719 31.363281 18.636719 C 31.168281 18.441719 30.85125 18.441719 30.65625 18.636719 L 25 24.292969 L 19.34375 18.636719 C 19.24625 18.539219 19.118234 18.490234 18.990234 18.490234 z"></path>
                                </svg>
                              </button>
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
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between gap-2 sm:gap-0 mt-6">
                   <Link href={"/gridDefault"}>
                    <button className="bg-[#FB2E86] hover:bg-[#c92b70] h-[39px] w-[134px] rounded-[2px] text-white">
                      Update Cart
                    </button>
                    </Link>
                    <button
                      onClick={() => {
                        clearCart();
                      }}
                      className="bg-[#FB2E86] hover:bg-[#c92b70] h-[39px] w-[134px] rounded-[2px] text-white"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 mt-5 text-center">
                  Your cart is empty.
                </p>
              )}
            </div>

            {/* Cart Totals and Shipping section */}
            <div className="text-[#1D3178] pt-8 lg:col-span-1">
              <h2 className="font-bold text-lg mb-4 lg:text-center lg:mr-7">
                Cart Totals
              </h2>
              <div className="bg-[#F4F4FC] h-[240px] w-full sm:w-[371px] rounded-[3px] shadow-lg p-6">
                <div className="border-b pb-4">
                  <div className="flex font-semibold justify-between mb-2">
                    <p>Subtotal:</p>
                    <p>${calculateSubtotal()}</p>
                  </div>
                  <div className="flex font-semibold justify-between">
                    <p>Totals:</p>
                    <p>${calculateTotal()}</p>
                  </div>
                </div>
                <p className="text-sm text-[#8A91AB] my-4">
                  Shipping & taxes calculated at checkout.
                </p>
                  <button onClick={handleCheckout} className="bg-[#19D16F] hover:bg-[#2aac67] text-white w-full sm:w-[312px] rounded-[3px] h-[40px] py-2">
                    Proceed To Checkout
                  </button>
              </div>

              <h2 className="font-bold text-lg mt-6 lg:text-center lg:mr-7 mb-4">
                Calculate Shipping
              </h2>
              <div className="bg-[#F4F4FC] h-[240px] w-full sm:w-[371px] rounded-[3px]">
                <form>
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full bg-[#F4F4FC] border p-2 rounded-lg mb-2"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full bg-[#F4F4FC] border p-2 rounded-lg mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full bg-[#F4F4FC] border p-2 rounded-lg mb-4"
                  />
                  <Link href={"/hecto-demo"}>
                    <button className="bg-[#FB2E86] rounded-[3px] hover:bg-[#d23076] h-[41px] w-[179px] text-white py-2 ml-5">
                      Calculate Shipping
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
