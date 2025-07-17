import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Plus, List, ShoppingCart } from 'lucide-react';


const Sidebar = () => {
  const location = useLocation();
  return (
    <div className='bg-white w-64 min-h-screen border-r border-gray-500/20 hidden md:block'>
      <div className='p-5'></div>
      <div className='flex flex-col gap-1 mt-5'>
        <NavLink to='/seller' className={({ isActive }) => `flex items-center gap-3 p-3 mx-3 rounded-md  ${isActive ? 'bg-orange-600/10' : ''}`} end>
          <Plus className='w-5 h-5' />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/seller/product-list' className={({ isActive }) => `flex items-center gap-3 p-3 mx-3 rounded-md  ${isActive ? 'bg-orange-600/10' : ''}`}> 
          <List className='w-5 h-5' />
          <p>Product List</p>
        </NavLink>
        <NavLink to='/seller/orders' className={({ isActive }) => `flex items-center gap-3 p-3 mx-3 rounded-md ${isActive ? 'bg-orange-600/10' : ''}`}> 
          <ShoppingCart className='w-5 h-5' />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
