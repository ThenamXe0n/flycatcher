import React, { useState } from "react";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import Cookies from "js-cookie";
import { IoCartOutline, IoLogInOutline } from "react-icons/io5";
import { PiHandHeart } from "react-icons/pi";
import { toast } from "react-toastify";

const HeaderTop = () => {
  const [showSettingMenu, setShowSettingMenu] = useState(false);
  const toggleSettingMenu = () => {
    !showSettingMenu ? setShowSettingMenu(true) : setShowSettingMenu(false);
  };
  const user = Cookies.get("UserLoggedIn");


  return (
    <div className="tp-header-top black-bg p-relative z-index-1 d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="tp-header-welcome d-flex align-items-center">
              <span>
                <svg
                  width={22}
                  height={19}
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6364 1H1V12.8182H14.6364V1Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6364 5.54545H18.2727L21 8.27273V12.8182H14.6364V5.54545Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.0909 17.3636C6.3461 17.3636 7.36363 16.3461 7.36363 15.0909C7.36363 13.8357 6.3461 12.8182 5.0909 12.8182C3.83571 12.8182 2.81818 13.8357 2.81818 15.0909C2.81818 16.3461 3.83571 17.3636 5.0909 17.3636Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9091 17.3636C18.1643 17.3636 19.1818 16.3461 19.1818 15.0909C19.1818 13.8357 18.1643 12.8182 16.9091 12.8182C15.6539 12.8182 14.6364 13.8357 14.6364 15.0909C14.6364 16.3461 15.6539 17.3636 16.9091 17.3636Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>FREE Express Shipping On Orders ₹570+</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-header-top-right d-flex align-items-center justify-content-end">
              <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
                <div className="tp-header-top-menu-item tp-header-lang">
                  <span
                    className="tp-header-lang-toggle"
                    id="tp-header-lang-toggle"
                  >
                    English
                  </span>
                  <ul className="hidden">
                    <li>
                      <a href="#">Spanish</a>
                    </li>
                    <li>
                      <a href="#">Russian</a>
                    </li>
                    <li>
                      <a href="#">Portuguese</a>
                    </li>
                  </ul>
                </div>
                {/* <div className="tp-header-top-menu-item tp-header-currency">
                  <span
                    className="tp-header-currency-toggle"
                    id="tp-header-currency-toggle"
                  >
                    <div className="flex flex-row items-center gap-3">
                      {" "}
                      Currency <FaAngleDown />
                    </div>
                  </span>
                  <ul className="hidden">
                    <li>
                      <a href="#">EUR</a>
                    </li>
                    <li>
                      <a href="#">CHF</a>
                    </li>
                    <li>
                      <a href="#">GBP</a>
                    </li>
                    <li>
                      <a href="#">KWD</a>
                    </li>
                  </ul>
                </div> */}
                <div className="tp-header-top-menu-item tp-header-setting">
                  {console.log(showSettingMenu)}
                  <span
                    onClick={toggleSettingMenu}
                    className="tp-header-setting-toggle"
                    id="tp-header-setting-toggle"
                  >
                    <div className="flex flex-row items-center gap-3">
                      {" "}
                      Setting <FaAngleDown />
                    </div>
                  </span>
                  {user && user === "yes" ? (
                    <ul
                      className={
                        !showSettingMenu
                          ? ` z-0 -translate-y-52 h-0 overflow-hidden opacity-0 duration-300`
                          : ` opacity-100 block translate-y-0 duration-500 bg-[azure]`
                      }
                    >
                      <li>
                        <Link to="/user">
                          <div className="flex flex-row gap-1 items-center">
                            <FaRegUser /> My Profile
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/wishlist">
                          <div className="flex flex-row gap-1 items-center">
                            <PiHandHeart className="m-0" /> Wishlist
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart">
                          <div className="flex flex-row gap-1 items-center">
                            <IoCartOutline className="m-0" /> Cart
                          </div>
                        </Link>
                      </li>
                      <li
                        className=" cursor-pointer hover:text-[dodgerblue] text-black"
                        onClick={() => {
                          localStorage.removeItem("user");
                          localStorage.removeItem("token");
                          Cookies.remove("userID");
                          Cookies.remove("token");
                          Cookies.set("UserLoggedIn", "no");
                          toast.info("You have been logged out ");
                          window.location.replace("/")
                        }}
                      >
                        <Link>
                          <div className="flex flex-row gap-1 justify-items-start items-center">
                            <CgLogOut className="m-0" /> Logout
                          </div>
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    <ul
                      className={
                        !showSettingMenu
                          ? ` z-0 -translate-y-52 h-0 overflow-hidden opacity-0 duration-300`
                          : ` opacity-100 translate-y-0 duration-500 bg-[azure] flex flex-col gap-2`
                      }
                    >
                      <li>
                        <Link to="/login">
                          <div className="flex flex-row gap-1 items-center">
                            <IoLogInOutline className="m-0"/> Log In/Sign In
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/register">
                          <div className="flex flex-row gap-1 items-center">
                             Register / Sign up
                          </div>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
