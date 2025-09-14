import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Anchor } from './Anchor';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Anchor',
  component: Anchor,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    href: "https://www.google.com",
    label: 'google',
    target: "_blank",
    ariaLabel: "google link",
    hintId: "test-id",
    hint: "this link will redirect users to google.com"
  },
};

export const Downloadable: Story = {
  args: {
    href: "/",
    onClick: () => {alert('downloading...')},
    label: 'Download',
    download: true,
    ariaLabel: "download xyz",
    hintId: "test-download-id",
    hint: "this will trigger alert and open dialog"
  },
};
