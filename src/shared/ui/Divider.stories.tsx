import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@shared/ui';
import '@/app/index.css';

const meta = {
  title: 'SharedUI/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <div className="p-[20px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
