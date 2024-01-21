/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TicketButton = ({ className, divClassName, text = "Get your ticket now" }) => {
  const handleClick = () => {
    // Redirect to the specified link when the button is clicked
    window.location.href = "https://www.eventpop.me/e/17031";
  };

  return (
    <div className={`ticket-button ${className}`} onClick={handleClick}>
      <div className={`get-your-ticket-now ${divClassName}`}>{text}</div>
    </div>
  );
};

TicketButton.propTypes = {
  text: PropTypes.string,
};

TicketButton.propTypes = {
  text: PropTypes.string,
};
