const Register = require("../../models/Register");
const seedUser = async (req, res) => {
  const seedUser = [
    {
      name: "Clarence",
      username: "Clarence",
      password: "Clarence123",
      hp: 12345678,
      email: "clarence@email.com",
    },
    {
      name: "George",
      username: "George",
      password: "George123",
      hp: 53464324,
      email: "george@email.com",
    },
  ];
  await Register.deleteMany({});
  const user = await Register.insertMany(seedUser);
  res.json(user);
};

module.exports = seedUser;
