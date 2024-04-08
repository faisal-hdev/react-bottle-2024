/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { img, name, price, id } = product;
  return (
    <div className="rounded-md shadow-sm text-gray-800 border-2">
      <img
        src={img}
        alt="Product images here"
        className="w-full h-full rounded-2xl p-3"
      />
      <div className="flex flex-col justify-between p-4 md:p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          <h2 className="text-lg font-semibold tracking-wide">
            Price : ${price}
          </h2>
          <p className="text-gray-700">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
        <Link
          to={`/bottle/${id}`}
          className="px-5 py-2.5 text-center relative rounded group text-white font-medium inline-block"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-500 to-blue-300"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-500 to-blue-300"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-500 to-blue-300"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-500 from-blue-300"></span>
          <span className="relative">Details</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
