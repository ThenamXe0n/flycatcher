import React from 'react'

const MobileNavBar = () => {
  return (
    <div className="offcanvas__area ">
    <div className="offcanvas__wrapper">
      <div className="offcanvas__close">
        <button className="offcanvas__close-btn offcanvas-close-btn">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1L1 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L11 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="offcanvas__content">
        <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
          <div className="offcanvas__logo logo">
            <a href="index.html">
              <img src="assets/img/logo/logo.svg" alt="logo" />
            </a>
          </div>
        </div>
        <div className="offcanvas__category pb-40">
          <button className="tp-offcanvas-category-toggle">
            <i className="fa-solid fa-bars" />
            All Categories
          </button>
          {/* <div className="tp-category-mobile-menu">
            <nav className="tp-category-menu-content">
              <ul>
                <li>
                  <a href="shop.html">
                    <span>
                      <svg
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.90532 14.8316V12.5719C5.9053 11.9971 6.37388 11.5301 6.95443 11.5262H9.08101C9.66434 11.5262 10.1372 11.9944 10.1372 12.5719V12.5719V14.8386C10.1371 15.3266 10.5305 15.7254 11.0233 15.7368H12.441C13.8543 15.7368 15 14.6026 15 13.2035V13.2035V6.77525C14.9925 6.22482 14.7314 5.70794 14.2911 5.37171L9.44253 1.50496C8.59311 0.83168 7.38562 0.83168 6.5362 1.50496L1.70886 5.37873C1.26693 5.7136 1.00544 6.23133 1 6.78227V13.2035C1 14.6026 2.1457 15.7368 3.55899 15.7368H4.97671C5.48173 15.7368 5.89114 15.3315 5.89114 14.8316V14.8316"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    New Arrivals
                  </a>
                </li>
                <li className="has-dropdown">
                  <a href="shop.html" className="has-mega-menu">
                    <span>
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.6856 4.54975C2.6856 3.52014 3.51984 2.6859 4.54945 2.68508H5.3977C5.88984 2.68508 6.36136 2.48971 6.71089 2.14348L7.30359 1.54995C8.02984 0.819578 9.21031 0.816281 9.94068 1.54253L9.9415 1.54336L9.94892 1.54995L10.5425 2.14348C10.892 2.49053 11.3635 2.68508 11.8556 2.68508H12.7031C13.7327 2.68508 14.5677 3.51932 14.5677 4.54975V5.39636C14.5677 5.88849 14.7623 6.36084 15.1093 6.71037L15.7029 7.3039C16.4332 8.03015 16.4374 9.21061 15.7111 9.94098L15.7103 9.94181L15.7029 9.94923L15.1093 10.5428C14.7623 10.8915 14.5677 11.363 14.5677 11.8551V12.7034C14.5677 13.733 13.7335 14.5672 12.7039 14.5672H12.7031H11.854C11.3619 14.5672 10.8895 14.7626 10.5408 15.1096L9.94727 15.7024C9.22185 16.4327 8.04221 16.4368 7.31183 15.7122C7.31101 15.7114 7.31019 15.7106 7.30936 15.7098L7.30194 15.7024L6.70924 15.1096C6.36054 14.7626 5.88819 14.568 5.39605 14.5672H4.54945C3.51984 14.5672 2.6856 13.733 2.6856 12.7034V11.8535C2.6856 11.3613 2.49023 10.8898 2.14318 10.5411L1.55047 9.94758C0.820097 9.22215 0.815976 8.04251 1.5414 7.31214C1.5414 7.31132 1.54223 7.31049 1.54305 7.30967L1.55047 7.30225L2.14318 6.70872C2.49023 6.35919 2.6856 5.88767 2.6856 5.39471V4.54975"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.50787 10.7453L10.745 6.50812"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.6823 10.6862H10.6897"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.56053 6.56446H6.56795"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Electronics
                    <button className="dropdown-toggle-btn">
                      <i className="fa-regular fa-angle-right" />
                    </button>
                  </a>
                  <ul className="mega-menu tp-submenu">
                    <li>
                      <a href="shop.html" className="mega-menu-title">
                        Featured
                      </a>
                      <ul>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/header/menu/menu-1.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">New Arrivals</a>
                        </li>
                        <li>
                          <a href="shop.html">Best Seller</a>
                        </li>
                        <li>
                          <a href="shop.html">Top Rated</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html" className="mega-menu-title">
                        Computer &amp; Laptops
                      </a>
                      <ul>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/header/menu/menu-2.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">Top Brands</a>
                        </li>
                        <li>
                          <a href="shop.html">Weekly Best Selling</a>
                        </li>
                        <li>
                          <a href="shop.html">Most Viewed</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html" className="mega-menu-title">
                        Accessories
                      </a>
                      <ul>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/header/menu/menu-3.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">Headphones</a>
                        </li>
                        <li>
                          <a href="shop.html">TWS Earphone</a>
                        </li>
                        <li>
                          <a href="shop.html">Gaming Headset</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop.html">
                    <span>
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 8.5V16H2.50003V8.5"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 4.75H1V8.5H16V4.75Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.5 16V4.75"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.49997 4.75H5.12497C4.62769 4.75 4.15077 4.55246 3.79914 4.20083C3.44751 3.84919 3.24997 3.37228 3.24997 2.875C3.24997 2.37772 3.44751 1.90081 3.79914 1.54917C4.15077 1.19754 4.62769 1 5.12497 1C7.74997 1 8.49997 4.75 8.49997 4.75Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.5 4.75H11.875C12.3723 4.75 12.8492 4.55246 13.2008 4.20083C13.5525 3.84919 13.75 3.37228 13.75 2.875C13.75 2.37772 13.5525 1.90081 13.2008 1.54917C12.8492 1.19754 12.3723 1 11.875 1C9.25 1 8.5 4.75 8.5 4.75Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Gifts
                  </a>
                </li>
                <li className="has-dropdown">
                  <a href="shop.html">
                    <span>
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 1H2.5C1.67157 1 1 1.67157 1 2.5V10C1 10.8284 1.67157 11.5 2.5 11.5H14.5C15.3284 11.5 16 10.8284 16 10V2.5C16 1.67157 15.3284 1 14.5 1Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.5 14.5H11.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.5 11.5V14.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Computers
                    <button className="dropdown-toggle-btn">
                      <i className="fa-regular fa-angle-right" />
                    </button>
                  </a>
                  <ul className="tp-submenu">
                    <li className="has-dropdown">
                      <a href="shop.html">
                        Desktop
                        <button className="dropdown-toggle-btn">
                          <i className="fa-regular fa-angle-right" />
                        </button>
                      </a>
                      <ul className="tp-submenu">
                        <li>
                          <a href="shop.html">Gaming</a>
                        </li>
                        <li>
                          <a href="shop.html">WorkSpace</a>
                        </li>
                        <li>
                          <a href="shop.html">Customize</a>
                        </li>
                        <li>
                          <a href="shop.html">Luxury</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html">Laptop</a>
                    </li>
                    <li>
                      <a href="shop.html">Console</a>
                    </li>
                    <li>
                      <a href="shop.html">Top Rated</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop.html">
                    <span>
                      <svg
                        width={15}
                        height={18}
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.375 1H2.625C1.72754 1 1 1.72754 1 2.625V15.625C1 16.5225 1.72754 17.25 2.625 17.25H12.375C13.2725 17.25 14 16.5225 14 15.625V2.625C14 1.72754 13.2725 1 12.375 1Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 14H7.50875"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Smartphones &amp; Tablets
                  </a>
                </li>
                <li>
                  <a href="shop.html">
                    <span>
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 1C13.4176 1 17 4.5816 17 9C17 13.4184 13.4176 17 9 17C4.5816 17 1 13.4184 1 9C1 4.5816 4.5816 1 9 1Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.5263 8.99592C11.5263 8.31286 8.02529 6.12769 7.62814 6.5206C7.23099 6.9135 7.19281 11.0413 7.62814 11.4712C8.06348 11.9027 11.5263 9.67898 11.5263 8.99592Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    TV, Video &amp; Musice
                  </a>
                </li>
                <li>
                  <a href="shop.html">
                    <span>
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.6292 1.26076C12.5027 1.60843 12.7699 2.81924 13.1271 3.20843C13.4843 3.59762 13.9955 3.72995 14.2783 3.72995C15.7814 3.72995 17 4.94854 17 6.45081V11.4627C17 13.4778 15.3654 15.1124 13.3503 15.1124H4.64973C2.63373 15.1124 1 13.4778 1 11.4627V6.45081C1 4.94854 2.21859 3.72995 3.72173 3.72995C4.00368 3.72995 4.51481 3.59762 4.87287 3.20843C5.23005 2.81924 5.49643 1.60843 6.36995 1.26076C7.24432 0.913081 10.7557 0.913081 11.6292 1.26076Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.7527 5.97314H13.7605"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7491 9.11086C11.7491 7.59215 10.5184 6.36145 8.99974 6.36145C7.48104 6.36145 6.25034 7.59215 6.25034 9.11086C6.25034 10.6296 7.48104 11.8603 8.99974 11.8603C10.5184 11.8603 11.7491 10.6296 11.7491 9.11086Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Cameras
                  </a>
                </li>
                <li>
                  <a href="shop.html">
                    <span>
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.30431 1C1.58423 1 1 1.59405 1 2.32534V3.10537C1 3.64706 1.20599 4.16798 1.57446 4.55981L5.61258 8.8536L5.61436 8.8509C6.39393 9.64899 6.83254 10.7279 6.83254 11.8528V15.6626C6.83254 15.9172 7.09891 16.0798 7.32 15.9597L9.61963 14.7066C9.96679 14.517 10.1834 14.1486 10.1834 13.7487V11.8428C10.1834 10.7242 10.6158 9.64989 11.3883 8.8536L15.4264 4.55981C15.794 4.16798 16 3.64706 16 3.10537V2.32534C16 1.59405 15.4167 1 14.6966 1H2.30431Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Cooking
                  </a>
                </li>
                <li>
                  <a href="shop.html">
                    <span>
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.7462 7.16473V13.167C15.7462 13.6457 15.556 14.1049 15.2175 14.4434C14.8789 14.782 14.4197 14.9722 13.941 14.9722H4.3058C3.82703 14.9722 3.3679 14.782 3.02936 14.4434C2.69083 14.1049 2.50061 13.6457 2.50061 13.167V9.36255"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.46186 1.00001C3.18176 0.999863 2.90854 1.08659 2.6798 1.24825C2.45106 1.4099 2.27807 1.63852 2.18471 1.9026L1.11062 5.01655C0.713475 6.15382 1.41752 7.16021 2.71274 7.16021C3.18296 7.14863 3.64325 7.02257 4.05374 6.79294C4.46424 6.56331 4.81255 6.23705 5.0685 5.84243C5.20151 6.24071 5.46067 6.58479 5.80676 6.82258C6.15285 7.06036 6.56702 7.17889 6.98651 7.16021C7.18566 6.7642 7.4909 6.43132 7.86823 6.19871C8.24556 5.96611 8.68013 5.84294 9.1234 5.84294C9.56666 5.84294 10.0012 5.96611 10.3785 6.19871C10.7558 6.43132 11.0611 6.7642 11.2603 7.16021V7.16021C11.679 7.17789 12.0922 7.0589 12.4373 6.82119C12.7825 6.58348 13.041 6.23994 13.1738 5.84243C13.431 6.23686 13.7802 6.56288 14.1914 6.79243C14.6026 7.02199 15.0633 7.1482 15.5341 7.16021C16.8293 7.16021 17.5288 6.15382 17.1362 5.01655L16.0621 1.9026C15.9685 1.6378 15.7948 1.40866 15.5652 1.24694C15.3355 1.08522 15.0613 0.998927 14.7804 1.00001H3.46186Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.0707 14.9722H7.19861V11.4701C7.19861 10.983 7.3921 10.5158 7.73656 10.1713C8.08102 9.82685 8.54822 9.63333 9.03536 9.63333H9.22041C9.70755 9.63333 10.1747 9.82685 10.5192 10.1713C10.8637 10.5158 11.0572 10.983 11.0572 11.4701L11.0707 14.9722Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="shop.html">
                    <span>
                      <svg
                        width={18}
                        height={17}
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.92384 11.3525C10.1178 11.3525 12.8477 11.8365 12.8477 13.7698C12.8477 15.7032 10.136 16.201 6.92384 16.201C3.72902 16.201 1 15.7213 1 13.7871C1 11.8529 3.71084 11.3525 6.92384 11.3525Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.92383 8.59311C4.82685 8.59311 3.1264 6.89354 3.1264 4.79656C3.1264 2.69958 4.82685 1 6.92383 1C9.01994 1 10.7204 2.69958 10.7204 4.79656C10.7282 6.88575 9.03986 8.58532 6.95067 8.59311H6.92383Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.8906 7.60761C14.2768 7.41281 15.3443 6.22319 15.3469 4.78336C15.3469 3.3643 14.3123 2.18681 12.9556 1.96429"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.7195 10.9416C16.0623 11.1416 17 11.6126 17 12.5823C17 13.2498 16.5584 13.6827 15.845 13.9537"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Sports
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
        <div className="tp-main-menu-mobile fix mb-40">
          <nav className="tp-main-menu-content">
            <ul>
              <li className="has-dropdown has-mega-menu">
                <a href="index.html">
                  Home
                  <button className="dropdown-toggle-btn">
                    <i className="fa-regular fa-angle-right" />
                  </button>
                </a>
                <div className="home-menu tp-submenu tp-mega-menu">
                  <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-5">
                    <div className="col">
                      <div className="home-menu-item ">
                        <a href="index.html">
                          <div className="home-menu-thumb p-relative fix">
                            <img src="assets/img/menu/menu-home-1.jpg" alt="" />
                          </div>
                          <div className="home-menu-content">
                            <h5 className="home-menu-title">Electronics </h5>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="home-menu-item ">
                        <a href="../../../index.html">
                          <div className="home-menu-thumb p-relative fix">
                            <img src="assets/img/menu/menu-home-2.jpg" alt="" />
                          </div>
                          <div className="home-menu-content">
                            <h5 className="home-menu-title">Fashion</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="home-menu-item ">
                        <a href="index-3.html">
                          <div className="home-menu-thumb p-relative fix">
                            <img src="assets/img/menu/menu-home-3.jpg" alt="" />
                          </div>
                          <div className="home-menu-content">
                            <h5 className="home-menu-title">Beauty</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="home-menu-item ">
                        <a href="index-4.html">
                          <div className="home-menu-thumb p-relative fix">
                            <img src="assets/img/menu/menu-home-4.jpg" alt="" />
                          </div>
                          <div className="home-menu-content">
                            <h5 className="home-menu-title">Jewelry </h5>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="home-menu-item ">
                        <a href="index-5.html">
                          <div className="home-menu-thumb p-relative fix">
                            <img src="assets/img/menu/menu-home-5.jpg" alt="" />
                          </div>
                          <div className="home-menu-content">
                            <h5 className="home-menu-title">Grocery</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="has-dropdown has-mega-menu">
                <a href="shop.html">
                  Shop
                  <button className="dropdown-toggle-btn">
                    <i className="fa-regular fa-angle-right" />
                  </button>
                </a>
                <div className="shop-mega-menu tp-submenu tp-mega-menu">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="shop-mega-menu-list">
                        <a href="shop.html" className="shop-mega-menu-title">
                          Shop Pages
                        </a>
                        <ul>
                          <li>
                            <a href="shop-category.html">Grid Category</a>
                          </li>
                          <li>
                            <a href="shop.html">Grid Layout</a>
                          </li>
                          <li>
                            <a href="shop-list.html">List Layout</a>
                          </li>
                          <li>
                            <a href="shop-masonary.html">Masonary Layout</a>
                          </li>
                          <li>
                            <a href="shop-full-width.html">Full width Layout</a>
                          </li>
                          <li>
                            <a href="shop-1600.html">1600px Layout</a>
                          </li>
                          <li>
                            <a href="shop.html">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">Right Sidebar</a>
                          </li>
                          <li>
                            <a href="shop-no-sidebar.html">Hidden Sidebar</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="shop-mega-menu-list">
                        <a href="shop.html" className="shop-mega-menu-title">
                          Features
                        </a>
                        <ul>
                          <li>
                            <a href="shop-filter-dropdown.html">
                              Filter Dropdown
                            </a>
                          </li>
                          <li>
                            <a href="shop-filter-offcanvas.html">
                              Filters Offcanvas
                            </a>
                          </li>
                          <li>
                            <a href="shop.html">Filters Sidebar</a>
                          </li>
                          <li>
                            <a href="shop-load-more.html">Load More button</a>
                          </li>
                          <li>
                            <a href="shop-infinite-scroll.html">
                              Infinit scrolling
                            </a>
                          </li>
                          <li>
                            <a href="shop-list.html">Collections list</a>
                          </li>
                          <li>
                            <a href="shop.html">Hidden search</a>
                          </li>
                          <li>
                            <a href="shop.html">Search Full screen</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="shop-mega-menu-list">
                        <a href="shop.html" className="shop-mega-menu-title">
                          Hover Style
                        </a>
                        <ul>
                          <li>
                            <a href="shop.html">Hover Style 1</a>
                          </li>
                          <li>
                            <a href="shop.html">Hover Style 2</a>
                          </li>
                          <li>
                            <a href="shop.html">Hover Style 3</a>
                          </li>
                          <li>
                            <a href="shop.html">Hover Style 4</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="shop-mega-menu-img">
                        <img
                          src="assets/img/menu/product/menu-product-img-1.jpg"
                          alt=""
                        />
                        <div className="shop-mega-menu-btn">
                          <a
                            href="shop-category.html"
                            className="tp-menu-showcase-btn tp-menu-showcase-btn-2"
                          >
                            Phones
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="shop-mega-menu-img">
                        <img
                          src="assets/img/menu/product/menu-product-img-2.jpg"
                          alt=""
                        />
                        <div className="shop-mega-menu-btn">
                          <a
                            href="shop-category.html"
                            className="tp-menu-showcase-btn tp-menu-showcase-btn-2"
                          >
                            Cameras
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="has-dropdown has-mega-menu ">
                <a href="shop.html">
                  Products
                  <button className="dropdown-toggle-btn">
                    <i className="fa-regular fa-angle-right" />
                  </button>
                </a>
                <ul className="tp-submenu tp-mega-menu mega-menu-style-2">
                  {/* first col */}
                  <li className="has-dropdown">
                    <a href="shop.html" className="mega-menu-title">
                      Shop Page
                      <button className="dropdown-toggle-btn">
                        <i className="fa-regular fa-angle-right" />
                      </button>
                    </a>
                    <ul className="tp-submenu">
                      <li>
                        <a href="shop-category.html">Only Categories</a>
                      </li>
                      <li>
                        <a href="shop-filter-offcanvas.html">Shop Grid</a>
                      </li>
                      <li>
                        <a href="shop.html">Shop Grid with Sideber</a>
                      </li>
                      <li>
                        <a href="shop-list.html">Shop List</a>
                      </li>
                      <li>
                        <a href="shop-category.html">Categories</a>
                      </li>
                      <li>
                        <a href="product-details.html">Product Details</a>
                      </li>
                      <li>
                        <a href="product-details-progress.html">
                          Product Details Progress
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* third col */}
                  <li className="has-dropdown">
                    <a href="product-details.html" className="mega-menu-title">
                      Products
                      <button className="dropdown-toggle-btn">
                        <i className="fa-regular fa-angle-right" />
                      </button>
                    </a>
                    <ul className="tp-submenu">
                      <li>
                        <a href="product-details.html">Product Simple</a>
                      </li>
                      <li>
                        <a href="product-details-video.html">With Video</a>
                      </li>
                      <li>
                        <a href="product-details-countdown.html">
                          With Countdown Timer
                        </a>
                      </li>
                      <li>
                        <a href="product-details-presentation.html">
                          Product Presentation
                        </a>
                      </li>
                      <li>
                        <a href="product-details-swatches.html">
                          Variations Swatches
                        </a>
                      </li>
                      <li>
                        <a href="product-details-list.html">List View</a>
                      </li>
                      <li>
                        <a href="product-details-gallery.html">Details Gallery</a>
                      </li>
                      <li>
                        <a href="product-details-slider.html">With Slider</a>
                      </li>
                    </ul>
                  </li>
                  {/* third col */}
                  <li className="has-dropdown">
                    <a href="shop.html" className="mega-menu-title">
                      eCommerce
                      <button className="dropdown-toggle-btn">
                        <i className="fa-regular fa-angle-right" />
                      </button>
                    </a>
                    <ul className="tp-submenu">
                      <li>
                        <a href="cart.html">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="order.html">Track Your Order</a>
                      </li>
                      <li>
                        <a href="compare.html">Compare</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="profile.html">My account</a>
                      </li>
                    </ul>
                  </li>
                  {/* second col */}
                  <li className="has-dropdown">
                    <a href="shop.html" className="mega-menu-title">
                      More Pages
                      <button className="dropdown-toggle-btn">
                        <i className="fa-regular fa-angle-right" />
                      </button>
                    </a>
                    <ul className="tp-submenu">
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                      <li>
                        <a href="forgot.html">Forgot Password</a>
                      </li>
                      <li>
                        <a href="404.html">404 Error</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="coupon.html">Coupons</a>
              </li>
              <li className="has-dropdown">
                <a href="blog.html">
                  Blog
                  <button className="dropdown-toggle-btn">
                    <i className="fa-regular fa-angle-right" />
                  </button>
                </a>
                <ul className="tp-submenu">
                  <li>
                    <a href="blog.html">Blog Standard</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-list.html">Blog List</a>
                  </li>
                  <li>
                    <a href="blog-details-2.html">Blog Details Full Width</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="offcanvas__contact align-items-center d-none">
          <div className="offcanvas__contact-icon mr-20">
            <span>
              <img src="assets/img/icon/contact.png" alt="" />
            </span>
          </div>
          <div className="offcanvas__contact-content">
            <h3 className="offcanvas__contact-title">
              <a href="tel:098-852-987">004524865</a>
            </h3>
          </div>
        </div>
        <div className="offcanvas__btn">
          <a href="contact.html" className="tp-btn-2 tp-btn-border-2">
            Contact Us
          </a>
        </div>
      </div>
      <div className="offcanvas__bottom">
        <div className="offcanvas__footer d-flex align-items-center justify-content-between">
          <div className="offcanvas__currency-wrapper currency">
            <span
              className="offcanvas__currency-selected-currency tp-currency-toggle"
              id="tp-offcanvas-currency-toggle"
            >
              Currency : USD
            </span>
            <ul className="offcanvas__currency-list tp-currency-list">
              <li>USD</li>
              <li>ERU</li>
              <li>BDT </li>
              <li>INR</li>
            </ul>
          </div>
          <div className="offcanvas__select language">
            <div className="offcanvas__lang d-flex align-items-center justify-content-md-end">
              <div className="offcanvas__lang-img mr-15">
                <img src="assets/img/icon/language-flag.png" alt="" />
              </div>
              <div className="offcanvas__lang-wrapper">
                <span
                  className="offcanvas__lang-selected-lang tp-lang-toggle"
                  id="tp-offcanvas-lang-toggle"
                >
                  English
                </span>
                <ul className="offcanvas__lang-list tp-lang-list">
                  <li>Spanish</li>
                  <li>Portugese</li>
                  <li>American</li>
                  <li>Canada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default MobileNavBar