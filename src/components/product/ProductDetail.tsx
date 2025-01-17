"use client"

import React, { useState, useEffect } from 'react';
import { FaRegStar } from "react-icons/fa";
import { Select } from '@/components/ui/Select';
import { products } from '@/data';
import { addToLocalCart, createLocalCart, getLocalCart } from '@/helpers'
import { useRouter } from 'next/navigation';


const ProductDetail = ({ params }) => {
    const router = useRouter();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');


  useEffect(() => {
    // Fetch product data based on params.id
    const fetchProduct = async () => {
      const productData = products.find(p => p.id === parseInt(params.id));
      setProduct(productData);
    };

    fetchProduct();
  }, [params.id]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const renderRating = () => {
    return (
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, i) => (
          <FaRegStar
            key={i}
            size={16}
            className="text-gray-300"
            fill="currentColor"
          />
        ))}
        <span className="text-sm text-gray-600">{product?.rating || 0} reviews</span>
      </div>
    );
  };
  
  const handleCartAdd = (item) => {
      addToLocalCart(item)
      router.push("/cart")
      console.debug(getLocalCart)
    }

    if (!product) {
      return <div>Loading...</div>;
    }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
          <div className="mt-4 flex gap-2">
            <div className="border border-gray-200 p-2 rounded-md w-20">
              <img
                src={product.image}
                alt="Thumbnail"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          
          <div className="mb-4">
            {renderRating()}
          </div>

          <div className="text-2xl font-bold text-gray-900 mb-6">
            ${product.price}
          </div>

          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur
            nulla et semper mollis. Maecenas a nibh id urna aliquet faucibus sit amet
            mattis enim.
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Color
            </label>
            <Select
              options={product.colors.map(color => ({ value: color, label: color }))}
              placeholder="Select Color"
              onSelect={handleColorSelect}
            />
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Size
            </label>
            <Select
              options={product.sizes.map(size => ({ value: size, label: size }))}
              placeholder="Select Size"
              onSelect={handleSizeSelect}
            />
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            <span className={`font-medium ${product.stock ? 'text-green-500' : 'text-red-500'}`}>
              {product.stock ? 'In stock' : 'Out of stock'}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
          onClick={() => handleCartAdd(product)}
            disabled={!product.stock}
            className={`w-full py-3 px-8 rounded-lg ${product.stock ? 'bg-blue-500 text-white' : 'bg-gray-300 text-white cursor-not-allowed'}`}
          >
            {product.stock ? 'Add to Cart' : 'Out of Stock'}
          </button> 
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;