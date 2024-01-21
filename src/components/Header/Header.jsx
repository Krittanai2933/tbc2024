/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LogoPlaceholder } from "../LogoPlaceholder";
import { MenuItem } from "../MenuItem";
import "./style.css";
import { Link } from "react-router-dom";


export const Header = ({
  className,
  logoPlaceholderBtcClassName,
  logoPlaceholderBtc = "/img/btc-08-1.png",
  logoPlaceholderLogoPlaceholderClassName,
}) => {
  const handleTicketClick = () => {
    console.log("Ticket menu item clicked!");
    window.location.href = "https://www.eventpop.me/e/17031";
  };

  const handleAgendaClick = () => {
    console.log("Agenda menu item clicked!");
    return <Link to="/agenda" />;
  };

  return (
    <div className={`header ${className}`}>
      <div className="header-navigation">
        <LogoPlaceholder
          BTC={logoPlaceholderBtc}
          BTCClassName={logoPlaceholderBtcClassName}
          className={logoPlaceholderLogoPlaceholderClassName}
        />
        <div className="menu-bar">
          <div className="menu-items">
            <div>
              <Link to="/agenda">
              <MenuItem 
              className="menu-item-instance"
              divClassName="design-component-instance-node"
              text="Agenda"
              type="regular"
             
            /> </Link>
            </div>
            <MenuItem
              className="menu-item-instance"
              divClassName="design-component-instance-node"
              text="Speakers"
              type="regular"
            />
            <Link to="/sponsor">
            <MenuItem
              className="menu-item-instance"
              divClassName="design-component-instance-node"
              text="Sponsor"
              type="regular"
            /> </Link>
            <MenuItem
              className="menu-item-instance"
              divClassName="design-component-instance-node"
              text="Gallery"
              type="regular"
            />
            <MenuItem
              className="menu-item-instance"
              text="Ticket"
              type="highlighted"
              onClick={handleTicketClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


Header.propTypes = {
  logoPlaceholderBtcClassName: PropTypes.string,
};


