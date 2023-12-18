import React from 'react'
import { Link } from 'react-router-dom'
import "../style/styleLogin.css"
import Emailicon from '../assets/email.png';



const ForgetPass = ()=> {
    return (
        <div className="container">
            <div className="header">
                <h2>Reset your password</h2>
                <h5>Enter your email address and we will send you a new password</h5>

            </div>
            <div className="inputs">
                <div className="input">
                    <img src={Emailicon} alt="" />
                    <input type="email" placeholder="email address" />
                </div>
                <div className="submit-container">
                    <button id="sub_btn" type="submit" className='submit'>Send</button>
                </div>
            </div>

            

                
            
            <footer>
                <p>Don't have an account? <Link to="/register">Create an account</Link>.</p>
                
            </footer>
        </div>
    )
}

export default ForgetPass;