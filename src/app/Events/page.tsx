"use client";
import PageTitle from "../../components/PageTitle"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core'

export default function Home() {
  const handleEventClick = (clickInfo: EventClickArg) => {
    confirm(`Event Clicked '${clickInfo.event.title}'`)
  }
  return (
    <main>
      <PageTitle title="Evénements" />
      <section className="flex justify-center pt-12 pb-12">
        <div className="max-w-screen-xl w-full h-full">
          <FullCalendar
            plugins={[dayGridPlugin, listPlugin]}
            locale = 'fr'
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'listYear,dayGridMonth'
            }}
            buttonText={{
              today: 'Aujourd\'hui',
              month: 'Mois',
              list: 'Liste',
            }}
            firstDay={1}
            events={[
              {
                title: 'Meeting',
                start: new Date(),
                end: '2024-07-07T07:00:00',
                url: 'http://google.com/',
              },
              {
                title: 'Birthday Party',
                start: '2024-07-07T07:00:00',
                url: 'http://google.com/',
              }
            ]}
            initialView='listYear'
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            eventClick={handleEventClick}
            
          />
        </div>
      </section>
    </main>
  );
}
