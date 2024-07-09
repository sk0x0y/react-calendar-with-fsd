import type { Meta, StoryObj } from '@storybook/react';
import { HolidayBody } from '@widgets/holiday/ui';
import '@/app/index.css';

const meta: Meta<typeof HolidayBody> = {
  title: 'Widgets/Holiday/Body',
  component: HolidayBody,
  decorators: (Story) => (
    <div className="p-[20px]">
      <Story />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: <div>공휴일 관련 컴포넌트를 children으로 전달합니다.</div>,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HolidayBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
