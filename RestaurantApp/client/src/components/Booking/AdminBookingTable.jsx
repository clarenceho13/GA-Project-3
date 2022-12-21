import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../App";

function AdminBookingTable() {
  const [booking, setBooking] = useState([]);
  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    fetch(`/api/booking/`)
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
        /* Filtering the booking array and setting the new array to the state. */
        setBooking(booking.filter((booking) => booking._id !== id));
      });
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
          <th>Outlet</th>
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
            <td>{booking.outlet}</td>
            <td>
              <button onClick={() => handleDelete(booking._id)}>X</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminBookingTable;
