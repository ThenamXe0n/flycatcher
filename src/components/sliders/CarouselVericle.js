import React, { useState } from "react";
import "../sliders/slider.css";


const CarouselVericle = () => {
  const [activeSlider, setActiveSlider] = useState(0);

  return (
    <div className="tp-product-banner-area pb-90">
      <div className="container">
        <div className="tp-product-banner-slider fix">
          <div className="tp-product-banner-slider-active swiper-container">
            <div className={`slide${activeSlider} swiper-wrapper `}>
              <div className="tp-product-banner-inner h-auto theme-bg p-relative z-index-1 fix swiper-slide">
                <h4 className="tp-product-banner-bg-text">tablet</h4>
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-product-banner-content p-relative z-index-1">
                      <span className="tp-product-banner-subtitle">
                        Tablet Collection 2023
                      </span>
                      <h3 className="tp-product-banner-title">
                        Samsung Galaxy Tab S6, Wifi Tablet
                      </h3>
                      <div className="tp-product-banner-price mb-40">
                        <span className="old-price">₹1240.00</span>
                        <p className="new-price">₹975.00</p>
                      </div>
                      <div className="tp-product-banner-btn">
                        <a href="shop.html" className="tp-btn tp-btn-2">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-product-banner-thumb-wrapper p-relative">
                      <div className="tp-product-banner-thumb-shape">
                        <span className="tp-product-banner-thumb-gradient" />
                        <img
                          className="tp-offer-shape"
                          src="assets/img/banner/banner-slider-offer.png"
                          alt=""
                        />
                      </div>
                      <div className="tp-product-banner-thumb text-end p-relative z-index-1">
                        <img
                          src="assets/img/banner/banner-slider-1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tp-product-banner-inner theme-bg h-auto p-relative z-index-1 fix swiper-slide">
                <h4 className="tp-product-banner-bg-text">tablet</h4>
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-product-banner-content p-relative z-index-1">
                      <span className="tp-product-banner-subtitle">
                        Latest Technology Added
                      </span>
                      <h3 className="tp-product-banner-title">
                        Apple iPad 10.2 9th Gen - 2021
                      </h3>
                      <div className="tp-product-banner-price mb-40">
                        <span className="old-price ">₹1450.00</span>
                        <p className="new-price ">₹1199.00</p>
                      </div>
                      <div className="tp-product-banner-btn">
                        <a href="shop.html" className="tp-btn tp-btn-2">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-product-banner-thumb-wrapper p-relative">
                      <div className="tp-product-banner-thumb-shape">
                        <span className="tp-product-banner-thumb-gradient" />
                        <img
                          className="tp-offer-shape"
                          src="assets/img/banner/banner-slider-offer.png"
                          alt=""
                        />
                      </div>
                      <div className="tp-product-banner-thumb text-end p-relative z-index-1">
                        <img
                          src="assets/img/banner/banner-slider-2.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tp-product-banner-inner theme-bg h-auto p-relative z-index-1 fix swiper-slide">
                <h4 className="tp-product-banner-bg-text">tablet</h4>
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-product-banner-content p-relative z-index-1">
                      <span className="tp-product-banner-subtitle">
                        Tablet Collection 2023
                      </span>
                      <h3 className="tp-product-banner-title">
                        Microsoft Surface Pro 8, Wifi Included
                      </h3>
                      <div className="tp-product-banner-price mb-40">
                        <span className="old-price">₹1249.00</span>
                        <p className="new-price">₹1300.00</p>
                      </div>
                      <div className="tp-product-banner-btn">
                        <a href="shop.html" className="tp-btn tp-btn-2">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-product-banner-thumb-wrapper p-relative">
                      <div className="tp-product-banner-thumb-shape">
                        <span className="tp-product-banner-thumb-gradient" />
                        <img
                          className="tp-offer-shape"
                          src="assets/img/banner/banner-slider-offer.png"
                          alt=""
                        />
                      </div>
                      <div className="tp-product-banner-thumb text-end p-relative z-index-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-product-banner-slider-dot tp-swiper-dot" />
            <div className="three-dot-nav">
              <div
                className="nav-dots"
                onClick={(e) => {
                  setActiveSlider(e.target.innerText);
                  console.log(activeSlider);
                }}
              >
                0
              </div>
              <div
                className="nav-dots"
                onClick={(e) => {
                  setActiveSlider(e.target.innerText);
                  console.log(activeSlider);
                }}
              >
                1
              </div>
              <div
                className="nav-dots"
                onClick={(e) => {
                  setActiveSlider(e.target.innerText);
                  console.log(activeSlider);
                }}
              >
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselVericle;
