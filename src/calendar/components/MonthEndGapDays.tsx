import { useCalendarViewerContext } from "../context/CalendarViewerContext";
import { MonthDayUi } from "./MonthDayUi";
import { formatMonthDay } from "../utils/formatMonthDay";
import { getFnAddDays, getFnGetDay } from "../utils/dynamicDate";

export const MonthEndGapDays = () => {
  const { control } = useCalendarViewerContext();

  const getDay = getFnGetDay(control.type);
  const diff = control.type === "jalali" ? -1 : 0;
  const endGap = 6 - getDay(control.endDate) + diff;

  const addDays = getFnAddDays(control.type);
  const monthEndGapDays = new Array(endGap)
    .fill(null)
    .map((_, i) => addDays(control.endDate, i + 1));

  return monthEndGapDays.map((monthDay, i) => (
    <MonthDayUi key={i} disabled>
      {formatMonthDay(control.type, monthDay)}
    </MonthDayUi>
  ));
};
