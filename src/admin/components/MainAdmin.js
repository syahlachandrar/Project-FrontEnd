import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BsFillArchiveFill,
  BsMenuButtonWideFill,
  BsPeopleFill,
} from "react-icons/bs";
import { PiNotebookFill } from "react-icons/pi";

const Admin = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [reportCount, setReportCount] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const dataHistory = await axios.get("http://localhost:8080/history");
    setHistory(dataHistory.data);
  };

  useEffect(() => {
    // Fetch the customer count from your API
    axios
      .get("http://localhost:8080/count-customers")
      .then((response) => {
        setCustomerCount(response.data.data.count);
      })
      .catch((error) => {
        console.error("Error fetching customer count:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch the customer count from your API
    axios
      .get("http://localhost:8080/count-history")
      .then((response) => {
        setReportCount(response.data.data.count);
      })
      .catch((error) => {
        console.error("Error fetching customer count:", error);
      });
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{customerCount}</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>PRODUCT</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>REPORTS</h3>
            <BsMenuButtonWideFill className="card_icon" />
          </div>
          <h1>{reportCount}</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>VENDORS</h3>
            <PiNotebookFill className="card_icon" />
          </div>
          <h1>10</h1>
        </div>
      </div>

      <div>
        <div className="main-table table-responsive">
          <table
            className="table align-bottom 
                    text-light table-hover "
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Package</th>
                <th>Address</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {history.map((dataHistory, index) => (
                <tr key={dataHistory.id_pesanan}>
                  <td>{index + 1}</td>
                  <td>{dataHistory.nama}</td>
                  <td>{dataHistory.email}</td>
                  <td>{dataHistory.phone}</td>
                  <td>{dataHistory.paket}</td>
                  <td>{dataHistory.alamat}</td>
                  <td>{dataHistory.pesan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Admin;
