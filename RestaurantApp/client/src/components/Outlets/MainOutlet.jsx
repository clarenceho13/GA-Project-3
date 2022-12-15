import Navbar from "../Navbar/Navbar";
import Calendar from "react-calendar";
import { useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

function MainOutlet() {
  // const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [email, setEmail] = useState("");
  const [pax, setPax] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [booked, setBooked] = useState(false);

  const navigate = useNavigate();

  const ModalOpen = () => {
    setModalIsOpen(true);
  };

  const createBooking = async (event) => {
    event.preventDefault();
    setModalIsOpen(false);
    navigate("/Booking");
    setName(event.target[0].value);
    setHp(event.target[1].value);
    setEmail(event.target[2].value);
    setPax(event.target[3].value);
    setDate(event.target[4].value);
    setTime(event.target[5].value);
    setBooked(true);
    return console.log("booking created");
  };

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
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi dicta odio vel numquam impedit aspernatur hic nostrum,
                aliquam officia illo minima? Recusandae vero nobis ullam illo
                facilis illum rerum placeat.
              </p>
            </div>
            <div className="details container">
              <h2>Opening Hours:</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                temporibus itaque voluptatum cumque illo, rerum eum qui
                inventore sed quibusdam optio maxime assumenda quia ipsam! Id
                explicabo obcaecati vitae dolore.
              </p>
            </div>
            <div className=" details container">
              <h2>Contact Details</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, quis. Veniam dolorum cumque nemo, itaque fugit
                molestiae provident in ex sed nihil libero similique enim velit
                nobis deleniti dolore! Nulla!
              </p>
            </div>
          </div>
        </div>
        <div className="calenderheader container">
          <h2>Main Outlet</h2>
        </div>
        <div className="calenderbody container">
          <div className="app">
            <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
              {/* <Calendar onChange={setDate} value={date} /> */}
              <Calendar />
            </div>
            <div className="text-center">
              {/* Selected date: {date.toDateString()} */}
            </div>
          </div>
          <button onClick={ModalOpen}>Create Booking</button>
          <ReactModal
            className="modalregister"
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <form onSubmit={createBooking}>
              Name:<input type="text" value=""></input>
              <br />
              HP:<input type="number" value=""></input>
              <br />
              Email:<input type="email" value=""></input>
              <br />
              Pax:<input type="number" value=""></input>
              <br />
              Date:<input type="text" value=""></input>
              <br />
              Time:<input type="text" value=""></input>
              <br />
              <button>Submit</button>
            </form>
          </ReactModal>
        </div>
      </div>
    </div>
  );
}
export default MainOutlet;
