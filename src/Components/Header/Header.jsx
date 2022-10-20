import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiUsers } from "react-icons/fi"
import { FiSliders } from "react-icons/fi"
import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi"
import {RiAlignRight} from "react-icons/ri"
import logo from "../../Images/Sowa.png";
import flag from "../../Images/countryusa.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="row main">
          <div className="col-sm-3 col-md-4 col-xs-6">
            <div className="mid-header">
              <a href="https://www.sowatool.com/">
                <img className="header-img" src={logo} alt="sowa" />
              </a>
              <span class="header-tag-line hidden-xs hidden-sm">
                TOOLING YOUR WORLD.
              </span>
            </div>
          </div>
          <div className="col-sm-9 col-md-8 col-xs-3">
            <div className="right-align">
              <input type="search" />
              <span className="search-icon">
                <BsSearch />
              </span>
              <span className="head-icon">
                <ul className="header-icon">
                  <li className="user-icon">
                    <a href="https://www.sowatool.com/">
                      <FiUsers className="fiuser" />
                      <p>Login</p>
                    </a>
                  </li>
                  <li className="slider-icon">
                    <a href="https://www.sowatool.com/">
                      <FiSliders className="fislider" />
                      <span>0</span>
                    </a>
                  </li>
                  <li className="heart-icon">
                    <a href="https://www.sowatool.com/">
                      <FiHeart className="heart" />
                    </a>
                  </li>
                  <li className="bag-icon">
                    <a href="https://www.sowatool.com/" className="chk">
                      <FiShoppingBag className="bag" />
                      <p>0</p>
                    </a>
                  </li>
                  <li className="alignright-icon">
                    <a href="https://www.sowatool.com/">
                      <RiAlignRight className="alignright" />
                    </a>
                  </li>
                  <li>
                    <img src={flag} alt="flag" className="flag" />
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div class="row main-number-gmail">
          <div class="header-contact-section pull-right hidden-xs">
            <span class="header-contact-number">1-800-265-8221</span>
            <span class="header-contact-email">
              <a href="mailto:sales@sowatool.com">sales@sowatool.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
