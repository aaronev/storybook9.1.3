import type { Meta, StoryObj } from '@storybook/react-vite';

import { Table } from './Table';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    caption: 'Downloadable Items',
    columns: ["Name", "Device", "Path", "Status"],
    data: [ 
      {name: 'smss.exe', device: 'Mario', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled'}, 
      {name: 'netsh.exe', device: 'Luigi', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available'}, 
      {name: 'uxtheme.dll', device: 'Peach', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available'}, 
      {name: 'aries.sys', device: 'Daisy', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys', status: 'scheduled'}, 
      {name: 'cryptbase.dll', device: 'Yoshi', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled'}, 
      {name: '7za.exe', device: 'Toad', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled'} ]
  },
};

export const SelectDownloadableItems: Story = {
  args: {
    caption: 'Downloadable Items',
    selectable: true,
    downloadable: true,
    columns: ["Name", "Device", "Path", "Status"],
    data: [ 
      {name: 'smss.exe', device: 'Mario', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled'}, 
      {name: 'netsh.exe', device: 'Luigi', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available'}, 
      {name: 'uxtheme.dll', device: 'Peach', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available'}, 
      {name: 'aries.sys', device: 'Daisy', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys', status: 'scheduled'}, 
      {name: 'cryptbase.dll', device: 'Yoshi', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled'}, 
      {name: '7za.exe', device: 'Toad', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled'} ]
  },
};