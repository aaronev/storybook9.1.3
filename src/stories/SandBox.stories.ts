import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { SandBox } from './SandBox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SandBox',
  component: SandBox,
} satisfies Meta<typeof SandBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'SandBox',
  },
};