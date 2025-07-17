'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const EditProduct = ({ params }) => {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;
  const router = useRouter();

  const [productData, setProductData] = useState({
    name: '',
    description: '',
    brand: '',
    category: '',
    price: '',
    offerPrice: '',
    stock: '',
    isActive: true,
    images: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products?source=seller`);
        if (response.data.products) {
          const product = response.data.products.find(p => p._id === id);
          if (product) {
            setProductData({
              name: product.name || '',
              description: product.description || '',
              brand: product.brand || '',
              category: product.category || '',
              price: product.price || '',
              offerPrice: product.offerPrice || '',
              stock: product.stock || '',
              isActive: product.isActive || false,
              images: product.image || [],
            });
          } else {
            toast.error('Product not found');
          }
        }
      } catch (error) {
        toast.error('Failed to fetch product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    // For simplicity, just store file names or URLs; in real app, upload needed
    setProductData(prev => ({
      ...prev,
      images: files.map(file => URL.createObjectURL(file)),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        name: productData.name,
        description: productData.description,
        brand: productData.brand,
        category: productData.category,
        price: parseFloat(productData.price),
        offerPrice: parseFloat(productData.offerPrice),
        stock: parseInt(productData.stock, 10),
        isActive: productData.isActive,
        images: productData.images,
      };
      const response = await axios.put(`/api/products?id=${id}`, updateData);
      if (response.data.success) {
        toast.success('Product updated successfully');
        router.push('/seller/product-list');
      } else {
        toast.error(response.data.message || 'Failed to update product');
      }
    } catch (error) {
      toast.error('Error updating product');
    }
  };

  if (loading) {
    return <p>Loading product data...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Brand</label>
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              required
              step="0.01"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium mb-1">Offer Price</label>
            <input
              type="number"
              name="offerPrice"
              value={productData.offerPrice}
              onChange={handleChange}
              required
              step="0.01"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium mb-1">Stock</label>
            <input
              type="number"
              name="stock"
              value={productData.stock}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex-1 flex items-center mt-6">
            <input
              type="checkbox"
              name="isActive"
              checked={productData.isActive}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="font-medium">Active</label>
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          <div className="flex gap-2 mt-2">
            {productData.images.map((img, idx) => (
              <img key={idx} src={img} alt={`Product image ${idx + 1}`} className="w-20 h-20 object-cover rounded" />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
