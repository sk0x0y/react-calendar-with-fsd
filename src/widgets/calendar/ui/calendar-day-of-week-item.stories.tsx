import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDayOfWeekItem } from '@widgets/calendar/ui';
import '@/app/index.css';

const meta = {
  title: 'Widgets/Calendar/DayOfWeekItem',
  component: CalendarDayOfWeekItem,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarDayOfWeekItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { name: '월' },
};
