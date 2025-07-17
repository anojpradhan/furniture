import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/orders');
      if (response.data.success && Array.isArray(response.data.orders)) {
        setOrders(response.data.orders);
      } else {
        setOrders([]);
        toast.error("Received invalid data for orders.");
      }
    } catch (error) {
      toast.error("Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await axios.put(`/api/orders/${orderId}`, { status: newStatus });
      if (response.data.success) {
        toast.success(response.data.message);
        setOrders(prevOrders =>
          prevOrders.map(order =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status.");
    }
  };

  if (loading) {
    return (
      <div className="flex-1 min-h-screen p-4 md:p-10 flex items-center justify-center">
        <span className="text-gray-500">Loading orders...</span>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-screen p-4 md:p-10">
      <h2 className="pb-4 text-lg font-medium">Customer Orders</h2>
      <div className="w-full overflow-x-auto">
        {orders.length > 0 ? (
          <table className="w-full min-w-[800px] table-auto">
            <thead className="text-gray-900 text-sm text-left bg-gray-100">
              <tr>
                <th className="px-4 py-3 font-medium">Order ID</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Products</th>
                <th className="px-4 py-3 font-medium">Total</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {orders.map((order) => (
                <tr key={order._id} className="border-b border-gray-200">
                  <td className="px-4 py-3 text-xs text-gray-500">#{order._id.slice(-6)}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-800">{order.customer?.name || 'N/A'}</div>
                    <div className="text-gray-500">{order.customer?.email || 'N/A'}</div>
                  </td>
                  <td className="px-4 py-3">
                    <ul className="space-y-1">
                      {order.products?.map((product, index) => (
                        <li key={product.productId || index} className="text-xs">
                          {product.name || 'Unknown Product'} - ({product.quantity || 1} x Rs.{product.price || 0})
                        </li>
                      )) || <li className="text-xs text-gray-500">No products</li>}
                    </ul>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-800">Rs.{order.totalAmount}</td>
                  <td className="px-4 py-3">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                      className={`p-2 text-xs font-semibold rounded-md border-none outline-none appearance-none cursor-pointer ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">You have no orders yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;