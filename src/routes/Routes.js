import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CourseCategories from "../components/categories/CourseCategories";
import Courses from "../components/Courses/Courses";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/LogIn/Login";
import Register from "../components/Register/Register";
import Root from "../components/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
        // loader: () => fetch('http://localhost:5000/courseCategories'),
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch('http://localhost:5000/courses'),
      },
      {
        path: "/courseCategories",
        element: <CourseCategories></CourseCategories>,
        loader: () => fetch('http://localhost:5000/courseCategories'),
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
