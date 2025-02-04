"use client";

import { useState } from "react";
import { client } from "@/sanity/lib/client";

interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
}

interface ReviewSectionProps {
  productId: number;
  reviews: Review[];
  onNewReview: (review: Review) => void;
}

export default function ReviewSection({
  productId,
  reviews,
  onNewReview,
}: ReviewSectionProps) {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const doc = {
        _type: "review",
        product: { _type: "reference", _ref: productId },
        name: formData.name,
        rating: Number(formData.rating),
        comment: formData.comment,
      };
      console.log("Sending document to Sanity:", doc);

      const response = await client.create(doc);
      console.log("response:", response);

      onNewReview({ _id: response._id, ...formData });
      setFormData({ name: "", rating: 5, comment: "" });
      setFormOpen(false);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
    setLoading(false);
  };

  return (
    <div className="">
      {/* Add Review Button */}
      <div onSubmit={handleSubmit} className="mt-8 flex justify-center">
        <button
          className="hover:bg-[#131a47] bg-[#19257d]  text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#101750] focus:ring-opacity-50"
          onClick={() => setFormOpen(!formOpen)}
        >
          {formOpen ? "Cancel" : "Add Review"}
        </button>
      </div>
      {/* toggle function for add to review button */}
      {formOpen && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">
            Add Your Review
          </h3>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            placeholder="Your Name"
            required
          />

          {/* Star Rating */}
          <div className="flex items-center space-x-2 mt-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                onClick={() => handleRatingChange(num)}
                className={`cursor-pointer text-2xl ${
                  num <= formData.rating ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            rows={4}
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            placeholder="Write your review here..."
            required
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="hover:bg-[#131a47] bg-[#19257d]  text-white px-4 py-2 rounded transition mt-4"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      )}
    </div>
  );
}
