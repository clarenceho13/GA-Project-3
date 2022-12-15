const Booking = require("../../models/Booking");
const seed = async (req, res) => {
  const seedBooking = [
    {
      name: "Clarence",
      hp: 12345678,
      email: "clarence@email.com",
      pax: 3,
      date: "15 Dec 2022",
      time: "12pm",
      booked: true,
    },
    {
      name: "George",
      hp: 53464324,
      email: "george@email.com",
      pax: 2,
      date: "18 Dec 2022",
      time: "10pm",
      booked: true,
    },
    {
      name: "Ambrose",
      hp: 34533413,
      email: "ambrose@email.com",
      pax: 3,
      date: "21 Dec 2022",
      time: "4pm",
      booked: true,
    },
  ];
  // await Booking.deleteMany({});
  const bookings = await Booking.insertMany(seedBooking);
  res.json(bookings);
};

module.exports = seed;
