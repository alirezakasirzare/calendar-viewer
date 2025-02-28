import { startOfMonth, endOfMonth } from "date-fns";

export const useCalendarViewer = () => {
  const startDate = startOfMonth(new Date());
  const endDate = endOfMonth(new Date());

  return {
    startDate,
    endDate,
  };
};
