import React from "react";
import brandSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={brandSpotify} alt="brand spotify" />

      <a className="header__link" href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;
