import { motion } from "framer-motion";
import { CheckCircle, Heart, HeartOff, X, ShoppingCart } from "lucide-react";

interface AlertProps {
  show: boolean;
  type: "success" | "error" | "wishlist-add" | "wishlist-remove";
  message: string;
  onClose: () => void;
}

export default function Alert({ show, type, message, onClose }: AlertProps) {
  if (!show) return null;

  const alertStyles: Record<string, { icon: JSX.Element; border: string; text: string }> = {
    success: {
      icon: <CheckCircle className="text-green-600" size={28} />,
      border: "border-green-500",
      text: "text-black",
    },
    error: {
      icon: <ShoppingCart className="text-gray-500" size={28} />,
      border: "border-gray-400",
      text: "text-black",
    },
    "wishlist-add": {
      icon: <Heart className="text-pink-600" size={28} />,
      border: "border-pink-600",
      text: "text-black",
    },
    "wishlist-remove": {
      icon: <HeartOff className="text-gray-500" size={28} />,
      border: "border-gray-400",
      text: "text-black",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-5 right-5 flex items-center gap-4 bg-white shadow-lg rounded-xl p-4 border-l-8 ${
        alertStyles[type].border
      }`}
    >
      {alertStyles[type].icon}
      <p className={`font-semibold ${alertStyles[type].text}`}>{message}</p>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
        <X size={20} />
      </button>
    </motion.div>
  );
}
