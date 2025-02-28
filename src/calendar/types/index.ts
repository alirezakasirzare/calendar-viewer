export type CalendarType = "gregorian" | "jalali";

export type CalendarEvent = {
  date: Date;
  title: string;
  bgColor?: string;
  textColor?: string;
};

export type CalendarControl = {
  startDate: Date;
  endDate: Date;
  type: CalendarType;
  next: () => void;
  prev: () => void;
};
