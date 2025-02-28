import { CalendarType } from "../types";
import {
  addDays,
  getDay,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isToday,
  formatDate,
} from "date-fns";
import {
  addDays as addDaysJal,
  getDay as getDayJal,
  startOfMonth as startOfMonthJal,
  endOfMonth as endOfMonthJal,
  eachDayOfInterval as eachDayOfIntervalJal,
  isSameDay as isSameDayJal,
  isToday as isTodayJal,
  formatDate as formatDateJal,
} from "date-fns-jalali";

export const getFnAddDays = (type: CalendarType) => {
  return type === "jalali" ? addDaysJal : addDays;
};

export const getFnGetDay = (type: CalendarType) => {
  return type === "jalali" ? getDayJal : getDay;
};

export const getFnStartOfMonth = (type: CalendarType) => {
  return type === "jalali" ? startOfMonthJal : startOfMonth;
};

export const getFnEndOfMonth = (type: CalendarType) => {
  return type === "jalali" ? endOfMonthJal : endOfMonth;
};

export const getFnEachDayOfInterval = (type: CalendarType) => {
  return type === "jalali" ? eachDayOfIntervalJal : eachDayOfInterval;
};

export const getFnIsSameDay = (type: CalendarType) => {
  return type === "jalali" ? isSameDayJal : isSameDay;
};

export const getFnIsToday = (type: CalendarType) => {
  return type === "jalali" ? isTodayJal : isToday;
};

export const getFnFormatDate = (type: CalendarType) => {
  return type === "jalali" ? formatDateJal : formatDate;
};
