/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Photo } from "../Photo";
import "./style.css";

export const PhotoContainer = ({
  size,
  photoProperty1 = "one",
  photoBtc,
  photoBtcClassName,
  photoImg,
  photoBtc1,
  photoPropertyClassName,
  className,
  photoBtc2,
  photoBtc3,
  photoBtc4,
  photoBtc5,
  photoBtc6,
  photoBtc7,
  photoBtc8,
}) => {
  return (
    <div className={`photo-container ${size} ${className}`}>
      <Photo
        btc={photoBtc}
        btc1={photoBtc1}
        btc2={photoBtc2}
        btc3={photoBtc3}
        btc4={photoBtc4}
        btc5={photoBtc5}
        btc6={photoBtc6}
        btc7={photoBtc7}
        btc8={photoBtc8}
        btc9={size === "small" ? "/img/btc2023-194-1-1.png" : undefined}
        btcClassName={photoBtcClassName}
        className={photoPropertyClassName}
        img={photoImg}
        property1={photoProperty1}
      />
    </div>
  );
};

PhotoContainer.propTypes = {
  size: PropTypes.oneOf(["small", "big"]),
  photoProperty1: PropTypes.string,
  photoBtc: PropTypes.string,
  photoImg: PropTypes.string,
  photoBtc1: PropTypes.string,
  photoBtc2: PropTypes.string,
  photoBtc3: PropTypes.string,
  photoBtc4: PropTypes.string,
  photoBtc5: PropTypes.string,
  photoBtc6: PropTypes.string,
  photoBtc7: PropTypes.string,
  photoBtc8: PropTypes.string,
};
