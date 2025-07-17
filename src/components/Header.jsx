import { useContext, useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import { FurnitureContext } from "../Context/FurnitureContext";


const Header=()=>{
    const { getCategoryAndTypes } = useContext(FurnitureContext);
  const categories = getCategoryAndTypes();

  const navbarRef= useRef(null);
  const [showStickyDropdown, setShowStickyDropdown]= useState(false);

  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
      setShowStickyDropdown(!entry.isIntersecting);
    },{
      root:null,
      threshold:0,
    });
    if(navbarRef.current){
      observer.observe(navbarRef.current);
    }

    return()=>{
      if(navbarRef.current){
        observer.unobserve(navbarRef.current);
      }
    }
  },[]);
  return(
    <div className="flex flex-col">
      <div ref={navbarRef}>
    <Navbar/>
      </div>
<div className="flex w-full px-10 border border-gray-300" >

    {categories.map((category,index)=>
      (
        <Dropdown key={index} lists={category}/>
      ))}
    </div>

    { showStickyDropdown && (

      <div className="fixed flex w-full bg-white top-0 z-50 px-10">
            {categories.map((category,index)=>
      (
        <Dropdown key={index} lists={category}/>
      ))}
         </div>
    )

    }
    </div>
  );
}
export default Header;