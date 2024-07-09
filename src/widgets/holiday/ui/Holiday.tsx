import { useState } from 'react';
import { format, isWithinInterval } from 'date-fns';

import {
  HolidayAccordionButton,
  HolidayAccordionGrid,
  HolidayAccordionItem,
  HolidayBody,
  HolidayHeader,
  HolidaySection,
} from '@widgets/holiday/ui';

import { useHolidayStore } from '@entities/holiday/model';
import { useCalendarStore } from '@entities/calendar/model';

function Holiday() {
  const { startDate, endDate } = useCalendarStore();
  const { holidays } = useHolidayStore();
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredHolidays = Object.entries(holidays).reduce(
    (acc, [year, holidayList]) => {
      const filteredHolidayList = holidayList.filter((holiday) =>
        isWithinInterval(holiday.date, { start: startDate!, end: endDate! }),
      );

      if (filteredHolidayList.length > 0) {
        acc[year] = filteredHolidayList;
      }

      return acc;
    },
    {} as Record<string, (typeof holidays)[number]>,
  );
  const numberOfHolidays = Object.values(filteredHolidays).reduce(
    (acc, cur) => acc + cur.length,
    0,
  );

  // console.log('holidays', holidays);
  console.log(filteredHolidays);

  return (
    <HolidaySection>
      <HolidayHeader count={numberOfHolidays} />

      <HolidayBody>
        {numberOfHolidays ? (
          <HolidayAccordionButton
            onClick={() => {
              setIsExpanded((prev) => !prev);
            }}
            isExpanded={!isExpanded}
          />
        ) : null}

        {isExpanded && (
          <HolidayAccordionGrid>
            {Object.entries(filteredHolidays).map(([year, holidayList]) => (
              <div key={year}>
                <h2 className="mb-[20px] font-semibold text-xl text-gray-800">{year}년 공휴일</h2>

                <div className="grid grid-cols-2 gap-x-[10px] gap-y-[20px]">
                  {holidayList?.map((holiday) => {
                    const { localName, date } = holiday;

                    return (
                      <HolidayAccordionItem
                        key={format(date, 'yyyy-MM-dd')}
                        name={localName}
                        date={format(date, 'MM-dd')}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </HolidayAccordionGrid>
        )}
      </HolidayBody>
    </HolidaySection>
  );
}

export default Holiday;
