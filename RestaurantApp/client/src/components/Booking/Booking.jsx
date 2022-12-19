import Navbar from "../Navbar/Navbar";
import BookingTable from "./BookingTable";

function Booking() {
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
              <p> username </p>
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
