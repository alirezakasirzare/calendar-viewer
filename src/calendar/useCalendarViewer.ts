import { CalendarControl, CalendarType } from "./types";
import { getFnEndOfMonth, getFnStartOfMonth } from "./utils/dynamicDate";

type CalendarViewerHookOptions = {
  type?: CalendarType;
};

export const useCalendarViewer = ({
  type = "gregorian",
}: CalendarViewerHookOptions = {}): CalendarControl => {
  const startOfMonth = getFnStartOfMonth(type);
  const startDate = startOfMonth(new Date());

  const endOfMonth = getFnEndOfMonth(type);
  const endDate = endOfMonth(new Date());

  return {
    startDate,
    endDate,
    type,
  };
};
