import { useCalendarViewerContext } from "../context/CalendarViewerContext";
import { MonthDayUi } from "./MonthDayUi";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const jalDays = ["شنبه", "یک ش", "دو ش", "سه ش", "چهار ش", "پنج ش", "جمعه"];

export const HeadDays = () => {
  const { control } = useCalendarViewerContext();

  const headDays = control.type === "gregorian" ? days : jalDays;

  return headDays.map((day) => <MonthDayUi key={day}>{day}</MonthDayUi>);
};
