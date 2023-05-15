import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
import { listRoles } from '../../utils/listRoles';
import { selectRolesByRolesId } from './officerRolesSlice';

const OfficerDetail = ({ officer }) => {
    const { image, name, roleIds } = officer;
    const roles = selectRolesByRolesId(roleIds); //function that converts roleIds into roles
    const list = listRoles(roles);

    
    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText className='text-center'>{list}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default OfficerDetail;