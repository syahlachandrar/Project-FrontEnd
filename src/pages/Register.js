import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Person from '../assets/person.png';
import Pass from '../assets/password.png';
import Emailicon from '../assets/email.png';
import '../style/styleLogin.css';
import { Form, InputGroup } from 'react-bootstrap';

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || email === '' || password === '') {
      setError('All fields are required');
    } else {
      try {
        setError('');
        await axios.post('http://localhost:8080/add-customers', {
          username: username,
          email: email,
          password: password
        });

        alert('Successfully!');

        // Pindah halaman setelah berhasil
        window.location.href = '/';

      } catch (error) {
        setError('Registration failed. Please try again.');
        console.error('Error adding user: ', error);
      }
    }
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={Person} alt="" />
          <Form.Control 
            placeholder="username"
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
          />
        </div>

        <div className="input">
          <img src={Emailicon} alt="" />
          <Form.Control 
            type='email'
            placeholder="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>

        <div className="input">
          <img src={Pass} alt="" />
          <Form.Control 
            type='password'
            placeholder="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="submit-container">
          <button 
            className="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <Link to="/login">
            <button className="submit gray">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
