import { useEffect, useState } from "react";

function AdminBookingTable() {
  const [booking, setBooking] = useState([]);
  const [outletid, setOutletid] = useState("");
  const [outletbutton, setOutletbutton] = useState([]);

  useEffect(() => {
    fetch(`/api/outlet/`)
      .then((response) => response.json())
      .then((data) => setOutletbutton(data));
  }, []);

  // console.log("outlet", outletbutton);
  // console.log("outletid", outletid);

  useEffect(() => {
    fetch(`/api/booking/`)
      .then((response) => response.json())
      .then((data) => setBooking(data));
  }, []);

  useEffect(() => {
    const fetchBooking = async () => {
      const response = await fetch(`/api/booking${outletid}`);
      const data = await response.json();
      setBooking(data);
    };
    fetchBooking();
  }, [outletid]);

  const handleDelete = (id) => {
    fetch(`/api/booking/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setBooking(booking.filter((booking) => booking._id !== id));
      });
  };

  const showAll = () => {
    setOutletid("");
  };

  const filterData = (event) => {
    setOutletid(`/admin/${event.target.value}`);
  };

  return (
    <>
      <table className="border-separate border-spacing-2 border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 p-2">Name</th>
            <th className="border border-slate-600 p-2">Hp</th>
            <th className="border border-slate-600 p-2">Email</th>
            <th className="border border-slate-600 p-2">Pax</th>
            <th className="border border-slate-600 p-2">Date</th>
            <th className="border border-slate-600 p-2">Time</th>
            <th className="border border-slate-600 p-2">Outlet</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((booking) => (
            <tr key={booking._id}>
              <td className="border border-slate-700 p-1">{booking.name}</td>
              <td className="border border-slate-700 p-1">{booking.hp}</td>
              <td className="border border-slate-700 p-1">{booking.email}</td>
              <td className="border border-slate-700 p-1">{booking.pax}</td>
              <td className="border border-slate-700 p-1">{booking.date}</td>
              <td className="border border-slate-700 p-1">{booking.time}</td>
              <td className="border border-slate-700 p-1">
                {booking.outlet.name}
              </td>
              <td className="border border-slate-700 p-1">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2 mx-2"
                  onClick={() => handleDelete(booking._id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2 mx-2"
          onClick={showAll}
        >
          All
        </button>
        {outletbutton.map((outletbutton) => {
          return (
            <button
              className="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2 mx-2"
              key={outletbutton._id}
              value={outletbutton._id}
              onClick={filterData}
            >
              {outletbutton.name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default AdminBookingTable;
