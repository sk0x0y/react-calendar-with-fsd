import type { Meta, StoryObj } from '@storybook/react';
import { CalendarSection } from '@widgets/calendar/ui';
import '@/app/index.css';

const meta = {
  title: 'Widgets/Calendar/Section',
  component: CalendarSection,
  decorators: (Story) => (
    <div className="p-[20px]">
      <Story />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: <div>달력 관련 컴포넌트를 children으로 전달합니다.</div>,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
