import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";

const Privateroute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  console.log(user);

  if(loading){
   return <div>loading...</div>
  }
  if(user && user.uid){
   return children;

  }

  return <Navigate to='/login'></Navigate>
};

export default Privateroute;
