import BigCalendar from "react-big-calendar-like-google";
import moment from "moment";

BigCalendar.momentLocalizer(moment);

const styles = {
  container: {
    width: "80wh",
    height: "60vh",
    margin: "2em",
  },
}; 
export default function EventSchedule() {
  const events = [
    {
      id: 0,
      name: "Board meeting",
      start: new Date(2022, 0, 29, 9, 0, 0),
      end: new Date(2022, 0, 29, 13, 0, 0),
      resourceId: 1,
    },
    {
      id: 1,
      name: "MS training",
      allDay: true,
      start: new Date(2022, 0, 29, 14, 0, 0),
      end: new Date(2022, 0, 29, 16, 30, 0),
      resourceId: 2,
    },
    {
      id: 2,
      name: "Team lead meeting",
      start: new Date(2022, 0, 29, 8, 30, 0),
      end: new Date(2022, 0, 29, 12, 30, 0),
      resourceId: 3,
    },
    {
      id: 11,
      name: "Birthday Party",
      start: new Date(2022, 0, 30, 7, 0, 0),
      end: new Date(2022, 0, 30, 10, 30, 0),
      resourceId: 4,
    },
  ];
  console.log(events[2]);
  return (
    <div style={styles.container}>
      <BigCalendar
        selectable
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(event) => console.log(event.name)}
      />
    </div>
  );
}
