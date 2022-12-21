import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Booking from "./components/Booking/Booking";
import MainOutlet from "./components/Outlets/MainOutlet";
import Outlet2 from "./components/Outlets/Outlet2";
import BookingEdit from "./components/Booking/BookingEdit";
import AdminBooking from "./components/Booking/AdminBooking";
import Register from "./components/Register/Register";
import { useState, createContext } from "react";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login callback={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking/:user" element={<Booking user={user} />} />
          <Route path="/adminbooking" element={<AdminBooking />} />
          <Route
            path="/booking/:user/:id"
            element={<BookingEdit user={user} />}
          />
          <Route
            path="/mainoutlet/:user"
            element={<MainOutlet user={user} />}
          />
          <Route path="/outlet2/:user" element={<Outlet2 userid={user} />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
