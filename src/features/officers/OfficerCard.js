import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const OfficerCard = ({ officer }) => {
    const { id, image, name, title } = officer;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg width='100%' src={image} alt={name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
                <CardBody>
                    <CardText className='text-center'>{title}</CardText>
                </CardBody>
            </Card>
        </Link>
    );
};

export default OfficerCard;
