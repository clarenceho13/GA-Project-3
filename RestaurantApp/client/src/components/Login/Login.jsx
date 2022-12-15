import React from 'react';
import { Link, useNavigate } from "react-router-dom";

 const Login=()=> {
    const navigate=useNavigate();
   const SignIn=()=>{
    navigate("/home")

    //if username and passward match and is in data base
    //go into next page
    //else return 401 user not found 
   }
  return (
    <div>
     <h1>Home Page</h1>
      <input type="text" placeholder="username" />
      <div>
      <input type="password" placeholder="password" />
      </div>
      

      <button onClick={SignIn}>Sign In</button>

      

      
    </div>
  )
}
export default Login;

//<button onClick={SignUp}>Sign up</button>