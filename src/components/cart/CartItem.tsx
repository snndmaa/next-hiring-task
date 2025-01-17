import React from 'react';
import { FaMinus as Minus, FaPlus as Plus } from "react-icons/fa";

const CartItem = ({ product, quantity, onQuantityChange, onRemove }) => {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="flex-shrink-0">
        <img 
          src="/api/placeholder/80/100" 
          alt={product.name}
          className="w-20 h-24 object-cover rounded"
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-gray-600 text-sm">Color: {product.color}</p>
            <p className="text-gray-600 text-sm">Size: {product.size}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded">
              <button 
                onClick={() => onQuantityChange(quantity - 1)}
                className="p-2 hover:bg-gray-100 border-r"
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </button>
              <span className="px-4">{quantity}</span>
              <button 
                onClick={() => onQuantityChange(quantity + 1)}
                className="p-2 hover:bg-gray-100 border-l"
              >
                <Plus size={16} />
              </button>
            </div>
            
            <div className="text-right">
              <p className="font-bold">${product.price}</p>
              <p className="text-gray-600 text-sm">${product.price} each</p>
            </div>
            
            <button 
              onClick={onRemove}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;