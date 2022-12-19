import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Booking from "./components/Booking/Booking";
import MainOutlet from "./components/Outlets/MainOutlet";
import Outlet2 from "./components/Outlets/Outlet2";
import BookingEdit from "./components/Booking/BookingEdit";
import AdminBooking from "./components/Booking/AdminBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/adminbooking" element={<AdminBooking />} />
        <Route path="/booking/:id" element={<BookingEdit />} />
        <Route path="/mainoutlet" element={<MainOutlet />} />
        <Route path="/outlet2" element={<Outlet2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route path="/home" element={<Home />} /> */
}
{
  /* <Route path="/menu" element={<Menu />} /> */
}
