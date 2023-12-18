import { Card, Button } from "react-bootstrap";
import "../style/style1.css";
import { Link } from "react-router-dom";

const Cardservice = (props) => {
    return (
        <Card className="card-service" >
            <Card.Img className="card-img" src={props.image}  />
            <Card.Body style={{marginBottom:'20px'}}>
                <Card.Title style={{
                    fontSize: '30px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    letterSpacing: '2px'
                }}>
                    {props.judul}
                </Card.Title>
                <Card.Text style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    marginBottom: '60px',
                    letterSpacing: '0.5px'
                }}>
                    {props.subjudul}
                </Card.Text>
                <Link to="/detail">
                    <Button style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#958874',
                        color: '#F4F0F0',
                        width: '100px',
                        border: 'none',
                        borderRadius: '5',
                        marginBottom: '20px',
                        transition: 'background-color 0.3s ease',
                    }}
                    className="button-more"
                    >
                        More
                    </Button>
                </Link>
                
            </Card.Body>
        </Card>
    );
};

export default Cardservice;
