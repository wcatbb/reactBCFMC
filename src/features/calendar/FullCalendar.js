import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const EventCalendar = () => {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin ]}
        googleCalendarApiKey={process.env.REACT_APP_API_KEY}
        events= {{googleCalendarId: process.env.REACT_APP_GCAL_ID}}
        initialView='dayGridMonth'
        headerToolbar= {{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek'
          }}
      />
    );
  };

export default EventCalendar;