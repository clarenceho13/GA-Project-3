import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const createUser = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);

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
    <div className="bg-blue-500 aspect-square">
      <h1 className="text-5xl font-bold underline">Create New User</h1>
      <form
        className="text-4xl font-bold text-left border-8 p-5 max-w-fit m-5 mt-2 p-3"
        onSubmit={createUser}
      >
        <fieldset>
          Username:
          <input
            className="p-3 m-5"
            type="text"
            name="username"
            placeholder="username"
            defaultValue=""
          ></input>
          <div>
            Password:
            <input
              className="p-3 m-5"
              type="text"
              name="password"
              placeholder="password"
              defaultValue=""
            ></input>
          </div>
          <div>
            Name:
            <input
              className="p-3 m-5"
              type="text"
              name="name"
              placeholder="name"
              defaultValue=""
            ></input>
          </div>
          <div>
            Hp:
            <input
              className="p-3 m-5"
              type="number"
              name="hp"
              placeholder="hp"
              defaultValue=""
            ></input>
          </div>
          <div>
            Email:
            <input
              className="p-3 m-5"
              type="email"
              name="email"
              placeholder="email"
              defaultValue=""
            ></input>
          </div>
        </fieldset>
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2">
          Create
        </button>
      </form>
    </div>
  );
};
export default Register;
