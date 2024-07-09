import { renderHook } from '@testing-library/react';
import useDayOfWeeks from './useDayOfWeeks';

describe('useDayOfWeeks', () => {
  it('일주일의 요일을 반환한다.', () => {
    const { result } = renderHook(() => useDayOfWeeks());

    expect(result.current.length).toBe(7);
    expect(result.current[0].name).toBe('월');
    expect(result.current[1].name).toBe('화');
    expect(result.current[2].name).toBe('수');
    expect(result.current[3].name).toBe('목');
    expect(result.current[4].name).toBe('금');
    expect(result.current[5].name).toBe('토');
    expect(result.current[6].name).toBe('일');
  });
});
