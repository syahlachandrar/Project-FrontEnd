
import HeaderAdmin from "./components/HeaderAdmin";
import Sidebar from "./components/Sidebaradm";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const dataProduct = await axios.get("http://localhost:8080/product");
    setProduct(dataProduct.data);
  };

  const deleteVendor = async (id) => {
    await axios.delete(`http://localhost:8080/delete-paket/${id}`);
    getProduct();
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

            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {product.map((dataProduct, index) => (
                  <tr key={dataProduct.id}>
                    <td>{index + 1}</td>
                    <td>{dataProduct.judul}</td>
                    <td>{dataProduct.harga}</td>
                    <td>{dataProduct.deskripsi}</td>
                    <td>{dataProduct.gambar}</td>
                    <td>
                      <button
                        onClick={() => deleteVendor(dataProduct.id_product)}
                        className="btn"
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

export default Product;
