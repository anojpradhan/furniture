import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";

const SimilarCard = ({ image, title, price, isNew, onView, onAddToCart, onWishlist }) => {
  return (
    <div className="border border-blue-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col w-64">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x400/e2e8f0/4a5568?text=Product";
          }}
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
            New Arrival
          </span>
        )}

        {/* Action Buttons */}
        <div className="absolute bottom-2 right-2 flex gap-2">
          <button
            onClick={onView}
            className="bg-white border border-blue-300 text-blue-500 rounded-full p-2 hover:bg-blue-50 transition"
          >
            <Eye size={16} />
          </button>
          <button
            onClick={onAddToCart}
            className="bg-white border border-blue-300 text-blue-500 rounded-full p-2 hover:bg-blue-50 transition"
          >
            <ShoppingCart size={16} />
          </button>
          <button
            onClick={onWishlist}
            className="bg-white border border-blue-300 text-blue-500 rounded-full p-2 hover:bg-blue-50 transition"
          >
            <Heart size={16} />
          </button>
        </div>
      </div>

      <div className="p-4 flex-grow">
        <h4 className="font-semibold text-blue-600 truncate">{title}</h4>
        <p className="font-bold text-lg text-blue-900 mt-2">{price}</p>
      </div>
    </div>
  );
};

export default SimilarCard;
