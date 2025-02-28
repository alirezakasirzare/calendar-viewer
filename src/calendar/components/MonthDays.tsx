import { eachDayOfInterval, isSameDay, isToday } from "date-fns";
import { useCalendarViewerContext } from "../context/CalendarViewerContext";
import { MonthDayUi } from "./MonthDayUi";
import { formatMonthDay } from "../utils/formatMonthDay";
import { MonthDayEvents } from "./MonthDayEvents";

export const MonthDays = () => {
  const {
    control: { endDate, startDate },
    events,
  } = useCalendarViewerContext();

  const monthDays = eachDayOfInterval({ start: startDate, end: endDate });

  return monthDays.map((monthDay, i) => (
    <MonthDayUi key={i}>
      <span
        className={
          "clv-day-name " + (isToday(monthDay) && "clv-day-name-today")
        }
      >
        {formatMonthDay(monthDay)}
      </span>
      <div className="clv-events">
        <MonthDayEvents
          events={events.filter((event) => isSameDay(event.date, monthDay))}
        />
      </div>
    </MonthDayUi>
  ));
};
