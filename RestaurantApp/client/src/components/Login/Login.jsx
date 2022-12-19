import React from 'react';
import { useNavigate } from "react-router-dom";


 const Login=()=> {
    const navigate=useNavigate();
   const SignIn=()=>{
    navigate("/home") 
   }
   const AdminSignIn=()=>{
    navigate("/admin")
   }
  
  return (
    <div>
     <h1>Home Page</h1>
      <input type="text" placeholder="username" />
      <div>
      <input type="password" placeholder="password" />
      </div>
      

      <button onClick={SignIn}>Sign In</button>

      <button onClick={AdminSignIn}>Admin</button>

      
    </div>
  )
}
export default Login;

//<button onClick={SignUp}>Sign up</button>