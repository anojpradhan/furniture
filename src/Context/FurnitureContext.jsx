import { createContext, useState } from "react";

export const FurnitureContext = createContext();

const initialProducts = [
  // Bedroom (25 items)
  {
    id: 1,
    name: "King Size Bed Frame",
    price: 1299,
    image: "bed1.jpg",
    description: "Luxury king size bed with upholstered headboard",
    inStock: true,
    category: "bedroom",
    tags: ["beds", "premium"]
  },
  {
    id: 2,
    name: "Walk-in Wardrobe",
    price: 2499,
    image: "wardrobe1.jpg",
    description: "Customizable walk-in wardrobe system",
    inStock: true,
    category: "bedroom",
    tags: ["wardrobes", "storage"]
  },
  {
    id: 3,
    name: "Modern Nightstand",
    price: 199,
    image: "nightstand1.jpg",
    description: "Sleek nightstand with USB charging port",
    inStock: true,
    category: "bedroom",
    tags: ["nightstands"]
  },
  {
    id: 4,
    name: "6-Drawer Dresser",
    price: 699,
    image: "dresser1.jpg",
    description: "Spacious dresser with soft-close drawers",
    inStock: true,
    category: "bedroom",
    tags: ["dressers"]
  },
  {
    id: 5,
    name: "Full Length Mirror",
    price: 149,
    image: "mirror1.jpg",
    description: "180° rotating mirror with stand",
    inStock: true,
    category: "bedroom",
    tags: ["mirrors"]
  },
  {
    id: 6,
    name: "LED Bedside Lamp",
    price: 89,
    image: "lamp1.jpg",
    description: "Touch-controlled dimmable bedside lamp",
    inStock: true,
    category: "bedroom",
    tags: ["lamps"]
  },
  {
    id: 7,
    name: "Blackout Curtains",
    price: 79,
    image: "curtains1.jpg",
    description: "Thermal insulated blackout curtains",
    inStock: true,
    category: "bedroom",
    tags: ["curtains"]
  },
  {
    id: 8,
    name: "Plush Area Rug",
    price: 299,
    image: "rug1.jpg",
    description: "Soft shaggy rug for bedroom",
    inStock: true,
    category: "bedroom",
    tags: ["carpets"]
  },
  {
    id: 9,
    name: "Memory Foam Mattress",
    price: 899,
    image: "mattress1.jpg",
    description: "12-inch cooling gel memory foam",
    inStock: true,
    category: "bedroom",
    tags: ["mattresses"]
  },
  {
    id: 10,
    name: "Closet Organizer Set",
    price: 129,
    image: "organizer1.jpg",
    description: "10-piece closet organization system",
    inStock: true,
    category: "bedroom",
    tags: ["closet organizers"]
  },
  {
    id: 11,
    name: "Canvas Wall Art",
    price: 149,
    image: "wallart1.jpg",
    description: "Modern abstract triptych painting",
    inStock: true,
    category: "bedroom",
    tags: ["wall art"]
  },
  {
    id: 12,
    name: "Luxury Bedding Set",
    price: 249,
    image: "bedding1.jpg",
    description: "1000 thread count Egyptian cotton",
    inStock: true,
    category: "bedroom",
    tags: ["bedding sets"]
  },

  // Living Room (20 items)
  {
    id: 13,
    name: "Sectional Sofa",
    price: 1799,
    image: "sofa1.jpg",
    description: "L-shaped sectional with chaise",
    inStock: true,
    category: "living-room",
    tags: ["sofas"]
  },
  {
    id: 14,
    name: "Glass Coffee Table",
    price: 399,
    image: "coffee-table1.jpg",
    description: "Tempered glass with metal frame",
    inStock: true,
    category: "living-room",
    tags: ["coffee tables"]
  },
  {
    id: 15,
    name: "Entertainment Center",
    price: 899,
    image: "tv-unit1.jpg",
    description: "65\" TV stand with LED lighting",
    inStock: true,
    category: "living-room",
    tags: ["tv units"]
  },
  {
    id: 16,
    name: "Wooden Bookshelf",
    price: 499,
    image: "bookshelf1.jpg",
    description: "5-tier solid oak bookshelf",
    inStock: true,
    category: "living-room",
    tags: ["bookshelves"]
  },
  {
    id: 17,
    name: "Leather Recliner",
    price: 799,
    image: "recliner1.jpg",
    description: "Power lift recliner with massage",
    inStock: true,
    category: "living-room",
    tags: ["recliners"]
  },
  {
    id: 18,
    name: "Velvet Accent Chair",
    price: 349,
    image: "accent-chair1.jpg",
    description: "Mid-century style accent chair",
    inStock: true,
    category: "living-room",
    tags: ["accent chairs"]
  },
  {
    id: 19,
    name: "Floor Lamp",
    price: 129,
    image: "floor-lamp1.jpg",
    description: "Adjustable arc floor lamp",
    inStock: true,
    category: "living-room",
    tags: ["lamps"]
  },
  {
    id: 20,
    name: "Gallery Wall Set",
    price: 199,
    image: "gallery-wall1.jpg",
    description: "12-piece framed artwork collection",
    inStock: true,
    category: "living-room",
    tags: ["wall art"]
  },

  // Kitchen (15 items)
  {
    id: 21,
    name: "Kitchen Cabinet Set",
    price: 2999,
    image: "cabinet1.jpg",
    description: "10-piece shaker style cabinet set",
    inStock: true,
    category: "kitchen",
    tags: ["cabinets"]
  },
  {
    id: 22,
    name: "Extendable Dining Table",
    price: 899,
    image: "dining-table1.jpg",
    description: "Seats 6-10 people with leaf extension",
    inStock: true,
    category: "kitchen",
    tags: ["dining tables"]
  },
  {
    id: 23,
    name: "Upholstered Dining Chairs",
    price: 199,
    image: "dining-chair1.jpg",
    description: "Set of 4 fabric dining chairs",
    inStock: true,
    category: "kitchen",
    tags: ["chairs"]
  },
  // ... (continuing with more kitchen items covering all types)

  // Office (10 items)
  {
    id: 36,
    name: "Executive Desk",
    price: 799,
    image: "desk1.jpg",
    description: "L-shaped corner desk with storage",
    inStock: true,
    category: "office",
    tags: ["desks"]
  },
  {
    id: 37,
    name: "Ergonomic Office Chair",
    price: 499,
    image: "office-chair1.jpg",
    description: "Adjustable with lumbar support",
    inStock: true,
    category: "office",
    tags: ["chairs"]
  },
  // ... (continuing with more office items)

  // Bathroom (10 items)
  {
    id: 46,
    name: "Medicine Cabinet",
    price: 249,
    image: "medicine-cabinet1.jpg",
    description: "Mirrored cabinet with LED lighting",
    inStock: true,
    category: "bathroom",
    tags: ["cabinets"]
  },
  // ... (continuing with bathroom items)

  // Outdoor (10 items)
  {
    id: 56,
    name: "Patio Dining Set",
    price: 1299,
    image: "patio-set1.jpg",
    description: "6-piece wicker dining set",
    inStock: true,
    category: "outdoor",
    tags: ["patio sets"]
  },
  // ... (continuing with outdoor items)

  // Kids Room (10 items)
    // Kids Room (continued - 10 items total)
  {
    id: 66,
    name: "Bunk Bed with Slide",
    price: 999,
    image: "bunk-bed1.jpg",
    description: "Twin-over-twin with safety rails",
    inStock: true,
    category: "kids-room",
    tags: ["bunk beds"]
  },
  {
    id: 67,
    name: "Toy Storage Bin",
    price: 59,
    image: "toy-storage1.jpg",
    description: "Colorful fabric bins with handles",
    inStock: true,
    category: "kids-room",
    tags: ["toy storage"]
  },
  {
    id: 68,
    name: "Adjustable Kids Desk",
    price: 199,
    image: "kids-desk1.jpg",
    description: "Grows with your child (3 height settings)",
    inStock: true,
    category: "kids-room",
    tags: ["study tables"]
  },
  {
    id: 69,
    name: "Bookshelf with Reading Nook",
    price: 349,
    image: "kids-bookshelf1.jpg",
    description: "Combination bookshelf and cozy reading corner",
    inStock: true,
    category: "kids-room",
    tags: ["bookshelves"]
  },
  {
    id: 70,
    name: "Glow-in-the-Dark Wall Stickers",
    price: 29,
    image: "wall-stickers1.jpg",
    description: "Space theme removable decals",
    inStock: true,
    category: "kids-room",
    tags: ["wall stickers"]
  },
  {
    id: 71,
    name: "Alphabet Play Rug",
    price: 89,
    image: "kids-rug1.jpg",
    description: "Educational rug with washable surface",
    inStock: true,
    category: "kids-room",
    tags: ["rugs"]
  },
  {
    id: 72,
    name: "Mini Armchair",
    price: 129,
    image: "kids-chair1.jpg",
    description: "Perfectly sized for toddlers",
    inStock: true,
    category: "kids-room",
    tags: ["chairs"]
  },
  {
    id: 73,
    name: "Cloud-Shaped Night Light",
    price: 39,
    image: "night-light1.jpg",
    description: "Color changing with remote control",
    inStock: true,
    category: "kids-room",
    tags: ["night lamps"]
  },
  {
    id: 74,
    name: "Unicorn Bean Bag",
    price: 79,
    image: "bean-bag1.jpg",
    description: "Super soft faux fur with horn detail",
    inStock: true,
    category: "kids-room",
    tags: ["bean bags"]
  },
  {
    id: 75,
    name: "Wooden Toy Chest",
    price: 149,
    image: "toy-box1.jpg",
    description: "Safety hinge and chalkboard front",
    inStock: true,
    category: "kids-room",
    tags: ["toy boxes"]
  },

  // Bathroom (continued - 10 items total)
  {
    id: 76,
    name: "Floating Bathroom Shelf",
    price: 69,
    image: "bathroom-shelf1.jpg",
    description: "Waterproof bamboo wall shelf",
    inStock: true,
    category: "bathroom",
    tags: ["shelves"]
  },
  {
    id: 77,
    name: "Cotton Bath Towels",
    price: 49,
    image: "towel-set1.jpg",
    description: "6-piece luxury towel set",
    inStock: true,
    category: "bathroom",
    tags: ["towels"]
  },
  {
    id: 78,
    name: "Automatic Soap Dispenser",
    price: 39,
    image: "soap-dispenser1.jpg",
    description: "Touchless operation with LED light",
    inStock: true,
    category: "bathroom",
    tags: ["soap dispensers"]
  },
  {
    id: 79,
    name: "Toilet Paper Holder",
    price: 29,
    image: "toilet-holder1.jpg",
    description: "Brushed nickel with built-in shelf",
    inStock: true,
    category: "bathroom",
    tags: ["toilet accessories"]
  },
  {
    id: 80,
    name: "Memory Foam Bath Mat",
    price: 35,
    image: "bath-mat1.jpg",
    description: "Quick-dry with non-slip backing",
    inStock: true,
    category: "bathroom",
    tags: ["bath mats"]
  },
  {
    id: 81,
    name: "Waterproof Shower Curtain",
    price: 45,
    image: "shower-curtain1.jpg",
    description: "PEVA liner with 12 hooks included",
    inStock: true,
    category: "bathroom",
    tags: ["shower curtains"]
  },
  {
    id: 82,
    name: "Laundry Hamper",
    price: 59,
    image: "laundry-basket1.jpg",
    description: "Foldable fabric with handles",
    inStock: true,
    category: "bathroom",
    tags: ["laundry baskets"]
  },

  // Office (continued - 10 items total)
  {
    id: 83,
    name: "Filing Cabinet",
    price: 199,
    image: "filing-cabinet1.jpg",
    description: "2-drawer vertical metal cabinet",
    inStock: true,
    category: "office",
    tags: ["filing cabinets"]
  },
  {
    id: 84,
    name: "Adjustable Task Lamp",
    price: 89,
    image: "task-light1.jpg",
    description: "LED with 5 brightness levels",
    inStock: true,
    category: "office",
    tags: ["task lights"]
  },
  {
    id: 85,
    name: "Dual Monitor Stand",
    price: 129,
    image: "monitor-stand1.jpg",
    description: "Ergonomic riser with storage",
    inStock: true,
    category: "office",
    tags: ["monitor stands"]
  },

  // Outdoor (continued - 10 items total)
  {
    id: 86,
    name: "Adirondack Garden Chair",
    price: 149,
    image: "garden-chair1.jpg",
    description: "Classic teak wood outdoor chair",
    inStock: true,
    category: "outdoor",
    tags: ["garden chairs"]
  },
  {
    id: 87,
    name: "Patio Umbrella",
    price: 199,
    image: "umbrella1.jpg",
    description: "10ft cantilever with tilt function",
    inStock: true,
    category: "outdoor",
    tags: ["umbrellas"]
  },
  {
    id: 88,
    name: "Charcoal Grill",
    price: 299,
    image: "grill1.jpg",
    description: "22-inch kettle grill with cover",
    inStock: true,
    category: "outdoor",
    tags: ["grills"]
  },
  {
    id: 89,
    name: "Garden Bench",
    price: 249,
    image: "bench1.jpg",
    description: "Weather-resistant recycled plastic",
    inStock: true,
    category: "outdoor",
    tags: ["benches"]
  },
  {
    id: 90,
    name: "Ceramic Planter Set",
    price: 89,
    image: "planter1.jpg",
    description: "3-piece modern geometric planters",
    inStock: true,
    category: "outdoor",
    tags: ["planters"]
  },
  {
    id: 91,
    name: "Hanging Hammock",
    price: 129,
    image: "hammock1.jpg",
    description: "Double size with stand included",
    inStock: true,
    category: "outdoor",
    tags: ["hammocks"]
  },
  {
    id: 92,
    name: "Solar Pathway Lights",
    price: 59,
    image: "outdoor-lighting1.jpg",
    description: "Set of 6 automatic solar lights",
    inStock: true,
    category: "outdoor",
    tags: ["lighting"]
  },
  {
    id: 93,
    name: "Outdoor Rug",
    price: 119,
    image: "outdoor-rug1.jpg",
    description: "5x7 weatherproof polypropylene",
    inStock: true,
    category: "outdoor",
    tags: ["outdoor rugs"]
  },
  {
    id: 94,
    name: "Steel Fire Pit",
    price: 349,
    image: "fire-pit1.jpg",
    description: "34-inch diameter with spark screen",
    inStock: true,
    category: "outdoor",
    tags: ["fire pits"]
  },
  {
    id: 95,
    name: "Gazebo with Netting",
    price: 599,
    image: "gazebo1.jpg",
    description: "10x12 pop-up with mosquito net",
    inStock: true,
    category: "outdoor",
    tags: ["gazebos"]
  },
  {
    id: 96,
    name: "Rolling Cooler",
    price: 179,
    image: "cooler1.jpg",
    description: "50qt with telescoping handle",
    inStock: true,
    category: "outdoor",
    tags: ["coolers"]
  },
  {
    id: 97,
    name: "Bird Feeder",
    price: 39,
    image: "bird-feeder1.jpg",
    description: "Squirrel-proof with large capacity",
    inStock: true,
    category: "outdoor",
    tags: ["bird feeders"]
  },

  // Kitchen (continued - 15 items total)
  {
    id: 98,
    name: "Bar Cart",
    price: 249,
    image: "bar-cart1.jpg",
    description: "Mobile serving station with glass holder",
    inStock: true,
    category: "kitchen",
    tags: ["bar stools"]
  },
  {
    id: 99,
    name: "Kitchen Island",
    price: 899,
    image: "kitchen-island1.jpg",
    description: "Butcher block top with storage",
    inStock: true,
    category: "kitchen",
    tags: ["kitchen islands"]
  },
  {
    id: 100,
    name: "Wine Rack",
    price: 129,
    image: "wine-rack1.jpg",
    description: "Wall-mounted holds 12 bottles",
    inStock: true,
    category: "kitchen",
    tags: ["storage racks"]
  },
    {
    id: 101,
    name: "Wooden Book Case",
    price: 499,
    image: "bookshelf1.jpg",
    description: "5-tier solid wow bookshelf",
    inStock: true,
    category: "office",
    tags: ["bookcases"]
  }
];


