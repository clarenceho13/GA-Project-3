import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

function Navbar() {
  const user = useContext(UserContext);
  return (
    <>
      <nav id="navBar">
        <NavLink to={`/booking/${user.username}`} as={NavLink}>
          <div className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2">
            My Bookings
          </div>
        </NavLink>
        <NavLink to={`/mainoutlet/${user.username}`} as={NavLink}>
          <div className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2">
            Make A Reservation
          </div>
        </NavLink>
      </nav>
    </>
  );
}
export default Navbar;
