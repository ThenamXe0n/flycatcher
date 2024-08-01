import React, { useEffect, useState } from "react";
import Breadcrums from "../components/Navigation/Breadcrums";
import NavBar from "../components/Navigation/NavBar";
import ProductGridCard from "../components/Cards/ProductGridCard";
import ProductListCard from "../components/Cards/ProductListCard";
import Pagination from "../components/UiComponents/Pagination";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Path from "../routepath/Path";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/Auth/AuthSlice";
import { originPath } from "../assets/js/main";
import {filterProduct} from "../helperFunctions/productFilter";
import {
  fetchAllProductsAsync,
  selectAllProducts,
  selectTotalProducts,
} from "../features/Products/ProductSlice";
import { ITEMS_PER_PAGE } from "../app/constant";
import HeaderTop from "../components/header/HeaderTop";

const ShopPage = () => {
  const [viewProductStyle, setViewProductStyle] = useState("Grid");
  const [category, setCategory] = useState([]);
  const totalProductsCount = useSelector(selectTotalProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(ITEMS_PER_PAGE);
  const dispatch = useDispatch();
  const Location = useLocation();
  const [totalItems, setTotalItems] = useState(useSelector(selectTotalProducts));
  const [page, setPage] = useState(1);
  const productItems = useSelector(selectAllProducts);
  const [filter, setfilter] = useState([]);
  console.log(filter);
  const handlePage = (page) => {
    console.log({ page });
    setPage(page);
  };

  // console.log(filterItemCount.length)

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllProductsAsync({ pagination }));
    axios
      .get("http://localhost:8080/api/category/allcategory")
      .then((response) => {
        setCategory(response.data);
      });
  }, [dispatch, page]);

  useEffect(() => {
    setPage(1);
    originPath();
  }, [totalItems]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/product/allproducts")
      .then((response) => {
        setAllProduct(response.data.product);
      })
      .catch((error) => console.log(error.message));
  }, []);
  //   axios.get("http://localhost:8080/api/category/allcategory").then((response) => {
  //     setCategory(response.data);
  //   });
  // }, []);

  useEffect(() => {
    function paginationPageResetter() {
      if (filter.length >= 1) {
        const filterItemCount = allProduct.filter((product) =>
          filter.includes(product.category)
        ).length;
        setTotalItems(filterItemCount);
        setProductsPerPage(ITEMS_PER_PAGE);
      }
      if (filter.length === 0) {
        setProductsPerPage(ITEMS_PER_PAGE);
        setTotalItems(totalProductsCount);
      }
    }
    paginationPageResetter();
    console.log("hellow");
  }, [filter]);
  return (
    <>
      {productItems.length != 0 || null ? (
        <>
        <HeaderTop />
          <NavBar />
          {console.log(Location.pathname)}
          {console.log(viewProductStyle)}
          <Breadcrums
            title={"Shop Grid"}
            mainPage={"home"}
            subPage={"Shop Grid"}
          />
          <section className="tp-shop-area pb-120">
            {" "}
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4">
                  <div className="tp-shop-sidebar mr-10">
                    {/* categories */}
                    <div className="tp-shop-widget mb-50">
                      <h3 className="tp-shop-widget-title">Categories</h3>
                      <div className="tp-shop-widget-content">
                        <div className="tp-shop-widget-categories">
                          <ul>
                            {category.map((item) => (
                              <li className="flex gap-3 items-center">
                                <input
                                  type="checkbox"
                                  name="category"
                                  value={item.value}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setfilter([...filter, e.target.value]);
                                    }
                                    if (!e.target.checked) {
                                      const newArr = filter.filter(
                                        (item) => item != e.target.value
                                      );
                                      setfilter(newArr);
                                    }
                                    console.log(filter);
                                  }}
                                />
                                <label>{item.category}</label>
                                {/* {item.category} <span>{category.length}</span> */}
                              </li>
                            ))}
                          </ul>
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
                              <div>
                                <p className="text-sm text-gray-700">
                                  Showing{" "}
                                  <span className="font-medium">
                                    {(page - 1) * productsPerPage + 1}
                                  </span>{" "}
                                  to{" "}
                                  <span className="font-medium">
                                    {page * productsPerPage > totalItems
                                      ? totalItems
                                      : page * productsPerPage}
                                  </span>{" "}
                                  of{" "}
                                  <span className="font-medium">
                                    {totalItems}
                                  </span>{" "}
                                  results
                                </p>
                              </div>
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
                              {(filter.length >= 1
                                ? filterProduct(allProduct,filter)
                                : productItems
                              )?.map((item, index) => (
                                <ProductGridCard
                                  id={item.productid}
                                  productName={item.product}
                                  productBrand={item.brand}
                                  productCategory={item.category}
                                  productFinalPrice={item.finalprice}
                                  productImg={item.thumbnail}
                                  productMRP={item.price}
                                  rating={item.rating}
                                  discription={item.discription}
                                />
                              ))}

                              {/* dynamic cards area map  */}

                    
                              {/* product grid cards */}
                            </div>
                          ) : null}
                          {viewProductStyle === "List" ? (
                            <div className="grid grid-cols-1 gap-8">
                              {/* product list card */}

                              {/* dynamic listcard map area  */}
                              {/* dynamic listcard map area  */}

                              {(filter.length >= 1
                                ? allProduct.filter((product) =>
                                    filter.includes(product.category)
                                  )
                                : productItems
                              )?.map((item, index) => (
                                <Link
                                  to={`${Path.PRODUCT_DETAILS}/${item.productid}`}
                                  key={index}
                                >
                                  <ProductListCard
                                    id={item.id}
                                    productName={item.product}
                                    productBrand={item.brand}
                                    productCategory={item.category}
                                    productFinalPrice={item.finalprice}
                                    productImg={item.thumbnail}
                                    productMRP={item.price}
                                    rating={item.rating}
                                    productDiscription={item.discription}
                                  />
                                </Link>
                              ))}

                             
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
                      <Pagination
                        page={page}
                        itemPerPage={productsPerPage}
                        setPage={setPage}
                        handlePage={handlePage}
                        totalItems={totalItems}
                      />
                      {/* <div className="tp-pagination">
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
                                <a
                                  href="shop.html"
                                  className="next page-numbers"
                                >
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
                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      ) : (
        <main className="grid h-[100vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <Loader />
        </main>
      )}
    </>
  );
};

export default ShopPage;
