import { useContext } from "react";
import Header from "../Header";
import { FurnitureContext } from "../../Context/FurnitureContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useContext(FurnitureContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Your Cart ({cart.length})</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                <div className="flex items-center space-x-4 flex-1">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-lg hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            
            <div className="border-t mt-6 pt-4 flex justify-end">
              <div className="text-right">
                <p className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</p>
                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;