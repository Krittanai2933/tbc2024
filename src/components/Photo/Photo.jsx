/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Photo = ({
  property1,
  className,
  btcClassName,
  btc = "/img/btc2023-1-1-8.png",
  img = "/img/btc2023-360-1-8.png",
  btc1 = "/img/btc2023-42-1-8.png",
  btc2 = "/img/btc2023-249-1-8.png",
  btc3 = "/img/btc2023-382-1-8.png",
  btc4 = "/img/btc2023-215-1-8.png",
  btc5 = "/img/btc2023-418-1-8.png",
  btc6 = "/img/btc2023-24-1-8.png",
  btc7 = "/img/btc2023-189-1-8.png",
  btc8 = "/img/btc2023-242-1-8.png",
  btc9 = "/img/btc2023-194-1-2.png",
}) => {
  return (
    <div className={`photo ${property1} ${className}`}>
      <img
        className={`btc ${btcClassName}`}
        alt="Btc"
        src={
          property1 === "two"
            ? img
            : property1 === "three"
            ? btc1
            : property1 === "four"
            ? btc2
            : property1 === "five"
            ? btc3
            : property1 === "six"
            ? btc4
            : property1 === "seven"
            ? btc5
            : property1 === "eight"
            ? btc6
            : property1 === "nine"
            ? btc7
            : property1 === "ten"
            ? btc8
            : property1 === "eleven"
            ? btc
            : btc9
        }
      />
    </div>
  );
};

Photo.propTypes = {
  property1: PropTypes.oneOf(["seven", "two", "ten", "three", "nine", "four", "eleven", "one", "five", "eight", "six"]),
  btc: PropTypes.string,
  img: PropTypes.string,
  btc1: PropTypes.string,
  btc2: PropTypes.string,
  btc3: PropTypes.string,
  btc4: PropTypes.string,
  btc5: PropTypes.string,
  btc6: PropTypes.string,
  btc7: PropTypes.string,
  btc8: PropTypes.string,
  btc9: PropTypes.string,
};
