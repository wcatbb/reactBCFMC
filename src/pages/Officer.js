import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectOfficerById } from '../features/officers/officersSlice';
import OfficerDetail from '../features/officers/OfficerDetail';
import { SubHeader } from '../components/SubHeader';

const Officer = () => {
    const { officerId } = useParams();
    const officer = selectOfficerById(officerId);
    
    return (
        <Container>
            <SubHeader current={officer.name} />
            <Row>
                <OfficerDetail officer={officer} />
            </Row>
        </Container>
    );
};

export default Officer;