import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDay, CalendarGrid } from '@widgets/calendar/ui';
import '@/app/index.css';

const meta = {
  title: 'Widgets/Calendar/Grid',
  component: CalendarGrid,
  decorators: (Story) => (
    <div className="p-[20px]">
      <Story />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: (
      <>
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />

        <CalendarDay day={1} />
        <CalendarDay day={2} />
        <CalendarDay day={3} />
        <CalendarDay day={4} />
        <CalendarDay day={5} />
        <CalendarDay day={6} />
        <CalendarDay day={7} />
        <CalendarDay day={8} />
        <CalendarDay day={9} />
        <CalendarDay day={10} />
        <CalendarDay day={11} />
      </>
    ),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
