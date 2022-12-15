//import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

function Home() {
  const [titleheader, setTitleheader] = useState("Main Outlet");
  return (
    <div>
      <div className="header container">
        <h1>Reservations</h1>
      </div>
      <div className="body container">
        <div className="navbar container">
          <Navbar callback={setTitleheader} />
        </div>
        <div className="calenderheader container">
          <h2>{titleheader}</h2>
        </div>
        <div className="calenderbody container"></div>
      </div>
    </div>
  );
}
export default Home;
