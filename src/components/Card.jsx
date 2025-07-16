const Card = ({ name, price, image, description, inStock, handleCart}) => {
  return (
    <div className="w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
          <span className="text-lg font-bold text-blue-500">${price}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Buy Button */}
        <button
          disabled={!inStock}
          onClick={handleCart}
          className={`w-full py-2 px-4 rounded-md font-medium ${
            inStock
              ? 'bg-blue-500 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          } transition-colors`}

          // onClick={cardAdding}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default Card;