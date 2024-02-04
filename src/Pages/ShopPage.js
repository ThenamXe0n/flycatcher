import React, { useEffect, useState } from "react";
import Breadcrums from "../components/Navigation/Breadcrums";
import NavBar from "../components/Navigation/NavBar";
import ProductGridCard from "../components/Cards/ProductGridCard";
import ProductListCard from "../components/Cards/ProductListCard";
import axios from "axios";
import {Link,useLocation} from "react-router-dom"
import Path from "../routepath/Path";
import Loader from "../components/Loader";

const ShopPage = () => {
  const [viewProductStyle, setViewProductStyle] = useState("Grid");
  const [category, setCategory] = useState([]);
  const Location = useLocation();
  useEffect(() => {
    axios.get("http://localhost:8080/api/product/allproducts").then((response) => {
      setProductItem(response.data);
    });
    axios.get("http://localhost:8080/api/category/allcategory").then((response) => {
      setCategory(response.data);
    });
  }, []);

  const [productItems, setProductItem] = useState([]);
  return (
    <>{ productItems.length != 0 || null ?( 
      <><NavBar />
      {console.log(Location.pathname)}
      {console.log(viewProductStyle)}
      <Breadcrums title={"Shop Grid"} mainPage={"home"} subPage={"Shop Grid"} />
      <section className="tp-shop-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-shop-sidebar mr-10">
                {/* filter */}
                <div className="tp-shop-widget mb-35">
                  <h3 className="tp-shop-widget-title no-border">
                    Price Filter
                  </h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-filter">
                      <div id="slider-range" className="mb-10" />
                      <div className="tp-shop-widget-filter-info d-flex align-items-center justify-content-between">
                        <span className="input-range">
                          <input type="text" id="amount" readOnly="" />
                        </span>
                        <button
                          className="tp-shop-widget-filter-btn"
                          type="button"
                        >
                          Filter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* status */}
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Product Status</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-checkbox">
                      <ul className="filter-items filter-checkbox">
                        <li className="filter-item checkbox">
                          <input id="on_sale" type="checkbox" />
                          <label htmlFor="on_sale">On sale</label>
                        </li>
                        <li className="filter-item checkbox">
                          <input id="in_stock" type="checkbox" />
                          <label htmlFor="in_stock">In Stock</label>
                        </li>
                      </ul>
                      {/* .filter-items */}
                    </div>
                  </div>
                </div>
                {/* categories */}
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Categories</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-categories">
                      <ul>
                        {category.map((item) => (
                          <li>
                          <a href="#">
                            {item.category} <span>{category.length}</span>
                          </a>
                        </li>
                        ))}
                        {/* <li>
                          <a href="#">
                            Leather <span>10</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Classic Watch <span>18</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Leather Man Wacth <span>22</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Trending Watch <span>17</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Google <span>22</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Woman Wacth <span>14</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Tables <span>19</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Electronics <span>29</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Phones <span>05</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Grocery <span>14</span>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* color */}
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Filter by Color</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-checkbox-circle-list">
                      <ul>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="red" />
                            <label htmlFor="red">Red</label>
                            <span
                              data-bg-color="#FF401F"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            8
                          </span>
                        </li>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="dark_blue" />
                            <label htmlFor="dark_blue">Dark Blue</label>
                            <span
                              data-bg-color="#4666FF"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            14
                          </span>
                        </li>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="oragnge" />
                            <label htmlFor="oragnge">Orange</label>
                            <span
                              data-bg-color="#FF9E2C"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            18
                          </span>
                        </li>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="purple" />
                            <label htmlFor="purple">Purple</label>
                            <span
                              data-bg-color="#B615FD"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            23
                          </span>
                        </li>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="yellow" />
                            <label htmlFor="yellow">Yellow</label>
                            <span
                              data-bg-color="#FFD747"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            17
                          </span>
                        </li>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="green" />
                            <label htmlFor="green">Green</label>
                            <span
                              data-bg-color="#41CF0F"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            15
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* product rating */}
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Top Rated Products</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-product">
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <a href="product-details.html">
                            <img
                              src="assets/img/product/shop/sm/shop-sm-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(4.2)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <a href="product-details.html">
                              Smart watches wood...
                            </a>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">
                              $150.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <a href="product-details.html">
                            <img
                              src="assets/img/product/shop/sm/shop-sm-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(4.5)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <a href="product-details.html">
                              Decoration for panda.
                            </a>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">
                              $120.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <a href="product-details.html">
                            <img
                              src="assets/img/product/shop/sm/shop-sm-3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(3.5)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <a href="product-details.html">
                              Trending Watch for Man
                            </a>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">
                              $99.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <a href="product-details.html">
                            <img
                              src="assets/img/product/shop/sm/shop-sm-4.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(4.8)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <a href="product-details.html">Minimal Backpack.</a>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">
                              $165.00
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* brand */}
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Popular Brands</h3>
                  <div className="tp-shop-widget-content ">
                    <div className="tp-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap">
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_01.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_02.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_03.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_04.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_05.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_06.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_07.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_08.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tp-shop-main-wrapper">
                <div className="tp-shop-top mb-45">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="tp-shop-top-left d-flex align-items-center ">
                        <div className="tp-shop-top-tab tp-tab">
                          <ul
                            className="nav nav-tabs"
                            id="productTab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className={
                                  viewProductStyle === "Grid"
                                    ? "button-active"
                                    : "nav-link"
                                }
                                type="button"
                                onClick={(e) => {
                                  setViewProductStyle("Grid");
                                }}
                              >
                                <svg
                                  width={18}
                                  height={18}
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.3327 6.01341V2.98675C16.3327 2.04675 15.906 1.66675 14.846 1.66675H12.1527C11.0927 1.66675 10.666 2.04675 10.666 2.98675V6.00675C10.666 6.95341 11.0927 7.32675 12.1527 7.32675H14.846C15.906 7.33341 16.3327 6.95341 16.3327 6.01341Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.3327 15.18V12.4867C16.3327 11.4267 15.906 11 14.846 11H12.1527C11.0927 11 10.666 11.4267 10.666 12.4867V15.18C10.666 16.24 11.0927 16.6667 12.1527 16.6667H14.846C15.906 16.6667 16.3327 16.24 16.3327 15.18Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.33268 6.01341V2.98675C7.33268 2.04675 6.90602 1.66675 5.84602 1.66675H3.15268C2.09268 1.66675 1.66602 2.04675 1.66602 2.98675V6.00675C1.66602 6.95341 2.09268 7.32675 3.15268 7.32675H5.84602C6.90602 7.33341 7.33268 6.95341 7.33268 6.01341Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.33268 15.18V12.4867C7.33268 11.4267 6.90602 11 5.84602 11H3.15268C2.09268 11 1.66602 11.4267 1.66602 12.4867V15.18C1.66602 16.24 2.09268 16.6667 3.15268 16.6667H5.84602C6.90602 16.6667 7.33268 16.24 7.33268 15.18Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className={
                                  viewProductStyle === "List"
                                    ? "button-active"
                                    : "nav-link"
                                }
                                id="list-tab"
                                type="button"
                                onClick={(e) => {
                                  setViewProductStyle("List");
                                }}
                              >
                                <svg
                                  width={16}
                                  height={15}
                                  viewBox="0 0 16 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15 7.11108H1"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15 1H1"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15 13.2222H1"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="tp-shop-top-result">
                          <p>Showing 1–14 of 26 results</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
                        <div className="tp-shop-top-select">
                          <select>
                            <option>Default Sorting</option>
                            <option>Low to Hight</option>
                            <option>High to Low</option>
                            <option>New Added</option>
                            <option>On Sale</option>
                          </select>
                        </div>
                        <div className="tp-shop-top-filter">
                          <button
                            type="button"
                            className="tp-filter-btn filter-open-btn text-black"
                          >
                            <span>
                              <svg
                                width={16}
                                height={15}
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.9998 3.45001H10.7998"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M3.8 3.45001H1"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6.5999 5.9C7.953 5.9 9.0499 4.8031 9.0499 3.45C9.0499 2.0969 7.953 1 6.5999 1C5.2468 1 4.1499 2.0969 4.1499 3.45C4.1499 4.8031 5.2468 5.9 6.5999 5.9Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.0002 11.15H12.2002"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.2 11.15H1"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.4002 13.6C10.7533 13.6 11.8502 12.5031 11.8502 11.15C11.8502 9.79691 10.7533 8.70001 9.4002 8.70001C8.0471 8.70001 6.9502 9.79691 6.9502 11.15C6.9502 12.5031 8.0471 13.6 9.4002 13.6Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            Filter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-shop-items-wrapper tp-shop-item-primary">
                  <div className="tab-content" id="productTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="grid-tab-pane"
                      role="tabpanel"
                      aria-labelledby="grid-tab"
                      tabIndex={0}
                    >
                      {viewProductStyle === "Grid" ? (
                        <div className="grid grid-cols-3 gap-8">
                          {/* product grid cards */}

                          {/* dynamic cards area map  */}
                          {productItems.map((item,index) => (
                            <Link to={`${Path.PRODUCT_DETAILS}/${item.productid}`} key={index}><ProductGridCard
                              id={item.id}
                              productName={item.product}
                              productBrand={item.brand}
                              productCategory={item.category}
                              productFinalPrice={item.finalprice}
                              productImg={item.thumbnail}
                              productMRP={item.price}
                              rating={item.rating}
                              discription={item.discription}
                            />
                            </Link>
                          ))}

                          {/* dynamic cards area map  */}

                          {/* <ProductGridCard
                            productName={"i watch"}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                          />
                          <ProductGridCard
                            productName={"i watch"}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                          />
                          <ProductGridCard
                            productName={"i watch"}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                          />
                          <ProductGridCard
                            productName={"i watch"}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                          />
                          <ProductGridCard
                            productName={"i watch"}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                          />
                          <ProductGridCard
                            productName={"i watch"}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                          />
                          <ProductGridCard
                            productName={"i watch"}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                          />
                          <ProductGridCard
                            productName={"i watch"}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                          /> */}
                          {/* product grid cards */}
                        </div>
                      ) : null}
                      {viewProductStyle === "List" ? (
                        <div className="grid grid-cols-1 gap-8">
                          {/* product list card */}

                          {/* dynamic listcard map area  */}
                          {/* dynamic listcard map area  */}

                          {productItems.map((item,index) => (
                            <Link to={`${Path.PRODUCT_DETAILS}/${item.productid}`} key={index}><ProductListCard
                              id={item.id}
                              productName={item.product}
                              productBrand={item.brand}
                              productCategory={item.category}
                              productFinalPrice={item.finalprice}
                              productImg={item.thumbnail}
                              productMRP={item.price}
                              rating={item.rating}
                              productDiscription={item.discription}
                            /></Link>
                          ))}

                          {/* <ProductListCard
                            productName={"i watch"}
                            rating={3}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                            productDiscription={
                              "this is product discription thuhjkahhsd khdskhsk khsdkhskd khdskhsdh lkhsls"
                            }
                          />
                          <ProductListCard
                            productName={"i watch"}
                            rating={2}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                            productDiscription={
                              "this is product discription thuhjkahhsd khdskhsk khsdkhskd khdskhsdh lkhsls"
                            }
                          />
                          <ProductListCard
                            productName={"i watch"}
                            rating={1}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                            productDiscription={
                              "this is product discription thuhjkahhsd khdskhsk khsdkhskd khdskhsdh lkhsls"
                            }
                          />
                          <ProductListCard
                            productName={"i watch"}
                            rating={4}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                            productDiscription={
                              "this is product discription thuhjkahhsd khdskhsk khsdkhskd khdskhsdh lkhsls"
                            }
                          />
                          <ProductListCard
                            productName={"i watch"}
                            rating={5}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                            productDiscription={
                              "this is product discription thuhjkahhsd khdskhsk khsdkhskd khdskhsdh lkhsls"
                            }
                          />
                          <ProductListCard
                            productName={"i watch"}
                            rating={0}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                            productDiscription={
                              "this is product discription thuhjkahhsd khdskhsk khsdkhskd khdskhsdh lkhsls"
                            }
                          />
                          <ProductListCard
                            productName={"i watch"}
                            rating={3}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                            productDiscription={
                              "this is product discription thuhjkahhsd khdskhsk khsdkhskd khdskhsdh lkhsls"
                            }
                          />
                          <ProductListCard
                            productName={"i watch"}
                            productBrand={"Apple"}
                            rating={5}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                            productDiscription={
                              "this is product discription thuhjkahhsd khdskhsk khsdkhskd khdskhsdh lkhsls"
                            }
                          />
                          <ProductListCard
                            productName={"i watch"}
                            productBrand={"Apple"}
                            rating={4}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                            productDiscription={
                              "this is product discription thuhjkahhsd khdskhsk khsdkhskd khdskhsdh lkhsls"
                            }
                          />
                          <ProductListCard
                            productName={"i watch"}
                            rating={2}
                            productBrand={"Apple"}
                            productCategory={"watch"}
                            productFinalPrice={"20000"}
                            productImg={"assets/img/product/2/prodcut-1.jpg"}
                            productMRP={"25000"}
                            productDiscription={
                              "this is product discription thuhjkahhsd khdskhsk khsdkhskd khdskhsdh lkhsls"
                            }
                          /> */}
                          {/* product list card */}
                        </div>
                      ) : null}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="list-tab-pane"
                      role="tabpanel"
                      aria-labelledby="list-tab"
                      tabIndex={0}
                    ></div>
                  </div>
                </div>
                <div className="infinite-pagination d-none">
                  <a href="shop.html" className="infinite-next-link">
                    Next
                  </a>
                </div>
                <div className="tp-shop-pagination mt-20">
                  <div className="tp-pagination">
                    <nav>
                      <ul>
                        <li>
                          <a
                            href="shop.html"
                            className="tp-pagination-prev prev page-numbers"
                          >
                            <svg
                              width={15}
                              height={13}
                              viewBox="0 0 15 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.00017 6.77879L14 6.77879"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.24316 11.9999L0.999899 6.77922L6.24316 1.55762"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">1</a>
                        </li>
                        <li>
                          <span className="current">2</span>
                        </li>
                        <li>
                          <a href="shop.html">3</a>
                        </li>
                        <li>
                          <a href="shop.html" className="next page-numbers">
                            <svg
                              width={15}
                              height={13}
                              viewBox="0 0 15 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.9998 6.77883L1 6.77883"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.75684 1.55767L14.0001 6.7784L8.75684 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>):(
        <main className="grid h-[100vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <Loader />

      </main>
      )}
    </>
  );
};

export default ShopPage;