export function FurnitureProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [searchProducts,setSearchProducts]= useState([]);




const handleSearch = (term) => {
  const lowerTerm = term.toLowerCase();

  const showProducts = products.filter(product => {
    const inName = product.name.toLowerCase().includes(lowerTerm);
    const inDescription = product.description.toLowerCase().includes(lowerTerm);
    const inCategory = product.category.toLowerCase().includes(lowerTerm);
    const inTags = product.tags.some(tag => tag.toLowerCase().includes(lowerTerm));
    return inName || inDescription || inCategory || inTags;
  });
  setSearchProducts(showProducts);
};


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


  // Dynamically derive categories and their types
  const getCategoryAndTypes = () => {
  const map = {};
  products.forEach(product => {
    const category = product.category;
    if (!map[category]) {
      map[category] = new Set();
    }
    product.tags.forEach(tag => map[category].add(tag));
  });
  return Object.entries(map).map(([title, typeSet]) => ({
    title,
    types: Array.from(typeSet),
  }));
};

  // Gets Products based on Categories 

  const getProductsByCategory = (categoryId) => {
  return products.filter(product => 
    categoryId ? product.category === categoryId : true
  );
};
// gets products from sub types too
const getProductsByCategoryAndType = (categoryId, typeId) => {
  const productsByCategory = getProductsByCategory(categoryId);

  if (!typeId) return productsByCategory;

  const normalizedTypeId = typeId.toLowerCase().replace(/-/g, " ");

  return productsByCategory.filter(product =>
    product.tags.some(tag => tag.toLowerCase() === normalizedTypeId)
  );
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
    cartTotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    getProductsByCategory,
     getProductsByCategoryAndType,
     getCategoryAndTypes,
     handleSearch,
     searchProducts
  };

  return (
    <FurnitureContext.Provider value={value}>
      {children}
    </FurnitureContext.Provider>
  );
}