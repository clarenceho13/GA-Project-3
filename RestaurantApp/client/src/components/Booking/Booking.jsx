import Navbar from "../Navbar/Navbar";

function Booking() {
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
        <div className="calenderbody container"></div>
      </div>
    </div>
  );
}
export default Booking;