import React, { useEffect, useState } from "react";
import Breadcrums from "../components/Navigation/Breadcrums";
import NavBar from "../components/Navigation/NavBar";
import HeaderTop from "../components/header/HeaderTop";
import axios from "axios";
import Path from "../routepath/Path";
import { Link, useNavigate } from "react-router-dom";
import RangeCount from "../components/UiComponents/RangeCount";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartByUserIdAsync,
  selectUserCartItems,
} from "../features/Cart/CartSlice";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const CartPage = () => {
  const Navigate = useNavigate();
  const cart = useSelector(selectUserCartItems);
  const [cartItems, setCartItems] = useState(cart);
  console.log(cartItems);
  const [userId, setUserId] = useState(Cookies.get("userID"));
  const [quantity, setquantity] = useState();
  const dispatch = useDispatch();
  const id = Cookies.get("userID");
  useEffect(() => {
    setUserId(id);
    dispatch(fetchCartByUserIdAsync(id));
    setCartItems(cart);
    // axios
    //   .get(`http://localhost:8080/api/cart/show?user=${id}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setCartItems(res.data);
    //   })
    //   .catch((error) => console.log(error.message));
  }, [dispatch]);

  const totalPrice = cart.reduce(
    (total, prev) => total + prev?.product?.finalprice * prev.quantity,
    0
  );
  console.log(totalPrice);
  const removeCartItem = (productid) => {
    axios
      .post(
        `http://localhost:8080/api/cart/remove?user=${userId}&product=${productid}`
      )
      .then((res) => {
        dispatch(fetchCartByUserIdAsync(id));
        setCartItems(cart);
      })
      .catch((error) => console.log(error.message));
  };
  // const makePayment = async () => {
  //   const stripe = loadStripe(
  //     "pk_test_51OlSaPSIRvECnq9ubEGJf1GCJ6ePclfTKykXzx3h5HQudY0Ljq276CeDIFB6YeGWuorQ6Vw1d0xAd1ujr0BxFXOW00IS3Nqa5n"
  //   );
  //   const body = {
  //     cartItems: cart,
  //   };
  //   const headers = {
  //     "content-type": "application/json",
  //   };
  //   const response =
  //     await fetch("http://localhost:8080/create-checkout-session",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(body),
  //       headers: headers,
  //     });

  //   const session = await response.json();
  //   const result = stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });
  //   if (result.error) {
  //     console.log(result.error);
  //   }
  // };
  const cartAlert =()=> toast.info("Cart is Empty , Add something to cart")

  return (
    <>
      {!cart.length && ( Navigate("/shop"))}
      <HeaderTop />
      <NavBar />
      <Breadcrums
        title={"Shopping Cart"}
        mainPage={"home"}
        subPage={"Shopping Cart"}
      />
      <section className="tp-cart-area pb-120">
        <div className="container">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <div className="tp-cart-list mb-45 mr-30">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan={2} className="tp-cart-header-product">
                        Product
                      </th>
                      <th className="tp-cart-header-quantity">Quantity</th>
                      <th className="tp-cart-header-price">Price</th>
                      <th>Action</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        {/* img */}
                        <td className="tp-cart-img">
                          <Link
                            to={`${Path.PRODUCT_DETAILS}/${item.product?.productid}`}
                          >
                            {" "}
                            <img
                              src={item.product?.thumbnail}
                              alt="product_image"
                            />
                          </Link>
                        </td>
                        {/* title */}
                        <td className="tp-cart-title">
                          <Link
                            to={`${Path.PRODUCT_DETAILS}/${item.product?.productid}`}
                          >
                            {item.product?.product}
                          </Link>
                        </td>
 {/* quantity */}
                        <td className="tp-cart-price">
                          <div className="flex gap-1 justify-items-center items-center ">
                         <p className="text-xl"> ₹ {item.product?.finalprice}</p> X <p className="text-green-600 font-semibold text-xl">{item.quantity}</p>
                          </div>
                        </td>
                        
                        {/* price */}
                        <td className="tp-cart-price">
                          <span>
                           <p className="text-xl"> ₹{item.quantity * item.product?.finalprice} </p>
                          </span>
                        </td>
                        {/* <RangeCount quantity={item.quantity}/> */}
                        {/* <td className="tp-cart-add-to-cart">
                          <button
                            type="submit"
                            className="tp-btn tp-btn-2 tp-btn-blue bg-black"
                          >
                            Add To Cart
                          </button>
                        </td> */}
                        {/* action */}
                        <td className="tp-cart-action">
                          <button className="tp-cart-action-btn">
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
                              id={item.product?.productid}
                              onClick={(e) => {
                                removeCartItem(e.target.id);
                                window.location.reload();
                              }}
                            >
                              Remove
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="tp-cart-bottom">
                <div className="row align-items-end">
                  <div className="col-xl-6 col-md-4">
                    <div className="tp-cart-update">
                      <Link to="/shop" className="tp-cart-update-btn">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-auto ml-8">
              <div className="tp-cart-checkout-wrapper">
                <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                  <span className="tp-cart-checkout-top-title">Subtotal</span>
                  <span className="tp-cart-checkout-top-price">
                    ₹{totalPrice}
                  </span>
                </div>
                <div className="tp-cart-checkout-shipping">
                  <h4 className="tp-cart-checkout-shipping-title">Shipping</h4>
                  <div className="tp-cart-checkout-shipping-option-wrapper">
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="flat_rate" type="radio" name="shipping" />
                      <label htmlFor="flat_rate">
                        Flat rate: <span>₹20.00</span>
                      </label>
                    </div>
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="local_pickup" type="radio" name="shipping" />
                      <label htmlFor="local_pickup">
                        Local pickup: <span> ₹25.00</span>
                      </label>
                    </div>
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="free_shipping" type="radio" name="shipping" />
                      <label htmlFor="free_shipping">Free shipping</label>
                    </div>
                  </div>
                </div>
                <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="tp-cart-checkout-proceed">

                  <Link to="/checkout" className="tp-cart-checkout-btn w-100" >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
