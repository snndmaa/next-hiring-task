import React from 'react';

const CartTotal = () => {
  return (
    <div className="w-[28%] p-4 border rounded-lg space-y-4">
      {/* Order Summary */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total price:</span>
          <span>$199</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Tax:</span>
          <span>$19.9</span>
        </div>
        <div className="flex justify-between items-center font-medium border-t pt-2">
          <span>Total:</span>
          <span>$218.9</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="flex items-center gap-2">
        <div className="h-6 w-10 bg-[#003087] rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">PayPal</span>
        </div>
        <div className="h-6 w-10 bg-[#1A1F71] rounded"></div>
        <div className="h-6 w-10 bg-[#FF5F00] rounded"></div>
        <div className="h-6 w-10 bg-[#006FCF] rounded"></div>
      </div>

      {/* Buttons */}
      <div className="space-y-2">
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors">
          Checkout
        </button>
        <button className="w-full bg-white border border-gray-300 py-3 rounded hover:bg-gray-50 transition-colors">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartTotal;