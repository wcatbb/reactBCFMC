import { Container, Row, Col } from 'reactstrap';

const ItemDetail = ({ item }) => {
    const { image, name, price, description } = item;

    return (
        <Container>
            <Row>
                <Col md='5' className='m-1'>
                    <img className='intro-img img-fluid mb-3 mb-lg-0 rounded' src={image} alt={name} width='100%' />
                </Col>
                <Col md='6' className='m-1 bg-faded p-4 rounded'>
                <h5 className='section-heading mb-2'>Description</h5>
                    {description} ${price}
                </Col>
            </Row>
        </Container>
    );
};

export default ItemDetail;