import { cn } from "../utils/cn";

type MonthDayUiProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const MonthDayUi = ({ children, disabled }: MonthDayUiProps) => {
  return (
    <div
      className={cn(
        "border-t border-l p-2 border-gray-200 text-center text-xs text-gray-500 nth-[7n]:border-r nth-last-[-n+7]:border-b",
        disabled && "text-gray-500/30"
      )}
    >
      {children}
    </div>
  );
};
