import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");

  const [customerList, setCustomerList] = useState([]);

  const handleSubmit = (e) => {
    try {
      Axios.post("https://bobashopbackend.onrender.com/create", {
        phoneNumber: phoneNumber,
        customerName: customerName,
      });
      e.preventDefault();
      getData();
    } catch (err) {
      console.error(err.message);
    }
  };

  const getData = (e) => {
    Axios.get("https://bobashopbackend.onrender.com/customers").then(
      (response) => {
        setCustomerList(response.data.rows);
        //console.log(response.data.rows);
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

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
      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>phone_number</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((val, key) => (
            <tr key={key}>
              <td>{val.phone_number}</td>
              <td> {val.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
