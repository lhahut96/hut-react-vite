import type { Meta, StoryObj } from '@storybook/react';

import Card, { CardLabelColor, CardType } from '@/components/Card/index.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: Object.values(CardType),
      defaultValue: CardType.PRIMARY,
    },
    label: {
      defaultValue: {
        color: CardLabelColor.DARK,
        text: 'Label',
      },
      mapping: {
        color: CardLabelColor.DARK,
        text: 'Label',
      },
    },
    checkList: {
      defaultValue: {
        all: 100,
        done: 50,
      },
      mapping: {
        all: 100,
        done: 50,
      },
    },
    imageUrl: {
      defaultValue: 'https://picsum.photos/200',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: CardType.PRIMARY,
  },
};

export const Label: Story = {
  args: {
    type: CardType.TEXT,
    label: {
      text: 'Label',
      color: CardLabelColor.DARK,
    },
  },
};

export const Checklist: Story = {
  args: {
    type: CardType.TEXT,
    label: {
      text: 'Label',
      color: CardLabelColor.DARK,
    },
    checkList: {
      all: 100,
      done: 50,
    },
  },
};

export const Image: Story = {
  args: {
    type: CardType.TEXT,
    label: {
      text: 'Label',
      color: CardLabelColor.DARK,
    },
    checkList: {
      all: 100,
      done: 50,
    },
    imageUrl: 'https://picsum.photos/400',
  },
};
