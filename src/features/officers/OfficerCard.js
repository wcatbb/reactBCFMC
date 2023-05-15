import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { listRoles } from '../../utils/listRoles';
import { selectRolesByRolesId } from './officerRolesSlice';

const OfficerCard = ({ officer }) => {
    const { id, image, name, roleIds } = officer;
    const roles = selectRolesByRolesId(roleIds); //function that converts roleIds into roles
    const list = listRoles(roles);

    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg width='100%' src={image} alt={name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
                <CardBody>
                    <CardText className='text-center'>{list}</CardText>
                </CardBody>
            </Card>
        </Link>
    );
};

export default OfficerCard;
