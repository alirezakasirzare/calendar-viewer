import { formatDate } from "date-fns";

export const formatMonthDay = (date: Date) => {
  const formated = formatDate(date, "d");

  if (formated === "1") return formatDate(date, "d MMM");

  return formated;
};
