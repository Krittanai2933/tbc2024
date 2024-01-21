import React from "react";
import { Header } from "../Header";
import { TicketButton } from "../TicketButton";
import "./style.css";

export const Sponsorpage = () => {
    return (
        <div className="sponsor">
            <div className="div">
                <div className="frame">
                    <div className="frame-wrapper">
                        <div className="frame-2">
                            <p className="BECOME-a-SPONSOR">
                                <span className="span">BECOME A</span>
                                <span className="ticket-button-instance"> SPONSOR</span>
                            </p>
                            <p className="where-business-meets">
                                Where business meets Bitcoin <br />
                                September 14 - September 15,<br />
                                2024 • Bangkok
                            </p>
                            <TicketButton
                                className="ticket-button-2"
                                divClassName="ticket-button-instance"
                                text="View a sponsorship"
                            />
                        </div>
                    </div>
                </div>
                <img className="line" alt="Line" src="\img\line.png" />
                <div className="group">
                    <div className="overlap-group">
                        <div className="text-wrapper-2">Subscribers</div>
                        <p className="p">
                            <span className="text-wrapper-3">13</span>
                            <span className="text-wrapper-4">.5</span>
                            <span className="text-wrapper-5">&nbsp;</span>
                            <span className="text-wrapper-6">K</span>
                        </p>
                    </div>
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap">
                        <div className="text-wrapper-2">Unique viewers</div>
                        <p className="element-k">
                            <span className="text-wrapper-3">52</span>
                            <span className="text-wrapper-4">.3</span>
                            <span className="text-wrapper-5">&nbsp;</span>
                            <span className="text-wrapper-6">K</span>
                        </p>
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="overlap-2">
                        <div className="text-wrapper-2">Impression</div>
                        <p className="p">
                            <span className="text-wrapper-3">11</span>
                            <span className="text-wrapper-4">.7</span>
                            <span className="text-wrapper-5">&nbsp;</span>
                            <span className="text-wrapper-6">M</span>
                        </p>
                    </div>
                </div>
                <div className="div-wrapper">
                    <div className="overlap-3">
                        <div className="text-wrapper-7">Views</div>
                        <p className="p">
                            <span className="text-wrapper-3">940</span>
                            <span className="text-wrapper-4">.1</span>
                            <span className="text-wrapper-5">&nbsp;</span>
                            <span className="text-wrapper-6">K</span>
                        </p>
                    </div>
                </div>
                <img className="img" alt="Group" src="\img\group.png" />
                <img className="line-2" alt="Line" src="line-4.svg" />
                <div className="group-2">
                    <div className="overlap-4">
                        <div className="text-wrapper-8">Discord</div>
                        <p className="strong-and-engaged">
                            <span className="text-wrapper-9">strong</span>
                            <span className="text-wrapper-10">
                                {" "}
                                and <br />
                                engaged on Discord!
                            </span>
                        </p>
                        <p className="element-k-2">
                            <span className="text-wrapper-11">4</span>
                            <span className="text-wrapper-12">&nbsp;</span>
                            <span className="text-wrapper-13">K</span>
                            <span className="text-wrapper-14">&nbsp;</span>
                        </p>
                    </div>
                    <img className="group-3" alt="Group" src="\img\discord.png" />
                </div>
                <div className="group-4">
                    <img className="group-5" alt="Group" src="\img\facebook.png" />
                    <div className="overlap-5">
                        <div className="text-wrapper-8">Facebook</div>
                        <p className="members-in-our">
                            <span className="text-wrapper-15">members</span>
                            <span className="text-wrapper-16">&nbsp;</span>
                            <span className="text-wrapper-17">in our Facebook Group!</span>
                        </p>
                        <p className="element-k-3">
                            <span className="text-wrapper-11">12</span>
                            <span className="text-wrapper-12">&nbsp;</span>
                            <span className="text-wrapper-13">K</span>
                            <span className="text-wrapper-18">&nbsp;</span>
                        </p>
                    </div>
                </div>
                <div className="group-6">
                    <div className="text-wrapper-19">BOB Spaces</div>
                    <p className="a-itcoin-only">
                        <span className="text-wrapper-15">
                            A ₿itcoin only hatchery,
                            <br />
                        </span>
                        <span className="text-wrapper-20">incubator</span>
                        <span className="text-wrapper-21"> and </span>
                        <span className="text-wrapper-20">co-working space</span>
                    </p>
                    <img className="intersect" alt="Intersect" src="\img\bob.png" />
                </div>
                <div className="group-7">
                    <div className="overlap-6">
                        <div className="text-wrapper-22">Nostr</div>
                        <p className="joined-the-nostr">
                            joined the Nostr <br />
                            network in 4 months!
                        </p>
                        <p className="element-k-4">
                            <span className="text-wrapper-23">3</span>
                            <span className="text-wrapper-24">&nbsp;</span>
                            <span className="text-wrapper-25">K</span>
                            <span className="text-wrapper-26">&nbsp;</span>
                        </p>
                    </div>
                    <img className="nostr" alt="Nostr" src="\img\Nostr_logo.png" />
                </div>
                <a href="mailto:rightshift.service@gmail.com ">
                <img className="image-3" alt="Image" src="\img\2.png" />
                </a>
                <img className="image-4" alt="Image" src="\img\10.png" />
                <img className="image-5" alt="Image" src="\img\11.png" />
                <img className="image-6" alt="Image" src="\img\12.png" />
                <img className="image-7" alt="Image" src="\img\7.png" />
                <Header
                    className="header-instance"
                    logoPlaceholderBtc="BTC-08-1-3.png"
                    logoPlaceholderBtcClassName="header-3"
                    logoPlaceholderLogoPlaceholderClassName="header-2"
                />
            </div>
        </div>
    );
};
