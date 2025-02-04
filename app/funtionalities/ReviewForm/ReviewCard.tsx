import { Review } from "@/app/types/review";
import { Star } from "lucide-react";

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  return (   
    <div className="mt-8 space-y-6 sm:space-y-8">
    <div  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 60)}.jpg`}
        alt={review.name}
        className="w-12 h-full sm:w-14 sm:h-full rounded-full border-2 border-gray-300"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-800 text-sm sm:text-lg">{review.name}</p>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}
                fill={i < review.rating ? "currentColor" : "none"}
              />
            ))}
          </div>
        </div>
        <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed  max-w-full">
        {review.comment}
        </p>
      </div>
    </div>
</div>
            )}

