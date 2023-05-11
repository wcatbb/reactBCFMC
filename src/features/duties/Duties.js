import { selectDutiesByOfficerId } from './dutiesSlice';
import { listDuties } from '../../utils/listDuties';
import { Col } from 'reactstrap';

const Duties = ({ officerId }) => {
    const duties = selectDutiesByOfficerId(officerId);
    const list = listDuties(duties);
    console.log(duties);

    if (list) {
        return (
            <Col md='5' className='m-1'>
                <h4>Duties</h4>
                <ul>
                    <li>duty 1</li>
                    <li>duty 2</li>
                    <li>duty 3</li>
                </ul>
                {list}
            </Col>
        );
    };
    return (
        <Col md='5' className='m-1'>
            This officer has no duties.
        </Col>
    );
};

export default Duties;