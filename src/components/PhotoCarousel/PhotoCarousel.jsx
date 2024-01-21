/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { PhotoContainer } from "../PhotoContainer";
import "./style.css";

export const PhotoCarousel = ({
  property1,
  className,
  photosClassName,
  photoContainerPhotoBtcClassName,
  photoContainerPhotoBtc = "/img/btc2023-1-1-8.png",
  photoContainerPhotoBtcClassNameOverride,
  photoContainerPhotoImg = "/img/btc2023-360-1-8.png",
  photoContainerPhotoImgClassName,
  photoContainerPhotoBtc1 = "/img/btc2023-42-1-8.png",
  photoContainerPhotoPropertyClassName,
  photoContainerPhotoImgClassNameOverride,
  photoContainerPhotoBtc2 = "/img/btc2023-249-1.png",
  photoContainerPhotoBtc3 = "/img/btc2023-242-1.png",
  photoContainerPhotoBtcClassName1,
  photoContainerPhotoBtcClassName2,
  photoContainerPhotoBtc4 = "/img/btc2023-242-1.png",
  photoContainerPhotoBtc5 = "/img/btc2023-242-1.png",
  photoContainerPhotoBtcClassName3,
  photoContainerPhotoBtcClassName4,
  photoContainerPhotoBtc6 = "/img/btc2023-242-1.png",
  photoContainerPhotoBtcClassName5,
  photoContainerPhotoBtc7 = "/img/btc2023-242-1.png",
  photoContainerPhotoBtc8 = "/img/btc2023-242-1.png",
  photoContainerPhotoBtcClassName6,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`photo-carousel ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`photos ${state.property1} ${photosClassName}`}>
        <PhotoContainer
          className={`${
            (state.property1 === "variant-2" ||
              state.property1 === "variant-3" ||
              state.property1 === "variant-4" ||
              state.property1 === "variant-5" ||
              state.property1 === "variant-6" ||
              state.property1 === "variant-7" ||
              state.property1 === "variant-8") &&
            "class-3"
          }`}
          photoBtc={photoContainerPhotoBtc}
          photoBtcClassName={photoContainerPhotoBtcClassName}
          photoProperty1="eleven"
          photoPropertyClassName={`${state.property1 === "default" ? "class" : "class-2"}`}
          size={state.property1 === "default" ? "big" : "small"}
        />
        <PhotoContainer
          className={`${
            ["variant-3", "variant-4", "variant-5", "variant-6", "variant-7", "variant-8"].includes(state.property1) &&
            "class-3"
          }`}
          photoBtcClassName={photoContainerPhotoBtcClassNameOverride}
          photoImg={photoContainerPhotoImg}
          photoProperty1="two"
          photoPropertyClassName={`${["default", "variant-2"].includes(state.property1) ? "class" : "class-2"}`}
          size={["default", "variant-2"].includes(state.property1) ? "big" : "small"}
        />
        <PhotoContainer
          className={`${
            ["variant-4", "variant-5", "variant-6", "variant-7", "variant-8"].includes(state.property1) && "class-3"
          }`}
          photoBtc1={photoContainerPhotoBtc1}
          photoBtcClassName={photoContainerPhotoImgClassName}
          photoProperty1="three"
          photoPropertyClassName={photoContainerPhotoPropertyClassName}
          size={["default", "variant-2", "variant-3"].includes(state.property1) ? "big" : "small"}
        />
        <PhotoContainer
          className={`${
            ["default", "variant-5", "variant-6", "variant-7", "variant-8"].includes(state.property1) && "class-3"
          }`}
          photoBtc2={photoContainerPhotoBtc2}
          photoBtcClassName={photoContainerPhotoImgClassNameOverride}
          photoProperty1="four"
          photoPropertyClassName={`${
            ["variant-2", "variant-3", "variant-4"].includes(state.property1) ? "class" : "class-2"
          }`}
          size={["variant-2", "variant-3", "variant-4"].includes(state.property1) ? "big" : "small"}
        />
        <PhotoContainer
          className={`${
            ["default", "variant-2", "variant-6", "variant-7", "variant-8"].includes(state.property1) && "class-3"
          }`}
          photoBtc3={photoContainerPhotoBtc3}
          photoBtcClassName={photoContainerPhotoBtcClassName1}
          photoProperty1="five"
          photoPropertyClassName={`${
            ["variant-3", "variant-4", "variant-5"].includes(state.property1) ? "class" : "class-2"
          }`}
          size={["variant-3", "variant-4", "variant-5"].includes(state.property1) ? "big" : "small"}
        />
        <PhotoContainer
          className={`${
            ["default", "variant-2", "variant-3", "variant-7", "variant-8"].includes(state.property1) && "class-3"
          }`}
          photoBtc4={photoContainerPhotoBtc4}
          photoBtcClassName={photoContainerPhotoBtcClassName2}
          photoProperty1="six"
          photoPropertyClassName={`${
            ["variant-4", "variant-5", "variant-6"].includes(state.property1) ? "class" : "class-2"
          }`}
          size={["variant-4", "variant-5", "variant-6"].includes(state.property1) ? "big" : "small"}
        />
        <PhotoContainer
          className={`${
            ["default", "variant-2", "variant-3", "variant-4", "variant-8"].includes(state.property1) && "class-3"
          }`}
          photoBtc5={photoContainerPhotoBtc5}
          photoBtcClassName={photoContainerPhotoBtcClassName3}
          photoProperty1="seven"
          photoPropertyClassName={`${
            ["variant-5", "variant-6", "variant-7"].includes(state.property1) ? "class" : "class-2"
          }`}
          size={["variant-5", "variant-6", "variant-7"].includes(state.property1) ? "big" : "small"}
        />
        <PhotoContainer
          className={`${
            ["default", "variant-2", "variant-3", "variant-4", "variant-5"].includes(state.property1) && "class-3"
          }`}
          photoBtc6={photoContainerPhotoBtc6}
          photoBtcClassName={photoContainerPhotoBtcClassName4}
          photoProperty1="eight"
          photoPropertyClassName={`${
            ["variant-6", "variant-7", "variant-8"].includes(state.property1) ? "class" : "class-2"
          }`}
          size={["variant-6", "variant-7", "variant-8"].includes(state.property1) ? "big" : "small"}
        />
        <PhotoContainer
          className={`${
            ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(state.property1) &&
            "class-3"
          }`}
          photoBtc7={photoContainerPhotoBtc7}
          photoBtcClassName={photoContainerPhotoBtcClassName5}
          photoProperty1="nine"
          photoPropertyClassName={`${["variant-7", "variant-8"].includes(state.property1) ? "class" : "class-2"}`}
          size={["variant-7", "variant-8"].includes(state.property1) ? "big" : "small"}
        />
        <PhotoContainer
          className={`${
            (state.property1 === "default" ||
              state.property1 === "variant-2" ||
              state.property1 === "variant-3" ||
              state.property1 === "variant-4" ||
              state.property1 === "variant-5" ||
              state.property1 === "variant-6" ||
              state.property1 === "variant-7") &&
            "class-3"
          }`}
          photoBtc8={photoContainerPhotoBtc8}
          photoBtcClassName={photoContainerPhotoBtcClassName6}
          photoProperty1="ten"
          photoPropertyClassName={`${state.property1 === "variant-8" ? "class" : "class-2"}`}
          size={state.property1 === "variant-8" ? "big" : "small"}
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "click":
        return {
          property1: "variant-3",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "click":
        return {
          property1: "variant-4",
        };
    }
  }

  if (state.property1 === "variant-6") {
    switch (action) {
      case "click":
        return {
          property1: "variant-5",
        };
    }
  }

  if (state.property1 === "variant-7") {
    switch (action) {
      case "click":
        return {
          property1: "variant-6",
        };
    }
  }

  if (state.property1 === "variant-8") {
    switch (action) {
      case "click":
        return {
          property1: "variant-7",
        };
    }
  }

  return state;
}

PhotoCarousel.propTypes = {
  property1: PropTypes.oneOf([
    "default",
    "variant-5",
    "variant-2",
    "variant-3",
    "variant-4",
    "variant-8",
    "variant-7",
    "variant-6",
  ]),
  photoContainerPhotoBtc: PropTypes.string,
  photoContainerPhotoImg: PropTypes.string,
  photoContainerPhotoBtc1: PropTypes.string,
  photoContainerPhotoBtc2: PropTypes.string,
  photoContainerPhotoBtc3: PropTypes.string,
  photoContainerPhotoBtc4: PropTypes.string,
  photoContainerPhotoBtc5: PropTypes.string,
  photoContainerPhotoBtc6: PropTypes.string,
  photoContainerPhotoBtc7: PropTypes.string,
  photoContainerPhotoBtc8: PropTypes.string,
};
