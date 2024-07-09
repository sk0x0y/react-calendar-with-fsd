import type { Meta, StoryObj } from '@storybook/react';
import { HolidayAccordionGrid, HolidayAccordionItem } from '@widgets/holiday/ui';
import '@/app/index.css';

const meta: Meta<typeof HolidayAccordionGrid> = {
  title: 'Widgets/Holiday/AccordionGrid',
  component: HolidayAccordionGrid,
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
        <HolidayAccordionItem name="신정" date="01.01" />
        <HolidayAccordionItem name="설" date="02.09 ~ 02.11" />
        <HolidayAccordionItem name="삼일절" date="03.01" />
        <HolidayAccordionItem name="22대 국회의원 선거" date="04.10" />
        <HolidayAccordionItem name="근로자의 날" date="05.01" />
      </>
    ),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HolidayAccordionGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
