import { Photo } from ".";

export default {
  title: "Components/Photo",
  component: Photo,
  argTypes: {
    property1: {
      options: ["seven", "two", "ten", "three", "nine", "four", "eleven", "one", "five", "eight", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "seven",
    className: {},
    btcClassName: {},
    btc: "/img/btc2023-1-1-8.png",
    img: "/img/btc2023-360-1-8.png",
    btc1: "/img/btc2023-42-1-8.png",
    btc2: "/img/btc2023-249-1-8.png",
    btc3: "/img/btc2023-382-1-8.png",
    btc4: "/img/btc2023-215-1-8.png",
    btc5: "/img/btc2023-418-1-8.png",
    btc6: "/img/btc2023-24-1-8.png",
    btc7: "/img/btc2023-189-1-8.png",
    btc8: "/img/btc2023-242-1-8.png",
    btc9: "/img/btc2023-194-1-2.png",
  },
};
