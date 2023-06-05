import type { Meta, StoryObj } from '@storybook/react';

import TabPicture, { TabPictureType } from '@/components/Misc/TabPicture.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/TabPicture',
  component: TabPicture,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: Object.values(TabPictureType),
    },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div className="w-1/2">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TabPicture>;

export default meta;
type TabPictureStory = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: TabPictureStory = {
  args: {
    type: TabPictureType.DEFAULT,
    text: 'T1',
  },
};

export const Error: TabPictureStory = {
  args: {
    type: TabPictureType.ADD,
    text: '+',
  },
};
