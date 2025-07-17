import { useContext } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Slider";
import { FurnitureContext } from "../../Context/FurnitureContext";
import Card from "../Card";

const Home = () => {
  const { products, addToCart } = useContext(FurnitureContext);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pb-12">
        <Hero />

        <section className=" mx-auto px-2 sm:px-6 lg:px-8 mt-10">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Featured Products
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {products.length > 0 ? (
              products.map((product) => (
                <Card
                  key={product.id}
                  {...product}
                  handleCart={() => addToCart(product.id)}
                />
              ))
            ) : (
              <p className="text-gray-500 text-lg mt-10">No products available.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
