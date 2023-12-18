import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebaradm";
import HeaderAdmin from "./components/HeaderAdmin";
import "../style/Main-admin.css";
import Admin from "./components/MainAdmin";

const MainAdmin = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const dataHistory = await axios.get("http://localhost:8080/history");
    setHistory(dataHistory.data);
  };

  return (
    <div className="grid-container">
      <HeaderAdmin OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Admin />
      
    </div>
  );
};

export default MainAdmin;
