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

  return (
    <div>
      <div className="header container">
        <h1>Reservations</h1>
      </div>
      <div className="body container">
        <div className="navbar container">
          <Navbar />
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