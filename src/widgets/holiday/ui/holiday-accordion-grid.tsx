import React from 'react';

interface IProps {
  children?: React.ReactNode;
}
/**
 * 공휴일 상세 정보를 표시하는 컴포넌트입니다.<br/>
 * children에 HolidayAccordionItem 컴포넌트를 전달해주세요.
 */
function HolidayAccordionGrid({ children }: IProps) {
  return <div className="py-[20px] grid grid-cols-1 gap-y-[40px]">{children}</div>;
}

export default HolidayAccordionGrid;
