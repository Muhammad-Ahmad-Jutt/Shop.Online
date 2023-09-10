import React, { useState } from 'react';

export default function Mycart() {
  const [cartdata, setCartData] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const updateCart = (newCart) => {
    setCartData(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const total = cartdata.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCartData([]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartdata.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartdata.map((item) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={item.id}
              >
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <label>{item.quantity}</label>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.price}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" mt-4 justify-end">
          <p className="text-3xl text-gray-900 dark:text-white">Total Price : {total}</p>
        </div>
        <div className="flex justify-center mt-11 space-x-11">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            CheckOut
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
}
