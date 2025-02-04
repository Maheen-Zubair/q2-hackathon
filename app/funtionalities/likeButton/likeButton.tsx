"use client";

import { useState, useEffect } from "react";
import { useWishlist } from "@/app/context/wishList-Context";
import Alert from "../alerts/added-product";

type LikeButtonProps = {
  item: {
    _id: number;
    name: string;
    imageURL: string;
    price: number;
    discountPercentage: number;
    category: string;
    description: string;
  };
};

export default function LikeButton({ item }: LikeButtonProps) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist(); // Assuming you have a remove function
  const [liked, setLiked] = useState(false);
  const [alertData, setAlertData] = useState<{ show: boolean; type: any; message: string }>({
    show: false,
    type: "success",
    message: "",
  });

  const showAlert = (type: "success" | "error" | "wishlist-add" | "wishlist-remove", message: string) => {
    setAlertData({ show: true, type, message });
    setTimeout(() => setAlertData({ show: false, type: "success", message: "" }), 3000); // Hide after 3 sec
  };

  useEffect(() => {
    const isLiked = wishlist.some((wishlistItem: any) => wishlistItem._id === item._id);
    setLiked(isLiked);
    console.log("Item Passed to LikeButton: ", item); // Debug
    console.log("Is Liked: ", isLiked); // Debug
  }, [wishlist, item]);

  const handleClick = () => {
    if (liked) {
      showAlert("wishlist-remove", "Removed from Wishlist!");
    } else {
      addToWishlist(item);
      showAlert("wishlist-add", "Added to Wishlist!");
    }
    setLiked(!liked);
  };
  return (
    <button   onClick={() => {
      showAlert("wishlist-add", "Added to Wishlist!")
            handleClick();
    }}  className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={liked ? "red" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
        />
      </svg>
            <Alert show={alertData.show} type={alertData.type} message={alertData.message} onClose={() => setAlertData({ show: false, type: "success", message: "" })} />
      
    </button>
  );
}
