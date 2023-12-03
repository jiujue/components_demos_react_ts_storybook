import type { Meta, StoryObj } from '@storybook/react';

import CustomFlowFlexLayout from '@/components/CustomFlowFlexLayout';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/CustomFlowFlexLayout',
  component: CustomFlowFlexLayout,
} satisfies Meta<typeof CustomFlowFlexLayout>;

export default meta;

type Story = StoryObj<typeof meta>;
const dataSource = new Array(30).fill(0).map((_, idx) => ({
  key: `key-${idx}`,
  title: `step ${idx}`,
  avatar: 'https://gips2.baidu.com/it/u=3708253088,4135353409&fm=3039&app=3039&f=JPEG?w=128&h=128',
}));
export const GridLayout: Story = {
  args: { dataSource },
};
