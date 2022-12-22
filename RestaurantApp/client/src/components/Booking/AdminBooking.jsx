import AdminBookingTable from "./AdminBookingTable";
import AdminNavbar from "../Navbar/AdminNavbar";

function AdminBooking() {
  return (
    <div>
      <div className="header container">
        <h1>Reservations</h1>
      </div>

      <div className="body container">
        <div className="navbar container">
          <AdminNavbar />
        </div>
        <div className="calenderheader container">
          <h2>Bookings</h2>
        </div>
        <div className="calenderbody container">
          <AdminBookingTable />
        </div>
      </div>
    </div>
  );
}
export default AdminBooking;
