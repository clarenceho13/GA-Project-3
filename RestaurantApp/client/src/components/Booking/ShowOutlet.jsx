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
    <div className="bg-blue-500 aspect-square">
      <div className="text-4xl font-bold text-center border-8 rounded-full p-20 max-w-fit m-auto mb-10">
        <h1>Reservations</h1>
      </div>

      <div className="text-xl font-bold text-center border-8 p-5 max-w-fit m-auto">
        <div className="text-2xl font-bold text-center p-8 max-w-fit ml-1 mr-0">
          <AdminNavbar />
        </div>
        <div className="text-5xl font-bold underline mb-5">
          <h2>All Outlets</h2>
        </div>
        <div className="calenderbody container">
          <table lassName="border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">Name</th>
                <th className="border border-slate-600 p-2">Location</th>
                <th className="border border-slate-600 p-2">Opening Hours</th>
                <th className="border border-slate-600 p-2">HP</th>
                <th className="border border-slate-600 p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {outlet.map((outlet) => (
                <tr key={outlet._id}>
                  <td className="border border-slate-700 p-1">{outlet.name}</td>
                  <td className="border border-slate-700 p-1">
                    {outlet.location}
                  </td>
                  <td className="border border-slate-700 p-1">
                    {outlet.openinghours}
                  </td>
                  <td className="border border-slate-700 p-1">{outlet.hp}</td>
                  <td className="border border-slate-700 p-1">
                    {outlet.email}
                  </td>

                  <td>
                    <button
                      className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2 mx-2"
                      onClick={() => navigateToEditPage(outlet._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2 mx-2"
                      onClick={() => handleDelete(outlet._id)}
                    >
                      X
                    </button>
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
