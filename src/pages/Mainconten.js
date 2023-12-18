import { Row, Col } from "react-bootstrap";
import "../style/style1.css";
import Header from '../components/Navbar'
import Herosection from "../components/Hero";
import Cardservice from "../components/Cardservice";
import PictCard1 from "../assets/pict3.jpeg";
import PictCard2 from "../assets/pict4.jpg";
import Footer from "../components/Footer";

const Mainconten = () => {
  return (
    <>
      <div style={{ margin: "0", width: "100%", backgroundColor: "#F4F0F0" }}>
        <Header />
      </div>
    
      <div style={{ margin: "0", width: "100%", backgroundColor: "#958874" }}>
        <Herosection />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <div className="container">
          <div className="row">
            <Col xs={12}>
              <p
                style={{
                  color: "#958874",
                  marginLeft: "30px",
                  marginTop: "50px",
                }}
              >
                Our Service
              </p>
              <h2
                style={{
                  color: "#000000",
                  marginLeft: "30px",
                  marginTop: "",
                }}
              >
                We're Providing The Best Digital Wedding Solution
              </h2>
            </Col>
          </div>
          <Row className="justify-content-center">
            <Col xs={12} md={4}>
              <Cardservice
                image={PictCard1}
                judul="Regular"
                subjudul="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Col>
            <Col xs={12} md={4}>
              <Cardservice
                image={PictCard1}
                judul="Premium"
                subjudul="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Col>
            <Col xs={12} md={4}>
              <Cardservice
                image={PictCard1}
                judul="Gold"
                subjudul="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Col>
          </Row>
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

export default Mainconten;
