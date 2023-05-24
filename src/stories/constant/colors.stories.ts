// CSF 3

import type { Meta, StoryObj } from '@storybook/react';

import { Colors, ColorsVariant } from './colors.tsx';

const meta: Meta<typeof Colors> = { component: Colors, tags: ['autodocs'] };
export default meta;

type Story = StoryObj<typeof Colors>;

export const Dark: Story = { args: { label: ColorsVariant.Dark } };

export const Gray: Story = { args: { label: ColorsVariant.Gray } };

export const Gray300: Story = { args: { label: ColorsVariant.Gray_300 } };

export const White: Story = { args: { label: ColorsVariant.White } };
