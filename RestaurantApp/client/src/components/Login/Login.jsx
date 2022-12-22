import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactModal from "react-modal";

const Login = ({ callback }) => {
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
    // console.log(info);

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
      const data = await response.json();
      // console.log("userdata", data);
      navigate(`/booking/${data.username}`);
      callback(data);
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
      <button onClick={() => navigate("/Register")}> Sign Up</button>
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
    </div>
  );
};
export default Login;
