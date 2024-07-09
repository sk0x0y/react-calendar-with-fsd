interface IProps {
  name: string;
  date: string;
}
/**
 * 공휴일 상세 정보를 표시하는 요소 컴포넌트입니다.
 */
function HolidayAccordionItem({ name, date }: IProps) {
  return (
    <dl>
      <dt className="font-semibold text-lg text-gray-800">{name}</dt>
      <dd className="font-normal text-sm text-gray-600">{date}</dd>
    </dl>
  );
}

export default HolidayAccordionItem;
