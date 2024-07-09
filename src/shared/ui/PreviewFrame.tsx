import React from 'react';

import { Divider } from '@/shared/ui';

interface IProps {
  // isStorybook?: boolean;
  children?: React.ReactNode;
}

/**
 * 미리보기 제공을 위한 프레임 컴포넌트입니다.<br/>
 * Children 을 제외한 다른 프레임을 구성하는 요소들은 하드코딩되어 있습니다.
 */
function PreviewFrame({ children }: IProps) {
  return (
    <main className="w-full sm:w-[480px] h-full mx-auto border-l border-r border-solid border-[#e9ecef]">
      <h1 className="py-[20px] text-2xl font-extrabold text-[#5A96E3] text-center">
        달력 미리보기
      </h1>
      <Divider />

      {children}
    </main>
  );
}

export default PreviewFrame;
