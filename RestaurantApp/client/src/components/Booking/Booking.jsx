import Navbar from "../Navbar/Navbar";
import BookingTable from "./BookingTable";
import { useContext } from "react";
import { UserContext } from "../../App";

function Booking() {
  const user = useContext(UserContext);

  return (
    <div>
      <div className="header container">
        <h1>Reservations</h1>
      </div>
      <div className="body container">
        <div className="navbar container">
          <Navbar />
          <div className="outletdetails container">
            <div className="details container">
              <h2>Logged in as:</h2>
              <p> Username:{user.username} </p>
              <p> Name: {user.name} </p>
            </div>
            <div className="details container">
              <h2>Info</h2>
              <p> HP: {user.hp} </p>
              <p> Email: {user.email} </p>
            </div>
            <div className=" details container">
              <button>Log Out</button>
            </div>
          </div>
        </div>

        <div className="calenderheader container">
          <h2>Bookings</h2>
        </div>
        <div className="calenderbody container">
          <BookingTable />
        </div>
      </div>
    </div>
  );
}
export default Booking;
