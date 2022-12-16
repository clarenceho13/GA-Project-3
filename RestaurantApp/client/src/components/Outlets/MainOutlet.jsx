import Navbar from "../Navbar/Navbar";
import Calendar from "react-calendar";
import { useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

//Create booking page not yet completed (Clarence)
//Able to key in details, but information did not show up
function MainOutlet() {
  // const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const[booking,setBooking] = useState(
    {
    name: "",
    hp: "",
    email: "",
    pax: "",
    date: "",
    time: "",
    booked: false,
  }) //*must follow your schema's structure 
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const ModalOpen = () => {
    setModalIsOpen(true);
  };

  const createBooking = async (event) => {
    event.preventDefault();
    //state called booking
    setBooking(
      { 
      name:console.log(event.target[0].value),
      hp:console.log(event.target[1].value),
      email:console.log(event.target[2].value),
      pax:console.log(event.target[3].value),
      date:console.log(event.target[4].value),
      time:console.log(event.target[5].value),
      booked:true 
      }
      )
    setModalIsOpen(false);
    navigate("/Booking");
 

    console.log(booking)

    const info = { booking };

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setMsg("something went wrong");
    }
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
              Name:<input type="text" defaultValue=""></input>
              <br />
              HP:<input type="number" defaultValue=""></input>
              <br />
              Email:<input type="email" defaultValue=""></input>
              <br />
              Pax:<input type="number" defaultValue=""></input>
              <br />
              Date:<input type="text" defaultValue=""></input>
              <br />
              Time:<input type="text" defaultValue=""></input>
              <br />
              <button>Submit</button>
              <p>{msg}</p>
            </form>
          </ReactModal>
        </div>
      </div>
    </div>
  );
  }
export default MainOutlet;
