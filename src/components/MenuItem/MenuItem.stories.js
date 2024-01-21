import { MenuItem } from ".";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: {
    type: {
      options: ["highlighted", "regular"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Menu item",
    type: "highlighted",
    className: {},
    divClassName: {},
  },
};
