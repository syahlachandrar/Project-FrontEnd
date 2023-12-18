import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderAdmin from "./components/HeaderAdmin";
import Sidebar from "./components/Sidebaradm";

const Reports = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [pesanan, setPesanan] = useState([]);

  useEffect(() => {
    getPesanan();
  }, []);

  const getPesanan = async () => {
    const dataHistory = await axios.get("http://localhost:8080/history");
    setPesanan(dataHistory.data);
  };

  const deletePesanan = async (id_pesanan) => {
    await axios.delete(`http://localhost:8080/delete-booking/${id_pesanan}`);
    getPesanan();
  };

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [paket, setPaket] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pesan, setPesan] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <div>
        <div className="grid-container">
          <HeaderAdmin OpenSidebar={OpenSidebar} />
          <Sidebar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
          />
          <main className="main-container">
            <div className="main-title">
              <h3>DASHBOARD</h3>
            </div>

            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Package</th>
                  <th>Address</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pesanan.map((dataHistory, index) => (
                  <tr key={dataHistory.id_pesanan}>
                    <td>{index + 1}</td>
                    <td>{dataHistory.nama}</td>
                    <td>{dataHistory.email}</td>
                    <td>{dataHistory.phone}</td>
                    <td>{dataHistory.tanggal}</td>
                    <td>{dataHistory.paket}</td>
                    <td>{dataHistory.alamat}</td>
                    <td>{dataHistory.pesan}</td>
                    <td>
                      <button
                      style={{border: "1px solid #958874"}}
                        className="btn mr-2"
                        // onClick={() => showModal(dataHistory)}
                      >
                        update
                      </button>
                      <button
                        onClick={() => deletePesanan(dataHistory.id_pesanan)}
                        className="btn "
                        style={{border: "1px solid #958874"}}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  );
};

export default Reports;
