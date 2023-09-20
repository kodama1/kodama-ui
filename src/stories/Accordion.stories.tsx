import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Accordion } from '../components/Accordion';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Accordion',
  component: Accordion,
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// These args doesn't work also, I think it is something linked to tailwind and the way I'm declaring things
export const Primary: Story = {
  args: {
    textSize: "text-sm",
    textColor: "text-blue-600",
    textColorDarkMode: "text-blue-600",
  },
  argTypes: {
    textSize:{control:"select", options: ["text-xs", "text-sm", "text-base", "text-lg"]},
  },
};

const Template = (args:{}) => <Accordion {...args} />;

// Trying to test Accordion #1 rectract function, and interactivity inside StoryBook although it is not working yet for some reason
export const Retract:any = Template.bind({});
Retract.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const buttonSelector = await canvas.getByRole('button', { name: /Accordion #1/i });
  await userEvent.click(buttonSelector);
};