/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BottleDetails = () => {
  const bottles = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const bottle = bottles.find((bottle) => bottle.id === idInt);
  const {
    category,
    name,
    seller,
    price,
    stock,
    img,
    ratings,
    shipping,
    quantity,
  } = bottle;
  console.log(bottle);
  return (
    <div className="py-10 md:py-16 lg:py-24">
      <div className="flex flex-col mx-auto max-w-3xl p-6 lg:p-10 border-2 space-y-6 overflow-hidden rounded-lg shadow-md text-gray-800">
        <div className="text-center">
          <div className="flex items-center mx-auto justify-center">
            <img src={img} alt="" className="w-2/3 mb-4 lg:mb-8 rounded-2xl" />
          </div>
          <p className="border bg-red-50 p-3 rounded">Price : ${price}</p>
          <h2 className="mb-3 text-xl font-semibold">Bottle Name : {name}</h2>
          <div className="grid mb-3 grid-cols-2 md:grid-cols-3 gap-3">
            <p className="border p-3 rounded">Category : {category}</p>
            <p className="border p-3 rounded">Seller : {seller}</p>
            <p className="border p-3 rounded">stock : {stock}</p>

            <p className="border p-3 rounded">ratings : ${ratings}</p>
            <p className="border p-3 rounded">shipping : ${shipping}</p>
            <p className="border p-3 rounded">quantity : {quantity}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <Link
              to="/products"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-md shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.0001 13.9999L19.0002 5L17.0002 4.99997L17.0001 11.9999L9.41405 11.9999V6.58578L2.99985 13L9.41405 19.4142L9.41406 13.9999L19.0001 13.9999Z"></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Back to Products
              </span>
              <span className="relative invisible">Back to Products</span>
            </Link>
          </div>
          <div className="flex space-x-2 text-sm text-gray-400">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Number of comments"
                className="w-4 h-4 fill-current text-violet-400"
              >
                <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
              </svg>
              <span>30</span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Number of likes"
                className="w-4 h-4 fill-current text-violet-400"
              >
                <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
              </svg>
              <span>283</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottleDetails;
