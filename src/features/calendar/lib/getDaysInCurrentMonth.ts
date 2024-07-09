import { getDaysInMonth, getMonth, getYear } from 'date-fns';

export default function getDaysInCurrentMonth(currentDate: Date) {
  const year = getYear(currentDate);
  const month = getMonth(currentDate);

  return Array.from(
    { length: getDaysInMonth(new Date(year, month)) },
    (_, i) => new Date(year, month, i + 1),
  );
}
