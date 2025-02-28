import { getFnFormatDate } from "./dynamicDate";
import { CalendarType } from "../types";

export const formatMonthDay = (type: CalendarType, date: Date) => {
  const formatDate = getFnFormatDate(type);
  const formated = formatDate(date, "d");

  if (formated === "1") return formatDate(date, "d MMM");

  return formated;
};
