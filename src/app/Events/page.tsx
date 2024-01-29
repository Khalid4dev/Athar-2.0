"use client";
import PageTitle from "../../components/PageTitle"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

export default function Home() {
  const eventContent = (arg) => {
    // Customize styles based on event properties
    const customStyles = {
      backgroundColor: arg.event.backgroundColor || '#3788d8',
      borderColor: arg.event.borderColor || '#3788d8',
      color: arg.event.textColor || '#ffffff',
    };

    return (
      <div>
      <h1>{arg.event.nice}</h1>
        <div className="fc-title">{arg.event.title}</div>
        <h1>hello</h1>
      </div>
    );
  };
  return (
    <main>
      <PageTitle title="Evénements" />
      <section className="flex justify-center pt-12 pb-12">
        <div className="max-w-screen-xl w-full h-full">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
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
            displayEventTime={false}
            eventDisplay="block"
            eventContent={eventContent}
            events={[
              {
                title: 'Meeting',
                start: new Date(),
                nice: 'hello'
              },
              {
                title: 'Birthday Party',
                start: '2024-07-07T07:00:00',
              }
            ]}
            initialView='listYear'
            selectable={true}
          />
        </div>
      </section>
    </main>
  );
}
