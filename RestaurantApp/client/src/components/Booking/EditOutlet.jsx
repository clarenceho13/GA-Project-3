import AdminNavbar from "../Navbar/AdminNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditOutlet() {
  const [selectedOutlet, setSelectedOutlet] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log(id);

  useEffect(() => {
    const fetchOutlet = async () => {
      const response = await fetch(`/api/outlet/${id}`);
      const data = await response.json();
      setSelectedOutlet(data);
    };
    fetchOutlet();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    console.log(info);

    const response = await fetch(`/api/outlet/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    await response.json();
    navigate("/admin/showoutlet");
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
          <h2>Edit Outlet</h2>
        </div>
        <div className="calenderbody container">
          <form onSubmit={handleSubmit}>
            <fieldset>
              Name:
              <input
                type="text"
                name="name"
                defaultValue={selectedOutlet.name}
              />
              <br />
              Location:
              <input
                type="text"
                name="location"
                defaultValue={selectedOutlet.location}
              />
              <br />
              <button>Update</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditOutlet;
