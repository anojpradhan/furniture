import { Route, Routes } from "react-router";
import Home from "./components/Pages/Home";
import { FurnitureProvider } from "./Context/FurnitureContext";
import Cart from "./components/Pages/Cart";

const App=()=>{
  console.log("Hello there")
  return(
    <>
    <FurnitureProvider>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/image1" element={<Home/>}></Route>
      <Route path="/image2" element={<Home/>}></Route>
      <Route path="/image3" element={<Home/>}></Route>
      <Route path="/image4" element={<Home/>}></Route>
    </Routes>
    </FurnitureProvider>
    </>
  )
}
export default App;