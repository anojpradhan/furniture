import { createContext, useState } from "react";

export const FurnitureContext = createContext();

const initialProducts= [
  {
    id: 1,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
  {
    id: 2,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: false,
  },
  {
    id: 3,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
  {
    id: 4,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
  {
    id: 5,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
  {
    id: 6,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
  {
    id: 7,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
  {
    id: 8,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
  {
    id: 9,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
  {
    id: 10,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
  {
    id: 11,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
  {
    id: 12,
    name: "Modern Sofa",
    price: 499,
    image: "image1.jpg",
    description: "Comfortable velvet sofa.",
    inStock: true,
  },
]

export function FurnitureProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  // Add to cart with quantity handling
  const addToCart = (productId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      const productToAdd = products.find(p => p.id === productId);
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });
  };

  // Remove item completely
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Adjust quantity (increase/decrease)
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const value = {
    products,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  };

  return (
    <FurnitureContext.Provider value={value}>
      {children}
    </FurnitureContext.Provider>
  );
}