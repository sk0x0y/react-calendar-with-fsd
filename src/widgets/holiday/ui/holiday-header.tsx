interface IProps {
  count?: number;
}
/**
 * 공휴일 정보의 제목과 공휴일 수를 보여주는 공휴일 정보의 헤더 컴포넌트입니다.<br/>
 * 제목과 공휴일 수는 개별 추상화 하지 않고 하나의 컴포넌트로 통합하였습니다.
 */
function HolidayHeader({ count = 0 }: IProps) {
  return (
    <>
      <h3 className="py-[20px] font-bold text-xl text-gray-800">공휴일 정보</h3>
      <p className="mb-[20px] font-medium text-sm text-gray-600">
        {count === 0 ? '공휴일 정보가 없습니다.' : `총 ${count}개의 공휴일 정보가 있습니다.`}
      </p>
    </>
  );
}

export default HolidayHeader;
