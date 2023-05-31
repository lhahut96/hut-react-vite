import type { Meta, StoryObj } from '@storybook/react';

import Button, { ColorsProps } from '@/components/Button/index.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    colors: {
      control: 'select',
      options: Object.values(ColorsProps),
    },
    onClick: {
      action: () => console.log('yay'),
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    colors: ColorsProps.PRIMARY,
  },
};

export const Text: Story = {
  args: {
    colors: ColorsProps.TEXT,
  },
};
