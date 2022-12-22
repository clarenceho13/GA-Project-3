const Outlet = require("../../models/Outlet");

const seedOutlet = async (req, res) => {
  const seedOutlet = [
    {
      name: "Main Outlet",
      location: "Marina Bay Sands, Level 2, #02-777",
      openinghours: "11:00 AM - 11:00 PM",
      hp: 62934924,
      email: "mainoutlet@email.com",
    },
    {
      name: "Outlet 2",
      location: "Tanjong Pagar Tower, Level 6, #06-12",
      openinghours: "11:00 AM - 11:00 PM",
      hp: 62934925,
      email: "outlet2@email.com",
    },
  ];
  await Outlet.deleteMany({});
  const outlet = await Outlet.insertMany(seedOutlet);
  res.json(outlet);
};

module.exports = seedOutlet;
