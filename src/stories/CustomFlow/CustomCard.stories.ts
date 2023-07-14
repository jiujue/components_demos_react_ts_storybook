import type { Meta, StoryObj } from '@storybook/react';

import CustomFlow from '@/components/CustomFlow';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/CustomFlow',
  component: CustomFlow,
} satisfies Meta<typeof CustomFlow>;

export default meta;


type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
  		dataSource: new Array(30).fill(0).map((_, idx) => ({
			title: `step ${idx}`,
			icon: 'https://gips2.baidu.com/it/u=3708253088,4135353409&fm=3039&app=3039&f=JPEG?w=1024&h=1024',
		})),
  },
};

