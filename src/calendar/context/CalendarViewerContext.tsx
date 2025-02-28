import { createContext, useContext } from "react";
import { CalendarControl } from "../types/CalendarControl";
import { CalendarEvent } from "../types/CalendarEvent";

type Context = {
  control: CalendarControl;
  events: CalendarEvent[];
};

// @ts-expect-error no problem
const CalendarViewerContext = createContext<Context>(null);

type CalendarViewerProviderProps = {
  control: CalendarControl;
  events: CalendarEvent[];
  children: React.ReactNode;
};
export const CalendarViewerProvider = ({
  control,
  children,
  events,
}: CalendarViewerProviderProps) => {
  return (
    <CalendarViewerContext.Provider value={{ control, events }}>
      {children}
    </CalendarViewerContext.Provider>
  );
};

export const useCalendarViewerContext = () => {
  const context = useContext(CalendarViewerContext);
  if (!context)
    throw new Error("Please pass control prop to CalendarViewer component");
  return context;
};
