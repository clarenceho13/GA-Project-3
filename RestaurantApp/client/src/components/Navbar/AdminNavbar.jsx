import { NavLink } from "react-router-dom";
function AdminNavbar() {
  return (
    <>
      <nav id="navBar">
<<<<<<< HEAD
        <NavLink to="/Booking" as={NavLink}>
          <div className="navbuttons container">My Bookings</div>
        </NavLink>
        <NavLink to="/MainOutlet" as={NavLink}>
          <div className="navbuttons container">Main Outlet</div>
        </NavLink>
        <NavLink to="/Outlet2" as={NavLink}>
          <div className="navbuttons container">Outlet2</div>
        </NavLink>
=======
        <NavLink to="/Admin" as={NavLink}>
          <div className="navbuttons container">All Bookings</div>
        </NavLink>
        
>>>>>>> d5882b5611748f5d544478cbb42c3b8d65c987ee
      </nav>
    </>
  );
}
<<<<<<< HEAD
export default AdminNavbar;
=======
export default AdminNavbar;
>>>>>>> d5882b5611748f5d544478cbb42c3b8d65c987ee
