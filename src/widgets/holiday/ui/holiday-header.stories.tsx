import type { Meta, StoryObj } from '@storybook/react';
import { HolidayHeader } from '@widgets/holiday/ui';
import '@/app/index.css';

const meta: Meta<typeof HolidayHeader> = {
  title: 'Widgets/Holiday/Header',
  component: HolidayHeader,
  decorators: (Story) => (
    <div className="p-[20px]">
      <Story />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof HolidayHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
