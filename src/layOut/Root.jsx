/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Nav />
      <div className="bg-[#f8f9fa47]">
        <div className="max-w-[1200px] min-h-screen lg:px-0 md:px-6 px-3 mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
