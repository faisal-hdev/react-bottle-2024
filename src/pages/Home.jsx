/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import businessImg from "../assets/images/Business_SVG (1).svg";

const Home = () => {
  return (
    <div className="min-h-full text-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-40 xl:max-w-5xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Quisquam necessita vel laborum doloribus delectus
        </h1>
        <p className="px-8 mt-5 md:mt-8 mb-8 md:mb-12 text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            to="/"
            className="md:text-xl rounded px-4 md:px-8 py-2.5 md:py-3 overflow-hidden group bg-purple-500 relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Learn more</span>
          </Link>
          <Link
            to="/"
            className="md:text-xl rounded px-4 md:px-8 py-2.5 md:py-3 overflow-hidden group bg-purple-500 relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Get started</span>
          </Link>
        </div>
      </div>
      <div className="container flex flex-col justify-center mx-auto pt-10 pb-32 lg:pt-16 lg:pb-44 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-bold leading-none md:text-5xl">
            Ac mattis senectus erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/"
              className="md:text-xl rounded px-4 md:px-8 py-2.5 md:py-3 overflow-hidden group bg-purple-500 relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Suspendisse</span>
            </Link>
            <Link
              to="/"
              className="md:text-xl rounded px-4 md:px-8 py-2.5 md:py-3 overflow-hidden group bg-purple-500 relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Malesuada</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img src={businessImg} className="p-6 h-[350px] md:h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
