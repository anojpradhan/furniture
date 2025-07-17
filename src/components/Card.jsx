import { useNavigate } from "react-router";

const Card = ({ id, name, price, image, description, inStock, category, handleCart }) => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      {/* Product Image */}
      <div
        className="aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden"
        onClick={() => navigate(`/product/${id}`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate(`/product/${id}`)}
        aria-label={`View details for ${name}`}
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover rounded-t-lg"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/400x300/e2e8f0/4a5568?text=Image+Not+Found';
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div
          onClick={() => navigate(`/product/${id}`)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate(`/product/${id}`)}
          aria-label={`View details for ${name}`}
          className="mb-4"
        >
          <div className="flex justify-between items-center mb-2 space-x-2">
            <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
            <span className="text-blue-600 font-bold whitespace-nowrap">${price}</span>
          </div>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
            {category}
          </span>
        </div>

        {/* Buy Button */}
        <button
          disabled={!inStock}
          onClick={handleCart}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            inStock
              ? 'bg-blue-500 text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          aria-disabled={!inStock}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default Card;
