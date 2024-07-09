import type { Meta, StoryObj } from '@storybook/react';
import { HolidayAccordionItem } from '@widgets/holiday/ui';
import '@/app/index.css';

const meta: Meta<typeof HolidayAccordionItem> = {
  title: 'Widgets/Holiday/AccordionItem',
  component: HolidayAccordionItem,
  decorators: (Story) => (
    <div className="p-[20px]">
      <Story />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    name: '신정',
    date: '2024.01.01',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HolidayAccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ name, date }) => (
    <div className="grid grid-cols-3 gap-10">
      <HolidayAccordionItem name={name} date={date} />
      <HolidayAccordionItem name="삼일절" date="03.01" />
    </div>
  ),
};
