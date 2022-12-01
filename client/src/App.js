import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (e) => {
    Axios.post("https://bobashopbackend.onrender.com/inserts", {
      phoneNumber: phoneNumber,
      customerName: customerName,
    }).then((response) => {
      console.log(response);
    });

    try {
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="App">
      <h1>Boba Shop</h1>
      <p>Enter your account information</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            onChange={(e) => setCustomerName(e.target.value)}
            value={customerName}
          ></input>
        </label>
        <br />
        <label>
          Phone Number:
          <input
            name="phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          ></input>
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
