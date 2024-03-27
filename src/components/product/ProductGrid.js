import React from "react";
import ProductCard from '../Cards/ProductCard'

const ProductGrid = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="tp-product-tab-content">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="new-tab-pane"
              role="tabpanel"
              aria-labelledby="new-tab"
              tabIndex="0"
            >
              <div className="row">

                <ProductCard productImg={"assets/img/product/product-1.jpg"} productName={"watch"} productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"} ProductPrice={750} />
                <ProductCard productImg={"assets/img/product/product-2.jpg"} productName={"watch"} productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"} ProductPrice={750} />
                <ProductCard productImg={"assets/img/product/product-3.jpg"} productName={"watch"} productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"} ProductPrice={750} />
                <ProductCard productImg={"assets/img/product/product-4.jpg"} productName={"watch"} productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"} ProductPrice={750} />
                <ProductCard productImg={"assets/img/product/product-5.jpg"} productName={"watch"} productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"} ProductPrice={750} />
                <ProductCard productImg={"assets/img/product/product-6.jpg"} productName={"watch"} productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"} ProductPrice={750} />
                <ProductCard productImg={"assets/img/product/product-7.jpg"} productName={"watch"} productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"} ProductPrice={750} />
                <ProductCard productImg={"assets/img/product/product-8.jpg"} productName={"watch"} productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"} ProductPrice={750} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
