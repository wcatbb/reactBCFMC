import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectOfficerById } from '../features/officers/officersSlice';
import OfficerDetail from '../features/officers/OfficerDetail';
import Duties from '../features/duties/Duties';
import { SubHeader } from '../components/SubHeader';
import { useSelector } from 'react-redux';

const Officer = () => {
    const { officerId } = useParams();
    const officer = useSelector(selectOfficerById(officerId));

    return (
        <Container>
            <SubHeader current={officer.name} />
            <Row>
                <OfficerDetail officer={officer} />
                <Duties officerId={officerId}/>
            </Row>
        </Container>
    );
};

export default Officer;