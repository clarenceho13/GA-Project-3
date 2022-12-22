import React from 'react'
import AdminNavbar from '../Navbar/AdminNavbar';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

 function CreateOutlet() {
  const [createdOutlet, setCreatedOutlet] = useState({});
  const navigate = useNavigate();
  
  //fetch data from /api/outlet
  /*
  useEffect(() => {
    const fetchOutlet = async () => {
      const response = await fetch(`/api/outlet/${id}`);
      const data = await response.json();
      /* Setting the state of selectedBooking to the data that is fetched from the database. */
      
    /*  setCreatedOutlet(data);
    };
    fetchOutlet();
  }, []); */
 
  /* Setting the createBooking state to the value of the input fields. */
  const handleCreate = async (event) => {
    event.preventDefault();

    //if else

    /* Converting the form data into an object. */
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    console.log(info);

    /* Sending the createOutlet state to the database. */
    const response = await fetch("/api/outlet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      /* Converting the object into a string. */
      body: JSON.stringify(info),
    });

    /* Waiting for the response to be converted to JSON. */
    await response.json();
    /* Redirecting the user to the booking page. */
    navigate("/admin/showoutlet");
  };


  return (
    <div>
    <div className="body container">
    <div className="navbar container">
      <AdminNavbar />
    </div>
    
    <div className="calenderbody container">
      <form onSubmit={handleCreate}>
        <fieldset>
         Name: 
          <input
            type="text"
            name="name"
            defaultValue=""
          />
          Location:
          <input
            type="text"
            name="location"
            defaultValue=""
          />
          Opening Hours: 
          <input
            type="text"
            name="openinghours"
            defaultValue=""
          />
          hp:
          <input
            type="text"
            name="hp"
            defaultValue=""
          />
          Email: 
          <input
            type="email"
            name="email"
            defaultValue=""
          />
          <button>Create</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
);
}

export default CreateOutlet;

//exported createoutlet
//this is the route for admin/createoutlet