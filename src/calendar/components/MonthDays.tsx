import { useCalendarViewerContext } from "../context/CalendarViewerContext";
import { MonthDayUi } from "./MonthDayUi";
import { MonthDayEvents } from "./MonthDayEvents";
import { formatMonthDay } from "../utils/formatMonthDay";
import {
  getFnEachDayOfInterval,
  getFnIsSameDay,
  getFnIsToday,
} from "../utils/dynamicDate";

export const MonthDays = () => {
  const { control, events } = useCalendarViewerContext();

  const eachDayOfInterval = getFnEachDayOfInterval(control.type);
  const monthDays = eachDayOfInterval({
    start: control.startDate,
    end: control.endDate,
  });

  const isToday = getFnIsToday(control.type);
  const isSameDay = getFnIsSameDay(control.type);
  return monthDays.map((monthDay, i) => (
    <MonthDayUi key={i}>
      <span
        className={
          "clv-day-name " + (isToday(monthDay) && "clv-day-name-today")
        }
      >
        {formatMonthDay(control.type, monthDay)}
      </span>
      <div className="clv-events">
        <MonthDayEvents
          events={events.filter((event) => isSameDay(event.date, monthDay))}
        />
      </div>
    </MonthDayUi>
  ));
};
