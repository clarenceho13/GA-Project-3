import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Admin from "./components/Login/Admin";
import Booking from "./components/Booking/Booking";
import Menu from "./components/Menu/Menu";
import MainOutlet from "./components/Outlets/MainOutlet";
import Outlet2 from "./components/Outlets/Outlet2";
import Outlet3 from "./components/Outlets/Outlet3";
import BookingEdit from "./components/Booking/BookingEdit";
//import Adminbooking from "./components/Login/Adminbooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
       
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/:id" element={<BookingEdit />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mainoutlet" element={<MainOutlet />} />
        <Route path="/outlet2" element={<Outlet2 />} />
        <Route path="/outlet3" element={<Outlet3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// <Route path="/adminbooking" element={<Adminbooking />} />