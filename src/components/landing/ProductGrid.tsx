import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from '@/data';

const ProductGrid = () => {

  return (
    <div className="max-w-7xl  px-4 my-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Popular products</h2>
        <Link 
          href="/products" 
          className="text-blue-600 hover:text-blue-700"
        >
          See all
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;