import { Container } from 'reactstrap';
import EventCalendar from '../features/calendar/FullCalendar';

const Calendar = () => {
  return (
    <Container className='ms-auto'>
      <EventCalendar />
    </Container>
  )
}
export default Calendar;