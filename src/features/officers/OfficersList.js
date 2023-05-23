import { selectAllOfficers } from "./officersSlice";
import { Col, Row } from 'reactstrap';
import OfficerCard from "./OfficerCard";

const OfficersList = () => {
    const officers = selectAllOfficers();
    return (
        <Row className='ms-auto'>
            {officers.map((officer) => {
                return (
                    <Col
                        sm='4'
                        className='m-2 mx-auto'
                        key={officer.id}>
                        <OfficerCard officer={officer} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default OfficersList;