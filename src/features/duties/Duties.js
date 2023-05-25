import { useSelector } from 'react-redux';
import { selectDutiesByOfficerId } from './dutiesSlice';
import { listDuties } from '../../utils/listDuties';
import { Col } from 'reactstrap';

const Duties = ({ officerId }) => {
    const duties = useSelector(selectDutiesByOfficerId([+officerId]));
    const list = listDuties(duties);

    if (list) {
        return (
            <Col md='6' className='m-1 bg-faded p-4 rounded'>
                <h5 className='section-heading mb-2'>
                    Duties
                </h5>
                {list}
            </Col>
        );
    };
    return (
        <Col md='6' className='m-1 bg-faded p-4 rounded'>
            This officer has no duties.
        </Col>
    );
};

export default Duties;