import React from 'react'

const ProductSectionHeader = ({title}) => {
  return (
    <div className="row align-items-end">
    <div className="col-xl-5 col-lg-6 col-md-5">
      <div className="tp-section-title-wrapper mb-40">
        <h3 className="tp-section-title">
         {title}
          <svg
            width="114"
            height="35"
            viewBox="0 0 114 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
              stroke="currentColor"
              strokeWidth="4"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>
        </h3>
      </div>
    </div>
    <div className="col-xl-7 col-lg-6 col-md-7">
      <div
        className="tp-product-tab tp-product-tab-border mb-45 tp-tab d-flex justify-content-md-end"
      >
        <ul
          className="nav nav-tabs justify-content-sm-end"
          id="productTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="new-tab"
              data-bs-toggle="tab"
              data-bs-target="#new-tab-pane"
              type="button"
              role="tab"
              aria-controls="new-tab-pane"
              aria-selected="true"
            >
              New
              <span className="tp-product-tab-line">
                <svg
                  width="52"
                  height="13"
                  viewBox="0 0 52 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="3.8637"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="featured-tab"
              data-bs-toggle="tab"
              data-bs-target="#featured-tab-pane"
              type="button"
              role="tab"
              aria-controls="featured-tab-pane"
              aria-selected="false"
            >
              Featured
              <span className="tp-product-tab-line">
                <svg
                  width="52"
                  height="13"
                  viewBox="0 0 52 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="3.8637"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="topsell-tab"
              data-bs-toggle="tab"
              data-bs-target="#topsell-tab-pane"
              type="button"
              role="tab"
              aria-controls="topsell-tab-pane"
              aria-selected="false"
            >
              Top Sellers
              <span className="tp-product-tab-line">
                <svg
                  width="52"
                  height="13"
                  viewBox="0 0 52 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="3.8637"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ProductSectionHeader