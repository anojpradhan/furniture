import { Route, Routes } from "react-router";
import Home from "./components/Pages/Home";
import { FurnitureProvider } from "./Context/FurnitureContext";
import Cart from "./components/Pages/Cart";
import Shop from "./components/Pages/Shop";
import AuthPage from "./components/Pages/AuthPage";
import ProductPage from "./components/Pages/ProductPage";
import ScrollToTop from "./components/ScrollToTop";

const App=()=>{
  console.log("Hello there")
  return(
    <>
    <ScrollToTop/>
    <FurnitureProvider>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/image1" element={<Home/>}></Route>
      <Route path="/image2" element={<Home/>}></Route>
      <Route path="/image3" element={<Home/>}></Route>
      <Route path="/image4" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/category/:categoryId" element={<Shop/>} />
      <Route path="/category/:categoryId/:typeId" element={<Shop/>} />
      <Route path="/product/:id" element={<ProductPage/>} />
    </Routes>
    </FurnitureProvider>
    <Routes>
      <Route path="/login" element={<AuthPage/>} />
      <Route path="/register" element={<AuthPage />} />
    </Routes>
    </>
  )
}
export default App;