import { selectAllOfficers } from "./officersSlice";
import { Col, Row } from 'reactstrap';
import OfficerCard from "./OfficerCard";
import { useSelector } from "react-redux";

const OfficersList = () => {
    const officers = useSelector(selectAllOfficers);
    return (
        <Row className='ms-auto'>
            {officers.map((officer) => {
                return (
                    <Col
                        xs='4'
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