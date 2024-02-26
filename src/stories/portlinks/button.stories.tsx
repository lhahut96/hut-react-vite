import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button/PortLink/PortLinkButton';
import { ButtonTypeProps } from '@/components/Button/ButtonConstant';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'PortLinks/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: Object.values(ButtonTypeProps),
      onClick: { action: 'clicked' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: ButtonTypeProps.PRIMARY,
  },
};

export const Link: Story = {
  args: {
    type: ButtonTypeProps.PRIMARY,
    link: 'https://www.portchain.com',
  },
};

export const LinkNewTab: Story = {
  args: {
    type: ButtonTypeProps.PRIMARY,
    link: 'https://www.portchain.com',
    newTab: true,
  },
};

export const LinkYoutube: Story = {
  args: {
    type: ButtonTypeProps.PRIMARY,
    icon: 'youtube',
    newTab: true,
    link: 'https://www.portchain.com',
  },
};

export const Text: Story = {
  args: {
    type: ButtonTypeProps.TEXT,
  },
};
