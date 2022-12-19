const Register = require("../../models/Register");
const bcrypt = require("bcrypt");

const seedUser = async (req, res) => {
  const seedUser = [
    {
      name: "George",
      username: "George",
      password: bcrypt.hashSync("George123", 10),
      hp: 53464324,
      email: "george@email.com",
    },
  ];
  await Register.deleteMany({});
  const user = await Register.insertMany(seedUser);
  res.json(user);
};

module.exports = seedUser;
