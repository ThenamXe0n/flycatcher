import React from "react";

const SaleBanner = ({saleDiscount,productOnSales,offerValidOn,productCategory,saleDiscount_II,productOnSales_II,productCategory_II}) => {
  return (
    <section className="tp-banner-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="tp-banner-item tp-banner-height p-relative mb-30 z-index-1 fix">
              <div
                className="tp-banner-thumb include-bg transition-3"
                data-background="assets/img/product/banner/product-banner-1.jpg"
              />
              <div className="tp-banner-content">
                <span>Sale {saleDiscount} off {offerValidOn} </span>
                <h3 className="tp-banner-title">
                  <a href="product-details.html">
                    {productCategory}<br />
                    {productOnSales}
                  </a>
                </h3>
                <div className="tp-banner-btn">
                  <a href="product-details.html" className="tp-link-btn">
                    Shop Now
                    <svg
                      width={15}
                      height={13}
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9998 6.19656L1 6.19656"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.75674 0.975394L14 6.19613L8.75674 11.4177"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="tp-banner-item tp-banner-item-sm tp-banner-height p-relative mb-30 z-index-1 fix">
              <div
                className="tp-banner-thumb include-bg transition-3"
                data-background="assets/img/product/banner/product-banner-2.jpg"
              />
              <div className="tp-banner-content">
                <h3 className="tp-banner-title">
                  <a href="product-details.html">
                    {productOnSales_II}<br />
                    {productCategory_II}
                  </a>
                </h3>
                <p>Sale {saleDiscount_II} off</p>
                <div className="tp-banner-btn">
                  <a href="product-details.html" className="tp-link-btn">
                    Shop Now
                    <svg
                      width={15}
                      height={13}
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9998 6.19656L1 6.19656"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.75674 0.975394L14 6.19613L8.75674 11.4177"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
