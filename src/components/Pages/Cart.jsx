import { useContext } from "react";
import Header from "../Header";
import { FurnitureContext } from "../../Context/FurnitureContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useContext(FurnitureContext);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">
          Your Cart ({cart.length})
        </h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            Your cart is empty
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="bg-blue-50 p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center"
              >
                <div className="flex items-center space-x-4 flex-1 w-full sm:w-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded-lg shadow-sm"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-blue-800">{item.name}</h3>
                    <p className="text-blue-700 font-bold">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <div className="flex items-center border border-blue-300 rounded-md">
                    <button
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-4 py-2 text-blue-700 hover:bg-blue-100 rounded-l-md transition"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 text-blue-900 font-semibold">{item.quantity}</span>
                    <button
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
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

            <div className="border-t border-blue-300 mt-8 pt-6 flex justify-end">
              <div className="text-right">
                <p className="text-2xl font-extrabold text-blue-700">Total: ${cartTotal.toFixed(2)}</p>
                <button 
                  className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  aria-label="Proceed to checkout"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
