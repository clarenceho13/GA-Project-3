import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

const reservationTiming = [
  "10:00 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
  " 06:00 PM",
];

function Time({ selectedDate }) {
  const [time, setTime] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function displayInfo(e) {
    setModalIsOpen(true);
    setTime(e.target.innerText);
  }

  const navigate = useNavigate();
  const createBooking = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);

    console.log(info);

    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    navigate("/booking");
  };

  return (
    <>
      <div className="times">
        {reservationTiming.map((times, index) => {
          return (
            <div key={index}>
              <button onClick={(e) => displayInfo(e)}> {times}</button>
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
            Name:<input type="text" name="name" defaultValue=""></input>
            <br />
            HP:<input type="number" name="hp" defaultValue=""></input>
            <br />
            Email:<input type="email" name="email" defaultValue=""></input>
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
            <button>Submit</button>
          </form>
        </ReactModal>
      </div>
    </>
  );
}

export default Time;
