import type { Meta, StoryObj } from '@storybook/react';

import Button, { TypeProps } from '@/components/Button/index.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: Object.values(TypeProps),
      onClick: { action: 'clicked' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: TypeProps.PRIMARY,
  },
};

export const Text: Story = {
  args: {
    type: TypeProps.TEXT,
  },
};
