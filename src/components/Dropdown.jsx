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
      className="relative group inline-block mt-2 w-full bg-white text-gray-900 cursor-pointer"
      onClick={() => navigate(`/category/${createSlug(lists.title)}`)}
    >
      <div className="w-full flex justify-center border-b-2 border-gray">
      <button
        type="button"
        className=" group relative py-2 text-center font-medium capitalize hover:text-blue-800 transition-all duration-300"
        >
        {lists.title}
        <div className="absolute left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>

      </button>
        </div>
      {/* Dropdown menu on hover */}
      <div
        role="menu"
        aria-orientation="vertical"
        className="absolute left-2 flex flex-wrap mt-1 w-md bg-white border border-blue-300 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-20"
      >
        {lists.types.map((type, i) => (
          <div
            role="menuitem"
            tabIndex={-1}
            key={i}
            className="px-4 py-2 text-left w-1/3 text-gray-900 hover:bg-blue-600 capitalize hover:text-white transition cursor-pointer rounded-md"
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
