const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/create", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const customerName = req.body.customerName;

  pool.query(
    `INSERT INTO "customer" ("phone_number", "name")  
    VALUES ($1, $2)`,
    [phoneNumber, customerName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("inserted");
      }
    }
  );
});

app.get("/customers", (req, res) => {
  pool.query("SELECT * FROM customer", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
