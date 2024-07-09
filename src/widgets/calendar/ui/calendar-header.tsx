import { addMonths, format, subMonths } from 'date-fns';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useCalendarStore } from '@entities/calendar/model';

/**
 * 현재 상태의 달을 표시하면서, 이전달 또는 다음달로 이동하는 기능을 제공하는 컴포넌트입니다.
 */
function CalendarHeader() {
  const { currentDate, setCurrentDate } = useCalendarStore();

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <h3 className="flex items-center justify-center py-[20px] font-bold text-xl text-gray-800 text-center">
      <button type="button" onClick={handlePrevMonth} className="mr-[20px]">
        <IoIosArrowBack />
      </button>

      <span>{format(currentDate, 'yyyy년 MM월')}</span>

      <button type="button" onClick={handleNextMonth} className="ml-[20px]">
        <IoIosArrowForward />
      </button>
    </h3>
  );
}

export default CalendarHeader;
