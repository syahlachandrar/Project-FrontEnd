import React, {useState} from 'react'
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import { Form, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Booking = () => {
  const rowStyle = {
    margin: "25px",
  };
  const formStyle = {
    margin: "50px",
  };
  const formContent = {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginBottom: "120px",
  };


  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [paket, setPaket] = useState('');
  const [alamat, setAlamat] = useState('');
  const [pesan, setPesan] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    if (
      nama === "" ||
      email === "" ||
      phone === "" ||
      tanggal === "" ||
      paket === "" ||
      alamat === "" ||
      pesan === ""
    ) {
      alert('Failed, Try Again!');
    } else {
      try {
        e.preventDefault();
        await axios.post('http://localhost:8080/booking', {
          nama: nama,
          email: email,
          phone: phone,
          tanggal: tanggal,
          paket: paket,
          alamat: alamat,
          pesan: pesan
        });
        window.location.href = '/history';
 
        alert('Successfully!');
        navigate('/');
      } catch (error) {
        alert('Failed, Try Again!');
        console.error('Error adding user: ', error);
      }
    }
  }
 


  return (
    <>
      <div style={{ margin: "0", width: "100%", backgroundColor: "#F4F0F0" }}>
        <Header />
      </div>


      <div className="container">
        <div className="header">
          <div className="text">Booking</div>
          <div className="underline"></div>
        </div>


        <div style={formContent}>
          <Form style={formStyle}>
            <Row style={rowStyle} className="justify-content-center">
              <Col>
                <Form.Control
                  placeholder="Your Name"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  style={{ backgroundColor: "#F4EEE7" }}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ backgroundColor: "#F4EEE7" }}
                />
              </Col>
            </Row>


            <Row style={rowStyle}>
              <Col>
                <Form.Control
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ backgroundColor: "#F4EEE7" }}
                />
              </Col>
              <Col>
                <input
                  type="date"
                  name="deadline"
                  class="form-control"
                  id="deadline"
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  style={{ backgroundColor: "#F4EEE7" }}
                />
              </Col>
              <Col>
                <Form.Control
                  as="select"
                  placeholder="Package"
                  value={paket}
                  onChange={(e) => setPaket(e.target.value)}
                  style={{ backgroundColor: "#F4EEE7" }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Col>
            </Row>


            <Row style={rowStyle}>
              <Col>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Address"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  style={{ backgroundColor: "#F4EEE7" }}
                />
              </Col>
              <Col>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Massage"
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  style={{ backgroundColor: "#F4EEE7" }}
                />
              </Col>
            </Row>
            <div className="submit-container">
              <Link to="/history">
                <button className="submit" onClick={handleSubmit}>Booking</button>
              </Link>
            </div>
          </Form>
        </div>
      </div>


      <div style={{ backgroundColor: "#958874" }}>
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
};


export default Booking;
