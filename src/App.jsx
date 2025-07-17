import React from "react";
import { Routes, Route } from "react-router-dom";
import { FurnitureProvider } from "./Context/FurnitureContext";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Shop from "./components/Pages/Shop";
import ProductPage from "./components/Pages/ProductPage";
import SellerDashboard from "./components/seller/AddProduct";
import ProductList from "./components/seller/product-list/ProductList";
import OrdersPage from "./components/seller/orders/OrdersPage";
import AuthPage from "./components/Pages/AuthPage";
import AddProduct from "./components/seller/AddProduct";
// import AuthPage from "./components/Pages/AuthPage"; // Uncomment if you have this

function App() {
  return (
    <>
    <FurnitureProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/image1" element={<Home />} />
        <Route path="/image2" element={<Home />} />
        <Route path="/image3" element={<Home />} />
        <Route path="/image4" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:categoryId" element={<Shop />} />
        <Route path="/category/:categoryId/:typeId" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/seller" element={<><AddProduct /></>} />
        <Route path="/seller/product-list" element={<><ProductList /></>} />
        <Route path="/seller/orders" element={<><OrdersPage /></>} />
        </Routes>
    </FurnitureProvider>
    <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage/>} />
      </Routes>
      </>
  );
}

export default App;