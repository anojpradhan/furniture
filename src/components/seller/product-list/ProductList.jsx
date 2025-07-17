'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSellerProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching products for seller product list...");
      // Add ?source=seller to get all products (including inactive)
      const response = await axios.get('/api/products?source=seller', {
        timeout: 15000,
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });
      
      console.log("Product list API response:", response.data);
      
      if (response.data.products && Array.isArray(response.data.products)) {
        console.log(`Retrieved ${response.data.products.length} products for seller`);
        setProducts(response.data.products.reverse());
      } else {
        console.log("No products found in seller product list response");
        setProducts([]);
        toast.error("No products found");
      }
    } catch (error) {
      console.error("Error fetching seller products:", error);
      const errorMessage = error.response?.data?.message || error.message || "Unknown error";
      setError(`Failed to fetch products: ${errorMessage}`);
      
      if (error.response) {
        console.error("Error response:", error.response.data);
        toast.error(`Failed to fetch products: ${error.response.data.message || 'Server error'}`);
      } else if (error.request) {
        toast.error("Network error: Unable to connect to server");
      } else {
        toast.error("Failed to fetch products: " + error.message);
      }
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSellerProduct();
  }, []);

  if (loading) {
    return (
      <div className="flex-1 min-h-screen p-4 md:p-10">
        <h2 className="pb-4 text-lg font-medium">Product List</h2>
        <div className="flex justify-center items-center py-20">
          <div className="text-gray-500">Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 min-h-screen p-4 md:p-10">
        <h2 className="pb-4 text-lg font-medium">Product List</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-600 font-medium mb-2">Error Loading Products:</p>
          <p className="text-red-500 mb-4">{error}</p>
          <div className="flex gap-4">
            <button 
              onClick={fetchSellerProduct}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry
            </button>
            <button 
              onClick={() => window.location.href = '/seller'}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Back to Add Product
            </button>
          </div>
        </div>
      </div>
    );
  }

  const deleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`/api/products?id=${id}`);
      toast.success("Product deleted successfully");
      fetchSellerProduct();
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  const editProduct = (id) => {
    // Navigate to edit page - confirm with user if modal preferred
    window.location.href = `/seller/product-list/edit/${id}`;
  };

  return (
    <div className="flex-1 min-h-screen p-4 md:p-10">
      <h2 className="pb-4 text-lg font-medium">All Products</h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] table-auto">
          <thead className="text-gray-900 text-sm text-left bg-gray-100">
            <tr>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Stock</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Edit</th>
              <th className="px-4 py-3 font-medium">Delete</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-500">
            {products.map((product) => (
              <tr key={product._id} className="border-b border-gray-200">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="object-contain rounded"
                  />
                  <span className="font-medium text-gray-800">{product.name}</span>
                </td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3">Rs.{product.offerPrice}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${product.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {product.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => editProduct(product._id)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;