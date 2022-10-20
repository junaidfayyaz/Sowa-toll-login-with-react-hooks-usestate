import React from "react";
import "./Footer.css";
import icon1 from "../../Images/Social Media Icons-01.png";
import icon2 from "../../Images/Social Media Icons-02.png";
import icon3 from "../../Images/Social Media Icons-03.png";
import icon4 from "../../Images/Social Media Icons-04.png";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container-fluid footer-container">
        <div className="row">
          <div className="col-lg-2 footer-columns">
            <div className="first-col">
              <ul>
                <li>
                  <label className="main-label-footer" htmlFor="">
                    Account
                  </label>
                </li>
                <li className="footer-toplink">
                  <a href="https://www.sowatool.com/">Customer Login</a>
                </li>
                <br />
                <li>
                  <a href="https://www.sowatool.com/">Order History</a>
                </li>
                <br />
                <li>
                  <a href="https://www.sowatool.com/">Returns</a>
                </li>
                <br />
                <li>
                  <a href="https://www.sowatool.com/">
                    Order Shipping & Payment
                  </a>
                </li>
                <br />
                <li>
                  <a href="https://www.sowatool.com/">Help & Supprt</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 footer-column">
            <div className="second-col">
              <ul>
                <li>
                  <label className="main-label-footer" htmlFor="">
                    Downloads
                  </label>
                </li>
                <li className="footer-toplink">
                  <a href="https://www.sowatool.com/">Catalogs & Brochures</a>
                </li>
                <br />
                <li>
                  <a href="https://www.sowatool.com/">RGA</a>
                </li>
                <br />
                <li>
                  <a href="https://www.sowatool.com/">Quote Request Forms</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 footer-column">
            <div className="third-col">
              <ul>
                <li>
                  <label className="main-label-footer" htmlFor="">
                    Company
                  </label>
                </li>
                <li className="footer-toplink">
                  <a href="https://www.sowatool.com/">About US</a>
                </li>
                <br />
                <li>
                  <a href="https://www.sowatool.com/">Careers</a>
                </li>
                <br />

                <li>
                  <a href="https://www.sowatool.com/">Cusomer Support</a>
                </li>
                <br />
                <li>
                  <a href="https://www.sowatool.com/">Privacy Ploicy</a>
                </li>
                <br />
                <li>
                  <a href="https://www.sowatool.com/">Request Information</a>
                </li>
                <br />
                <li>
                  <a href="https://www.sowatool.com/">Give Us Your Feedback</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 footer-column">
            <div className="four-col">
              <ul>
                <li>
                  <label className="main-label-footer find" htmlFor="">
                    Finds A Distributor
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 footer-column">
            <label className="main-label-footer social-footer" htmlFor="">
              WE'RE SOCIAL
            </label>
            <div className="social-footer-icons">
              <ul>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={icon1} alt="icon1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={icon2} alt="icon2" />
                  </a>
                </li>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={icon3} alt="icon3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={icon4} alt="icon4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
