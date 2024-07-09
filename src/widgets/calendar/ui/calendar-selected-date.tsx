import { getDate, getMonth, getYear } from 'date-fns';
import { FaCalendarCheck } from 'react-icons/fa';

interface IProps {
  startDate?: Date;
  endDate?: Date;
}
/**
 * 달력을 통해 선택한 날짜를 표시하는 컴포넌트입니다.<br/>
 * 추후 날짜 선택 시 선택한 날짜를 표시하는 기능을 구현할 때 사용합니다.
 */
function CalendarSelectedDate({ startDate, endDate }: IProps) {
  return (
    <p className="flex items-center p-[20px] font-medium text-lg">
      <FaCalendarCheck size={20} className="mr-[10px]" />

      {startDate && endDate
        ? `${getYear(startDate)}년 ${getMonth(startDate) + 1}월 ${getDate(startDate)}일 ~ ${getYear(endDate)}년 ${getMonth(endDate) + 1}월 ${getDate(endDate)}일`
        : '날짜를 선택해주세요.'}
    </p>
  );
}

export default CalendarSelectedDate;
