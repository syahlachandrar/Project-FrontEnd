import React from "react";
import logo from '../../assets/pict1.png';
import 
{BsGrid1X2Fill, BsArchive, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { RiGalleryFill } from "react-icons/ri";
 import { PiNotebookFill } from "react-icons/pi";
 import { IoClose } from "react-icons/io5";



const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <img src={logo} className="icon_header"/>
                </div>
                <span className="icon close_icon" onClick={OpenSidebar}>
                <IoClose />
                </span>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="/mainadmin">
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/customer">
                        <BsPeopleFill className='icon'/> Customers
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/product">
                        <BsArchive className='icon'/> Products
                    </a>
                    
                </li>
                <li className="sidebar-list-item">
                    <a href="/reports">
                        <BsMenuButtonWideFill className='icon'/> Reports
                    </a>
                    
                </li>
                <li className="sidebar-list-item">
                    <a href="/available">
                        <RiGalleryFill className="icon"/> Availability
                    </a>
                    
                </li>
                <li className="sidebar-list-item">
                    <a href="/vendor">
                        <PiNotebookFill className="icon"/> Vendors
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;