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

  return (
    <div>
      <div className="header container">
        <h1>Reservations</h1>
      </div>
      <div className="body container">
        <div className="navbar container">
          <Navbar />
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
