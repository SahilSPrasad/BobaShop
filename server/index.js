const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/inserts", async (req, res) => {
  try {
    const phoneNumber = req.body.phoneNumber;
    const customerName = req.body.customerName;

    const newCustomer = pool.query(
      "INSERT INTO customer (phone_number, name) VALUES (?, ?)",
      [phoneNumber, customerName]
    );
    res.json(newCustomer);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
