/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import Login from "../pages/Login";

const Nav = () => {
  const { logOut, user } = useAuth();
  // console.log(user);
  return (
    <div>
      <div className="navbar container mx-auto md:h-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="hover:text-purple-400 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-2 font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 border border-t-0 border-r-0 border-purple-500"
                      : "text-black hover:text-purple-500 duration-200"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 border border-t-0 border-r-0 border-purple-500"
                      : "text-black hover:text-purple-500 duration-200"
                  }
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 border border-t-0 border-r-0 border-purple-500"
                      : "text-black hover:text-purple-500 duration-200"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 border border-t-0 border-r-0 border-purple-500"
                      : "text-black hover:text-purple-500 duration-200"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 border border-t-0 border-r-0 border-purple-500"
                      : "text-black hover:text-purple-500 duration-200"
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="text-black max-sm:hidden hover:text-purple-500 duration-150 font-semibold text-2xl md:text-3xl"
          >
            GlassesHub.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[17px]">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 md:px-5 hover:bg-white border-2 border-t-0 border-r-0 border-purple-500"
                    : "text-black md:px-5 hover:bg-white hover:text-purple-500 duration-200"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 md:px-5 hover:bg-white border-2 border-t-0 border-r-0 border-purple-500"
                    : "text-black md:px-5 hover:bg-white hover:text-purple-500 duration-200"
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 md:px-5 hover:bg-white border-2 border-t-0 border-r-0 border-purple-500"
                    : "text-black md:px-5 hover:bg-white hover:text-purple-500 duration-200"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 md:px-5 hover:bg-white border-2 border-t-0 border-r-0 border-purple-500"
                    : "text-black md:px-5 hover:bg-white hover:text-purple-500 duration-200"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 md:px-5 hover:bg-white border-2 border-t-0 border-r-0 border-purple-500"
                    : "text-black md:px-5 hover:bg-white hover:text-purple-500 duration-200"
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://i.ibb.co/LNQ8SJL/1.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button>Faisal</button>
                </li>
                <li>
                  <button onClick={logOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                class="relative inline-block px-4 md:px-5 py-1.5 md:py-2 font-medium group rounded"
              >
                <span className="absolute rounded inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded inset-0 w-full h-full bg-white border-2 border-purple-500 group-hover:bg-purple-500"></span>
                <span className="relative rounded text-black group-hover:text-white">
                  Login
                </span>
              </Link>
              <Link
                to="/register"
                class="relative inline-block px-4 md:px-5 py-1.5 md:py-2 font-medium group rounded"
              >
                <span className="absolute rounded inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded inset-0 w-full h-full bg-white border-2 border-purple-500 group-hover:bg-purple-500"></span>
                <span className="relative rounded text-black group-hover:text-white">
                  Register
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
