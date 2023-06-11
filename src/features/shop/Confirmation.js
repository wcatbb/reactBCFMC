import { Container, Row, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Row style={{ margin: 10 }}>
                <h2>Success!</h2>
            </Row>
            <Row style={{ textAlign: 'center' }}>
                <p>Your order has been received and is being processed.</p>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    onClick={() => navigate('/')}
                    className='btn btn-outline-warning'
                    style={{ width: 180, height: 'auto', margin: 20 }}
                >
                    Continue
                </Button>
            </Row>
        </Container>
    )
}

export default Confirmation