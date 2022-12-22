import AdminNavbar from "../Navbar/AdminNavbar";
import { useNavigate } from "react-router-dom";

function CreateOutlet() {
  const navigate = useNavigate();

  const handleCreate = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    console.log(info);

    const response = await fetch("/api/outlet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    await response.json();
    navigate("/admin/showoutlet");
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
        <div className="text-5xl font-bold text-center p-8 max-w-fit ml-1 mr-0 underline">
          <h2>Create Outlet</h2>
        </div>
        <div className="calenderbody container">
          <form
            className="text-4xl font-bold text-left border-8 p-5 max-w-fit m-5 mt-2 p-3"
            onSubmit={handleCreate}
          >
            <fieldset>
              Name:
              <input
                className="p-3 m-5"
                type="text"
                name="name"
                defaultValue=""
              />
              <br />
              Location:
              <input
                className="p-3 m-5"
                type="text"
                name="location"
                defaultValue=""
              />
              <br />
              Opening Hours:
              <input
                className="p-3 m-5"
                type="text"
                name="openinghours"
                defaultValue="11:00 AM - 11:00 PM"
                readOnly
              />
              <br />
              Hp:
              <input
                className="p-3 m-5"
                type="text"
                name="hp"
                defaultValue=""
                min="8"
                max="8"
              />
              <br />
              Email:
              <input
                className="p-3 m-5"
                type="email"
                name="email"
                defaultValue=""
              />
              <br />
              <button className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2">
                Create
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateOutlet;
