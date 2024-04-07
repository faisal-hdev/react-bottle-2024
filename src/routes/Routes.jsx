import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
