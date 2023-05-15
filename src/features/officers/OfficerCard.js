import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { selectFeaturedRole } from './featuredRoleSlice';

const OfficerCard = ({ officer }) => {
    const { id, image, name, featuredRoleId } = officer;
    const role = selectFeaturedRole(featuredRoleId); //function that converts roleIds into role names


    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg width='100%' src={image} alt={name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
                <CardBody>
                    <CardText className='text-center'>{role}</CardText>
                </CardBody>
            </Card>
        </Link>
    );
};

export default OfficerCard;
