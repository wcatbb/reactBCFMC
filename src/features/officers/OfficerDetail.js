import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const OfficerDetail = ({ officer } ) => {
    const { image, name, title } = officer;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText className='text-center'><h5>{title}</h5></CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default OfficerDetail;