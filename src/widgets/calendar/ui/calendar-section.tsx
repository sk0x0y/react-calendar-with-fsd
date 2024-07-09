import React from 'react';

interface IProps {
  children?: React.ReactNode;
}
/**
 * 컴포넌트 추상화를 위해 만들었으며, 달력의 바디 부분을 나타냅니다.<br/>
 * children으로 @widgets/calendar/ui/* 컴포넌트를 전달합니다.
 */
function CalendarSection({ children }: IProps) {
  return <section className="px-[20px]">{children}</section>;
}

export default CalendarSection;
