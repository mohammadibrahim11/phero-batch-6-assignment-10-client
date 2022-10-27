import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";

const Privateroute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  if(user && user.uid){
   return children;

  }

  return <Navigate to='/login'></Navigate>
};

export default Privateroute;
