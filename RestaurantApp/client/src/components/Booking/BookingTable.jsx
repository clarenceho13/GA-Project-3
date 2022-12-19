import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function BookingTable() {
  const [booking, setBooking] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/booking/")
      .then((response) => response.json())
      .then((data) => setBooking(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/booking/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setBooking(booking.filter((h) => h._id !== id));
      });
  };


  const navigateToEditPage = (id) => {
    navigate(`/booking/${id}`);
  };


  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Hp</th>
          <th>Email</th>
          <th>Pax</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {booking.map((booking) => (
          <tr key={booking._id}>
            <td>{booking.name}</td>
            <td>{booking.hp}</td>
            <td>{booking.email}</td>
            <td>{booking.pax}</td>
            <td>{booking.date}</td>
            <td>{booking.time}</td>
            <td>

              <button onClick={() => navigateToEditPage(booking._id)}>
                Edit
              </button>

              <button onClick={() => handleDelete(booking._id)}>X</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookingTable;
