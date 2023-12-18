import React from 'react'
import { Link } from 'react-router-dom'
import "../style/styleLogin.css"
import Person from '../assets/person.png';
import Pass from '../assets/password.png';



const Loginadmin= ()=> {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={Person} alt="" />
                    <input type="text" placeholder="username" name="first_name" required/>
                </div>
                
                <div className="input">
                    <img src={Pass} alt="" />
                    <input type="password" placeholder="password" /> 
                    
                </div>
                <Link to="/forget-password"><label className="forgot-password">Forget password?</label></Link>

                <div className="submit-container">
                    <Link to="/mainadmin"><button className="submit" >Login</button></Link> 
                </div>
        
            </div>
            
            
        </div>
    )
}

export default Loginadmin;