import { PhotoContainer } from ".";

export default {
  title: "Components/PhotoContainer",
  component: PhotoContainer,
  argTypes: {
    size: {
      options: ["small", "big"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "small",
    photoProperty1: "one",
    photoBtc: "abc",
    photoBtcClassName: {},
    photoImg: "abc",
    photoBtc1: "abc",
    photoPropertyClassName: {},
    className: {},
    photoBtc2: "abc",
    photoBtc3: "abc",
    photoBtc4: "abc",
    photoBtc5: "abc",
    photoBtc6: "abc",
    photoBtc7: "abc",
    photoBtc8: "abc",
  },
};
