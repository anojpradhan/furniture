import { Building2, Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { FurnitureContext } from "../Context/FurnitureContext";

const Navbar = () => {
  const navigate= useNavigate();
  const companyName = "Something";
  const {cart} = useContext(FurnitureContext);
  const wishedItems = 2;
  const gotoCart=()=>{
    navigate('/cart');
  }
  
  return (
    <nav className="flex items-center justify-between px-6 py-3 border border-gray-200 bg-white">
      <button className="flex items-center gap-2" onClick={()=>navigate('/')}>
        <Building2 size={40} className="text-blue-600" />
        <span className="text-2xl font-bold text-gray-800">{companyName}</span>
      </button>

      <div className="flex items-center overflow-hidden">
        <input
          type="search"
          placeholder="Search..."
          className="px-4 py-2 h-11 border border-gray-400 text-gray-700 w-xl"
        />
        <button className="bg-blue-500 h-11 text-white px-3 py-2 hover:bg-blue-700 transition-all duration-300">
          <Search size={20} />
        </button>
      </div>

      <div className="flex items-center gap-6 text-gray-700">
        <div className="relative flex items-center" onClick={gotoCart}>
          <ShoppingCart size={28} />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-md rounded-full px-1">
            {cart.length}
          </span>
        </div>

        <div className="relative flex items-center">
          <Heart size={28} />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-md rounded-full px-1">
            {wishedItems}
          </span>
        </div>

        <UserRound size={28} onClick={()=>{navigate('/register')}}/>
      </div>
    </nav>
  );
};

export default Navbar;
