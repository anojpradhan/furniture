import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FurnitureContext } from '../../Context/FurnitureContext';
import ProductCard from '../ProductCard';
import Footer from '../Footer';
import SimilarCard from '../SimilarCard';

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(FurnitureContext);
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="text-center p-10 text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-white min-h-screen p-8 gap-10">
        {/* Main Product */}
        <div className="flex-1">
          <ProductCard product={product} />
        </div>

        {/* Similar Products */}
        <aside className="w-full lg:w-80 flex flex-col gap-6 sticky top-20">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">You may also like</h2>

          {/* You can replace these duplicates with actual related products */}
          <SimilarCard
            image={product.image}
            title={product.name}
            price={`Rs ${product.price}`}
            isNew={true}
            onView={() => {}}
            onAddToCart={() => {}}
            onWishlist={() => {}}
          />
          <SimilarCard
            image={product.image}
            title={product.name}
            price={`Rs ${product.price}`}
            isNew={false}
            onView={() => {}}
            onAddToCart={() => {}}
            onWishlist={() => {}}
          />
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
