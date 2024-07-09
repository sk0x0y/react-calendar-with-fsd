import { MdExpandLess, MdExpandMore } from 'react-icons/md';

interface IProps {
  isExpanded?: boolean;
  onClick?: () => void;
}
/**
 * 선택한 기간 내 공휴일의 상세정보를 토글하는 버튼입니다.
 */
function HolidayAccordionButton({ isExpanded = false, onClick }: IProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full h-[50px] border rounded-xl font-medium text-sm text-[#5A96E3]"
    >
      {!isExpanded ? (
        <>
          <span>접기</span>
          <MdExpandLess className="inline-block w-[20px] h-[20px] ml-[5px]" />
        </>
      ) : (
        <>
          <span>자세히 보기</span>
          <MdExpandMore className="inline-block w-[20px] h-[20px] ml-[5px]" />
        </>
      )}
    </button>
  );
}

export default HolidayAccordionButton;
