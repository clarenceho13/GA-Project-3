import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
<<<<<<< HEAD
=======
import Home from "./components/Home/Home";
import Admin from "./components/Login/Admin";
>>>>>>> d5882b5611748f5d544478cbb42c3b8d65c987ee
import Booking from "./components/Booking/Booking";
import MainOutlet from "./components/Outlets/MainOutlet";
import Outlet2 from "./components/Outlets/Outlet2";
import BookingEdit from "./components/Booking/BookingEdit";
<<<<<<< HEAD
import AdminBooking from "./components/Booking/AdminBooking";
=======
//import Adminbooking from "./components/Login/Adminbooking";
>>>>>>> d5882b5611748f5d544478cbb42c3b8d65c987ee

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
<<<<<<< HEAD
=======
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
       
>>>>>>> d5882b5611748f5d544478cbb42c3b8d65c987ee
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

<<<<<<< HEAD
{
  /* <Route path="/home" element={<Home />} /> */
}
{
  /* <Route path="/menu" element={<Menu />} /> */
}
=======

// <Route path="/adminbooking" element={<Adminbooking />} />
>>>>>>> d5882b5611748f5d544478cbb42c3b8d65c987ee
