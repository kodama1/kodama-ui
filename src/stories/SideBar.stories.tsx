import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../components/SideBar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Sidebar',
  component: Sidebar,
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // FontSize, Margin, Image size
    textSize: "text-sm",
  },
  argTypes: {
      textSize:{control:"select", options: ["text-xs", "text-sm", "text-base", "text-lg"]},
  }
};
