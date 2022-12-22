import React from "react";
import AdminNavbar from "../Navbar/AdminNavbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateOutlet() {
  const navigate = useNavigate();

  /* Setting the createBooking state to the value of the input fields. */
  const handleCreate = async (event) => {
    event.preventDefault();
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
      <div className="header container">
        <h1>Reservations</h1>
      </div>

      <div className="body container">
        <div className="navbar container">
          <AdminNavbar />
        </div>
        <div className="calenderheader container">
          <h2>Create Outlet</h2>
        </div>
        <div className="calenderbody container">
          <form onSubmit={handleCreate}>
            <fieldset>
              Name:
              <input type="text" name="name" defaultValue="" />
              <br />
              Location:
              <input type="text" name="location" defaultValue="" />
              <br />
              Opening Hours:
              <input
                type="text"
                name="openinghours"
                defaultValue="11:00 AM - 11:00 PM"
                readOnly
              />
              <br />
              Hp:
              <input type="text" name="hp" defaultValue="" min="8" max="8" />
              <br />
              Email:
              <input type="email" name="email" defaultValue="" />
              <br />
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
