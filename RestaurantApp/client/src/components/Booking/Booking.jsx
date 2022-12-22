import Navbar from "../Navbar/Navbar";
import BookingTable from "./BookingTable";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import AdminBookingTable from "./AdminBookingTable";
import AdminNavbar from "../Navbar/AdminNavbar";

function Booking({ loggedInAs }) {
  //! Login as user
  if (loggedInAs === "user") {
    const navigate = useNavigate();
    const user = useContext(UserContext);

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
      <div className="bg-blue-500 aspect-square">
        <div className="text-4xl font-bold text-center border-8 rounded-full p-20 max-w-fit m-auto mb-10">
          <h1>Reservations</h1>
        </div>
        <div className="text-xl font-bold text-center border-8 p-5 max-w-fit m-auto">
          <div className="text-2xl font-bold text-center p-8 max-w-fit ml-1 mr-0">
            <Navbar />
            <div className="text-xl font-bold text-center border-8 p-5 max-w-fit m-auto">
              <div className="text-2xl font-bold text-center p-8 max-w-fit ml-1 mr-0">
                <h2 className="text-xl font-bold underline">Logged in as:</h2>
                <p> Username: {user.username} </p>
                <p> Name: {user.name} </p>
              </div>
              <div className="text-lg font-bold text-center p-3 max-w-fit m-auto">
                <h2 className="text-xl font-bold underline">User Info</h2>
                <p> HP: {user.hp} </p>
                <p> Email: {user.email} </p>
              </div>
              <div>
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2"
                  onClick={returnToLogin}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-center p-5 max-w-fit m-auto mb-5 underline">
              Bookings
            </h2>
          </div>
          <div className="text-xl font-bold text-center border-8 p-5 max-w-fit m-auto">
            <BookingTable />
          </div>
        </div>
      </div>
    );
  }

  //! Login as admin
  if (loggedInAs === "admin") {
    return (
      <div className="bg-blue-500 aspect-square">
        <div className="text-4xl font-bold text-center border-8 rounded-full p-20 max-w-fit m-auto mb-10">
          <h1>Reservations</h1>
        </div>

        <div className="text-3xl font-bold text-center border-8 p-10 max-w-fit m-auto">
          <div className="text-2xl font-bold text-center p-8 max-w-fit ml-1 mr-0">
            <AdminNavbar />
          </div>
          <div className="text-5xl font-bold underline">
            <h2>Bookings</h2>
          </div>
          <div className="text-3xl font-bold text-center p-3 max-w-fit m-4">
            <AdminBookingTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
