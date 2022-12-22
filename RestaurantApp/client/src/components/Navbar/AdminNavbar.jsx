import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext } from "react";

function AdminNavbar() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const navigateToBookingPage = () => {
    navigate(`/booking/${user.username}`);
  };

  const navigateToCreatePage = () => {
    navigate("/admin/createoutlet");
  };

  const navigateToOutletPage = () => {
    navigate("/admin/showoutlet");
  };

  const returnToLogin = () => {
    fetch(`/api/session/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  return (
    <>
      <div className="outletdetails container">
        <div className="details container">
          <button
            className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2"
            onClick={navigateToBookingPage}
          >
            Show Bookings
          </button>
        </div>
        <div className="details container">
          <button
            className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2"
            onClick={navigateToCreatePage}
          >
            Create Outlet
          </button>
        </div>
        <div className="details container">
          <button
            className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2"
            onClick={navigateToOutletPage}
          >
            Show Outlet
          </button>
        </div>
      </div>
      <button
        className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2"
        onClick={returnToLogin}
      >
        Log out
      </button>
    </>
  );
}
export default AdminNavbar;
