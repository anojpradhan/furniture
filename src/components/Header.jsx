import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
const categories = [
  {
    title: "Bedroom",
    types: [
      "Beds",
      "Wardrobes",
      "Nightstands",
      "Dressers",
      "Mirrors",
      "Lamps",
      "Curtains",
      "Carpets",
      "Mattresses",
      "Closet Organizers",
      "Wall Art",
      "Bedding Sets"
    ]
  },
  {
    title: "Living Room",
    types: [
      "Sofas",
      "Coffee Tables",
      "TV Units",
      "Bookshelves",
      "Recliners",
      "Accent Chairs",
      "Lamps",
      "Wall Art"
    ]
  },
  {
    title: "Kitchen",
    types: [
      "Cabinets",
      "Dining Tables",
      "Chairs",
      "Cookware",
      "Cutlery",
      "Storage Racks",
      "Utensils",
      "Appliances",
      "Pantry Organizers",
      "Bar Stools",
      "Kitchen Islands"
    ]
  },
  {
    title: "Office",
    types: [
      "Desks",
      "Chairs",
      "Bookcases",
      "Filing Cabinets",
      "Task Lights",
      "Monitor Stands"
    ]
  },
  {
    title: "Bathroom",
    types: [
      "Mirrors",
      "Cabinets",
      "Towels",
      "Soap Dispensers",
      "Toilet Accessories",
      "Bath Mats",
      "Shower Curtains",
      "Shelves",
      "Laundry Baskets"
    ]
  },
  {
    title: "Outdoor",
    types: [
      "Patio Sets",
      "Garden Chairs",
      "Umbrellas",
      "Grills",
      "Benches",
      "Planters",
      "Hammocks",
      "Lighting",
      "Outdoor Rugs",
      "Fire Pits",
      "Gazebos",
      "Coolers",
      "Bird Feeders"
    ]
  },
  {
    title: "Kids Room",
    types: [
      "Bunk Beds",
      "Toy Storage",
      "Study Tables",
      "Bookshelves",
      "Wall Stickers",
      "Rugs",
      "Chairs",
      "Night Lamps",
      "Bean Bags",
      "Toy Boxes"
    ]
  }
];


const Header=()=>{

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
<div className="flex w-full px-10">

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