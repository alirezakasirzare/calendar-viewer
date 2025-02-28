import { CalendarEvent } from "../types";

// event item
type EventElementProps = {
  event: CalendarEvent;
};
const EventElement = ({ event }: EventElementProps) => {
  return (
    <div
      style={{ backgroundColor: event.bgColor, color: event.textColor }}
      className="clv-event"
      title={event.title}
    >
      {event.title}
    </div>
  );
};

// event list
type MonthDayEventsProps = {
  events: CalendarEvent[];
};

export const MonthDayEvents = ({ events }: MonthDayEventsProps) => {
  return events.map((event, i) => <EventElement key={i} event={event} />);
};
