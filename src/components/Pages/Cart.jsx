import { useContext, useState } from "react";
import Header from "../Header";
import { FurnitureContext } from "../../Context/FurnitureContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useContext(FurnitureContext);

  // --- Order Form State ---
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);

  // --- Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
  };

  const getCartAmount = () => {
    return cart.reduce((total, item) => total + (item.offerPrice || item.price) * item.quantity, 0);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!customerDetails.name || !customerDetails.email || !customerDetails.address) {
      alert('Please fill in all customer details.');
      return;
    }
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert(`Order placed successfully for ${customerDetails.name}! Total: ${cart[0]?.offerPrice ? 'Rs.' : '$'}${getCartAmount().toFixed(2)}`);
      setLoading(false);
      setCustomerDetails({ name: '', email: '', address: '' });
    }, 1500);
  };

  return (
    <div >
      <Header />
      <main className="w-full max-w-7xl mx-auto px-6 py-6">
  <h1 className="text-3xl font-bold mb-8 text-blue-600">
    Your Cart ({cart.length})
  </h1>

  {cart.length === 0 ? (
    <div className="text-center py-20 text-gray-500 text-lg">
      Your cart is empty
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Cart Items Section */}
      <div className="flex-1 space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className=" p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center"
          >
            <div className="flex items-center space-x-4 flex-1 w-full sm:w-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg shadow-sm"
              />
              <div>
                <h3 className="font-semibold text-lg text-blue-800">
                  {item.name}
                </h3>
                <p className="text-blue-700 font-bold">
                  {item.offerPrice
                    ? `Rs.${item.offerPrice}`
                    : `$${item.price.toFixed(2)}`}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="flex items-center border border-blue-300 rounded-md">
                <button
                  aria-label={`Decrease quantity of ${item.name}`}
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-4 py-2 text-blue-700 hover:bg-blue-100 rounded-l-md transition"
                >
                  -
                </button>
                <span className="px-6 py-2 text-blue-900 font-semibold">
                  {item.quantity}
                </span>
                <button
                  aria-label={`Increase quantity of ${item.name}`}
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                  className="px-4 py-2 text-blue-700 hover:bg-blue-100 rounded-r-md transition"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-semibold focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary Section */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white p-10 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span>
              {cart[0]?.offerPrice ? "Rs." : "$"}
              {getCartAmount().toFixed(2)}
            </span>
          </div>
          <hr className="my-4 dark:border-gray-600" />
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Details</h3>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={customerDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={customerDetails.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-1"
              >
                Shipping Address
              </label>
              <textarea
                name="address"
                id="address"
                value={customerDetails.address}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-2 border rounded-md dark:border-gray-600 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-700 disabled:bg-orange-400"
            >
              {loading
                ? "Placing Order..."
                : `Place Order (${cart[0]?.offerPrice ? "Rs." : "$"}${getCartAmount().toFixed(2)})`}
            </button>
          </form>
        </div>
      </div>
    </div>
  )}
</main>

    </div>
  );
};

export default Cart;
