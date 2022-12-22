import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../App";

function BookingTable() {
  const [booking, setBooking] = useState([]);
  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    fetch(`/api/booking/${user._id}`)
      .then((response) => response.json())
      .then((data) => setBooking(data));
  }, []);

  // console.log("user._id", user._id);

  // console.log("booking", booking);

  const handleDelete = (id) => {
    fetch(`/api/booking/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setBooking(booking.filter((booking) => booking._id !== id));
      });
  };

  const navigateToEditPage = (id) => {
    navigate(`/booking/${user.username}/${id}`);
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
            <td>{booking.outlet.name}</td>
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
