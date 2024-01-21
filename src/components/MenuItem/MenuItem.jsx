/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MenuItem = ({ text = "Menu item", type, className, divClassName, onClick }) => {
  const handleClick = () => {
    console.log(`${text} menu item clicked!`);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`menu-item ${type} ${className}`} onClick={handleClick}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </div>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(["highlighted", "regular"]),
  onClick: PropTypes.func,
};

// Example usage:

const handleTicketClick = () => {
  window.location.href = "https://www.eventpop.me/e/17031";
};

const handleAgendaClick = () => {
  console.log("Agenda menu item clicked!");
  const navigate = useNavigate();

  // Navigate to the "/agenda" route
  navigate("/agenda");
  // Add your logic for handling agenda click here
};

const handleSpeakerClick = () => {
  console.log("Speaker menu item clicked!");
  // Add your logic for handling speaker click here
};