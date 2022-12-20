import React from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const createUser = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    console.log(info);

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    navigate("/");
  };

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={createUser}>
        <fieldset>
          Username:
          <input
            type="text"
            name="username"
            placeholder="username"
            defaultValue=""
          ></input>
          <div>
            Password:
            <input
              type="text"
              name="password"
              placeholder="password"
              defaultValue=""
            ></input>
          </div>
          <div>
            Name:
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue=""
            ></input>
          </div>
          <div>
            Hp:
            <input
              type="number"
              name="hp"
              placeholder="hp"
              defaultValue=""
            ></input>
          </div>
          <div>
            Email:
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue=""
            ></input>
          </div>
        </fieldset>
        <button>Create</button>
      </form>
    </div>
  );
};
export default Register;
