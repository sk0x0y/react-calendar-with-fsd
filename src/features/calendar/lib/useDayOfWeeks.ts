import { useState, useEffect } from 'react';
import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';
import { ko } from 'date-fns/locale';

interface DayOfWeek {
  id: number;
  name: string;
}

export default function useDayOfWeeks(): DayOfWeek[] {
  const [dayOfWeeks, setDayOfWeeks] = useState<DayOfWeek[]>([]);

  useEffect(() => {
    const now = new Date();
    const start = startOfWeek(now, { weekStartsOn: 1 });
    const end = endOfWeek(now, { weekStartsOn: 1 });

    const days = eachDayOfInterval({ start, end }).map((day, index) => ({
      id: index,
      name: format(day, 'E', { locale: ko }),
    }));

    setDayOfWeeks(days);
  }, []);

  return dayOfWeeks;
}
