import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products.json';

export default function ProductDetail() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  var inid = parseInt(id);
  const product = Products.find((product) => product.id === inid);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
    };

    // Get the existing cart data from local storage (if any)
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new cart item
    const updatedCart = [...existingCart, cartItem];

    // Store the updated cart data in local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="p-4 sm:p-8">
      <div key={product.id} className="flex flex-col sm:flex-row sm:space-x-4">
        <div className="sm:w-1/2">
          <img src={product.image} alt={product.name} className="h-auto max-w-full" />
        </div>
        <div className="sm:w-1/2">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">Name: {product.title}</p>
          <p className="text-xl text-gray-900 dark:text-white">Category: {product.category}</p>
          <p className="text-xl text-gray-900 dark:text-white">Price: Rs.{product.price}</p>
          <p className="text-lg text-gray-900 dark:text-white">Description: {product.description}</p>
          <div className="mt-5">
            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity:</label>
            <div className="flex items-center">
              <input
                type="number"
                id="small-input"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="block w-1/2 sm:w-32 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                type="button"
                onClick={handleAddToCart}
                className="ml-2 px-3 py-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm sm:text-base dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
