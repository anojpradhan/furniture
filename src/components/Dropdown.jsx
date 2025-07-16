import { useNavigate } from "react-router";

const Dropdown = ({ lists }) => {
  const navigate = useNavigate();
  
  // Helper function to create slugs
  const createSlug = (str) => str.toLowerCase().replace(/\s+/g, '-');
  
  const handleTypeClick = (type, e) => {
    e.stopPropagation(); // Prevent the parent onClick from firing
    const categorySlug = createSlug(lists.title);
    const typeSlug = createSlug(type);
    navigate(`/category/${categorySlug}/${typeSlug}`);
  };

  return (
    <div 
      className="relative group bg-white text-black border border-gray-200 w-xs order-gray-300 hover:bg-blue-500 transition-all duration-300" 
      onClick={() => navigate(`/category/${createSlug(lists.title)}`)}
    >
      <button className="px-4 py-3 group-hover:text-white transition-all duration-300">
        {lists.title}
      </button>

      {/* Dropdown menu on hover */}
      <div className="absolute left-0 top-full w-full bg-white text-black border border-blue-300 rounded-b shadow hidden group-hover:flex flex-col z-10 transition-all duration-300">
        {lists.types.map((type, i) => (
          <div
            key={i}
            className="px-4 py-2 border border-blue-100 hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300"
            onClick={(e) => handleTypeClick(type, e)}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;