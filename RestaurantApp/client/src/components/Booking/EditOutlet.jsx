import React from "react";
import AdminNavbar from "../Navbar/AdminNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditOutlet() {
  const [selectedOutlet, setSelectedOutlet] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);
  /* Fetching the data from the database. */
  useEffect(() => {
    const fetchOutlet = async () => {
      const response = await fetch(`/api/outlet/${id}`);
      const data = await response.json();
      /* Setting the state of selectedBooking to the data that is fetched from the database. */
      setSelectedOutlet(data);
    };
    fetchOutlet();
  }, []);

  /* Setting the editedBooking state to the value of the input fields. */
  const handleSubmit = async (event) => {
    event.preventDefault();

    /* Converting the form data into an object. */
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    console.log(info);

    /* Sending the editedOutlet state to the database. */
    const response = await fetch(`/api/outlet/${id}`, {
      method: "PUT",
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
          <h2>Edit Outlet</h2>
        </div>
        <div className="calenderbody container">
          <form onSubmit={handleSubmit}>
            <fieldset>
              Name:
              <input
                type="text"
                name="name"
                defaultValue={selectedOutlet.name}
              />
              <br />
              Location:
              <input
                type="text"
                name="location"
                defaultValue={selectedOutlet.location}
              />
              <br />
              <button>Update</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditOutlet;

//exported editoutlet
//this is the route for admin/editoutlet
