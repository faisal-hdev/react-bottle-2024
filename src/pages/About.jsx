/* eslint-disable no-unused-vars */
import React from "react";
import aboutImg from "../assets/images/about-us-img.svg";

const About = () => {
  return (
    <div className="py-16 md:py-32">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2">
          <div className="image flex gap-3 justify-center md:justify-start object-center text-center">
            <img width={450} src={aboutImg} alt="" />
          </div>
        </div>
        <div className="sm:w-1/2">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-purple-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-purple-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
