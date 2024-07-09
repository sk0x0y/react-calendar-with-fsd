interface IProps {
  onClick?: () => void;
  day?: number;
  selected?: boolean;
}
/**
 * 달력의 날짜를 표시하는 컴포넌트입니다.<br/>
 * CalendarGrid 컴포넌트에서 사용합니다.
 */
function CalendarDay({ onClick, day, selected = false }: IProps) {
  return (
    <div onClick={onClick} className="flex items-center justify-center h-[40px]">
      <span
        className={`
        flex items-center justify-center w-[40px] h-[40px] rounded-full text-gray-500 cursor-pointer
        ${!selected && day && 'hover:bg-gray-100'} 
        ${selected && 'bg-[#5A96E3] text-white'}
        `}
      >
        {day}
      </span>
    </div>
  );
}

export default CalendarDay;
