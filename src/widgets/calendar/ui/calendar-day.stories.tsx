import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDay } from '@widgets/calendar/ui';
import '@/app/index.css';

const meta = {
  title: 'Widgets/Calendar/Day',
  component: CalendarDay,
  decorators: (Story) => (
    <div className="p-[20px]">
      <Story />
    </div>
  ),

  parameters: {
    layout: 'fullscreen',
  },
  args: {
    day: 1,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarDay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
