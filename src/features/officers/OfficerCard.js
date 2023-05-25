import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { selectFeaturedRole } from './featuredRoleSlice';
import { useSelector } from 'react-redux';

const OfficerCard = ({ officer }) => {
    const { id, image, name, featuredRoleId } = officer;
    const role = useSelector(selectFeaturedRole(featuredRoleId)); //function that converts featuredRoleIds into role names


    return (
        <Card>
            <Link to={`${id}`}>
                <CardImg width='100%' src={image} alt={name} />
            </Link>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle className='text-center'>{role}</CardSubtitle>
            </CardBody>
        </Card>
    );
};

export default OfficerCard;
