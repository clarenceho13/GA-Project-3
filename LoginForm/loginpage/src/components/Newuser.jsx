import React from 'react'

 const Newuser=()=> {
   const register=()=>{
    //if username is unique
    //add new user to the database
    //else return please select another username
   }
  return (
    <div>
    
      <input type="text" placeholder="username" />
      <div>
      <input type="password" placeholder="password" />
      </div>
      

      <button onClick={register}>Register</button>
      
    </div>
  )
}
export default Newuser;