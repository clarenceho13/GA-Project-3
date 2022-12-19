import { NavLink } from "react-router-dom";
function AdminNavbar() {
  return (
    <>
      <nav id="navBar">
        <NavLink to="/Booking" as={NavLink}>
          <div className="navbuttons container">My Bookings</div>
        </NavLink>
        <NavLink to="/MainOutlet" as={NavLink}>
          <div className="navbuttons container">Main Outlet</div>
        </NavLink>
        <NavLink to="/Outlet2" as={NavLink}>
          <div className="navbuttons container">Outlet2</div>
        </NavLink>
      </nav>
    </>
  );
}
export default AdminNavbar;
