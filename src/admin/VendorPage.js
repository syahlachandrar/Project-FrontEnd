
import HeaderAdmin from "./components/HeaderAdmin";
import Sidebar from "./components/Sidebaradm";
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const Vendor = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [vendor, setVendor] = useState([]);

  useEffect(() => {
    getVendor();
  }, []);

  const getVendor = async () => {
    const dataVendor = await axios.get("http://localhost:8080/vendor");
    setVendor(dataVendor.data);
  };

  const deleteVendor = async (id_vendor) => {
    await axios.delete(`http://localhost:8080/delete-vendor/${id_vendor}`);
    getVendor();
  };

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

            <div className="container mt-4">
                <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Kategori</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {vendor.map((dataVendor, index) => (
                  <tr key={dataVendor.id_vendor}>
                    <td>{index + 1}</td>
                    <td>{dataVendor.nama}</td>
                    <td>{dataVendor.kategori}</td>
                    <td>
                    <button
                        className="btn btn-warning mr-2"
                        // onClick={() => showModal(dataHistory)}
                      >
                        update
                      </button>
                      <button
                        onClick={() => deleteVendor(dataVendor.id_vendor)}
                        className="btn btn-danger"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            
          </main>
        </div>
      </div>
    </>
  );
};

export default Vendor;
