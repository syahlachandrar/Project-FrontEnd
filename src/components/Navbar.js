import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../assets/pict1.png';



const Top = ()=> {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{width:'100%'}
            }>
                <Container style={{width:'100%'}}>
                    <img src={logo} style={{height: '60px'}}></img>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-lg-0"
                        style={{ maxHeight: '250px', marginLeft:'30px' }}
                    >
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="booking">BOOKING</Nav.Link>
                        <Nav.Link href="/history">HISTORY</Nav.Link>
                        <Nav.Link href="/about">ABOUT US</Nav.Link>

                    </Nav>
                    <Link to="/login">
                        <Button
                        style={{ background: '#958874', color: '#F4F0F0', width: '100px', border: 'none', borderRadius: '5px' }}
                        >
                            Log in
                        </Button>
                    </Link>
            
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default Top;