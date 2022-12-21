import React from "react";
import { useState, useContext } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const reservationTiming = [
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
  "08:00 PM",
  "10:00 PM",
];

function Time2({ selectedDate }) {
  const [time, setTime] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const user = useContext(UserContext);

  function displayInfo(event) {
    setModalIsOpen(true);
    setTime(event.target.innerText);
  }

  const navigate = useNavigate();
  const createBooking = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);

    info.booked = true;
    info.userid = `${user._id}`;

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
              <button onClick={displayInfo}> {time}</button>
            </div>
          );
        })}
        <ReactModal
          className="modalregister"
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <form onSubmit={createBooking}>
            Name:
            <input type="text" name="name" defaultValue={user.name}></input>
            <br />
            HP:<input type="number" name="hp" defaultValue={user.hp}></input>
            <br />
            Email:
            <input type="email" name="email" defaultValue={user.email}></input>
            <br />
            Pax:<input type="number" name="pax" defaultValue=""></input>
            <br />
            Date:
            <input
              type="text"
              name="date"
              defaultValue={selectedDate}
              readOnly
            ></input>
            <br />
            Time:
            <input type="text" name="time" defaultValue={time} readOnly></input>
            <br />
            Outlet:
            <input
              type="text"
              name="outlet"
              defaultValue="Outlet2"
              readOnly
            ></input>
            <br />
            <button>Submit</button>
          </form>
        </ReactModal>
      </div>
    </>
  );
}

export default Time2;
