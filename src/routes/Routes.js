import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Category from "../components/category/Category";
import Courses from "../components/Courses/Courses";
import Enrollcourse from "../components/Enrollcourse/Enrollcourse";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/LogIn/Login";
import Privateroute from "../components/privateroute/Privateroute";
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
        path: "/courses",
        element: <Courses />,
        loader: () => fetch('http://localhost:5000/courses'),
      },
      {
          path:'/singleCategory/:id',
          loader: async({params})=>{
            console.log(params);
            return fetch(`http://localhost:5000/category/${params.id}`)
            
          },
          element:<Category></Category>
      },
      {
       path:'/enrollcourse/:id',
       element: <Privateroute> <Enrollcourse></Enrollcourse> </Privateroute>
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
