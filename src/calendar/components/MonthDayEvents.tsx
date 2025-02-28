import { CalendarEvent } from "../types/CalendarEvent";

// event item
type EventElementProps = {
  event: CalendarEvent;
};
const EventElement = ({ event }: EventElementProps) => {
  return (
    <div
      style={{ backgroundColor: event.bgColor, color: event.textColor }}
      className="p-1 rounded-md bg-gray-100 text-gray-600"
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
