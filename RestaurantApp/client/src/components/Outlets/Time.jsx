import { useState, useContext, useEffect } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const reservationTiming = [
  "11:00 AM",
  "01:00 PM",
  "03:00 PM",
  "05:00 PM",
  "07:00 PM",
  "09:00 PM",
];

function Time({ selectedDate }) {
  const [time, setTime] = useState("");
  const [outlet, setOutlet] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/outlet/`)
      .then((response) => response.json())
      .then((data) => setOutlet(data));
  }, []);

  // console.log(selected);

  function displayInfo(event) {
    setModalIsOpen(true);
    setTime(event.target.innerText);
  }

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const createBooking = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    info.booked = true;
    info.userid = `${user._id}`;
    info.outlet = selected;

    // console.log("info", info);
    // console.log("infouserid", info.userid);
    // console.log(user._id);

    const response = await fetch(`/api/booking/${user._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    navigate(`/booking/${user.username}`);
  };

  return (
    <>
      <div className="times">
        {reservationTiming.map((time, index) => {
          return (
            <div key={index}>
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2"
                onClick={displayInfo}
              >
                {time}
              </button>
            </div>
          );
        })}
        <ReactModal
          className="modalregister"
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <form
            className="text-4xl font-bold text-left border-8 p-5 max-w-fit m-5 mt-2 p-3"
            onSubmit={createBooking}
          >
            Name:
            <input
              className="p-3 m-5"
              type="text"
              name="name"
              defaultValue={user.name}
            ></input>
            <br />
            HP:
            <input
              className="p-3 m-5"
              type="number"
              name="hp"
              maxLength="8"
              defaultValue={user.hp}
            ></input>
            <br />
            Email:
            <input
              className="p-3 m-5"
              type="email"
              name="email"
              defaultValue={user.email}
            ></input>
            <br />
            Pax:
            <input
              className="p-3 m-5"
              type="number"
              name="pax"
              min="1"
              max="8"
              defaultValue=""
            ></input>
            <br />
            Date:
            <input
              className="p-3 m-5"
              type="text"
              name="date"
              defaultValue={selectedDate}
              readOnly
            ></input>
            <br />
            Time:
            <input
              className="p-3 m-5"
              type="text"
              name="time"
              defaultValue={time}
              readOnly
            ></input>
            <br />
            Outlet:
            <select
              className="p-3 m-5"
              value={selected}
              onChange={handleChange}
            >
              <option></option>
              {outlet.map((outlet) => {
                return (
                  <option key={outlet._id} value={outlet._id}>
                    {outlet.name}
                  </option>
                );
              })}
            </select>
            <br />
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2">
              Submit
            </button>
          </form>
        </ReactModal>
      </div>
    </>
  );
}

export default Time;
