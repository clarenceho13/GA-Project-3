import { NavLink } from "react-router-dom";
function AdminNavbar() {
  return (
    <>
      <nav id="navBar">
        <NavLink to="/Admin" as={NavLink}>
          <div className="navbuttons container">All Bookings</div>
        </NavLink>
        
      </nav>
    </>
  );
}
export default AdminNavbar;