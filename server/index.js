const express = require("express");
const app = express();
const Pool = require("pg").Pool;

const port = process.env.PORT || 3001;

const db = new Pool({
  user: "bobashopdb_user",
  host: "dpg-ce47mvda4995pbu2jm90-a",
  database: "bobashopdb",
  password: "EugISvS6x55LN2p3bMeJz5gIXTjxAyfB",
  port: 5432,
});

app.post("/register", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const customerName = req.body.customerName;

  db.query(
    "INSERT INTO CUSTOMER (phone_number, name) VALUES (?, ?)"[
      ([phoneNumber, customerName],
      (err, result) => {
        console.log(err);
      })
    ]
  );
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
