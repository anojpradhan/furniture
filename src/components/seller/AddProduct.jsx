
// This file only exports the AddProduct component for the seller dashboard add product page.
// The layout (Sidebar, Navbar) is handled by the SellerLayout wrapper in App.jsx.

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Plus } from 'lucide-react';
import Sidebar from "./components/Sidebar";

const AddProduct = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Earphone');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');
  const [stock, setStock] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [brand, setBrand] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!name.trim()) {
      toast.error("Product name is required");
      setLoading(false);
      return;
    }

    if (!description.trim()) {
      toast.error("Product description is required");
      setLoading(false);
      return;
    }

    if (!brand.trim()) {
      toast.error("Brand is required");
      setLoading(false);
      return;
    }

    if (!price || Number(price) <= 0) {
      toast.error("Valid price is required");
      setLoading(false);
      return;
    }

    if (!offerPrice || Number(offerPrice) <= 0) {
      toast.error("Valid offer price is required");
      setLoading(false);
      return;
    }

    if (Number(offerPrice) > Number(price)) {
      toast.error("Offer price cannot be greater than original price");
      setLoading(false);
      return;
    }

    if (!stock || Number(stock) < 0) {
      toast.error("Valid stock quantity is required");
      setLoading(false);
      return;
    }

    // Handle images
    let imageUrls = [];
    if (files.length > 0) {
      // For now, we'll use placeholder URLs since we don't have image upload setup
      // In production, you'd upload to a service like Cloudinary or AWS S3
      imageUrls = files.map((file, index) => 
        `https://via.placeholder.com/400x400?text=Product+Image+${index + 1}`
      );
    } else if (imageUrl.trim()) {
      imageUrls = imageUrl.split(',').map(url => url.trim()).filter(url => url);
    }

    if (imageUrls.length === 0) {
      toast.error("At least one product image is required");
      setLoading(false);
      return;
    }

    const productData = {
      name: name.trim(),
      description: description.trim(),
      brand: brand.trim(),
      category,
      price: Number(price),
      offerPrice: Number(offerPrice),
      stock: Number(stock),
      isActive,
      images: imageUrls,
    };
    
    try {
      console.log("Sending product data:", productData);
      const response = await axios.post('/api/products', productData);
      console.log("Response:", response.data);
      
      if (response.data.success) {
        toast.success(response.data.message);
        // Reset form
        setName('');
        setDescription('');
        setBrand('');
        setPrice('');
        setOfferPrice('');
        setStock('');
        setImageUrl('');
        setFiles([]);
        setIsActive(true);
        setCategory('Earphone');
        navigate('/seller/product-list');
      } else {
        toast.error(response.data.message || "Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      const errorMessage = error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    
    <div className="flex p-6">
      <Sidebar/>
      <div className="flex-1 min-h-screen flex flex-col justify-between p-4 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
            <div>
              <p className="text-base font-medium">Product Image</p>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                {[...Array(4)].map((_, index) => (
                  <label key={index} htmlFor={`image${index}`}>
                    <input onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles);
                    }} type="file" id={`image${index}`} hidden />
                    {files[index] ? (
                      <img
                      className="max-w-24 cursor-pointer object-cover w-24 h-24"
                      src={URL.createObjectURL(files[index])}
                      alt=""
                      width={100}
                      height={100}
                      />
                    ) : (
                      <div className="w-24 h-24 border border-gray-500/40 rounded flex items-center justify-center cursor-pointer">
                        <Plus />
                      </div>
                    )}
                  </label>
                ))}
              </div>
              <div className="flex flex-col gap-1 max-w-md mt-4">
                <label className="text-base font-medium" htmlFor="image-url">
                  Or Image URL
                </label>
                <input
                  id="image-url"
                  type="text"
                  placeholder="Enter image URL"
                  className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                  onChange={(e) => setImageUrl(e.target.value)}
                  value={imageUrl}
                />
              </div>
              {imageUrl && (
                <div className="mt-4">
                  <img
                    className="max-w-24 cursor-pointer object-cover w-24 h-24"
                    src={imageUrl}
                    alt="product-image"
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1 max-w-md">
              <label className="text-base font-medium" htmlFor="product-name">
                Product Name
              </label>
              <input
                id="product-name"
                type="text"
                placeholder="Type here"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="flex flex-col gap-1 max-w-md">
              <label
                className="text-base font-medium"
                htmlFor="product-description"
              >
                Product Description
              </label>
              <textarea
                id="product-description"
                rows={4}
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
                placeholder="Type here"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              ></textarea>
            </div>
            <div className="flex flex-col gap-1 max-w-md">
              <label className="text-base font-medium" htmlFor="brand">
                Brand
              </label>
              <input
                id="brand"
                type="text"
                placeholder="Enter brand name"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                required
              />
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex flex-col gap-1 w-32">
                <label className="text-base font-medium" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option value="Earphone">Earphone</option>
                  <option value="Headphone">Headphone</option>
                  <option value="Watch">Watch</option>
                  <option value="Smartphone">Smartphone</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Camera">Camera</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 w-32">
                <label className="text-base font-medium" htmlFor="product-price">
                  Product Price
                </label>
                <input
                  id="product-price"
                  type="number"
                  placeholder="0"
                  className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  required
                />
              </div>
              <div className="flex flex-col gap-1 w-32">
                <label className="text-base font-medium" htmlFor="offer-price">
                  Offer Price
                </label>
                <input
                  id="offer-price"
                  type="number"
                  placeholder="0"
                  className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                  onChange={(e) => setOfferPrice(e.target.value)}
                  value={offerPrice}
                  required
                />
              </div>
              <div className="flex flex-col gap-1 w-32">
                <label className="text-base font-medium" htmlFor="stock">
                  Stock
                </label>
                <input
                  id="stock"
                  type="number"
                  placeholder="0"
                  className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}
                  required
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
                <label htmlFor="isActive" className="font-medium">Product Active:</label>
                <input type="checkbox" id="isActive" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} className="w-4 h-4"/>
            </div>
            <button type="submit" disabled={loading} className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded disabled:bg-orange-400">
              {loading ? "Adding..." : "ADD"}
            </button>
          </form>
      </div>
    </div>
  );
};

export default AddProduct;