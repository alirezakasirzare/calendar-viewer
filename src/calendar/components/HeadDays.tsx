import { MonthDayUi } from "./MonthDayUi";

export const HeadDays = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return days.map((day) => <MonthDayUi key={day}>{day}</MonthDayUi>);
};
