import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Booking from "./components/Booking/Booking";
import MainOutlet from "./components/Outlets/MainOutlet";
import BookingEdit from "./components/Booking/BookingEdit";
import Register from "./components/Register/Register";
import { useState, createContext } from "react";
import CreateOutlet from "./components/Booking/CreateOutlet.";
import ShowOutlet from "./components/Booking/ShowOutlet";
import EditOutlet from "./components/Booking/EditOutlet";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [loggedInAs, setLoggedInAs] = useState("");
  // console.log(user);
  // console.log("loggedInAs", loggedInAs);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login callback={setUser} setLoggedInAs={setLoggedInAs} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/booking/:user"
            element={<Booking user={user} loggedInAs={loggedInAs} />}
          />
          <Route path="/admin/createoutlet" element={<CreateOutlet />}></Route>
          <Route path="/admin/editoutlet/:id" element={<EditOutlet />}></Route>
          <Route path="/admin/showoutlet" element={<ShowOutlet />}></Route>
          <Route
            path="/booking/:user/:id"
            element={<BookingEdit user={user} />}
          />
          <Route
            path="/mainoutlet/:user"
            element={<MainOutlet user={user} loggedInAs={loggedInAs} />}
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
