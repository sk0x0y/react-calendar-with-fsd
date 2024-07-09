import React from 'react';

interface IProps {
  children?: React.ReactNode;
}
/**
 * 공휴일 정보에 대한 영역을 표현하기 위해 추상화 된 컨테이너 컴포넌트입니다.<br/>
 * children으로 @widgets/holiday/ui/* 컴포넌트를 전달합니다.
 */
function HolidaySection({ children }: IProps) {
  return <section className="px-[20px]">{children}</section>;
}

export default HolidaySection;
