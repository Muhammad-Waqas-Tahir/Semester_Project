import bcrypit from "bcryptjs";
const users = [
  {
    name: "Admin Use",
    email: "waqastahir@gmail.com",
    password: bcrypit.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Zeeshan Tahir",
    email: "zeeshantahir@gmail.com",
    password: bcrypit.hashSync("123456", 10),
  },
  {
    name: "Shoaib Tahir",
    email: "shoaibtahir@gmail.com",
    password: bcrypit.hashSync("123456", 10),
  },
];

export default users;
