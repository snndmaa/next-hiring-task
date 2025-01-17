import React from 'react';
import { IoIosCart } from "react-icons/io";
import Link from 'next/link';

const CartIcon = ({ itemCount = 1 }) => {
  return (
    <Link href="/cart" className="relative group border-2 border-grey-500 rounded-full ml-12">
      <div className="p-2 rounded-full transition-colors group-hover:text-blue-500">
        <IoIosCart
         size={24}
         color='grey'
         
        />
      </div>
      
      {itemCount > 0 && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs 
          rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
      )}
    </Link>
  );
};

export default CartIcon;