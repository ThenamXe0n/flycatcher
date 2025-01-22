import React from "react";
import logo from "../assets/img/logo/logo.svg";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaLinkedin,
  FaVimeo,
  FaFacebook,
} from "react-icons/fa6";
import {} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Footer = () => {
  const clearStorage=() =>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    Cookies.remove("userID");
    Cookies.remove("token");
    Cookies.set("UserLoggedIn", "no");
    window.location.reload()
  }
  return (
    <footer>
      <div className="tp-footer-area" data-bg-color="footer-bg-grey">
        <div className="tp-footer-top py-32">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-1 mb-50">
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-logo">
                      <Link to="/">
                        <img src={logo} alt="logo" height={250} />
                      </Link>
                    </div>
                    <div className="tp-footer-social flex gap-5">
                      <a href="https://facebook.com">
                        <FaSquareFacebook />
                      </a>
                      <a href="https://twitter.com ">
                        <FaSquareXTwitter />
                      </a>
                      <a href="https://linkedin.com">
                        <FaLinkedin />
                      </a>
                      <a href="#">
                        <FaVimeo />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-2 mb-50">
                  <h4 className="tp-footer-widget-title">My Account</h4>
                  <div className="tp-footer-widget-content">
                    <ul className="list-none">
                      <li>
                        <Link to="/order">Track Orders</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Wishlist</Link>
                      </li>
                      <li>
                        <Link to="/profile">My Account</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-3 mb-50">
                  <h4 className="tp-footer-widget-title">Infomation</h4>
                  <div className="tp-footer-widget-content">
                    <ul className="list-none">
                      <li>
                        <a href="#">Our Story</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-4 mb-50">
                  <h4 className="tp-footer-widget-title">Talk To Us</h4>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-talk mb-20">
                      <span>Got Questions? Call us</span>
                      <h4>
                        <a href="tel:670-413-90-762">+91 8319850260</a>
                      </h4>
                    </div>
                    <div className="tp-footer-contact">
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <svg
                              width={18}
                              height={16}
                              viewBox="0 0 18 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13 5.40039L10.496 7.40039C9.672 8.05639 8.32 8.05639 7.496 7.40039L5 5.40039"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 11.4004H5.8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 8.19922H3.4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>
                            <a href="mailto:thenameet0@gmail.com">
                             thenameet0@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <svg
                              width={17}
                              height={20}
                              viewBox="0 0 17 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.50001 10.9417C9.99877 10.9417 11.2138 9.72668 11.2138 8.22791C11.2138 6.72915 9.99877 5.51416 8.50001 5.51416C7.00124 5.51416 5.78625 6.72915 5.78625 8.22791C5.78625 9.72668 7.00124 10.9417 8.50001 10.9417Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M1.21115 6.64496C2.92464 -0.887449 14.0841 -0.878751 15.7889 6.65366C16.7891 11.0722 14.0406 14.8123 11.6313 17.126C9.88298 18.8134 7.11704 18.8134 5.36006 17.126C2.95943 14.8123 0.210885 11.0635 1.21115 6.64496Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>
                            <a
                              href="https://www.google.com/maps/place/Bhanwar+Kuwa,+Indore,+Madhya+Pradesh/@22.6873448,75.8556106,15z/data=!3m1!4b1!4m6!3m5!1s0x3962fce4e3fb47b5:0xc0233b393fbd54de!8m2!3d22.6878208!4d75.8664672!16s%2Fm%2F0ds8_r9?entry=ttu"
                              target="_blank"
                            >
                             
                              Indore(M.P), India
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
       onDoubleClick={clearStorage}
          className="bg-gray-200 py-1 px-2 text-sm mb-2 font-bold text-gray-100 rounded-lg ml-4 bottom-4 w-fit left-2"
        >
          Fix
        </div>
      </div>
    </footer>
  );
};

export default Footer;
