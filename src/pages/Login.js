import React, { useState } from "react";
import axios from "axios";
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "../style/styleLogin.css"
import Person from '../assets/person.png';
import Pass from '../assets/password.png';



const Login= ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:8080/login", {
          username,
          password,
        });
  
        if (response.status === 200) {
          // Assuming your backend sends a token or user data on successful login
          // You may want to store this token or user data in a global state (e.g., Redux or Context)
          onLogin(response.data);
        } else {
          alert("Login failed. Please check your credentials.");
        }
      } catch (error) {
        alert("Login failed. Please try again.");
        console.error("Error during login: ", error);
      }
    };
    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <Form className="inputs">
                <div className="input">
                    <img src={Person} alt="" />
                    <Form.Control placeholder="username or email"/>
                </div>
                
                <div className="input">
                    <img src={Pass} alt="" />
                    <Form.Control placeholder="password"/>
                    
                </div>
                <Link to="/forget-password"><label className="forgot-password">Forget password?</label></Link>
                <Link to="/loginadmin"><label className="forgot-password">Login as Admin?</label></Link>

                <div className="submit-container">
                    <Link to="/"><button className="submit" >Login</button></Link> 
                    <Link to="/register"><button className="submit gray" >Sign Up</button></Link>
                </div>
        
            </Form>
            
            
        </div>
    )
}

export default Login;