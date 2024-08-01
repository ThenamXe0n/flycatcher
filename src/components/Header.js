import React from "react";
import logo from "../assets/img/logo/logo.png";
import { Link } from "react-router-dom";
import HeaderTop from "./header/HeaderTop";
import HeaderBottom from "./header/HeaderBottom";
import NavBar from "./Navigation/NavBar";

const Header = () => {
  return (
    <div>
      {" "}
      <div>
        <header>
          <div className="tp-header-area p-relative z-index-11">
            {/* header top start  */}
            <HeaderTop />
            {/* header top end */}
            {/* header bottom start */}
            {/* <HeaderBottom /> */}
            <NavBar />
            {/* header bottom start */}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
