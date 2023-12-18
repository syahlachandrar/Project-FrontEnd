import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 style={{ color: "#F4F0F0", margin: "30px 0 10px" }}>AFLAHA</h2>
          <p style={{ color: "#F4F0F0", margin: "10px 0 70px"  }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col>
          <h4 style={{ color: "#F4F0F0", margin: "30px 0 10px" }}>Official Info</h4>
          <ul style={{ color: "#F4F0F0", margin: "10px 0 70px" ,padding:'0px', listStyle:'none', textAlign:'center'}}>
            <li style={{ color: "#F4F0F0" }}>example@example.com</li>
            <li style={{ color: "#F4F0F0" }}>(123) 456-7890</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
