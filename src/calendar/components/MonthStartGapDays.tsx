import { addDays, getDay } from "date-fns";
import { useCalendarViewerContext } from "../context/CalendarViewerContext";
import { MonthDayUi } from "./MonthDayUi";
import { formatMonthDay } from "../utils/formatMonthDay";

export const MonthStartGapDays = () => {
  const {
    control: { startDate },
  } = useCalendarViewerContext();
  const startGap = getDay(startDate);

  const monthStartGapDays = new Array(startGap)
    .fill(null)
    .map((_, i) => addDays(startDate, -(startGap - i)));

  return monthStartGapDays.map((monthDay, i) => (
    <MonthDayUi key={i} disabled>
      {formatMonthDay(monthDay)}
    </MonthDayUi>
  ));
};
