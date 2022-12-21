import AdminBookingTable from "./AdminBookingTable";
//import { useNavigate } from "react-router-dom";
import AdminNavbar from "../Navbar/AdminNavbar";

function AdminBooking() {
  
  return (
    <div>
    <AdminNavbar />
      <div className="header container">
        <h1>Reservations</h1>
      </div>
      <div className="body container">
      
        <div className="calenderheader container">
          <h2>Bookings</h2>
        </div>
        <div className="calenderbody container">
          <button>ALL</button>
          <button>MAIN OULET</button>
          <button>OUTLET2</button>
          <AdminBookingTable />
          
        </div>
      </div>
    </div>
  );
}
export default AdminBooking;

//2 buttons created for navigating to create and edit