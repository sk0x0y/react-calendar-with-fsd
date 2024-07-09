import React from 'react';

interface IProps {
  children?: React.ReactNode;
}
/**
 * 달력의 요일을 표시하는 영역의 컨테이너 컴포넌트입니다.<br/>
 * children으로 CalendarDayOfWeekItem 컴포넌트를 받아 표시합니다.
 */
function CalendarDayOfWeek({ children }: IProps) {
  return <div className="grid grid-cols-7 font-semibold text-lg text-center">{children}</div>;
}

export default CalendarDayOfWeek;
