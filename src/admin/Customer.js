import { useState } from "react";
import React from "react";
import HeaderAdmin from "./components/HeaderAdmin";
import Sidebar from "./components/Sidebaradm";
import ContentAdmin from "./components/Content-customer";

const Customers=() => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return(
        <>
            <div>
            <div className="grid-container">
                <HeaderAdmin OpenSidebar={OpenSidebar}/>
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
                <ContentAdmin/>
            </div>
            </div>
        </>
    )
}

export default Customers;