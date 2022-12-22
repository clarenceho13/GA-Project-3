import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactModal from "react-modal";

const Login = ({ callback, setLoggedInAs }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();

  const ModalOpen = () => {
    setModalIsOpen(true);
  };

  //! Admin login
  const AdminSignIn = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    // console.log(info);
    const response = await fetch("/api/session/loginadmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    const data = await response.json();
    if (response.ok) {
      // console.log("data", data);
      navigate(`/booking/${data.username}`);
      callback(data);
      setLoggedInAs("admin");
    } else {
      console.log("data", data);
      setErrorMsg("Access Denied");
    }
  };

  //! User login
  const signIn = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    // console.log("logininfo", info);
    const response = await fetch("/api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const data = await response.json();

    if (response.ok) {
      // console.log("data", data);
      navigate(`/booking/${data.username}`);
      callback(data);
      setLoggedInAs("user");
    } else {
      console.log("data", data);
      setErrorMsg("Invalid Username/Password");
    }
  };

  return (
    <div className="bg-blue-500 aspect-square">
      <h1 className="text-9xl font-bold text-center border-8 rounded-full p-20 max-w-fit m-auto ">
        Home Page
      </h1>
      <form onSubmit={signIn} className="text-center my-15 text-2xl">
        Username:
        <input
          className="text-2xl my-10"
          type="text"
          name="username"
          defaultValue=""
        />
        <div>
          Password:
          <input
            className="text-2xl mb-10"
            type="text"
            name="password"
            defaultValue=""
          />
        </div>
        <p>{errorMsg}</p>
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
          Sign In
        </button>
      </form>
      <button
        className="h-10 px-6 font-semibold rounded-md bg-black text-white mx-52 my-10"
        onClick={() => navigate("/Register")}
      >
        Sign Up
      </button>
      <br />
      <button
        className="h-10 px-6 font-semibold rounded-md bg-black text-white mx-52 my-10"
        onClick={ModalOpen}
      >
        {" "}
        Admin{" "}
      </button>
      <ReactModal
        className="modalregister"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <form
          className="text-4xl font-bold text-left border-8 p-5 max-w-fit m-10 mt-2 p-3"
          onSubmit={AdminSignIn}
        >
          username:
          <input
            className="p-3 m-5"
            type="text"
            name="username"
            placeholder="username"
            defaultValue=""
          />
          <br />
          password:
          <input
            className="p-3 m-5"
            type="text"
            name="password"
            placeholder="password"
            defaultValue=""
          />
          <br />
          <button className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2">
            Submit
          </button>
        </form>
        <p>{errorMsg}</p>
      </ReactModal>
    </div>
  );
};
export default Login;
