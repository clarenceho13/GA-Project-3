import React, { useReducer } from "react";
import { useState, useContext } from "react";
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

    console.log(info);
    // console.log("infouserid", info.userid);

    const response = await fetch(`/api/booking`, {
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
              defaultValue="Main Outlet"
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

export default Time;
