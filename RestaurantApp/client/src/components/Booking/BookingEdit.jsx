<<<<<<< HEAD
import Navbar from "../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BookingEdit() {
  const [selectedBooking, setSelectedBooking] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  /* Fetching the data from the database. */
  useEffect(() => {
    const fetchBooking = async () => {
      const response = await fetch(`/api/booking/${id}`);
      const data = await response.json();
      /* Setting the state of selectedBooking to the data that is fetched from the database. */
      setSelectedBooking(data);
    };
    fetchBooking();
  }, []);

  /* Setting the editedBooking state to the value of the input fields. */
  const handleSubmit = async (event) => {
    event.preventDefault();
    /* Converting the form data into an object. */
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    console.log(info);

    /* Sending the editedBooking state to the database. */
    const response = await fetch(`/api/booking/${id}`, {
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
    navigate("/booking");
  };
=======
import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function BookingEdit() {
    const [booking, setBooking]=useState({});
    const { id } = useParams();
    const navigate = useNavigate();

//Edit Page not yet completed. (George)
    const updateBooking =  async (event) =>{
        event.preventDefault()
        const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);

    const response = await fetch(`/api/booking/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      await response.json();
      navigate("/booking");
    }

    useEffect(() => {
        const fetchBooking = async () => {
          const response = await fetch(`/api/booking/${id}`);
          const data = await response.json();
          setBooking(data);
        };
        fetchBooking();
      }, [id]);
>>>>>>> 02305cb2e3aca1f1211dd0db5f237915fb1d2dd6

  return (
    <div>
      <div className="header container">
        <h1>Reservations</h1>
      </div>
      <div className="body container">
        <div className="navbar container">
          <Navbar />
<<<<<<< HEAD
        </div>
        <div className="calenderheader container">
          <h2>Bookings</h2>
        </div>
        <div className="calenderbody container">
          <form onSubmit={handleSubmit}>
            <fieldset>
              Date & Time:
              <p>
                {selectedBooking.date} - {selectedBooking.time}
              </p>
              Name:
              <input
                type="text"
                name="name"
                defaultValue={selectedBooking.name}
              />
              Hp:
              <input
                type="number"
                name="hp"
                defaultValue={selectedBooking.hp}
              />
              Email
              <input
                type="email"
                name="email"
                defaultValue={selectedBooking.email}
              />
              Pax:
              <input
                type="number"
                name="pax"
                defaultValue={selectedBooking.pax}
              />
              <button>Update</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingEdit;
=======
          <div className="outletdetails container">
          </div>
        </div>
        <div className="calenderheader container">
          <h2>Edit Booking</h2>
        </div>
        <div className="calenderbody container">
            <form onSubmit={updateBooking}>
            Name: <input defaultValue={booking.name}></input>
            <br/>
            Hp:<input></input>
            <br/>
            Email:<input></input>
            <br/>
            Pax:<input></input>
            <br/>
            Date:<input></input>
            <br/>
            Time:<input></input>
            <br/>
            <button>Update Booking</button>
            </form>
            </div>
      </div>
    </div>
  );

}

export default BookingEdit
>>>>>>> 02305cb2e3aca1f1211dd0db5f237915fb1d2dd6
