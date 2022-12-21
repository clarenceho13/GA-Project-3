import Navbar from "../Navbar/Navbar";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import Time from "./Time";

function MainOutlet() {
  const [date, setDate] = useState(new Date());
  const [outlet, setOutlet] = useState([]);

  useEffect(() => {
    fetch(`/api/outlet/63a2a2799c4e1377c40e9fe1`)
      .then((response) => response.json())
      .then((data) => setOutlet(data));
  }, []);

  const current = new Date();
  const currentDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div>
      <div className="header container">
        <h1>Reservations</h1>
      </div>
      <div className="body container">
        <div className="navbar container">
          <Navbar />
          <div className="outletdetails container">
            <div className="details container">
              <h2>Location:</h2>
              <p>{outlet.location}</p>
            </div>
            <div className="details container">
              <h2>Opening Hours:</h2>
              <p>{outlet.openinghours}</p>
            </div>
            <div className=" details container">
              <h2>Contact Details</h2>
              <p>
                {outlet.hp}
                <br />
                {outlet.email}
              </p>
            </div>
          </div>
        </div>
        <div className="calenderheader container">
          <h2>Main Outlet</h2>
        </div>
        <div className="calenderbody container">
          <div className="app">
            <div className="calendar-container">
              <Calendar
                onChange={setDate}
                value={date}
                minDate={
                  new Date(
                    `${current.getMonth() + 1}-${
                      current.getDate() + 1
                    }-${current.getFullYear()}`
                  )
                }
                maxDate={
                  new Date(
                    `${current.getMonth() + 1}-${
                      current.getDate() + 10
                    }-${current.getFullYear()}`
                  )
                }
              />
            </div>
            <div className="App">
              <h1>Today is {currentDate}</h1>
            </div>
            <div className="text-center">
              Selected date: {date.toDateString()}
            </div>
            <Time selectedDate={date.toDateString()} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainOutlet;
