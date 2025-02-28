import { addDays, getDay } from "date-fns";
import { useCalendarViewerContext } from "../context/CalendarViewerContext";
import { MonthDayUi } from "./MonthDayUi";
import { formatMonthDay } from "../utils/formatMonthDay";

export const MonthEndGapDays = () => {
  const {
    control: { endDate },
  } = useCalendarViewerContext();

  const endGap = 6 - getDay(endDate);
  const monthEndGapDays = new Array(endGap)
    .fill(null)
    .map((_, i) => addDays(endDate, i + 1));

  return monthEndGapDays.map((monthDay, i) => (
    <MonthDayUi key={i} disabled>
      {formatMonthDay(monthDay)}
    </MonthDayUi>
  ));
};
