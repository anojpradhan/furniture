import { useContext } from "react";
import { FurnitureContext } from "../../Context/FurnitureContext";
import Card from "../Card";
import { useParams, useNavigate, useLocation } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

const Shop = () => {
  const { categoryId, typeId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    getProductsByCategory,
    getProductsByCategoryAndType,
    addToCart,
    getCategoryAndTypes,
    searchProducts,
  } = useContext(FurnitureContext);

  const isShopRoot = location.pathname === "/shop";

  // Select products based on URL params or search
  const products = isShopRoot
    ? searchProducts
    : typeId
    ? getProductsByCategoryAndType(categoryId, typeId)
    : getProductsByCategory(categoryId);

  const allCategories = getCategoryAndTypes();
  const currentCategory = allCategories.find(
    (cat) => createSlug(cat.title) === categoryId
  );

  // Helper: slugify string
  function createSlug(str) {
    return str.toLowerCase().replace(/\s+/g, "-");
  }

  // Helper: pretty display name from slug
  function prettifySlug(slug) {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <>
      <Header />

      {/* Category Types Navigation */}
      {!isShopRoot && !typeId && currentCategory && (
        <section className="m-4">
          <h1 className="text-2xl font-bold mb-4">
            Explore "{prettifySlug(categoryId)}" Types
          </h1>
          <div className="flex flex-wrap gap-4">
            {currentCategory.types.map((type, idx) => (
              <button
                key={idx}
                onClick={() =>
                  navigate(`/category/${categoryId}/${createSlug(type)}`)
                }
                className="px-5 py-2 uppercase border border-blue-500 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="button"
              >
                {type}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Products Grid */}
      <main className="min-h-[60vh] p-5 flex flex-wrap gap-10 justify-center">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              {...product}
              handleCart={() => addToCart(product.id)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-10">No items found.</p>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Shop;
