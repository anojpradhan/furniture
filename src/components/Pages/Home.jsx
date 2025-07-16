import { useContext } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Slider";
import { FurnitureContext } from "../../Context/FurnitureContext";
import Card from "../Card";

const Home=()=>{
  const {products, addToCart}= useContext(FurnitureContext)

  return(
    <>
    <Header/>
    <Hero/>
        <div className="flex flex-wrap gap-10 m-5 items-center justify-center">
          {products.map((product)=>{
            // console.log(product);
            return(  <Card key={product.id} {...product} handleCart={()=>addToCart(product.id)}/>);
          })}
    </div>

    <Footer/>
    </>
  );
}
export default Home;