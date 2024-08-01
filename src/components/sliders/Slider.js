import React, { useState } from "react";
import "./slider.css"
import { Link } from "react-router-dom";

const Slider = () => {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    if (count < 3) {
      setCount(count + 1);
      console.log(count)
    } else {
      setCount(1);
    }
  };

  const handlePrev =()=>{
    if(count>=1){
      setCount(count-1)
    }else{
      setCount(2)
    }
  }

  return (
    <section className="tp-slider-area p-relative z-index-1">
      <div className="tp-slider-active tp-slider-variation swiper-container">
        <div className={`slide${count} swiper-wrapper `}>
          <div className="tp-slider-item tp-slider-height d-flex align-items-center swiper-slide green-dark-bg">
            <div className="tp-slider-shape">
              <img
                className="tp-slider-shape-1"
                src="../assets/img/slider/shape/slider-shape-1.png"
                alt="slider-shape"
                href=""
              />
              <img
                className="tp-slider-shape-2"
                src="../assets/img/slider/shape/slider-shape-2.png"
                alt="slider-shape"
              />
              <img
                className="tp-slider-shape-3"
                src="assets/img/slider/shape/slider-shape-3.png"
                alt="slider-shape"
              />
              <img
                className="tp-slider-shape-4"
                src="assets/img/slider/shape/slider-shape-4.png"
                alt="slider-shape"
              />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <div className="tp-slider-content p-relative z-index-1">
                    <span>
                      Starting at <b>₹274.00</b>
                    </span>
                    <h3 className="tp-slider-title">
                      We are Best in Product Finishing
                    </h3>
                    <p>
                      Exclusive offer
                      <span>
                        20%
                        <svg
                          width={94}
                          height={20}
                          viewBox="0 0 94 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      off this week
                    </p>
                    <div className="tp-slider-btn">
                      <Link
                      to="/shop"
                        className="tp-btn tp-btn-2 tp-btn-white"
                      >
                        Shop Now
                        <svg
                          width={17}
                          height={14}
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 6.99976L1 6.99976"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6">
                  <div className="tp-slider-thumb text-end">
                    <img
                      src="../assets/img/slider/slider-img-1.png"
                      alt="slider-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-slider-item tp-slider-height d-flex align-items-center swiper-slide green-dark-bg">
            <div className="tp-slider-shape">
              <img
                className="tp-slider-shape-1"
                src="assets/img/slider/shape/slider-shape-1.png"
                alt="slider-shape"
              />
              <img
                className="tp-slider-shape-2"
                src="assets/img/slider/shape/slider-shape-2.png"
                alt="slider-shape"
              />
              <img
                className="tp-slider-shape-3"
                src="assets/img/slider/shape/slider-shape-3.png"
                alt="slider-shape"
              />
              <img
                className="tp-slider-shape-4"
                src="assets/img/slider/shape/slider-shape-4.png"
                alt="slider-shape"
              />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <div className="tp-slider-content p-relative z-index-1">
                    <span>
                      Starting at <b>₹999.00</b>
                    </span>
                    <h3 className="tp-slider-title">
                      The best note book collection 2023
                    </h3>
                    <p>
                      Exclusive offer
                      <span>
                        -10%
                        <svg
                          width={94}
                          height={20}
                          viewBox="0 0 94 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      off this week
                    </p>
                    <div className="tp-slider-btn">
                      <a
                        href="shop.html"
                        className="tp-btn tp-btn-2 tp-btn-white"
                      >
                        Shop Now
                        <svg
                          width={17}
                          height={14}
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 6.99976L1 6.99976"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244"
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
                <div className="col-xl-7 col-lg-6 col-md-6">
                  <div className="tp-slider-thumb text-end">
                    <img
                      src="assets/img/slider/slider-img-2.png"
                      alt="slider-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tp-slider-item is-light tp-slider-height d-flex align-items-center swiper-slide"
            data-bg-color="#E3EDF6"
          >
            <div className="tp-slider-shape">
              <img
                className="tp-slider-shape-1"
                src="assets/img/slider/shape/slider-shape-1.png"
                alt="slider-shape"
              />
              <img
                className="tp-slider-shape-2"
                src="assets/img/slider/shape/slider-shape-2.png"
                alt="slider-shape"
              />
              <img
                className="tp-slider-shape-3"
                src="assets/img/slider/shape/slider-shape-3.png"
                alt="slider-shape"
              />
              <img
                className="tp-slider-shape-4"
                src="assets/img/slider/shape/slider-shape-4.png"
                alt="slider-shape"
              />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <div className="tp-slider-content p-relative z-index-1">
                    <span>
                      Starting at <b>₹999.00</b>
                    </span>
                    <h3 className="tp-slider-title">
                      The best note book collection 2023
                    </h3>
                    <p>
                      Exclusive offer
                      <span>
                        -10%
                        <svg
                          width={94}
                          height={20}
                          viewBox="0 0 94 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      off this week
                    </p>
                    <div className="tp-slider-btn">
                      <a
                        href="shop.html"
                        className="tp-btn tp-btn-2 tp-btn-white"
                      >
                        Shop Now
                        <svg
                          width={17}
                          height={14}
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 6.99976L1 6.99976"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244"
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
                <div className="col-xl-7 col-lg-6 col-md-6">
                  <div className="tp-slider-thumb text-end">
                    <img
                      src="assets/img/slider/slider-img-3.png"
                      alt="slider-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-slider-arrow tp-swiper-arrow d-none d-lg-block">
          <button type="button" className="tp-slider-button-prev" onClick={handlePrev}>
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 7L7 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="tp-slider-button-next"
           onClick={handleNext}
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L7 7L1 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="tp-slider-dot tp-swiper-dot" />
      </div>
    </section>
  );
};

export default Slider;
