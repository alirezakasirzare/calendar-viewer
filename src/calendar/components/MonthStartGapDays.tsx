import { useCalendarViewerContext } from "../context/CalendarViewerContext";
import { MonthDayUi } from "./MonthDayUi";
import { formatMonthDay } from "../utils/formatMonthDay";
import { getFnAddDays, getFnGetDay } from "../utils/dynamicDate";

export const MonthStartGapDays = () => {
  const { control } = useCalendarViewerContext();

  const getDay = getFnGetDay(control.type);
  const diff = control.type === "jalali" ? 1 : 0;
  const startGap = getDay(control.startDate) + diff;

  const addDays = getFnAddDays(control.type);
  const monthStartGapDays = new Array(startGap)
    .fill(null)
    .map((_, i) => addDays(control.startDate, -(startGap - i)));

  return monthStartGapDays.map((monthDay, i) => (
    <MonthDayUi key={i} disabled>
      {formatMonthDay(control.type, monthDay)}
    </MonthDayUi>
  ));
};
