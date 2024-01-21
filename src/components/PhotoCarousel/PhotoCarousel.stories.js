import { PhotoCarousel } from ".";

export default {
  title: "Components/PhotoCarousel",
  component: PhotoCarousel,
  argTypes: {
    property1: {
      options: ["default", "variant-5", "variant-2", "variant-3", "variant-4", "variant-8", "variant-7", "variant-6"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    photosClassName: {},
    photoContainerPhotoBtcClassName: {},
    photoContainerPhotoBtc: "/img/btc2023-1-1-8.png",
    photoContainerPhotoBtcClassNameOverride: {},
    photoContainerPhotoImg: "/img/btc2023-360-1-8.png",
    photoContainerPhotoImgClassName: {},
    photoContainerPhotoBtc1: "/img/btc2023-42-1-8.png",
    photoContainerPhotoPropertyClassName: {},
    photoContainerPhotoImgClassNameOverride: {},
    photoContainerPhotoBtc2: "/img/btc2023-249-1.png",
    photoContainerPhotoBtc3: "/img/btc2023-242-1.png",
    photoContainerPhotoBtcClassName1: {},
    photoContainerPhotoBtcClassName2: {},
    photoContainerPhotoBtc4: "/img/btc2023-242-1.png",
    photoContainerPhotoBtc5: "/img/btc2023-242-1.png",
    photoContainerPhotoBtcClassName3: {},
    photoContainerPhotoBtcClassName4: {},
    photoContainerPhotoBtc6: "/img/btc2023-242-1.png",
    photoContainerPhotoBtcClassName5: {},
    photoContainerPhotoBtc7: "/img/btc2023-242-1.png",
    photoContainerPhotoBtc8: "/img/btc2023-242-1.png",
    photoContainerPhotoBtcClassName6: {},
  },
};
