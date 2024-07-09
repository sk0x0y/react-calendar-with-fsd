import React from 'react';

interface IProps {
  children?: React.ReactNode;
}
/**
 * 달력의 한 주를 표시하는 컴포넌트입니다.<br/>
 * children으로 CalendarDay 컴포넌트를 받아 표시합니다.
 */
function CalendarGrid({ children }: IProps) {
  return <div className="grid grid-cols-7 font-normal text-base text-center">{children}</div>;
}

export default CalendarGrid;
