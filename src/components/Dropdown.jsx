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
      className="relative group inline-block m-2 w-48 border border-gray-300 rounded-md bg-white text-gray-900 shadow-md cursor-pointer"
      onClick={() => navigate(`/category/${createSlug(lists.title)}`)}
    >
      <button
        type="button"
        className="w-full px-4 py-3 text-left font-medium hover:bg-blue-600 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
      >
        {lists.title}
      </button>

      {/* Dropdown menu on hover */}
      <div
        role="menu"
        aria-orientation="vertical"
        className="absolute left-0 top-full mt-1 w-full bg-white border border-blue-300 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-20"
      >
        {lists.types.map((type, i) => (
          <div
            role="menuitem"
            tabIndex={-1}
            key={i}
            className="px-4 py-2 text-gray-900 hover:bg-blue-600 hover:text-white transition cursor-pointer rounded-md"
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
