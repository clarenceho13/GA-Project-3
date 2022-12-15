import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav id="navBar">
        <NavLink to="/Booking" as={NavLink}>
          <div className="navbuttons container">My Bookings</div>
        </NavLink>
        <NavLink to="/Menu" as={NavLink}>
          <div className="navbuttons container">Menu</div>
        </NavLink>
        <NavLink to="/MainOutlet" as={NavLink}>
          <div className="navbuttons container">Main Outlet</div>
        </NavLink>
        <NavLink to="/Outlet2" as={NavLink}>
          <div className="navbuttons container">Outlet2</div>
        </NavLink>
        <NavLink to="/Outlet3" as={NavLink}>
          <div className="navbuttons container">Outlet3</div>
        </NavLink>
      </nav>
    </>
  );
}
export default Navbar;
