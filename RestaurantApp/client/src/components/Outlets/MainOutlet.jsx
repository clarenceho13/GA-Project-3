import Navbar from "../Navbar/Navbar";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import Time from "./Time";

function MainOutlet() {
  const [date, setDate] = useState(new Date());
  const [outlet, setOutlet] = useState([]);

  useEffect(() => {
    fetch(`/api/outlet/`)
      .then((response) => response.json())
      .then((data) => setOutlet(data));
  }, []);

  // console.log(outlet);

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
            {outlet.map((outlet) => {
              return (
                <div key={outlet._id}>
                  <div>
                    <h2>{outlet.name}</h2>
                    <p>Location: {outlet.location}</p>
                    <h3>Contact us at:</h3>
                    <p>{outlet.hp}</p>
                    <p>{outlet.email}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="calenderheader container">
          <h2>Make A Reservation</h2>
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
                maxDate={new Date(2023, 0, 31)}
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
