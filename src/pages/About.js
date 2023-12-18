import React, {Fragment, useState} from 'react';
import Header from "../components/Navbar"
import Footer from '../components/Footer';
import "../style/styleabout.css";

const About =()=> {
    const [toggleTab,setToggleTab] = useState(1)
    const toggleState = (index) => {
        setToggleTab(index);
    }
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
                                <div className={toggleTab === 1 ? 'content active-content':'content'}>
                                    <h2>About</h2>
                                    <p>Dolor aliquip ut irure sint consectetur est tempor exercitation pariatur amet do cillum et. Officia qui amet excepteur ad officia sint elit minim velit elit. Quis reprehenderit deserunt enim aliquip ea aliquip. Cillum est ut aute exercitation irure ea cillum aliquip.</p>
                                </div>
                                {/* Vendor */}
                                <div className={toggleTab === 2 ? 'content active-content':'content'}>
                                    <h2>Vendor</h2>
                                    <p>Dolor aliquip ut irure sint consectetur est tempor exercitation pariatur amet do cillum et. Officia qui amet excepteur ad officia sint elit minim velit elit. Quis reprehenderit deserunt enim aliquip ea aliquip. Cillum est ut aute exercitation irure ea cillum aliquip.</p>
                                    
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

export default About;