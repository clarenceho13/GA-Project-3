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
    <div className="bg-blue-500 aspect-square">
      <div className="text-4xl font-bold text-center border-8 rounded-full p-20 max-w-fit m-auto mb-10">
        <h1>Reservations</h1>
      </div>
      <div className="text-3xl font-bold text-center border-8 p-10 max-w-fit m-auto">
        <div className="text-2xl font-bold text-center p-8 max-w-fit ml-1 mr-0">
          <Navbar />
          <div className="text-xl font-bold text-center border-8 p-5 max-w-fit m-auto">
            {outlet.map((outlet) => {
              return (
                <div key={outlet._id}>
                  <div>
                    <h2 className="text-3xl font-bold underline m-1">
                      {outlet.name}
                    </h2>
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
        <div>
          <h2 className="text-5xl font-bold underline m-2">
            Make A Reservation
          </h2>
        </div>
        <div className="text-xl font-bold text-center border-8 p-5 max-w-fit m-auto">
          <div className="text-2xl font-bold text-center border-8 p-5 max-w-fit m-auto">
            <div className="text-3xl font-bold text-center  p-5 max-w-fit m-auto">
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
            <div className="text-4xl font-bold text-center border-8 p-5 max-w-fit m-auto">
              <h1>Today is {currentDate}</h1>
            </div>
            <div className="text-4xl font-bold text-center border-8 p-5 max-w-fit m-auto mt-2">
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
