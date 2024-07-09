interface IProps {
  name: string;
}
/**
 * 달력의 요일을 표시하는 컴포넌트입니다.<br/>
 * CalendarDayOfWeek 컴포넌트에서 사용합니다.
 */
function CalendarDayOfWeekItem({ name }: IProps) {
  return <div className="flex items-center justify-center h-[40px] text-gray-700">{name}</div>;
}

export default CalendarDayOfWeekItem;
