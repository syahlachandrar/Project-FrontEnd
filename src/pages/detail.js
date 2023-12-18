import React, {Fragment, useState} from 'react';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header from "../components/Navbar"
import Footer from '../components/Footer';
import "../style/styleabout.css";

const Detail =()=> {
    

    return (
        <>
            <div style={{ margin: "0", width: "100%", backgroundColor: "#F4F0F0" }}>
                <Header />
            </div>
            <Fragment>
                <section className='about'>
                    <div className='row'>
                        <div className='column'>
                            <div className='about-img'>
                                
                            </div>
                        </div>
                        <div className='column'>
                            
                            <div className='tab-content'>
                                {/* About */}
                                <div className= 'content active-content'>
                                    <h2>Reguler</h2>
                                    <h4>Rp. 9.999.999</h4> <br/>
                                    <h5>Include</h5>
                                    <li>MUA by : <span>galery happy</span></li>
                                    <li>Foto by : <span>tonberebah</span></li>
                                    <li>MC by : <span>Fulan</span></li>
                                    <li>Pengurusan berkas di KUA</li> <br/>

                                    <h5>Free</h5>
                                    <li>Hand Bucket</li>
                                    <li>Nail Art</li>
                                    <li>Wedding Cake</li><br/>

                                    <Link to="/booking">
                                        <Button
                                        style={{ background: '#958874', color: '#F4F0F0', width: '100px', border: 'none', borderRadius: '5px' }}
                                        >
                                            Booking
                                        </Button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
            <div style={{ backgroundColor: "#958874" }}>
                <div className="container">
                <Footer />
                </div>
            </div>
        </>
    )
}

export default Detail;