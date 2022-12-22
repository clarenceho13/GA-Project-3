import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();
  const navigateToBookingPage = () => {
    navigate("/adminbooking");
  };

  const navigateToCreatePage = () => {
    navigate("/admin/createoutlet");
  };

  const navigateToOutletPage = () => {
    navigate("/admin/showoutlet");
  };

  const returnToLogin = () => {
    navigate("/");
  };

  return (
    <>
      <div className="outletdetails container">
        <div className="details container">
          <button onClick={navigateToBookingPage}>Show Bookings</button>
        </div>
        <div className="details container">
          <button onClick={navigateToCreatePage}>Create Outlet</button>
        </div>
        <div className="details container">
          <button onClick={navigateToOutletPage}>Show Outlet</button>
        </div>
      </div>
      <button onClick={returnToLogin}>Log out</button>
    </>
  );
}
export default AdminNavbar;
