import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/Usercontext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

  const [error,setError]=useState('');

  const { signIn } = useContext(AuthContext);
  const navigate =  useNavigate();
  const location =useLocation();
  const from = location.state?.from?.pathname || '/';

  

  // const [userInfo, setUserInfo] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [errors, setErrors] = useState({
  //   email: "",
  //   password: "",
  //   genaral:""
  // });

  // const handleEmailChange = (e) => {
  //   const email = e.target.value;
  //   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  //     setErrors({ ...errors, email: "enter a valid email address" });
  //     setUserInfo({ ...userInfo, email: "" });
  //   } else {
  //     setErrors({ ...errors, email: "" });
  //     setUserInfo({ ...userInfo, email: e.target.value });
  //   }
  // };
  // const handlePasswordChange = (e) => {
  //   const password = e.target.value;
  //   const passwordLength = password.length < 6;
  //   // const symbolCheck = !/^[A-Za-z]\w{7,14}$/.test(password)
  //   if (passwordLength) {
  //     setErrors({ ...errors, password: "must be at least 6 charecters" });
  //     setUserInfo({ ...userInfo, password: "" });
  //   }
  //   // else if(symbolCheck) {
  //   //   setErrors({ ...errors, password: "must be one uppercaseLetter" });
  //   //   setUserInfo({ ...userInfo, password: e.target.value });
  //   // }
  //   else{
  //     setErrors({ ...errors, password: "" });
  //     setUserInfo({ ...userInfo, password: e.target.value });
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // const form = event.target;
  //   // const email = form.email.value;
  //   // const password = form.password.value;
  //   // console.log(email, password);

  //   signIn(userInfo.email, userInfo.password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       navigate(from)

  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setErrors({...errors,genaral:error.message})

  //     });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from,{replace:true});
        form.reset();
        setError('')
      })
      .catch((error) => {
        console.error(error);
        // setErrors({...errors, genaral:error.message})
        setError(error.message)
      
      });
  };

  // const handleGoogleLogIn = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch((error) => console.error(error));
  // };
  return (
    <div className=" m-auto mt-5 pt-5">
      <form onSubmit={handleSubmit} className="w-50 m-auto border rounded p-4">
        <div className="mb-3 text-start ">
          <label className="form-label " for="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            // value={userInfo.email}
          //  onChange={handleEmailChange}
            placeholder="Your email address"
          />
     
        </div>
        <div className="mb-3 text-start">
          <label className="form-label" for="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            // onChange={handlePasswordChange}
            autocomplete="current-password"
          />
         
        </div>
           <div className="text-danger">
            {error}
           </div>
        <div className="mb-3 text-start">
          <div>
            Don't have an account? Go to{" "}
            <span>
              {" "}
              <Link to="/register" className="text-decoration-none fw-bold">
                Register
              </Link>
            </span>
          </div>
        </div>
        <div>
          <button className="btn btn-primary w-full">
            Log in
          </button>
        </div>
        {/* {errors} */}
        {/* <div>
          <button className="btn btn-primary">sign in with github</button>
          <button onClick={handleGoogleLogIn} type="submit" className="btn btn-primary">sign in with google</button>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
