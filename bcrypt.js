const bcrypt = require("bcrypt");

async function hash(password) {
  const SALT = 1;
  const hashed = await bcrypt.hash(password, SALT);
  console.log("hashed password: ", hashed);
}

async function check(password, hashedPassword) {
  const result = await bcrypt.compare(password, hashedPassword);
  console.log(`is ${password} the password?: `, result);
}

hash("password123");

check(
  "password123",
  "$2b$04$CZkSqW4SnJx6Hnh9NCzA1.jtTDm0.BWbx49lViOo9IimdjSbqT62q"
);
