import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { HolidayAccordionButton } from '@widgets/holiday/ui';
import '@/app/index.css';

const meta: Meta<typeof HolidayAccordionButton> = {
  title: 'Widgets/Holiday/AccordionButton',
  component: HolidayAccordionButton,
  decorators: (Story) => (
    <div className="flex items-center justify-center h-[320px]">
      <div className="w-[320px] p-[20px]">
        <Story />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isExpanded: false,
  },
  argTypes: {
    isExpanded: {
      control: {
        type: 'boolean',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HolidayAccordionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function render() {
    const [{ isExpanded }, updateArgs] = useArgs<{ isExpanded: boolean }>();

    return (
      <HolidayAccordionButton
        isExpanded={isExpanded}
        onClick={() => updateArgs({ isExpanded: !isExpanded })}
      />
    );
  },
};
