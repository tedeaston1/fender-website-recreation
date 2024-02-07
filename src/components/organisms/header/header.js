import React from "react";
import SearchForm from "../../molecules/SearchForm/SearchForm";
import LinkedImage from "../../molecules/LinkedImage/LinkedImage";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="first-header-container">
        <div className="logo-wrapper">
          <LinkedImage className="logo" alt="logo" src="https://i.etsystatic.com/34531699/r/il/16de75/3791141188/il_1588xN.3791141188_m719.jpg" />
        </div>
        <div className="search-form-wrapper">
          <SearchForm />
        </div>
        <div className="right-menu-wrapper">
          <div className="icon-wrapper">
            <LinkedImage className="icon "alt="location" src="https://www.fender.com/on/demandware.static/Sites-Fender-EMEA-Site/-/default/dw31301d04/images/locator.svg" />
          </div>
          <div className="icon-wrapper">
            <LinkedImage className="icon" alt="cart" src="https://www.fender.com/on/demandware.static/Sites-Fender-EMEA-Site/-/default/dw7dd80e1e/images/minicart.svg" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;