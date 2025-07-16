import { useContext } from "react";
import { FurnitureContext } from "../../Context/FurnitureContext";
import Card from "../Card";
import { useParams, useNavigate } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

const Shop = () => {
  const { categoryId, typeId } = useParams();
  const navigate = useNavigate();

  const {
    getProductsByCategory,
    getProductsByCategoryAndType,
    addToCart,
    getCategoryAndTypes,
  } = useContext(FurnitureContext);

  const products = typeId 
    ? getProductsByCategoryAndType(categoryId, typeId)
    : getProductsByCategory(categoryId);

  const allCategories = getCategoryAndTypes();
  const currentCategory = allCategories.find(cat => cat.title === categoryId);

  // Slugify utility
  const createSlug = (str) => str.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <Header />

      {!typeId && currentCategory && (
        <div className="m-4">
          <h1 className="text-xl font-bold mb-2 capitalize">
            Explore "{categoryId.replace(/-/g, ' ')}" Types
          </h1>
          <div className="flex gap-4 flex-wrap">
            {currentCategory.types.map((type, idx) => (
              <button
                key={idx}
                className="px-4 py-2 border rounded hover:bg-blue-500 hover:text-white transition-all"
                onClick={() => navigate(`/category/${categoryId}/${createSlug(type)}`)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="flex flex-wrap gap-10 m-5 items-center justify-center">
          {products.map((product) => (
            <Card 
              key={product.id} 
              {...product} 
              handleCart={() => addToCart(product.id)} 
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Shop;
