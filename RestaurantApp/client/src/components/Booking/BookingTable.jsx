import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
    <table className="border-separate border-spacing-2 border border-slate-500">
      <thead>
        <tr>
          <th className="border border-slate-600 p-2">Name</th>
          <th className="border border-slate-600 p-2">Hp</th>
          <th className="border border-slate-600 p-2">Email</th>
          <th className="border border-slate-600 p-2">Pax</th>
          <th className="border border-slate-600 p-2">Date</th>
          <th className="border border-slate-600 p-2">Time</th>
          <th className="border border-slate-600 p-2">Outlet</th>
        </tr>
      </thead>
      <tbody>
        {booking.map((booking) => (
          <tr key={booking._id}>
            <td className="border border-slate-700 p-1">{booking.name}</td>
            <td className="border border-slate-700 p-1">{booking.hp}</td>
            <td className="border border-slate-700 p-1">{booking.email}</td>
            <td className="border border-slate-700 p-1">{booking.pax}</td>
            <td className="border border-slate-700 p-1">{booking.date}</td>
            <td className="border border-slate-700 p-1">{booking.time}</td>
            <td className="border border-slate-700 p-1">
              {booking.outlet.name}
            </td>
            <td>
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2 mx-2"
                onClick={() => navigateToEditPage(booking._id)}
              >
                Edit
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2"
                onClick={() => handleDelete(booking._id)}
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookingTable;
