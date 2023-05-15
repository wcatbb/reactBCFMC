import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
import { selectFeaturedRole } from './featuredRoleSlice';

const OfficerDetail = ({ officer }) => {
    const { image, name, featuredRoleId } = officer;
    const role = selectFeaturedRole(featuredRoleId); //function that converts roleIds into role names

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText className='text-center'>{role}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default OfficerDetail;