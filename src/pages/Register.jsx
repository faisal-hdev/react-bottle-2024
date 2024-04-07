/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto py-24 space-y-3 rounded-xl text-gray-800">
      <h1 className="text-2xl font-bold text-center">Register Now</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1.5 text-sm md:text-[16px]">
          <label className="block text-gray-700">Photo URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Photo_URL"
            className="w-full text-[16px] px-4 py-3 rounded-md border-gray-200 border-2 text-gray-800 focus:border-violet-400"
            {...register("photo")}
          />
          {errors.photo && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="space-y-1.5 text-sm md:text-[16px]">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="name"
            name="name"
            placeholder="Full name"
            {...register("fullName", { required: true })}
            className="w-full text-[16px] px-4 py-3 rounded-md border-gray-200 border-2 text-gray-800 focus:border-violet-400"
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="space-y-1.5 text-sm md:text-[16px]">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full text-[16px] px-4 py-3 rounded-md border-gray-200 border-2 text-gray-800 focus:border-violet-400"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="space-y-1.5 text-sm md:text-[16px]">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full text-[16px] px-4 py-3 rounded-md border-gray-200 border-2 text-gray-800 focus:border-violet-400"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <button className="px-5 w-full py-2.5 text-center relative rounded group text-white font-medium inline-block">
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-300"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-300"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-300"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-300"></span>
          <span className="relative">Register</span>
        </button>
      </form>
      <p className="text-xs md:text-[16px] pt-3 text-center sm:px-6 text-gray-700">
        Have an account please
        <Link to="/login" className="underline text-purple-600 ml-2">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
