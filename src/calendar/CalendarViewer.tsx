import "./style/index.css";
import { HeadDays } from "./components/HeadDays";
import { CalendarViewerProvider } from "./context/CalendarViewerContext";
import { MonthStartGapDays } from "./components/MonthStartGapDays";
import { MonthEndGapDays } from "./components/MonthEndGapDays";
import { MonthDays } from "./components/MonthDays";
import { CalendarControl, CalendarEvent } from "./types";

type CalendarViewerProps = {
  control: CalendarControl;
  events: CalendarEvent[];
};

export const CalendarViewer = ({ control, events }: CalendarViewerProps) => {
  return (
    <CalendarViewerProvider events={events} control={control}>
      <div
        className="clv-box-list"
        dir={control.type === "jalali" ? "rtl" : "ltr"}
      >
        {/* heads */}
        <HeadDays />

        {/* days */}
        <MonthStartGapDays />

        <MonthDays />

        <MonthEndGapDays />
      </div>
    </CalendarViewerProvider>
  );
};
