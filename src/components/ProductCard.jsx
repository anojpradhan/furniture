import React, { useState } from 'react';
import { Star, Heart, Plus, Minus, ShoppingCart, Mail, MessageSquare, Facebook, Twitter, CheckCircle, Wind, Droplets, Eye, Repeat } from 'lucide-react';

export default function ProductCardWrapper({ product }) {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start font-sans bg-white text-blue-900">
      <div className="w-full flex-1 flex flex-row items-start">
        <ProductCard product={product} />
      </div>
    </div>
  );
}

const FeatureHighlight = ({ imgSrc, title, description, icon }) => (
  <div className="text-center p-4">
    <img
      src={imgSrc}
      alt={title}
      className="mx-auto h-48 w-full object-cover rounded-lg shadow-md mb-4"
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/e2e8f0/4a5568?text=Feature'; }}
    />
    <h3 className="text-lg font-bold text-blue-600 uppercase flex items-center justify-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h3>
    <p className="mt-2 text-sm text-blue-800 leading-relaxed">{description}</p>
  </div>
);

const RelatedProductCard = ({ imgSrc, isNew, category, title, price }) => (
  <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
    <div className="relative">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-56 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/e2e8f0/4a5568?text=Product'; }}
      />
      {isNew && <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">New Arrival</span>}
    </div>
    <div className="p-4 flex-grow">
      <p className="text-xs text-blue-500">{category}</p>
      <h4 className="font-semibold text-blue-900 mt-1 truncate">{title}</h4>
      <p className="font-bold text-lg text-blue-700 mt-2">{price}</p>
    </div>
    <div className="flex justify-around items-center p-2 border-t bg-blue-50">
      <button className="p-2 text-blue-600 hover:text-blue-800 transition rounded-full hover:bg-blue-100"><Eye size={20} /></button>
      <button className="p-2 text-blue-600 hover:text-blue-800 transition rounded-full hover:bg-blue-100"><ShoppingCart size={20} /></button>
      <button className="p-2 text-blue-600 hover:text-blue-800 transition rounded-full hover:bg-blue-100"><Repeat size={20} /></button>
      <button className="p-2 text-blue-600 hover:text-red-500 transition rounded-full hover:bg-blue-100"><Heart size={20} /></button>
    </div>
  </div>
);

function ProductCard({ product }) {
  const images = product && product.image ? [product.image] : [
    'https://placehold.co/600x600/e2e8f0/4a5568?text=Main+Image',
    'https://placehold.co/100x100/e2e8f0/4a5568?text=Thumb+1',
    'https://placehold.co/100x100/e2e8f0/4a5568?text=Thumb+2',
    'https://placehold.co/100x100/e2e8f0/4a5568?text=Thumb+3'
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('Description');

  const featureHighlightsData = [
    {
      imgSrc: 'https://placehold.co/300x200/f7fafc/4a5568?text=Microsilk',
      title: 'ANTI-AGING MICROSILK',
      description: 'Soft and smooth, gentle to your facial skin, reduces wrinkles.',
      icon: <Star size={20} className="text-yellow-500" />
    },
    {
      imgSrc: 'https://placehold.co/300x200/f0fff4/4a5568?text=Aloe+Vera',
      title: 'ALOE VERA TECH',
      description: 'Cooling, soft surface like Aloe Vera gel.',
      icon: <Droplets size={20} className="text-green-500" />
    },
    {
      imgSrc: 'https://placehold.co/300x200/e2e8f0/4a5568?text=Thread+Count',
      title: '990 THREAD COUNT',
      description: 'High-density weave that’s ultra smooth.',
      icon: <CheckCircle size={20} className="text-blue-500" />
    },
    {
      imgSrc: 'https://placehold.co/300x200/ebf8ff/4a5568?text=Airflow',
      title: 'AIRFLOW SYSTEM',
      description: 'Prevents humidity, odors, allergies.',
      icon: <Wind size={20} className="text-cyan-500" />
    }
  ];

  const handleThumbnailClick = (image, index) => {
    setMainImage(image);
    setActiveIndex(index);
  };
  const handlePrevImage = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setMainImage(images[newIndex]);
    setActiveIndex(newIndex);
  };
  const handleNextImage = () => {
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setMainImage(images[newIndex]);
    setActiveIndex(newIndex);
  };
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="container mx-auto max-w-6xl bg-white p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-auto object-cover rounded-lg shadow"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x600/e2e8f0/4a5568?text=Not+Found'; }}
            />
            <button onClick={handlePrevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-50/70 hover:bg-white rounded-full p-2 transition">&#10094;</button>
            <button onClick={handleNextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-50/70 hover:bg-white rounded-full p-2 transition">&#10095;</button>
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full text-blue-600 hover:text-red-500 transition"><Heart size={20} /></button>
          </div>
          <div className="flex space-x-2 mt-4 overflow-x-auto p-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumb ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${activeIndex === index ? 'border-blue-500' : 'border-transparent'} transition`}
                onClick={() => handleThumbnailClick(img, index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <span className="text-xs text-blue-500 font-semibold">NEW ARRIVAL</span>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mt-1">{product?.name || 'Product Title'}</h1>
          <div className="flex items-center mt-2 text-blue-600">
            <div className="flex text-yellow-400">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} className="text-gray-300" fill="currentColor" />
            </div>
            <span className="ml-2 text-sm">(4 Reviews)</span>
          </div>
          <p className="text-blue-800 mt-4 text-sm leading-relaxed">
            {product?.description || 'Description about the product goes here. It should highlight key features and aesthetics.'}
          </p>
          <p className="text-3xl font-bold text-blue-900 mt-6">Rs {product?.price || '8,500.00'}</p>

          {/* Quantity and Buttons */}
          <div className="flex items-center mt-6 space-x-4">
            <div className="flex items-center border border-blue-300 rounded-md">
              <button onClick={decreaseQuantity} className="px-3 py-2 text-blue-600 hover:bg-blue-100 rounded-l-md transition"><Minus size={16} /></button>
              <span className="px-4 py-1.5 font-semibold">{quantity}</span>
              <button onClick={increaseQuantity} className="px-3 py-2 text-blue-600 hover:bg-blue-100 rounded-r-md transition"><Plus size={16} /></button>
            </div>
            <div className="flex-grow flex space-x-2">
              <button className="flex-1 flex items-center justify-center bg-blue-500 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300"><ShoppingCart size={20} className="mr-2" /> Add to Cart</button>
              <button className="flex items-center justify-center bg-white border border-blue-300 text-blue-600 font-bold py-3 px-4 rounded-md hover:bg-blue-50 transition duration-300">Buy Now</button>
            </div>
          </div>

          <p className="text-red-500 text-sm font-semibold mt-4">Only 1 unit left in stock.</p>

          <div className="flex items-center mt-6 text-sm">
            <span className="font-semibold text-blue-800 mr-4">Share:</span>
            <div className="flex space-x-3 text-blue-500">
              <a href="#" className="hover:text-blue-700 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-red-500 transition"><Mail size={20} /></a>
              <a href="#" className="hover:text-green-500 transition"><MessageSquare size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12 border-t-2 border-blue-100 pt-8">
        <div className="flex justify-center items-center border-b-2 border-blue-100">
          {['Description', 'Specifications', 'Reviews & Rating'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-blue-400 hover:text-blue-500'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-8">
          {activeTab === 'Description' && (
            <div>
              <h3 className="font-semibold text-xl text-blue-900 mb-4">Features:</h3>
              {[
                'Anti-aging MicroSilk fabric.',
                'Silky smooth fabric texture.',
                'Reduces wrinkles, gentle on the skin.',
                'Aloe Vera cooling tech.',
                'Airflow system prevents humidity and dust.',
              ].map((feature, idx) => (
                <p key={idx} className="text-blue-800 text-md mb-2">{feature}</p>
              ))}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featureHighlightsData.map(feature => (
                  <FeatureHighlight key={feature.title} {...feature} />
                ))}
              </div>
            </div>
          )}
          {activeTab === 'Specifications' && <div className="text-center p-8 text-blue-500">Specifications content goes here.</div>}
          {activeTab === 'Reviews & Rating' && <div className="text-center p-8 text-blue-500">Reviews and rating content goes here.</div>}
        </div>
      </div>
    </div>
  );
}
