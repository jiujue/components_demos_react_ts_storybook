import type { Meta, StoryObj } from '@storybook/react';

import CustomCard from '@/components/CustomCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/CustomCard',
  component: CustomCard,
} satisfies Meta<typeof CustomCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'test',
  },
};
