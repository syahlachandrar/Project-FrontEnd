import { Container, Row, Col } from 'react-bootstrap';
import Picthero from '../assets/pict2.png';

const Herosection = () => {
    return (
        <Container style={{
            backgroundColor: '#958874',
            width: '100%'
        }}>
            <Row>
                <Col xs={12} md={6}>
                    <h1 style={{
                        fontSize: '40px',
                        color: '#F4F0F0',
                        marginLeft: '30px',
                        marginTop: '100px',
                        fontWeight: 'bold'
                    }}>
                        Number One <br></br>
                        Wedding Planner <br></br>
                        Here
                    </h1> <br></br>
                    <p style={{
                        color: '#F4F0F0',
                        marginLeft: '30px',
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <img
                        src={Picthero}
                        style={{
                            width: '80%',
                            marginTop: '30px',
                        }}
                    ></img>
                </Col>
            </Row>
        </Container>
    )
}

export default Herosection;
