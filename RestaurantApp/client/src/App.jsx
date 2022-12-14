import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

function App() {
  

  return (
   
     <BrowserRouter>
     <Routes>
     
     <Route path="/" element={<Login />} />

     <Route path="/register" element={<Register />} />
     
     <Route path="/home" element={<Home />} />
     
     <Route path="/bookings" element={<Bookings />} />
     
     <Route path="/bookings/:id" element={<Editbookings />} />

     <Route path="/menu" element={<Menu />} />

     <Route path="/mainoutlet" element={<Mainoutlet />} />

     <Route path="/outlet2" element={<Outlet2 />} />

     <Route path="/outlet3" element={<Outlet3 />} />

     
     </Routes>
     
     </BrowserRouter>
    
  )
}

export default App
