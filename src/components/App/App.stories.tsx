import type { Meta, StoryObj } from "@storybook/react";

import { App } from "./App.js";

const meta = {
  title: "App",
  component: App,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JaneDoe: Story = {
  args: {
    name: "Jane Doe",
  },
};
