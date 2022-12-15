import Navbar from "../Navbar/Navbar";

function Outlet2() {
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
          <h2>Outlet2</h2>
        </div>
        <div className="calenderbody container"></div>
      </div>
    </div>
  );
}
export default Outlet2;