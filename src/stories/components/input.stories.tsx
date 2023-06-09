import type { Meta, StoryObj } from '@storybook/react';

import Input, { InputType } from '@/components/Input/index.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: Object.values(InputType),
    },
  },
  decorators: [
    (Story) => (
      <div className="w-1/2">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type InputStory = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: InputStory = {
  args: {
    type: InputType.DEFAULT,
  },
};

export const Error: InputStory = {
  args: {
    type: InputType.ERROR,
  },
};

export const Validate: InputStory = {
  args: {
    type: InputType.VALIDATE,
  },
};

export const Disabled: InputStory = {
  args: {
    type: InputType.DISABLED,
  },
};

export const Password: InputStory = {
  args: {
    type: InputType.PASSWORD,
  },
};
