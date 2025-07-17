import { Building2, Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { FurnitureContext } from "../Context/FurnitureContext";

const Navbar = () => {
  const navigate = useNavigate();
  const companyName = "Something";
  const [inputValue, setInputValue] = useState("");
  const { cart, handleSearch } = useContext(FurnitureContext);

  const onSearch = (value) => {
    handleSearch(value);
    navigate("/shop");
  };

  const wishedItems = 2;

  const gotoCart = () => {
    navigate("/cart");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      {/* Logo */}
      <button
        className="flex items-center gap-2 p-4 text-blue-600 hover:text-blue-700 transition"
        onClick={() => navigate("/")}
      >
        <Building2 size={34} />
        <span className="text-2xl font-semibold text-gray-800">
          {companyName}
        </span>
      </button>

      {/* Search */}
      <div className="flex items-center border rounded-md overflow-hidden">
        <input
          type="search"
          placeholder="Search..."
          className="px-4 py-2 h-11 outline-none w-72 text-gray-700"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 h-11 flex items-center justify-center transition"
          onClick={() => onSearch(inputValue)}
        >
          <Search size={20} />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 text-gray-700">
        {/* Cart */}
        <div
          className="relative cursor-pointer hover:text-blue-600 transition"
          onClick={gotoCart}
        >
          <ShoppingCart size={26} />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">
            {cart.length}
          </span>
        </div>

        {/* Wishlist */}
        <div className="relative cursor-pointer hover:text-blue-600 transition">
          <Heart size={26} />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">
            {wishedItems}
          </span>
        </div>

        {/* User */}
        <UserRound
          size={26}
          className="cursor-pointer hover:text-blue-600 transition"
          onClick={() => navigate("/register")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
