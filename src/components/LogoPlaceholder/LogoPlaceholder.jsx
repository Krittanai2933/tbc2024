/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogoPlaceholder = ({ className, BTCClassName, BTC = "/img/btc-08-1-1.png" }) => {
  return (
    <div className={`logo-placeholder ${className}`}>
      <img className={`BTC ${BTCClassName}`} alt="Btc" src={BTC} />
    </div>
  );
};

LogoPlaceholder.propTypes = {
  BTC: PropTypes.string,
};
