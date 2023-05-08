import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';

class EventCalendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, googleCalendarPlugin ]}
        googleCalendarApiKey={process.env.REACT_APP_API_KEY}
        events= {{googleCalendarId: process.env.REACT_APP_GCAL_ID}}
        initialView="dayGridMonth"
      />
    )
  };
};

export default EventCalendar;