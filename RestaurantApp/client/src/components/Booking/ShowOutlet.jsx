import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import AdminNavbar from "../Navbar/AdminNavbar";

function ShowOutlet() {
  const [outlet, setOutlet] = useState([]);
  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    fetch("/api/outlet/")
      .then((response) => response.json())
      .then((data) => setOutlet(data));
  }, []);
  //console.log(outlet)
  //do i need this?
  const handleDelete = (id) => {
    fetch("/api/outlet/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setOutlet(outlet.filter((outlet) => outlet._id !== id));
      });
  };
  //   console.log("outlet", outlet);

  const navigateToEditPage = (id) => {
    console.log(id);
    navigate(`/admin/editoutlet/${id}`);
  };

  return (
    <div>
      <div className="header container">
        <h1>Reservations</h1>
      </div>

      <div className="body container">
        <div className="navbar container">
          <AdminNavbar />
        </div>
        <div className="calenderheader container">
          <h2>All Outlets</h2>
        </div>
        <div className="calenderbody container">
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Opening Hours</th>
                <th>HP</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {outlet.map((outlet) => (
                <tr key={outlet._id}>
                  <td>{outlet.name}</td>
                  <td>{outlet.location}</td>
                  <td>{outlet.openinghours}</td>
                  <td>{outlet.hp}</td>
                  <td>{outlet.email}</td>

                  <td>
                    <button onClick={() => navigateToEditPage(outlet._id)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(outlet._id)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowOutlet;
