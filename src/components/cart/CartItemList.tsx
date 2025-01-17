"use client"

import React, { useState } from 'react';
import CartItem from './CartItem';

const CartItemList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'ATX Jeans',
      color: 'Blue',
      size: 'Small',
      price: 199,
      quantity: 1
    }
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setItems(items.map(item => 
      item.id === itemId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const handleRemove = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div className="w-[70%] border rounded-lg divide-y">
      <div className="px-6 py-3 bg-gray-50 grid grid-cols-3 text-gray-600">
        <div>PRODUCT</div>
        <div className="text-center">QUANTITY</div>
        <div className="text-right">PRICE</div>
      </div>
      
      {items.map(item => (
        <div key={item.id} className="px-6">
          <CartItem
            product={item}
            quantity={item.quantity}
            onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
            onRemove={() => handleRemove(item.id)}
          />
        </div>
      ))}
      
      {items.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          Your cart is empty
        </div>
      )}
    </div>
  );
};

export default CartItemList;