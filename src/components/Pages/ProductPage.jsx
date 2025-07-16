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
    return <div className="text-center p-10 text-gray-500">Product not found.</div>;
  }

  

  return (
    <>
      <div className='flex bg-gray-100 '>
        <div className='flex '>

        <ProductCard product={product} />
        <div className='flex flex-col gap-4 ml-10'>

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
        </ div>
          </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductPage;