import type { Meta, StoryObj } from '@storybook/react';
import { PreviewFrame } from '@shared/ui';
import '@/app/index.css';

const meta = {
  title: 'SharedUI/PreviewFrame',
  component: PreviewFrame,
  decorators: [
    (Story) => (
      <div className="h-dvh max-h-[1024px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: (
      <>
        <section className="px-[20px]">
          <h3 className="py-[20px] font-bold text-lg text-gray-800 text-center">0000년 0월</h3>
          <p className="mb-[20px] font-medium text-sm text-gray-600">달력이 표시되는 영역입니다.</p>
        </section>
        <section className="p-[20px]">
          <h3 className="py-[20px] font-bold text-lg text-gray-800">공휴일 정보</h3>
          <p className="mb-[20px] font-medium text-sm text-gray-600">
            공휴일 정보가 표시되는 영역입니다.
          </p>
        </section>
      </>
    ),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PreviewFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
