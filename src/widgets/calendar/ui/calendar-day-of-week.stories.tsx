import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDayOfWeek, CalendarDayOfWeekItem } from '@widgets/calendar/ui';
import '@/app/index.css';

const meta = {
  title: 'Widgets/Calendar/DayOfWeek',
  component: CalendarDayOfWeek,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarDayOfWeek>;

export default meta;
type Story = StoryObj<typeof meta>;

const dayOfWeeks = [
  { id: 1, name: '월' },
  { id: 2, name: '화' },
  { id: 3, name: '수' },
  { id: 4, name: '목' },
  { id: 5, name: '금' },
  { id: 6, name: '토' },
  { id: 7, name: '일' },
];

export const Default: Story = {
  args: {
    children: dayOfWeeks.map((dayOfWeek) => (
      <CalendarDayOfWeekItem key={dayOfWeek.id} name={dayOfWeek.name} />
    )),
  },
  render: () => (
    <CalendarDayOfWeek>
      {dayOfWeeks.map((dayOfWeek) => (
        <CalendarDayOfWeekItem key={dayOfWeek.id} name={dayOfWeek.name} />
      ))}
    </CalendarDayOfWeek>
  ),
};
