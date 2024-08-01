import React, { useEffect, useState } from "react";
import Breadcrums from "../components/Navigation/Breadcrums";
import NavBar from "../components/Navigation/NavBar";
import HeaderTop from "../components/header/HeaderTop";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import RangeCount from "../components/UiComponents/RangeCount";
import Cookies from "js-cookie";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAsync,
  fetchWishlistByUserIdAsync,
  removeWishlistItemAsync,
  selectUserWishlistItem,
} from "../features/Cart/CartSlice";
import { toast } from "react-toastify";

const WishListPage = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
 const [rangeValue,setRangeValue] = useState(1)
  const cartWishlist = useSelector(selectUserWishlistItem);
  const user = JSON.parse(localStorage.getItem("user"));
  const id = Cookies.get("userID");
  console.log(id);
  useEffect(() => {
    dispatch(fetchWishlistByUserIdAsync(id));
  }, [dispatch, id]);

  const handleRemoveItem = (wishlistItemId) => {
    dispatch(removeWishlistItemAsync({ id: wishlistItemId }));
  };

  const addToCart = (productId, wishlistid) => {
    dispatch(addToCartAsync({ product: productId, user: id }));
    dispatch(removeWishlistItemAsync({ id: wishlistid }));
    toast.success("Item has been moved to Cart")
    
  };

  return (
    <>
    {!cartWishlist.length && Navigate("/shop")}
      <HeaderTop />
      <NavBar />
      <Breadcrums title={"Wishlist"} mainPage={"home"} subPage={"Wishlist"} />
      <section className="tp-cart-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-cart-list mb-45 mr-30">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan={2} className="tp-cart-header-product">
                        Product
                      </th>
                      <th className="tp-cart-header-price">Price</th>
                     
                      <th>Action</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {/* wishlist product list */}
                    {cartWishlist.map((item) => (
                      <tr id={item._id}>
                        {/* img */}
                        <td className="tp-cart-img">
                          <a href="product-details.html">
                            {" "}
                            {
                              <img
                                src={item.product?.thumbnail}
                                alt="product_image"
                              />
                            }
                          </a>
                        </td>
                        {/* title */}
                        <td className="tp-cart-title">
                          <a href="product-details.html">
                            {item.product?.product}
                          </a>
                        </td>
                        {/* price */}
                        <td className="tp-cart-price">
                          <span>₹{item.product?.finalprice}</span>
                        </td>
                        <td className="tp-cart-add-to-cart">
                          <button
                            type="submit"
                            id={item.product?.productid}
                            className="tp-btn tp-btn-2 tp-btn-blue bg-black"
                            onClick={(e) => {
                              addToCart(e.target.id, item._id);
                            }}
                          >
                            Add To Cart
                          </button>
                        </td>
                        {/* action */}
                        <td className="tp-cart-action">
                          <button className="tp-cart-action-btn z-40 bg-red">
                            <svg
                              width={10}
                              height={10}
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span
                              id={item._id}
                              onClick={(e) => {
                                handleRemoveItem(e.target.id);
                              }}
                            >
                              Remove
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                    {/* wishlist product list */}
                  </tbody>
                </table>
              </div>
              <div className="tp-cart-bottom">
                <div className="row align-items-end">
                  <div className="col-xl-6 col-md-4">
                    <div className="tp-cart-update">
                      <Link to="/cart" className="tp-cart-update-btn">
                        Go To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishListPage;
