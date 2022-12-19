import React from 'react'
//import AdminNavbar from '../Navbar/AdminNavbar'
import BookingTable from '../Booking/BookingTable'

export default function Admin() {
  return (
    <div>
        <h1>All Bookings</h1>
      <div>
      This should fetch data from booking schema
      <BookingTable />
      </div>
   </div>
   
  )
}
