import Navbar from "../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";

function BookingEdit() {
  const navigate = useNavigate();
  const [selectedBooking, setSelectedBooking] = useState({});
  const { id } = useParams();
  const user = useContext(UserContext);
  // console.log(id);

  //! Fetching the specific data from booking by Id.
  useEffect(() => {
    const fetchBooking = async () => {
      const response = await fetch(`/api/booking/user/${id}`);
      const data = await response.json();
      //! Setting the state of selectedBooking to the specific booking data
      setSelectedBooking(data);
    };
    fetchBooking();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    // console.log(info);

    //! Sending the edited data to the database.
    const response = await fetch(`/api/booking/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    await response.json();
    navigate(`/booking/${user.username}`);
  };

  return (
    <div className="bg-blue-500 aspect-square">
      <div className="text-4xl font-bold text-center border-8 rounded-full p-20 max-w-fit m-auto mb-10">
        <h1>Reservations</h1>
      </div>
      <div className="text-3xl font-bold text-center border-8 p-10 max-w-fit m-auto">
        <div className="text-lg font-bold text-center p-3 max-w-fit m-auto mb-5">
          <Navbar />
        </div>
        <div className="text-4xl font-bold text-center border-8 p-5 max-w-fit m-auto">
          <h2>Bookings</h2>
        </div>
        <div className="text-4xl font-bold text-center border-8 p-5 max-w-fit m-auto mt-2">
          <form className="text-xl font-bold" onSubmit={handleSubmit}>
            <fieldset>
              Date & Time:
              <p className="text-3xl font-bold underline m-3">
                {selectedBooking.date} - {selectedBooking.time}
              </p>
              Name:
              <input
                type="text"
                name="name"
                defaultValue={selectedBooking.name}
              />
              Hp:
              <input
                type="number"
                name="hp"
                defaultValue={selectedBooking.hp}
              />
              Email
              <input
                type="email"
                name="email"
                defaultValue={selectedBooking.email}
              />
              Pax:
              <input
                type="number"
                name="pax"
                min="1"
                max={selectedBooking.pax}
                defaultValue={selectedBooking.pax}
              />
              <button className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2">
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
export default BookingEdit;
