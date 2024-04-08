/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../components/SocialLogin";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full max-w-md mx-auto py-24 space-y-3 rounded-xl text-gray-800">
      <h1 className="text-2xl font-bold text-center">Login Now</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1.5 text-sm md:text-lg">
          <label className="block text-[16px] text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 text-[16px] py-3 rounded-md border-gray-200 border-2 text-gray-800 focus:border-violet-400"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="space-y-1.5 text-sm md:text-lg">
          <label className="block text-[16px] text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 text-[16px] py-3 rounded-md border-gray-200 border-2 text-gray-800 focus:border-violet-400"
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
          <span className="relative">Login</span>
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm md:text-[16px] text-gray-700">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      {/* Social content */}
      <SocialLogin />
      <p className="text-xs md:text-[16px] text-center sm:px-6 text-gray-700">
        Don't have an account please
        <Link to="/register" className="underline text-purple-600 ml-2">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
