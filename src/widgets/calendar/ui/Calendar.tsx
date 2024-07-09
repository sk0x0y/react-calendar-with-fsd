/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  addYears,
  differenceInCalendarYears,
  eachYearOfInterval,
  format,
  getDate,
  getDay,
  getYear,
  isAfter,
  isBefore,
  isEqual,
  startOfMonth,
} from 'date-fns';

import {
  CalendarSelectedDate,
  CalendarHeader,
  CalendarSection,
  CalendarDayOfWeek,
  CalendarDayOfWeekItem,
  CalendarGrid,
  CalendarDay,
} from '@widgets/calendar/ui';

import { useCalendarStore } from '@entities/calendar/model';

import { useHolidayStore } from '@entities/holiday/model';
import { HolidayInterface } from '@entities/holiday/interface';

import { MAX_YEAR_DIFFERENCE, MAXIMUM_DATE } from '@features/calendar';
import { getDaysInCurrentMonth, useDayOfWeeks } from '@features/calendar/lib';

import { API_URL } from '@shared/config/api';

function Calendar() {
  const dayOfWeeks = useDayOfWeeks();
  const { currentDate, startDate, endDate, setStartDate, setEndDate } = useCalendarStore();
  const { setHolidays } = useHolidayStore();

  const days = getDaysInCurrentMonth(currentDate);

  useEffect(() => {
    if (startDate && endDate) {
      const years = eachYearOfInterval({ start: startDate, end: endDate }).map(getYear);

      Promise.all(years.map((year) => axios.get(`${API_URL}/publicholidays/${year}/KR`)))
        .then((responses) => {
          const newHolidays: Record<number, HolidayInterface[]> = {};

          responses.forEach((response: AxiosResponse<HolidayInterface[]>, index) => {
            newHolidays[years[index]] = response.data;
          });

          setHolidays(newHolidays);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [endDate, setHolidays, startDate]);

  const handleDayClick = (day: Date) => {
    if (isAfter(day, MAXIMUM_DATE)) {
      alert('2025년까지만 선택 가능합니다.');
      return;
    }

    if (startDate && endDate) {
      setStartDate(day);
      setEndDate(undefined!);
      return;
    }

    if (!startDate) {
      setStartDate(day);
    } else if (startDate && !endDate) {
      const twoYearsLater = addYears(startDate, MAX_YEAR_DIFFERENCE);

      if (
        isAfter(day, twoYearsLater) ||
        differenceInCalendarYears(day, startDate) > MAX_YEAR_DIFFERENCE
      ) {
        alert('시작 날짜와 종료 날짜의 간격은 최대 2년입니다.');
        return;
      }

      if (isBefore(day, startDate)) {
        alert('시작 날짜는 종료 날짜보다 클 수 없습니다.');
        return;
      }

      setEndDate(day);
    }
  };

  return (
    <>
      <CalendarSelectedDate startDate={startDate} endDate={endDate} />

      <CalendarSection>
        <CalendarHeader />

        <div className="pb-[40px]">
          <CalendarDayOfWeek>
            {dayOfWeeks.map((dayOfWeek) => (
              <CalendarDayOfWeekItem key={dayOfWeek.id} name={dayOfWeek.name} />
            ))}
          </CalendarDayOfWeek>

          <CalendarGrid>
            {Array.from({ length: getDay(startOfMonth(currentDate)) - 1 }).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <CalendarDay key={`empty-${index}`} />
            ))}

            {days.map((day) => {
              const formattedDate = format(day, 'yyyy-MM-dd');

              return (
                <CalendarDay
                  key={formattedDate}
                  onClick={() => handleDayClick(day)}
                  day={getDate(day)}
                  selected={
                    !(
                      !(startDate && isEqual(day, startDate)) && !(endDate && isEqual(day, endDate))
                    )
                  }
                />
              );
            })}
          </CalendarGrid>
        </div>
      </CalendarSection>
    </>
  );
}

export default Calendar;
