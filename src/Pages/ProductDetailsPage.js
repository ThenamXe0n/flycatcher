import React, { useEffect } from "react";
import { useState } from "react";
import HeaderTop from "../components/header/HeaderTop";
import RangeCount from "../components/UiComponents/RangeCount";
import NavBar from "../components/Navigation/NavBar";
import Breadcrums from "../components/Navigation/Breadcrums";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/Auth/AuthSlice";
import { addToCartAsync, addToWishlistAsync } from "../features/Cart/CartSlice";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { selectLoggedInUserInfo } from "../features/Auth/AuthSlice";
import "react-toastify/dist/ReactToastify.css";

const cartNotify = () =>
  toast.success("Item is been added to cart successfully", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });

const ProductDetailsPage = () => {
  const params = useParams();
  const loggedInUser = useSelector(selectLoggedInUserInfo);
  const { register, handleSubmit } = useForm();
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);
  const [productRating, setProductRating] = useState([
    {
      _id: "65bf8b90bc7771675774e916",
      product: "65bf86c7c22057ffe4e48c31",
      customerName: "Nameet Mandwal",
      rating: 5,
      message:
        "perfect and classy can wear in day to day life . This will inhance you outfit , really happy that i buyed it ",
      __v: 0,
    },
    {
      _id: "65bf8c07bc7771675774e918",
      product: "65bf86c7c22057ffe4e48c31",
      customerName: "Raj warrdhan singh",
      rating: 5,
      message:
        "sit perfect onn wrist material is also premium after all its a titan watch . I'll rate it 5 out of 5",
      __v: 0,
    },
  ]);
  const [product, setProduct] = useState({
    product: "Whitetails Women's Open Sky",
    thumbnail:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 476,
    brand: "Whitetails",
    category: "women top",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    discription: "teal full sleeve cotton wonens top ",
    finalprice: 340,
    stock: 0,
    productid: "65b0da8aa69c3e63dbe756ed",
  });
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = Cookies.get("userID");
  const loginStatus = Cookies.get("UserLoggedIn");
  console.log(product.product);
  const rating = product.rating;

  const addToCart = () => {
    if (!userId || !user || !loginStatus || loginStatus === "no") {
      Navigate("/login");
    } else {
      console.log("clicked");
      dispatch(
        addToCartAsync({
          product: product.productid,
          user: userId,
          quantity: quantity,
        })
      );
      cartNotify();
      console.log(product.productid);
      console.log(userId);
    }

    //  axios
    //     .post("http://localhost:8080/api/cart/add", {
    //       user: userId,
    //       product: product.productid,
    //     })
    //     .then((res) => {const result = JSON.stringify(res.data);
    //       alert(`${result}`);
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     });
  };
  const addToWishlist = () => {
    if (!userId || !user || !loginStatus || loginStatus === "no") {
      Navigate("/login");
    } else {
      dispatch(
        addToWishlistAsync({
          product: product.productid,
          quantity: quantity,
          user: userId,
        })
      );
      cartNotify();
    }
  };

  const onSubmit = (data) => {
    const review = {
      message: data.message,
      customerName: data.name,
      product: product.productid,
      rating: data.rating,
    };
    console.log(review);
    axios
      .post("http://localhost:8080/api/product/rateproduct", review)
      .then((res) => {
        alert(
          ` thankyou! ${res.data.customerName} for rating the product. your review has been submited`
        );
      })
      .catch((error) => {
        alert(`unable to submit review : Error ${error} `);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/product/rating?product=${params.id}`)
      .then((res) => setProductRating(res.data))
      .catch((error) => console.log(error.message));
    axios
      .get(`http://localhost:8080/api/product/${params.id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
    console.log(product);
  }, []);
  return (
    <>
      <HeaderTop />
      <NavBar />
      <Breadcrums mainPage={"home"} subPage={"Electronics"} />
      <section className="tp-product-details-area">
        <>
          {" "}
          <div className="tp-product-details-top pb-115">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-6">
                  <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
                    <nav>
                      <div
                        className="nav nav-tabs flex-sm-column "
                        id="productDetailsNavThumb"
                        role="tablist"
                      >
                        <button
                          className="nav-link active"
                          id="nav-1-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-1"
                          type="button"
                          role="tab"
                          aria-controls="nav-1"
                          aria-selected="true"
                        >
                          <img src={product.images[0]} alt="" />
                        </button>
                        <button
                          className="nav-link"
                          id="nav-2-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-2"
                          type="button"
                          role="tab"
                          aria-controls="nav-2"
                          aria-selected="false"
                        >
                          <img src={product.images[1]} alt="" />
                        </button>
                        <button
                          className="nav-link"
                          id="nav-3-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-3"
                          type="button"
                          role="tab"
                          aria-controls="nav-3"
                          aria-selected="false"
                        >
                          <img src={product.images[2]} alt="" />
                        </button>
                        <button
                          className="nav-link"
                          id="nav-4-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-4"
                          type="button"
                          role="tab"
                          aria-controls="nav-4"
                          aria-selected="false"
                        >
                          <img src={product.images[3]} alt="" />
                        </button>
                        <button
                          className="nav-link"
                          id="nav-5-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-5"
                          type="button"
                          role="tab"
                          aria-controls="nav-5"
                          aria-selected="false"
                        >
                          <img src={product.images[4]} alt="" />
                        </button>
                      </div>
                    </nav>
                    <div
                      className="tab-content m-img"
                      id="productDetailsNavContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="nav-1"
                        role="tabpanel"
                        aria-labelledby="nav-1-tab"
                        tabIndex={0}
                      >
                        <div className="tp-product-details-nav-main-thumb">
                          <img src={product.images[0]} alt="" />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-2"
                        role="tabpanel"
                        aria-labelledby="nav-2-tab"
                        tabIndex={0}
                      >
                        <div className="tp-product-details-nav-main-thumb">
                          <img src={product.images[1]} alt="" />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-3"
                        role="tabpanel"
                        aria-labelledby="nav-3-tab"
                        tabIndex={0}
                      >
                        <div className="tp-product-details-nav-main-thumb">
                          <img src={product.images[2]} alt="" />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-4"
                        role="tabpanel"
                        aria-labelledby="nav-4-tab"
                        tabIndex={0}
                      >
                        <div className="tp-product-details-nav-main-thumb">
                          <img src={product.images[3]} alt="" />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-5"
                        role="tabpanel"
                        aria-labelledby="nav-5-tab"
                        tabIndex={0}
                      >
                        <div className="tp-product-details-nav-main-thumb">
                          <img src={product.images[4]} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* col end */}
                <div className="col-xl-5 col-lg-6">
                  <div className="tp-product-details-wrapper">
                    <div className="tp-product-details-category">
                      <span>{product.category}</span>
                    </div>
                    <h3 className="tp-product-details-title uppercase">
                      {product.product}
                    </h3>
                    {/* inventory details */}
                    <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                      <div className="tp-product-details-stock mb-10">
                        {product.stock != 0 ? (
                          <span>In Stock</span>
                        ) : (
                          <span className="text-red-600">Out of Stock</span>
                        )}
                      </div>
                      <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                        <div className="tp-product-rating-icon tp-product-rating-icon-2">
                          {/* rating switch case area */}
                          {rating === 1 && (
                            <>
                              {" "}
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                            </>
                          )}
                          {rating === 2 && (
                            <>
                              {" "}
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                            </>
                          )}
                          {rating === 3 && (
                            <>
                              {" "}
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                            </>
                          )}
                          {rating === 4 && (
                            <>
                              {" "}
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                            </>
                          )}
                          {rating === 5 && (
                            <>
                              {" "}
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaStar />
                                </i>
                              </span>
                            </>
                          )}
                          {rating === 0 && (
                            <>
                              {" "}
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <FaRegStar />
                                </i>
                              </span>
                            </>
                          )}
                          {/* rating switch case area */}
                        </div>
                        <div className="tp-product-details-reviews">
                          <span>({productRating.length} Reviews)</span>
                        </div>
                      </div>
                    </div>
                    {product.discription && (
                      <p>
                        {product.discription}
                        <span>See more</span>
                      </p>
                    )}
                    {/* price */}
                    <div className="tp-product-details-price-wrapper mb-20">
                      <span className="tp-product-details-price old-price mx-1">
                        ₹{product.price}
                      </span>
                      <span className="tp-product-details-price new-price mx-1">
                        ₹{product.finalprice}
                      </span>
                    </div>
                    {/* variations */}
                    <div className="tp-product-details-variation">
                      {/* single item */}
                      <div className="tp-product-details-variation-item">
                        <h4 className="tp-product-details-variation-title">
                          Color :
                        </h4>
                        <div className="tp-product-details-variation-list">
                          <button
                            type="button"
                            className="color tp-color-variation-btn"
                          >
                            <span data-bg-color={product?.color} />
                            <span style={{background:"black"}} className="tp-color-variation-tootltip">
                              Yellow
                            </span>
                          </button>
                          <button
                            type="button"
                            className="color tp-color-variation-btn active"
                          >
                            <span data-bg-color="#CBCBCB" />
                            <span className="tp-color-variation-tootltip">
                              Gray
                            </span>
                          </button>
                          <button
                            type="button"
                            className="color tp-color-variation-btn"
                          >
                            <span data-bg-color="#494E52" />
                            <span className="tp-color-variation-tootltip">
                              Black
                            </span>
                          </button>
                          <button
                            type="button"
                            className="color tp-color-variation-btn"
                          >
                            <span data-bg-color="#B4505A" />
                            <span className="tp-color-variation-tootltip">
                              Brown
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* actions */}
                    <div className="tp-product-details-action-wrapper">
                      <h3 className="tp-product-details-action-title">
                        Quantity
                      </h3>
                      <div className="tp-product-details-action-item-wrapper d-flex align-items-center">
                        <div className="tp-product-details-quantity">
                          <div className="tp-product-quantity mb-15 mr-15">
                            <RangeCount
                              quantity={1}
                              getRangeValue={(value) => setQuantity(value)}
                            />
                            {/* <span className="tp-cart-minus">
                              <svg
                                width={11}
                                height={2}
                                viewBox="0 0 11 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1H10"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <input
                              className="tp-cart-input"
                              type="text"
                              defaultValue={1}
                            />
                            <span className="tp-cart-plus">
                              <svg
                                width={11}
                                height={12}
                                viewBox="0 0 11 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 6H10"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.5 10.5V1.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span> */}
                          </div>
                        </div>
                        <div className="tp-product-details-add-to-cart mb-15 w-100">
                          <button
                            className="tp-product-details-add-to-cart-btn w-100"
                            onClick={() => addToCart()}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                      {product.stock != 0 ? (
                        <button className="tp-product-details-buy-now-btn w-100">
                          Buy Now
                        </button>
                      ) : (
                        <button className="tp-product-details-buy-now-btn bg-gray-600 text-black opacity-55 w-100">
                          Out of Stock
                        </button>
                      )}
                    </div>
                    <div className="tp-product-details-action-sm flex">
                      <button
                        type="button"
                        className="tp-product-details-action-sm-btn flex"
                      >
                        <svg
                          width={14}
                          height={16}
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 3.16431H10.8622C12.0451 3.16431 12.9999 4.08839 12.9999 5.23315V7.52268"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.25177 0.985168L1 3.16433L3.25177 5.34354"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.9999 12.5983H3.13775C1.95486 12.5983 1 11.6742 1 10.5295V8.23993"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.748 14.7774L12.9998 12.5983L10.748 10.4191"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Compare
                      </button>
                      <button
                        onClick={() => addToWishlist()}
                        type="button"
                        className="tp-product-details-action-sm-btn flex"
                      >
                        <svg
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.33541 7.54172C3.36263 10.6766 7.42094 13.2113 8.49945 13.8387C9.58162 13.2048 13.6692 10.6421 14.6635 7.5446C15.3163 5.54239 14.7104 3.00621 12.3028 2.24514C11.1364 1.8779 9.77578 2.1014 8.83648 2.81432C8.64012 2.96237 8.36757 2.96524 8.16974 2.81863C7.17476 2.08487 5.87499 1.86999 4.69024 2.24514C2.28632 3.00549 1.68259 5.54167 2.33541 7.54172ZM8.50115 15C8.4103 15 8.32018 14.9784 8.23812 14.9346C8.00879 14.8117 2.60674 11.891 1.29011 7.87081C1.28938 7.87081 1.28938 7.8701 1.28938 7.8701C0.462913 5.33895 1.38316 2.15812 4.35418 1.21882C5.7492 0.776121 7.26952 0.97088 8.49895 1.73195C9.69029 0.993159 11.2729 0.789057 12.6401 1.21882C15.614 2.15956 16.5372 5.33966 15.7115 7.8701C14.4373 11.8443 8.99571 14.8088 8.76492 14.9332C8.68286 14.9777 8.592 15 8.50115 15Z"
                            fill="currentColor"
                          />
                          <path
                            d="M8.49945 13.8387L8.42402 13.9683L8.49971 14.0124L8.57526 13.9681L8.49945 13.8387ZM14.6635 7.5446L14.5209 7.4981L14.5207 7.49875L14.6635 7.5446ZM12.3028 2.24514L12.348 2.10211L12.3478 2.10206L12.3028 2.24514ZM8.83648 2.81432L8.92678 2.93409L8.92717 2.9338L8.83648 2.81432ZM8.16974 2.81863L8.25906 2.69812L8.25877 2.69791L8.16974 2.81863ZM4.69024 2.24514L4.73548 2.38815L4.73552 2.38814L4.69024 2.24514ZM8.23812 14.9346L8.16727 15.0668L8.16744 15.0669L8.23812 14.9346ZM1.29011 7.87081L1.43266 7.82413L1.39882 7.72081H1.29011V7.87081ZM1.28938 7.8701L1.43938 7.87009L1.43938 7.84623L1.43197 7.82354L1.28938 7.8701ZM4.35418 1.21882L4.3994 1.36184L4.39955 1.36179L4.35418 1.21882ZM8.49895 1.73195L8.42 1.85949L8.49902 1.90841L8.57801 1.85943L8.49895 1.73195ZM12.6401 1.21882L12.6853 1.0758L12.685 1.07572L12.6401 1.21882ZM15.7115 7.8701L15.5689 7.82356L15.5686 7.8243L15.7115 7.8701ZM8.76492 14.9332L8.69378 14.8011L8.69334 14.8013L8.76492 14.9332ZM2.19287 7.58843C2.71935 9.19514 4.01596 10.6345 5.30013 11.744C6.58766 12.8564 7.88057 13.6522 8.42402 13.9683L8.57487 13.709C8.03982 13.3978 6.76432 12.6125 5.49626 11.517C4.22484 10.4185 2.97868 9.02313 2.47795 7.49501L2.19287 7.58843ZM8.57526 13.9681C9.12037 13.6488 10.4214 12.8444 11.7125 11.729C12.9999 10.6167 14.2963 9.17932 14.8063 7.59044L14.5207 7.49875C14.0364 9.00733 12.7919 10.4 11.5164 11.502C10.2446 12.6008 8.9607 13.3947 8.42364 13.7093L8.57526 13.9681ZM14.8061 7.59109C15.1419 6.5613 15.1554 5.39131 14.7711 4.37633C14.3853 3.35729 13.5989 2.49754 12.348 2.10211L12.2576 2.38816C13.4143 2.75381 14.1347 3.54267 14.4905 4.48255C14.8479 5.42648 14.8379 6.52568 14.5209 7.4981L14.8061 7.59109ZM12.3478 2.10206C11.137 1.72085 9.72549 1.95125 8.7458 2.69484L8.92717 2.9338C9.82606 2.25155 11.1357 2.03494 12.2577 2.38821L12.3478 2.10206ZM8.74618 2.69455C8.60221 2.8031 8.40275 2.80462 8.25906 2.69812L8.08043 2.93915C8.33238 3.12587 8.67804 3.12163 8.92678 2.93409L8.74618 2.69455ZM8.25877 2.69791C7.225 1.93554 5.87527 1.71256 4.64496 2.10213L4.73552 2.38814C5.87471 2.02742 7.12452 2.2342 8.08071 2.93936L8.25877 2.69791ZM4.64501 2.10212C3.39586 2.49722 2.61099 3.35688 2.22622 4.37554C1.84299 5.39014 1.85704 6.55957 2.19281 7.58826L2.478 7.49518C2.16095 6.52382 2.15046 5.42513 2.50687 4.48154C2.86175 3.542 3.58071 2.7534 4.73548 2.38815L4.64501 2.10212ZM8.50115 14.85C8.43415 14.85 8.36841 14.8341 8.3088 14.8023L8.16744 15.0669C8.27195 15.1227 8.38645 15.15 8.50115 15.15V14.85ZM8.30897 14.8024C8.19831 14.7431 6.7996 13.9873 5.26616 12.7476C3.72872 11.5046 2.07716 9.79208 1.43266 7.82413L1.14756 7.9175C1.81968 9.96978 3.52747 11.7277 5.07755 12.9809C6.63162 14.2373 8.0486 15.0032 8.16727 15.0668L8.30897 14.8024ZM1.29011 7.72081C1.31557 7.72081 1.34468 7.72745 1.37175 7.74514C1.39802 7.76231 1.41394 7.78437 1.42309 7.8023C1.43191 7.81958 1.43557 7.8351 1.43727 7.84507C1.43817 7.8504 1.43869 7.85518 1.43898 7.85922C1.43913 7.86127 1.43923 7.8632 1.43929 7.865C1.43932 7.86591 1.43934 7.86678 1.43936 7.86763C1.43936 7.86805 1.43937 7.86847 1.43937 7.86888C1.43937 7.86909 1.43937 7.86929 1.43938 7.86949C1.43938 7.86959 1.43938 7.86969 1.43938 7.86979C1.43938 7.86984 1.43938 7.86992 1.43938 7.86994C1.43938 7.87002 1.43938 7.87009 1.28938 7.8701C1.13938 7.8701 1.13938 7.87017 1.13938 7.87025C1.13938 7.87027 1.13938 7.87035 1.13938 7.8704C1.13938 7.8705 1.13938 7.8706 1.13938 7.8707C1.13938 7.8709 1.13938 7.87111 1.13938 7.87131C1.13939 7.87173 1.13939 7.87214 1.1394 7.87257C1.13941 7.87342 1.13943 7.8743 1.13946 7.8752C1.13953 7.87701 1.13962 7.87896 1.13978 7.88103C1.14007 7.88512 1.14059 7.88995 1.14151 7.89535C1.14323 7.90545 1.14694 7.92115 1.15585 7.93861C1.16508 7.95672 1.18114 7.97896 1.20762 7.99626C1.2349 8.01409 1.26428 8.02081 1.29011 8.02081V7.72081ZM1.43197 7.82354C0.623164 5.34647 1.53102 2.26869 4.3994 1.36184L4.30896 1.0758C1.23531 2.04755 0.302663 5.33142 1.14679 7.91665L1.43197 7.82354ZM4.39955 1.36179C5.7527 0.932384 7.22762 1.12136 8.42 1.85949L8.57791 1.60441C7.31141 0.820401 5.74571 0.619858 4.30881 1.07585L4.39955 1.36179ZM8.57801 1.85943C9.73213 1.14371 11.2694 0.945205 12.5951 1.36192L12.685 1.07572C11.2763 0.632908 9.64845 0.842602 8.4199 1.60447L8.57801 1.85943ZM12.5948 1.36184C15.4664 2.27018 16.3769 5.34745 15.5689 7.82356L15.8541 7.91663C16.6975 5.33188 15.7617 2.04893 12.6853 1.07581L12.5948 1.36184ZM15.5686 7.8243C14.9453 9.76841 13.2952 11.4801 11.7526 12.7288C10.2142 13.974 8.80513 14.7411 8.69378 14.8011L8.83606 15.0652C8.9555 15.0009 10.3826 14.2236 11.9413 12.9619C13.4957 11.7037 15.2034 9.94602 15.8543 7.91589L15.5686 7.8243ZM8.69334 14.8013C8.6337 14.8337 8.56752 14.85 8.50115 14.85V15.15C8.61648 15.15 8.73201 15.1217 8.83649 15.065L8.69334 14.8013Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.8384 6.93209C12.5548 6.93209 12.3145 6.71865 12.2911 6.43693C12.2427 5.84618 11.8397 5.34743 11.266 5.1656C10.9766 5.07361 10.8184 4.76962 10.9114 4.48718C11.0059 4.20402 11.3129 4.05023 11.6031 4.13934C12.6017 4.45628 13.3014 5.32371 13.3872 6.34925C13.4113 6.64606 13.1864 6.90622 12.8838 6.92993C12.8684 6.93137 12.8538 6.93209 12.8384 6.93209Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12.8384 6.93209C12.5548 6.93209 12.3145 6.71865 12.2911 6.43693C12.2427 5.84618 11.8397 5.34743 11.266 5.1656C10.9766 5.07361 10.8184 4.76962 10.9114 4.48718C11.0059 4.20402 11.3129 4.05023 11.6031 4.13934C12.6017 4.45628 13.3014 5.32371 13.3872 6.34925C13.4113 6.64606 13.1864 6.90622 12.8838 6.92993C12.8684 6.93137 12.8538 6.93209 12.8384 6.93209"
                            stroke="currentColor"
                            strokeWidth="0.3"
                          />
                        </svg>
                        Add Wishlist
                      </button>
                      <button
                        type="button"
                        className="tp-product-details-action-sm-btn flex"
                      >
                        <svg
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.575 12.6927C8.775 12.6927 8.94375 12.6249 9.08125 12.4895C9.21875 12.354 9.2875 12.1878 9.2875 11.9907C9.2875 11.7937 9.21875 11.6275 9.08125 11.492C8.94375 11.3565 8.775 11.2888 8.575 11.2888C8.375 11.2888 8.20625 11.3565 8.06875 11.492C7.93125 11.6275 7.8625 11.7937 7.8625 11.9907C7.8625 12.1878 7.93125 12.354 8.06875 12.4895C8.20625 12.6249 8.375 12.6927 8.575 12.6927ZM8.55625 5.0638C8.98125 5.0638 9.325 5.17771 9.5875 5.40553C9.85 5.63335 9.98125 5.92582 9.98125 6.28294C9.98125 6.52924 9.90625 6.77245 9.75625 7.01258C9.60625 7.25272 9.3625 7.5144 9.025 7.79763C8.7 8.08087 8.44063 8.3795 8.24688 8.69352C8.05313 9.00754 7.95625 9.29385 7.95625 9.55246C7.95625 9.68792 8.00938 9.79567 8.11563 9.87572C8.22188 9.95576 8.34375 9.99578 8.48125 9.99578C8.63125 9.99578 8.75625 9.94653 8.85625 9.84801C8.95625 9.74949 9.01875 9.62635 9.04375 9.47857C9.08125 9.23228 9.16562 9.0137 9.29688 8.82282C9.42813 8.63195 9.63125 8.42568 9.90625 8.20402C10.2812 7.89615 10.5531 7.58829 10.7219 7.28042C10.8906 6.97256 10.975 6.62775 10.975 6.246C10.975 5.59333 10.7594 5.06996 10.3281 4.67589C9.89688 4.28183 9.325 4.0848 8.6125 4.0848C8.1375 4.0848 7.7 4.17716 7.3 4.36187C6.9 4.54659 6.56875 4.81751 6.30625 5.17463C6.20625 5.31009 6.16563 5.44863 6.18438 5.59025C6.20313 5.73187 6.2625 5.83962 6.3625 5.91351C6.5 6.01202 6.64688 6.04281 6.80313 6.00587C6.95937 5.96892 7.0875 5.88272 7.1875 5.74726C7.35 5.5256 7.54688 5.35627 7.77813 5.23929C8.00938 5.1223 8.26875 5.0638 8.55625 5.0638ZM8.5 15.7775C7.45 15.7775 6.46875 15.5897 5.55625 15.2141C4.64375 14.8385 3.85 14.3182 3.175 13.6532C2.5 12.9882 1.96875 12.2062 1.58125 11.3073C1.19375 10.4083 1 9.43547 1 8.38873C1 7.35431 1.19375 6.38762 1.58125 5.48866C1.96875 4.58969 2.5 3.80772 3.175 3.14273C3.85 2.47775 4.64375 1.95438 5.55625 1.57263C6.46875 1.19088 7.45 1 8.5 1C9.5375 1 10.5125 1.19088 11.425 1.57263C12.3375 1.95438 13.1313 2.47775 13.8063 3.14273C14.4813 3.80772 15.0156 4.58969 15.4094 5.48866C15.8031 6.38762 16 7.35431 16 8.38873C16 9.43547 15.8031 10.4083 15.4094 11.3073C15.0156 12.2062 14.4813 12.9882 13.8063 13.6532C13.1313 14.3182 12.3375 14.8385 11.425 15.2141C10.5125 15.5897 9.5375 15.7775 8.5 15.7775ZM8.5 14.6692C10.2625 14.6692 11.7656 14.0534 13.0094 12.822C14.2531 11.5905 14.875 10.1128 14.875 8.38873C14.875 6.6647 14.2531 5.18695 13.0094 3.95549C11.7656 2.72404 10.2625 2.10831 8.5 2.10831C6.7125 2.10831 5.20312 2.72404 3.97188 3.95549C2.74063 5.18695 2.125 6.6647 2.125 8.38873C2.125 10.1128 2.74063 11.5905 3.97188 12.822C5.20312 14.0534 6.7125 14.6692 8.5 14.6692Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="0.3"
                          />
                        </svg>
                        Ask a question
                      </button>
                    </div>
                    <div className="tp-product-details-query">
                      <div className="tp-product-details-query-item d-flex align-items-center">
                        <span>SKU:</span>
                        <p>NTB7SDVX44</p>
                      </div>
                      <div className="tp-product-details-query-item d-flex align-items-center">
                        <span>Category:</span>
                        <p>{product.category}</p>
                      </div>
                      <div className="tp-product-details-query-item d-flex align-items-center">
                        <span>Tag: </span>
                        <p>{product.keywords}</p>
                      </div>
                    </div>
                    <div className="tp-product-details-social">
                      <span>Share: </span>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-vimeo-v" />
                      </a>
                    </div>
                    <div className="tp-product-details-msg mb-15">
                      <ul>
                        <li>30 days easy returns</li>
                        <li>Order yours before 2.30pm for same day dispatch</li>
                      </ul>
                    </div>
                    <div className="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between">
                      <p>
                        Guaranteed safe <br /> &amp; secure checkout
                      </p>
                      <img
                        src="assets/img/product/icons/payment-option.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-product-details-bottom pb-140">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-product-details-tab-nav tp-tab">
                    <nav>
                      <div
                        className="nav nav-tabs justify-content-center p-relative tp-product-tab"
                        id="navPresentationTab"
                        role="tablist"
                      >
                        <button
                          className="nav-link"
                          id="nav-description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-description"
                          type="button"
                          role="tab"
                          aria-controls="nav-description"
                          aria-selected="true"
                        >
                          Description
                        </button>
                        <button
                          className="nav-link active"
                          id="nav-addInfo-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-addInfo"
                          type="button"
                          role="tab"
                          aria-controls="nav-addInfo"
                          aria-selected="false"
                        >
                          Additional information
                        </button>
                        <button
                          className="nav-link"
                          id="nav-review-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-review"
                          type="button"
                          role="tab"
                          aria-controls="nav-review"
                          aria-selected="false"
                        >
                          Reviews ({productRating.length})
                        </button>
                        <span
                          id="productTabMarker"
                          className="tp-product-details-tab-line"
                        />
                      </div>
                    </nav>
                    <div className="tab-content" id="navPresentationTabContent">
                      <div
                        className="tab-pane fade"
                        id="nav-description"
                        role="tabpanel"
                        aria-labelledby="nav-description-tab"
                        tabIndex={0}
                      >
                        <div className="tp-product-details-desc-wrapper ">
                          <div className="row justify-content-center">
                            {product?.des_subtitle ? (
                              <div className="col-xl-10">
                                <div className="tp-product-details-desc-item pb-105">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="tp-product-details-desc-content pt-25">
                                        <span>{product.product}</span>
                                        <h3 className="tp-product-details-desc-title">
                                          {product?.des_subtitle}
                                        </h3>
                                        <p>{product?.des_info}</p>
                                      </div>
                                      {product?.des2_subtitle && (
                                        <div className="tp-product-details-desc-content">
                                          <h3 className="tp-product-details-desc-title">
                                            {product?.des2_subtitle}
                                          </h3>
                                          <p>{product?.des2_info}</p>
                                        </div>
                                      )}
                                    </div>
                                    {product?.des_img && (
                                      <div className="col-lg-6">
                                        <div className="tp-product-details-desc-thumb">
                                          <img
                                            src={product?.des_img}
                                            alt="product_description"
                                          />
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="tp-product-details-desc-item  pb-75">
                                  <div className="row">
                                    <div className="col-lg-7">
                                      {product?.des2_img && (
                                        <div className="tp-product-details-desc-thumb">
                                          <img
                                            src={product?.des2_img}
                                            alt="product-image"
                                          />
                                        </div>
                                      )}
                                    </div>
                                    <div className="col-lg-5 order-first order-lg-last">
                                      {product?.des3_subtitle && (
                                        <div className="tp-product-details-desc-content des-content-2 pl-40">
                                          <h3 className="tp-product-details-desc-title">
                                            {product?.des3_subtitle}
                                          </h3>
                                          <p>{product?.des3_info}</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="tp-product-details-desc-item">
                                  <div className="row">
                                    <div className="col-xl-12">
                                      {product?.des3_subtitle && (
                                        <div className="tp-product-details-desc-banner text-center m-img">
                                          <h3 className="tp-product-details-desc-banner-title tp-product-details-desc-title">
                                            {product?.des3_subtitle}
                                          </h3>
                                          <img
                                            src={product?.des3_img}
                                            alt="product-img"
                                          />
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <h1 className="text-3xl font-bold text-center">
                                No Description found !
                              </h1>
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="nav-addInfo"
                        role="tabpanel"
                        aria-labelledby="nav-addInfo-tab"
                        tabIndex={0}
                      >
                        <div className="tp-product-details-additional-info ">
                          <div className="row justify-content-center">
                            <div className="col-xl-10">
                              <table>
                                <tbody>
                                  {product?.brand && (
                                    <tr>
                                      <td>brand</td>
                                      <td>{product?.brand}</td>
                                    </tr>
                                  )}
                                  {product?.color && (
                                    <tr>
                                      <td>Color</td>
                                      <td>{product?.color}</td>
                                    </tr>
                                  )}
                                  {product?.screen && (
                                    <tr>
                                      <td>Screen</td>
                                      <td>{product?.screen}</td>
                                    </tr>
                                  )}
                                  {product?.category && (
                                    <tr>
                                      <td>category</td>
                                      <td>{product?.category}</td>
                                    </tr>
                                  )}
                                  {product?.os && (
                                    <tr>
                                      <td>os</td>
                                      <td>{product?.os}</td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-review"
                        role="tabpanel"
                        aria-labelledby="nav-review-tab"
                        tabIndex={0}
                      >
                        <div className="tp-product-details-review-wrapper pt-60">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="tp-product-details-review-statics">
                                {/* number */}
                                <div className="tp-product-details-review-number d-inline-block mb-50">
                                  <h3 className="tp-product-details-review-number-title">
                                    Customer reviews ({productRating.length})
                                  </h3>
                                  <div className="tp-product-details-review-summery d-flex align-items-center">
                                    <div className="tp-product-details-review-summery-value">
                                      <span>{}</span>
                                    </div>
                                    <div className="tp-product-rating-icon tp-product-rating-icon-2">
                                      {/* rating switch case area */}
                                      {rating === 1 && (
                                        <>
                                          {" "}
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                        </>
                                      )}
                                      {rating === 2 && (
                                        <>
                                          {" "}
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                        </>
                                      )}
                                      {rating === 3 && (
                                        <>
                                          {" "}
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                        </>
                                      )}
                                      {rating === 4 && (
                                        <>
                                          {" "}
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                        </>
                                      )}
                                      {rating === 5 && (
                                        <>
                                          {" "}
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaStar />
                                            </i>
                                          </span>
                                        </>
                                      )}
                                      {rating === 0 && (
                                        <>
                                          {" "}
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                          <span>
                                            <i>
                                              <FaRegStar />
                                            </i>
                                          </span>
                                        </>
                                      )}
                                      {/* rating switch case area */}
                                    </div>
                                  </div>
                                  <div className="tp-product-details-review-rating-list">
                                    {/* single item */}
                                    <div className="tp-product-details-review-rating-item d-flex align-items-center">
                                      <span>5 Start</span>
                                      <div className="tp-product-details-review-rating-bar">
                                        <span
                                          className="tp-product-details-review-rating-bar-inner"
                                          data-width="82%"
                                        />
                                      </div>
                                      <div className="tp-product-details-review-rating-percent">
                                        <span>82%</span>
                                      </div>
                                    </div>{" "}
                                    {/* end single item */}
                                    {/* single item */}
                                    <div className="tp-product-details-review-rating-item d-flex align-items-center">
                                      <span>4 Start</span>
                                      <div className="tp-product-details-review-rating-bar">
                                        <span
                                          className="tp-product-details-review-rating-bar-inner"
                                          data-width="30%"
                                        />
                                      </div>
                                      <div className="tp-product-details-review-rating-percent">
                                        <span>30%</span>
                                      </div>
                                    </div>{" "}
                                    {/* end single item */}
                                    {/* single item */}
                                    <div className="tp-product-details-review-rating-item d-flex align-items-center">
                                      <span>3 Start</span>
                                      <div className="tp-product-details-review-rating-bar">
                                        <span
                                          className="tp-product-details-review-rating-bar-inner"
                                          data-width="15%"
                                        />
                                      </div>
                                      <div className="tp-product-details-review-rating-percent">
                                        <span>15%</span>
                                      </div>
                                    </div>{" "}
                                    {/* end single item */}
                                    {/* single item */}
                                    <div className="tp-product-details-review-rating-item d-flex align-items-center">
                                      <span>2 Start</span>
                                      <div className="tp-product-details-review-rating-bar">
                                        <span
                                          className="tp-product-details-review-rating-bar-inner"
                                          data-width="6%"
                                        />
                                      </div>
                                      <div className="tp-product-details-review-rating-percent">
                                        <span>6%</span>
                                      </div>
                                    </div>{" "}
                                    {/* end single item */}
                                    {/* single item */}
                                    <div className="tp-product-details-review-rating-item d-flex align-items-center">
                                      <span>1 Start</span>
                                      <div className="tp-product-details-review-rating-bar">
                                        <span
                                          className="tp-product-details-review-rating-bar-inner"
                                          data-width="10%"
                                        />
                                      </div>
                                      <div className="tp-product-details-review-rating-percent">
                                        <span>10%</span>
                                      </div>
                                    </div>{" "}
                                    {/* end single item */}
                                  </div>
                                </div>
                                {/* reviews */}
                                <div className="tp-product-details-review-list pr-110">
                                  <h3 className="tp-product-details-review-title">
                                    Rating &amp; Review
                                  </h3>
                                  {productRating.length != 0 &&
                                    productRating.map((review) => (
                                      <div className="tp-product-details-review-avater d-flex align-items-start">
                                        <div className="tp-product-details-review-avater-thumb">
                                          <a href="#">
                                            <img
                                              src="../assets/img/users/user-3.jpg"
                                              alt=""
                                            />
                                          </a>
                                        </div>
                                        <div className="tp-product-details-review-avater-content">
                                          <div className="tp-product-rating-icon tp-product-rating-icon-2">
                                            {/* rating switch case area */}
                                            {review.rating === 1 && (
                                              <>
                                                {" "}
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                              </>
                                            )}
                                            {review.rating === 2 && (
                                              <>
                                                {" "}
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                              </>
                                            )}
                                            {review.rating === 3 && (
                                              <>
                                                {" "}
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                              </>
                                            )}
                                            {review.rating === 4 && (
                                              <>
                                                {" "}
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                              </>
                                            )}
                                            {review.rating === 5 && (
                                              <>
                                                {" "}
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaStar />
                                                  </i>
                                                </span>
                                              </>
                                            )}
                                            {review.rating === 0 && (
                                              <>
                                                {" "}
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                                <span>
                                                  <i>
                                                    <FaRegStar />
                                                  </i>
                                                </span>
                                              </>
                                            )}
                                            {/* rating switch case area */}
                                          </div>
                                          <h3 className="tp-product-details-review-avater-title">
                                            {review.customerName}
                                          </h3>
                                          <span className="tp-product-details-review-avater-meta">
                                            {review.createdAt}
                                          </span>
                                          <div className="tp-product-details-review-avater-comment">
                                            <p>{review.message}</p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>{" "}
                            {/* end col */}
                            <div className="col-lg-6">
                              <div className="tp-product-details-review-form">
                                <h3 className="tp-product-details-review-form-title">
                                  Review this product
                                </h3>
                                <p>
                                  Your email address will not be published.
                                  Required fields are marked *
                                </p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                  <div className="tp-product-details-review-form-rating d-flex align-items-center">
                                    <p>Your Rating :</p>
                                    <div className="tp-product-details-review-form-rating-icon d-flex align-items-center">
                                      <span>
                                        <i className="fa-solid fa-star" />
                                      </span>
                                      <span>
                                        <i className="fa-solid fa-star" />
                                      </span>
                                      <span>
                                        <i className="fa-solid fa-star" />
                                      </span>
                                      <span>
                                        <i className="fa-solid fa-star" />
                                      </span>
                                      <span>
                                        <i className="fa-solid fa-star" />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="tp-product-details-review-input-wrapper">
                                    <div className="tp-product-details-review-input-box">
                                      <div className="tp-product-details-review-input">
                                        <textarea
                                          {...register("message")}
                                          id="message"
                                          name="message"
                                          placeholder="Write your review here..."
                                          defaultValue={""}
                                          className="p-4"
                                        />
                                      </div>
                                      <div className="tp-product-details-review-input-title">
                                        <label htmlFor="message">Message</label>
                                      </div>
                                    </div>
                                    <div className="tp-product-details-review-input-box">
                                      <div className="tp-product-details-review-input">
                                        <input
                                          {...register("name")}
                                          name="name"
                                          id="name"
                                          type="text"
                                          value={loggedInUser?.name}
                                          placeholder="Shahnewaz Sakil"
                                        />
                                      </div>
                                      <div className="tp-product-details-review-input-title">
                                        <label htmlFor="name">Your Name</label>
                                      </div>
                                    </div>
                                    <div className="tp-product-details-review-input-box">
                                      <div className="tp-product-details-review-input">
                                        <input
                                          {...register("rating")}
                                          name="rating"
                                          min="0"
                                          max="5"
                                          maxLength="1"
                                          step="1"
                                          id="rating"
                                          type="number"
                                          placeholder="give stars to this product"
                                        />
                                      </div>
                                      <div className="tp-product-details-review-input-title">
                                        <label htmlFor="rating">
                                          Rating out of 5
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tp-product-details-review-suggetions mb-20">
                                    <div className="tp-product-details-review-remeber">
                                      <input id="remeber" type="checkbox" />
                                      <label htmlFor="remeber">
                                        Save my name, email, and website in this
                                        browser for the next time I comment.
                                      </label>
                                    </div>
                                  </div>
                                  <div className="tp-product-details-review-btn-wrapper">
                                    <button
                                      className="tp-product-details-review-btn bg-black"
                                      type="submit"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </section>
    </>
  );
};

export default ProductDetailsPage;
