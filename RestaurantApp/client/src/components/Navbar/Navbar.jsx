import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
function Navbar() {
  const user = useContext(UserContext);

  return (
    <>
      <nav id="navBar">
        <NavLink to={`/booking/${user.username}`} as={NavLink}>
          <div className="navbuttons container">My Bookings</div>
        </NavLink>
        <NavLink to={`/mainoutlet/${user.username}`} as={NavLink}>
          <div className="navbuttons container">Main Outlet</div>
        </NavLink>
        <NavLink to={`/outlet2/${user.username}`} as={NavLink}>
          <div className="navbuttons container">Outlet2</div>
        </NavLink>
       
      </nav>
    </>
  );
}
export default Navbar;
