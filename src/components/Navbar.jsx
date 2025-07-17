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
    <nav className="flex items-center justify-between px-6 bg-white shadow-sm">
      {/* Logo */}
      <button
        className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition"
        onClick={() => navigate("/")}
      >
        <Building2 size={34} />
        <span className="text-2xl font-semibold text-gray-800">
          {companyName}
        </span>
      </button>

      {/* Search */}
      <div className="flex items-center border rounded-xl border-gray-400 overflow-hidden">
        <input
          type="search"
          placeholder="Search..."
          className="px-2 py-1 h-8 outline-none w-md text-gray-700"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className=" opacity-80 text-white px-4 h-8 flex items-center justify-center hover:opacity-100 transition"
          onClick={() => onSearch(inputValue)}
        >
          <div className=" text-gray-700 shadow-2xs hover:text-blue-500">
          <Search size={22} />
          </div>
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
