import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Category from "../components/category/Category";
import Courseitem from "../components/Courseitem/Courseitem";
import Courses from "../components/Courses/Courses";
import Enrollcourse from "../components/Enrollcourse/Enrollcourse";
import Errorpage from "../components/Errorpage/Errorpage";
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
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
  
        path: "/",
        element: <Home />,
     
    },
      {
  
        path: "/home",
        element: <Home />,
     
    },
    
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch('https://b610-server-site.vercel.app/courses'),
      },
      {
          path:'/singleCategory/:id',
          loader: async({params})=>{
            console.log(params);
            return fetch(`https://b610-server-site.vercel.app/courses/${params.id}`)
            
          },
          element:<Courseitem></Courseitem>
      },
      {
       path:'/courses/:id',
       element: <Privateroute> <Enrollcourse></Enrollcourse> </Privateroute>,
       loader: ({params})=>fetch(`https://b610-server-site.vercel.app/courses/${params.id}`)
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
