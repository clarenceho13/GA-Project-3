import Navbar from "../Navbar/Navbar";
import Calendar from "react-calendar";
import CreateBooking from "./CreateBooking";


function MainOutlet() {
  
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
         
          <CreateBooking />
            
          
        </div>
      </div>
    </div>
  );
  }
export default MainOutlet;

/*
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
            */