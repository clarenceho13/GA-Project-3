const User = require("../../models/User");
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
  const newuser = await User.insertMany(seedUser);
  res.json(newuser);
};

module.exports = seedUser;
