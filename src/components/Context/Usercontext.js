import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext();
const auth=getAuth(app)
const Usercontext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading,setLoading]=useState(true);


  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  // const [loadign,setLoading] = useState(true);

  const createUser=(email,password)=>{
 
 return createUserWithEmailAndPassword(auth,email,password);
  };

  const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  };

  const logOut = ()=>{
    return signOut(auth)
  };

  const signInWithGoogle =()=>{
    return  signInWithPopup(auth,googleProvider)
  }
  const signInWithGitHub =()=>{
    return signInWithPopup(auth,gitHubProvider)
  }


  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser=>{
         setUser(currentUser);
         setLoading(false);
        console.log(currentUser);
    })
    return ()=>{
        unsubscribe();
    }
  },[]);

//   useEffect(()=>{
//     const unsubscrib = onAuthStateChanged(auth,(loggedinUser)=>{
//         setUser(loggedinUser);
//     })
//     return ()=>{unsubscrib()};
//   },[]);

  const authInfo = { user,createUser,signIn,logOut,signInWithGoogle,signInWithGitHub,loading};

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Usercontext;
