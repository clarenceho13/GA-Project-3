<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactModal from "react-modal";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const ModalOpen = () => {
    setModalIsOpen(true);
  };

  const AdminSignIn = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    console.log(info);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    if (response.ok) {
      navigate("/adminbooking");
    } else {
      setErrorMsg("Invalid Username/Password");
    }
  };

  const signIn = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    console.log(info);

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    if (response.ok) {
      navigate("/booking");
    } else {
      setErrorMsg("Invalid Username/Password");
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={signIn}>
        <fieldset>
          Username:
          <input
            type="text"
            name="username"
            placeholder="username"
            defaultValue=""
          />
          <div>
            Password:
            <input
              type="text"
              name="password"
              placeholder="password"
              defaultValue=""
            />
          </div>
          <p>{errorMsg}</p>
        </fieldset>
        <button>Sign In</button>
      </form>
      <button> Sign Up</button>
      <br />
      <button onClick={ModalOpen}> Admin </button>
      <ReactModal
        className="modalregister"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <form onSubmit={AdminSignIn}>
          username:
          <input
            type="text"
            name="username"
            placeholder="username"
            defaultValue=""
          />
          <br />
          password:
          <input
            type="text"
            name="password"
            placeholder="password"
            defaultValue=""
          />
          <br />
          <button>Submit</button>
        </form>
        <p>{errorMsg}</p>
      </ReactModal>
=======
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

      
>>>>>>> d5882b5611748f5d544478cbb42c3b8d65c987ee
    </div>
  );
};
export default Login;
