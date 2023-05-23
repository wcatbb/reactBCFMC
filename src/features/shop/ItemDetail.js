import { Container, Row, Col } from 'reactstrap';

const ItemDetail = ({ item }) => {
    const { image, name, price, description } = item;

    return (
        <Container>
            <Row>
                <Col md='5' className='m-1'>
                    <img src={image} alt={name} width='100%' />
                </Col>
                <Col>
                <h4>Description</h4>
                    {description} ${price}
                </Col>
            </Row>
        </Container>
    );
};

export default ItemDetail;