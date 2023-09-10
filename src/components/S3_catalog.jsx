import React from 'react';
import Products from './Products.json';
import { Link } from 'react-router-dom';
export default function S3_catalog() {
  const uniqueCategories = [...new Set(Products.map((product) => product.category))];

  return (
    <div id="catalog" className="container mx-auto p-4">
      <div className="flex justify-center">
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-semibold mb-4">Catalog</h1>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {uniqueCategories.map((category, index) => (
              <li key={index} className="bg-white p-4 rounded shadow m-2">
                <Link to={`/customcatalog/${category}`} className="hover:underline">
                  {category}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
