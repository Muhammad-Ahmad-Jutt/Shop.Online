import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Products from './Products.json'; // Import product data

export default function S1_hotproducts() {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.slice(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
    if (lastSpaceIndex > 0) {
      return truncatedText.slice(0, lastSpaceIndex);
    }
    return truncatedText;
  }
  return (
    
    <Carousel className="rounded-xl">
      {Products.map((product) => (
        <div key={product.id} className="relative h-full w-full">
          <img
            src={product.image}
            alt={`image ${product.id}`}
            className="h-full w-full object-cover max-h-80"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-right bg-black/75">
            <div className="w-3/4 text-left md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl truncate"
              >
                {truncateText(product.title.slice(0,23))}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 truncate"
              >
                {truncateText(product.description.slice(0,33))}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
