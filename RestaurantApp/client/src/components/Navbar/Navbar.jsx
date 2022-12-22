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
          <div className="navbuttons container">Make A Reservation</div>
        </NavLink>
      </nav>
    </>
  );
}
export default Navbar;
