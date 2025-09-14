import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Checkbox } from './Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    hintId: "select-test-id",
    hint: "clicking will select or deselect checkbox",
    label: 'Select',
    invisibleLabel: false,
  },
};

export const InvisibleLabel: Story = {
  args: {
    hintId: "select-test-id",
    hint: "clicking will select or deselect checkbox",
    label: 'visually hidden select label',
    invisibleLabel: true,
  },
};

export const Disabled: Story = {
  args: {
    hintId: "select-test-id",
    hint: "clicking will select or deselect checkbox",
    label: 'Select',
    disabled: true,
  },
};