const Booking = require("../../models/Booking");
const seed = async (req, res) => {
  const seedBooking = [
    {
      name: "Clarence",
      hp: 12345678,
      email: "clarence@email.com",
      pax: 3,
      date: "Thu Dec 22 2022",
      time: "12:00 PM",
      booked: true,
    },
    {
      name: "George",
      hp: 53464324,
      email: "george@email.com",
      pax: 2,
      date: "Sun Dec 25 2022",
      time: "10:00 AM",
      booked: true,
    },
  ];
<<<<<<< HEAD
  await Booking.deleteMany({});
  const booking = await Booking.insertMany(seedBooking);
  res.json(booking);
};

module.exports = seed;
=======

  await Booking.deleteMany({});
  const booking = await Booking.insertMany(seedBooking);
  res.json(booking);

};

module.exports = seed;

>>>>>>> d5882b5611748f5d544478cbb42c3b8d65c987ee
