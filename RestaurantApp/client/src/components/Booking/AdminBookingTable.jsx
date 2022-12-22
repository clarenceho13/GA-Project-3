import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../App";

function AdminBookingTable() {
  const [booking, setBooking] = useState([]);
  const [outletid, setOutletid] = useState("");

  const navigate = useNavigate();
  const user = useContext(UserContext);
  const [outletbutton, setOutletbutton] = useState([]);

  useEffect(() => {
    fetch(`/api/outlet/`)
      .then((response) => response.json())
      .then((data) => setOutletbutton(data));
  }, []);

  // console.log("outlet", outletbutton);
  // console.log("outletid", outletid);

  useEffect(() => {
    fetch(`/api/booking/`)
      .then((response) => response.json())
      .then((data) => setBooking(data));
  }, []);

  // console.log("booking", booking);

  // console.log("diditwork?", outletid);

  // useEffect(() => {
  //   fetch(`/api/booking/admin/${outletid}`)
  //     .then((response) => response.json())
  //     .then((data) => setBooking(data));
  // }, []);

  /* Fetching the data from the database. */
  useEffect(() => {
    const fetchBooking = async () => {
      const response = await fetch(`/api/booking${outletid}`);
      const data = await response.json();
      /* Setting the state of selectedBooking to the data that is fetched from the database. */
      setBooking(data);
    };
    fetchBooking();
  }, [outletid]);

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

  const showAll = () => {
    setOutletid("");
  };

  const filterData = (event) => {
    setOutletid(`/admin/${event.target.value}`);
  };

  return (
    <>
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
                <button onClick={() => handleDelete(booking._id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={showAll}>All</button>
        {outletbutton.map((outletbutton) => {
          return (
            <button
              key={outletbutton._id}
              value={outletbutton._id}
              onClick={filterData}
            >
              {outletbutton.name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default AdminBookingTable;
