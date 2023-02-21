const jwt = require("jsonwebtoken");

const SECRET_KEY = "ellenlovescats";

const token = jwt.sign({ username: "Toby" }, SECRET_KEY, { expiresIn: "1m" });
const verifyTrue = jwt.verify(token, SECRET_KEY);
console.log(verifyTrue);

console.log("\n\n\n---------------JWT TOKEN---------------\n", token);
const pieces = token.split(".");
console.log(
  "\n---------------HEADER------------------\n",
  pieces[0],
  "\n\n---------------PAYLOAD-----------------\n",
  pieces[1],
  "\n\n---------------SIGNATURE---------------\n",
  pieces[2],
  "\n\n"
);
