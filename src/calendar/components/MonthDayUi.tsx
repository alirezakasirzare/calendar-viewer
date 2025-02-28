type MonthDayUiProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const MonthDayUi = ({ children, disabled }: MonthDayUiProps) => {
  return (
    <div className={"clv-day-box " + (disabled && "clv-day-box-disabled")}>
      {children}
    </div>
  );
};
