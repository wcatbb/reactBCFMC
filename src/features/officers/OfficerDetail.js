import { Card, CardImg, CardTitle, CardBody, Col } from 'reactstrap';
import { selectFeaturedRole } from './featuredRoleSlice';
import { useSelector } from 'react-redux';

const OfficerDetail = ({ officer }) => {
    const { image, name, featuredRoleId } = officer;
    const role = useSelector(selectFeaturedRole(featuredRoleId)); //function that converts featuredRoleIds into role names
    console.log(role);

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardTitle>{role}</CardTitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default OfficerDetail;