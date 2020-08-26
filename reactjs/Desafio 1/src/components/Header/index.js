import React from "react";
import profileIcon from "../../../assets/facebook.svg";

import "./styles.css";

function Header() {
  return (
    <header>
      <div>
        <img src={profileIcon} alt="facebook" />
        <div id="my-profile">
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </div>
    </header>
  );
}

export default Header;
