import { useState } from "react";
import { CalendarControl, CalendarType } from "./types";
import {
  getFnAddMonths,
  getFnEndOfMonth,
  getFnStartOfMonth,
} from "./utils/dynamicDate";

type CalendarViewerHookOptions = {
  type?: CalendarType;
};

export const useCalendarViewer = ({
  type = "gregorian",
}: CalendarViewerHookOptions = {}): CalendarControl => {
  const startOfMonth = getFnStartOfMonth(type);
  const endOfMonth = getFnEndOfMonth(type);
  const addMonths = getFnAddMonths(type);
  const [date, setDate] = useState({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date()),
  });

  const handleNext = () => {
    setDate((prev) => ({
      start: startOfMonth(addMonths(prev.start, 1)),
      end: endOfMonth(addMonths(prev.end, 1)),
    }));
  };
  const handlePrev = () => {
    setDate((prev) => ({
      start: startOfMonth(addMonths(prev.start, -1)),
      end: endOfMonth(addMonths(prev.end, -1)),
    }));
  };

  return {
    startDate: date.start,
    endDate: date.end,
    type,
    prev: handlePrev,
    next: handleNext,
  };
};
