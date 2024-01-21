import React from "react";
import { Header } from "../../components/Header";
import { MainLogo } from "../../components/MainLogo";
import { MainSponsor } from "../../components/MainSponsor";
import { PhotoCarousel } from "../../components/PhotoCarousel";
import { Sponsor } from "../../components/Sponsor";
import { TicketButton } from "../../components/TicketButton";
import { DirectionNextStateDefault } from "../../icons/DirectionNextStateDefault";
import { DirectionPreviousStateDefault } from "../../icons/DirectionPreviousStateDefault";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="overlap-group">
          <div className="landing-pict">
            <div className="title-area">
              <div className="text-wrapper-2">BTC2024</div>
              <p className="p">September 14 - September 15, 2024 • Bangkok</p>
              <TicketButton />
            </div>
          </div>
        </div>
        <div className="text-wrapper-3">Watch the ‘23 recap</div>
        {/* <div className="text-wrapper-4">Speakers</div>
        <div className="text-wrapper-5">Host</div>
        <div className="text-wrapper-6">Our Sponsor</div> */}
        {/* <div className="countdown-time">
          <p className="text-wrapper-7">7 Month : 15 Day : 5 Hour : 23 Minute</p>
        </div> */}
        <div className="frame">
        <iframe width="1200" height="545" src="https://www.youtube.com/embed/ihoniIyyHzQ?si=-AaP5KzTTG-SGbyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        {/* <PhotoCarousel
          className="photo-carousel-instance"
          photoContainerPhotoBtc="/img/btc2023-1-1-9.png"
          photoContainerPhotoBtc1="/img/btc2023-42-1-9.png"
          photoContainerPhotoBtc2="/img/btc2023-249-1-9.png"
          photoContainerPhotoBtc3="/img/btc2023-382-1-9.png"
          photoContainerPhotoBtc4="/img/btc2023-215-1-9.png"
          photoContainerPhotoBtc5="/img/btc2023-418-1-9.png"
          photoContainerPhotoBtc6="/img/btc2023-24-1-9.png"
          photoContainerPhotoBtc7="/img/btc2023-189-1-9.png"
          photoContainerPhotoBtc8="/img/btc2023-242-1-9.png"
          photoContainerPhotoBtcClassName="photo-carousel-3"
          photoContainerPhotoBtcClassName1="photo-carousel-8"
          photoContainerPhotoBtcClassName2="photo-carousel-9"
          photoContainerPhotoBtcClassName3="photo-carousel-10"
          photoContainerPhotoBtcClassName4="photo-carousel-11"
          photoContainerPhotoBtcClassName5="photo-carousel-12"
          photoContainerPhotoBtcClassName6="photo-carousel-13"
          photoContainerPhotoBtcClassNameOverride="photo-carousel-4"
          photoContainerPhotoImg="/img/btc2023-360-1-9.png"
          photoContainerPhotoImgClassName="photo-carousel-5"
          photoContainerPhotoImgClassNameOverride="photo-carousel-7"
          photoContainerPhotoPropertyClassName="photo-carousel-6"
          photosClassName="photo-carousel-2"
          property1="default"
        />
        <div className="slider">
          <div className="person-photos">
            <div className="person">
              <img className="rectangle" alt="Rectangle" src="/img/rectangle-2-3.png" />
              <div className="text-wrapper-9">Sascha Grumbach</div>
              <p className="CEO-co-founder-green">
                CEO &amp; Co-Founder <br />
                Green Mining DAO
              </p>
            </div>
            <div className="person-2">
              <img className="rectangle" alt="Rectangle" src="/img/rectangle-2-3.png" />
              <div className="text-wrapper-9">Sascha Grumbach</div>
              <p className="CEO-co-founder-green">
                CEO &amp; Co-Founder <br />
                Green Mining DAO
              </p>
            </div>
            <div className="person-3">
              <img className="rectangle" alt="Rectangle" src="/img/rectangle-2-3.png" />
              <div className="text-wrapper-9">Sascha Grumbach</div>
              <p className="CEO-co-founder-green">
                CEO &amp; Co-Founder <br />
                Green Mining DAO
              </p>
            </div>
            <div className="person-4">
              <img className="rectangle" alt="Rectangle" src="/img/rectangle-2-3.png" />
              <div className="text-wrapper-9">Sascha Grumbach</div>
              <p className="CEO-co-founder-green">
                CEO &amp; Co-Founder <br />
                Green Mining DAO
              </p>
            </div>
          </div>
          <DirectionPreviousStateDefault className="arrows" />
          <DirectionNextStateDefault className="direction-next-state-default" />
        </div>
        <TicketButton className="ticket-button-instance" divClassName="ticket-button-2" text="See all" />
        <MainLogo className="main-logo-instance" />
        <MainSponsor className="main-sponsor-instance" />
        <MainSponsor className="main-sponsor-2" />
        <MainSponsor className="main-sponsor-3" />
        <MainSponsor className="main-sponsor-4" />
        <MainSponsor className="main-sponsor-5" />
        <MainSponsor className="main-sponsor-6" />
        <Sponsor className="sponsor-instance" />
        <Sponsor className="sponsor-2" />
        <Sponsor className="sponsor-3" />
        <Sponsor className="sponsor-4" />
        <Sponsor className="sponsor-5" />
        <Sponsor className="sponsor-6" />
        <Sponsor className="sponsor-7" />
        <Sponsor className="sponsor-8" />
        <Sponsor className="sponsor-9" />
        <Sponsor className="sponsor-10" />
        <Sponsor className="sponsor-11" />
        <Sponsor className="sponsor-12" />
        <img className="line" alt="Line" src="/img/line-013-3.png" />
        <img className="img" alt="Line" src="/img/line-013-3.png" />
        <img className="line-2" alt="Line" src="/img/line-013-3.png" />
        <img className="image" alt="Image" src="/img/image-8.png" />
        */
        <Header
          className="header-instance"
          logoPlaceholderBtc="/img/btc-08-1-2.png"
          logoPlaceholderBtcClassName="header-2"
          logoPlaceholderLogoPlaceholderClassName="header-3"
        /> }
      </div>
    </div>
  );
};
