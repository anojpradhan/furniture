import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";

const SimilarCard = ({ image, title, price, isNew, onView, onAddToCart, onWishlist }) => {

  return (
    <div className=" border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col w-64">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/e2e8f0/4a5568?text=Product'; }}
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
            New Arrival
          </span>
        )}
      <div className="p-4 flex-grow">
        <h4 className="font-semibold text-gray-800 mt-1 truncate">{title}</h4>
        <p className="font-bold text-lg text-gray-900 mt-2">{price}</p>
      </div>
      
    </div>
    </div>
            
  );
};

export default SimilarCard;
