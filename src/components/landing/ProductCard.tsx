import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegStar } from "react-icons/fa";


const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FaRegStar
        key={index}
        size={16}
        className={`${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <Link 
      href={`/products/${product.id}`}
      className="rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 border-[0.8px]"
    >
      <div className="aspect-square overflow-hidden rounded-lg mb-4">
        <Image
          width={400}
          height={400}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
      <div className="flex items-center mb-2">
        {renderStars(product.rating)}
      </div>
      <p className="text-lg font-bold text-gray-900">${product.price}</p>
    </Link>
  );
};

export default ProductCard;