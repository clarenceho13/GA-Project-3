import { NavLink } from "react-router-dom";
import React from 'react'

 function AdminNavbar() {
  return (
    <div>
      <nav id="navBar">
      <NavLink to= "/admin/createoutlet" as={NavLink}>
          <div className="navbuttons container">Create Outlet</div>
        </NavLink>
        <NavLink to="/admin/editoutlet" as={NavLink}>
          <div className="navbuttons container">Edit Outlet</div>
        </NavLink>
        <NavLink to="/admin/showoutlet" as={NavLink}>
          <div className="navbuttons container">Show Outlets</div>
        </NavLink>
      </nav>
    </div>
  )
}

export default AdminNavbar;

//add routes for /admin/createoutlet and /admin/mainoutlet
//next thing to do is put it into admin booking