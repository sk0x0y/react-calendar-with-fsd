import React from 'react';

interface IProps {
  children?: React.ReactNode;
}
/**
 * 공휴일 정보의 내용에 대한 영역을 표현하기 위해 추상화 된 컨테이너 컴포넌트입니다.<br/>
 * children으로 공휴일 정보의 내용을 다루는 컴포넌트를 전달합니다.
 */
function HolidayBody({ children }: IProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default HolidayBody;
