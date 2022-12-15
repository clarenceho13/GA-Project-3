const Booking = require("../../models/Booking");
const seed = async (req, res) => {
  const seedBooking = [
    {name: "Clarence",
    hp: 12345678, 
    email: "clarence@email.com", 
    pax: 3,
    date: 25/12/2022, 
    time: "12pm",
    booked: true }
  ];
  await Booking.deleteMany({});
  const bookings = await Booking.insertMany(seedBooking);
  res.json(bookings);
};
module.exports = seed;