const bcrypt = require("bcrypt");
const Admin = require("../../models/Admin");

const seedAdmin = async (req, res) => {
  const seedAdmin = [
    {
      name: "Administrator",
      username: "Admin",
      password: bcrypt.hashSync("Admin123", 10),
      hp: 12345678,
      email: "admin@email.com",
    },
  ];
  await Admin.deleteMany({});
  const admin = await Admin.insertMany(seedAdmin);
  res.json(admin);
};

module.exports = seedAdmin;
