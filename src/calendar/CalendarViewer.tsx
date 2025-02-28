import { HeadDays } from "./components/HeadDays";
import { CalendarControl } from "./types/CalendarControl";
import { CalendarViewerProvider } from "./context/CalendarViewerContext";
import { MonthStartGapDays } from "./components/MonthStartGapDays";
import { MonthEndGapDays } from "./components/MonthEndGapDays";
import { MonthDays } from "./components/MonthDays";
import { CalendarEvent } from "./types/CalendarEvent";
import "./style/index.css";

type CalendarViewerProps = {
  control: CalendarControl;
  events: CalendarEvent[];
};

export const CalendarViewer = ({ control, events }: CalendarViewerProps) => {
  return (
    <CalendarViewerProvider events={events} control={control}>
      <div className="clv-box-list">
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
