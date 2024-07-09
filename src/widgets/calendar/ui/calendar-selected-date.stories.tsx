import type { Meta, StoryObj } from '@storybook/react';
import { CalendarSelectedDate } from '@widgets/calendar/ui';
import '@/app/index.css';

const meta = {
  title: 'Widgets/Calendar/SelectedDate',
  component: CalendarSelectedDate,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarSelectedDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
