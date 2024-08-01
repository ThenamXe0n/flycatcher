import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserCartItems } from "../../features/Cart/CartSlice";
import { Link } from "react-router-dom";
import { originPath } from "../../assets/js/main";

const BagSidebar = ({ openCart, getOpencartStatus }) => {
  const origin_path = originPath();
  const cartItems = useSelector(selectUserCartItems);
  const totalPrice = cartItems.reduce(
    (total, prev) => total + prev?.product?.finalprice * prev.quantity,
    0
  );
  return (
    <div
      className={
        !openCart ? "cartmini__area" : "cartmini__area cartmini-opened"
      }
    >
      <div className="cartmini__wrapper d-flex justify-content-between flex-column">
        <div className="cartmini__top-wrapper">
          <div className="cartmini__top p-relative">
            <div className="cartmini__top-title">
              <h4>Shopping cart</h4>
            </div>
            <div className="cartmini__close">
              <button
                type="button"
                className="cartmini__close-btn cartmini-close-btn"
                onClick={() => {
                  getOpencartStatus(false);
                }}
              >
                <RxCross2 className="m-0" />
              </button>
            </div>
          </div>
          <div className="cartmini__shipping">
            <p>
              {" "}
              Free Shipping for all orders over <span>₹50</span>
            </p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                data-width="70%"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "70%" }}
              />
            </div>
          </div>
          {/* {cartItems.map((items) => {
          <div className="cartmini__widget">
            this is a new product space
              <div className="cartmini__widget-item">
                <div className="cartmini__thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-1.jpg" alt="" />
                  </a>
                </div>
                <div className="cartmini__content">
                  <h5 className="cartmini__title">
                    <a href="product-details.html">{items.quantity}</a>
                  </h5>
                  <div className="cartmini__price-wrapper">
                    <span className="cartmini__price">$46.00</span>
                    <span className="cartmini__quantity">x2</span>
                  </div>
                </div>
                <a href="#" className="cartmini__del">
                  <i className="fa-regular fa-xmark" />
                </a>
              </div>;
          </div>
            })} */}
          {cartItems.map((items) => (
            <div className="flex gap-6 my-2 pb-2 border-b-2 items-center ">
              <div className="cartmini__thumb align-middle justify-items-center">
                <img src={items?.product?.thumbnail} alt="product_thumbnail" />
              </div>
              <div className="cartmini__content">
                <h5 className="cartmini__title">{items.product?.product}</h5>
                <div className="cartmini__price-wrapper">
                  <span className="cartmini__price">₹{items.product?.finalprice}</span>
                  <span className="cartmini__quantity">x{items.quantity}</span>
                </div>
              </div>
            </div>
          ))}
          {/* for wp */}
          {/* if no item in cart */}
          <div className={cartItems.length?"cartmini__empty text-center d-none":"cartmini__empty text-center "}>
            <img src={`${origin_path}/assets/img/product/cartmini/empty-cart.png`} alt="" />
            <p>Your Cart is empty</p>
            <Link to="/shop" className="tp-btn">
              Go to Shop
            </Link>
          </div>
        </div>
        <div className="cartmini__checkout">
          <div className="cartmini__checkout-title mb-30">
            <h4>Subtotal:</h4>
            <span>₹{totalPrice}</span>
          </div>
          <div className="cartmini__checkout-btn">
            <Link to="/cart" className="tp-btn mb-10 w-100">
              {" "}
              view cart
            </Link>
            {/* <a href="checkout.html" className="tp-btn tp-btn-border w-100">
              {" "}
              checkout
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagSidebar;
