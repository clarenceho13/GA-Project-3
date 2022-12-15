import React from 'react';
//import { Link } from 'react-router-dom';

const LoginPage=()=>{
  //const[currentPage,setCurrentPage]=useState();

  const handleClick=()=>{
    //if username and password from inputs match database
   //setCurrentPage(move to the booking page/home page)
    //else return error (404 user not found)
  }
  const signUp=()=>{
    
  }

  

  return (
    <div>
    <div>
    <h1>Home Page</h1>
    
      <h2>Login</h2>
      <input type="text" placeholder="username" />
      <div>
      <input type="password" placeholder="password" />
      </div>
      

      <button onClick={handleClick}>Sign in</button>
      </div>

      <div>
      <button onClick={signUp}>Sign in</button>
      

    </div>
    </div>
    
    
   
  )
}


export default LoginPage;