import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Breadcrums from "../components/Navigation/Breadcrums";
import { useDispatch, useSelector } from "react-redux";
import { BiError } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { fetchUserOrdersAsync } from "../features/Orders/OrderSlice";
import {
  fetchCartByUserIdAsync,
  selectUserCartItems,
} from "../features/Cart/CartSlice";
import {
  fetchUserByIdAsync,
  selectLoggedInUserInfo,
} from "../features/Auth/AuthSlice";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import HeaderTop from "../components/header/HeaderTop";

const stripePromise = loadStripe(
  "pk_test_51OlSaPSIRvECnq9ubEGJf1GCJ6ePclfTKykXzx3h5HQudY0Ljq276CeDIFB6YeGWuorQ6Vw1d0xAd1ujr0BxFXOW00IS3Nqa5n"
);

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [billingDetails, setBillingDetails] = useState(null);
  const [paymentMode, setPaymentMode] = useState("Cash");
  const userId = Cookies.get("userID");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // form submit handler
  const onSubmit = (data) => {
    console.log(data);
    axios
      .patch(`http://localhost:8080/api/user/update/${userId}`, {
        address: data,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.messsage));
    setBillingDetails(data);
    window.location.replace("/checkout")
    toast.success("Delivery Address updated")

  };

  useEffect(() => {
    dispatch(fetchUserByIdAsync(userId));
    dispatch(fetchUserOrdersAsync(userId));
    dispatch(fetchCartByUserIdAsync(userId));
    console.log("api call is working");
  }, [dispatch, userId]);

  const checkoutItems = useSelector(selectUserCartItems);
  console.log(checkoutItems);
  const userInfo = useSelector(selectLoggedInUserInfo);
  const userDetails = userInfo?.address;

  const totalPrice = checkoutItems.reduce(
    (total, prev) => total + prev?.product?.finalprice * prev.quantity,
    0
  );
  const handlePaymentMode = (e) => {
    if (e.target.checked) {
      setPaymentMode(e.target.value);
    }
  };
  console.log(paymentMode);

  const placeOrder = (data) => {
    if(!checkoutItems.length){
      toast.error("you cant place empty order!")
      return;
    }
    console.log(data);
    const body = {
      products: checkoutItems,
      user: userId,
      totalamount: totalPrice,
      totalItems: checkoutItems.length,
    };
    console.log(body);
    axios.post(`http://localhost:8080/api/order/addorder`, {
      products: checkoutItems,
      user: userId,
      totalamount: totalPrice,
      totalItems: checkoutItems.length,
    });
    axios.post(`http://localhost:8080/api/cart/clear?user=${userId}`);
    toast.success("your order is place successfully");
    // window.location.replace("/order")
  };


  //checkout function
  const checkout = async () => {
    try {
      const response = await fetch("http://localhost:8080/checkout", {
        method: "POST",
        body: JSON.stringify({
          items: checkoutItems,
          totalAmount: totalPrice,
        }),
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      window.location = data.url;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <HeaderTop />
      <NavBar />
      <Breadcrums title={"Checkout"} mainPage={"home"} subPage={"checkout"} />
      <section className="tp-checkout-area pb-120" data-bg-color="#EFF1F5">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-checkout-verify">
                <div className="tp-checkout-verify-item">
                  <p className="tp-checkout-verify-reveal">
                    Returning customer?{" "}
                    <Link to="/login">
                      {" "}
                      <button
                        type="button"
                        className="tp-checkout-login-form-reveal-btn"
                      >
                        Click here to login
                      </button>
                    </Link>
                  </p>
                </div>
                <div className="tp-checkout-verify-item">
                  <p className="tp-checkout-verify-reveal">
                    Have a coupon?{" "}
                    <button
                      type="button"
                      className="tp-checkout-coupon-form-reveal-btn"
                    >
                      Click here to enter your code
                    </button>
                  </p>
                  <div id="tpCheckoutCouponForm" className="tp-return-customer">
                    <form action="#">
                      <div className="tp-return-customer-input">
                        <label>Coupon Code :</label>
                        <input type="text" placeholder="Coupon" />
                      </div>
                      <button
                        type="submit"
                        className="tp-return-customer-btn tp-checkout-btn"
                      >
                        Apply
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* form start section */}

            <div className="col-lg-7">
              <div className="tp-checkout-bill-area">
                <h3 className="tp-checkout-bill-title">Billing Details</h3>
                <div className="tp-checkout-bill-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="tp-checkout-bill-inner">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>
                              First Name <span>*</span>
                            </label>
                            <input
                              className="uppercase"
                              type="text"
                              {...register("name", {
                                required: "*this is required",
                              })}
                              placeholder="Enter billing customer name"
                              // {userDetails && (defaultValue={userDetails[0]?.name})}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage errors={errors} name="name" />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Country / Region </label>
                            <input
                              className="uppercase"
                              {...register("country", {
                                required: "*Enter Country Name",
                              })}
                              type="text"
                              placeholder="United States (US)"
                              // defaultValue={userDetails[0]?.country}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage
                                errors={errors}
                                name="country"
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Street address</label>
                            <input
                              className="uppercase"
                              type="text"
                              {...register("street", {
                                required:
                                  "*Cant be left empty , Enter delivery address",
                              })}
                              placeholder="House number and street name"
                              // defaultValue={userDetails[0]?.street}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage
                                errors={errors}
                                name="street"
                              />{" "}
                            </div>
                          </div>
                          <div className="tp-checkout-input">
                            <label>Locality / Landmark</label>
                            <input
                              className="uppercase"
                              {...register("locality", {
                                required:
                                  "*Enter locality or near by landmark ",
                              })}
                              type="text"
                              placeholder="Apartment, suite, unit, etc. (optional)"
                              // defaultValue={userDetails[0]?.locality}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage
                                errors={errors}
                                name="locality"
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Town / City</label>
                            <input
                              className="uppercase"
                              {...register("city", {
                                required: "*Enter City Name",
                              })}
                              type="text"
                              placeholder=""
                              // defaultValue={userDetails[0]?.city}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage errors={errors} name="city" />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>State / County</label>
                            <select >
                              <option>New York US</option>
                              <option>Berlin Germany</option>
                              <option>Paris France</option>
                              <option>Tokiyo Japan</option>
                              {/* <option>{userDetails[0]?.state}</option> */}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>Postcode ZIP</label>
                            <input
                              className="uppercase"
                              {...register("pincode", {
                                required: "*Pincode/zipcode is required ",
                              })}
                              type="text"
                              placeholder=""
                              // defaultValue={userDetails[0]?.pincode}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage
                                errors={errors}
                                name="pincode"
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>
                              Phone <span>*</span>
                            </label>
                            <input
                              className="uppercase"
                              {...register("contact", {
                                required:
                                  "*Cant be left empty ,Enter Mobile no.",
                              })}
                              type="text"
                              placeholder=""
                              // defaultValue={userDetails[0]?.contact}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage
                                errors={errors}
                                name="contact"
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>
                              Email address <span>*</span>
                            </label>
                            <input
                              className="uppercase"
                              {...register("email", {
                                required:
                                  "*Email address required , you will receive E-bill on email",
                              })}
                              type="email"
                              placeholder=""
                              // defaultValue={userDetails[0]?.email}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage errors={errors} name="email" />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-option-wrapper">
                            <div className="tp-checkout-option">
                              <input id="create_free_account" type="checkbox" />
                              <label htmlFor="create_free_account">
                                Create an account?
                              </label>
                            </div>
                            <div className="tp-checkout-option">
                              <input
                                id="ship_to_diff_address"
                                type="checkbox"
                              />
                              <label htmlFor="ship_to_diff_address">
                                Ship to a different address?
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Order notes (optional)</label>
                            <textarea
                              placeholder="Notes about your order, e.g. special notes for delivery."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-black duration-500 cursor-pointer"
                    >
                      save
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* form start section */}
            <div className="col-lg-5">
              {/* checkout place order */}
              <div className="tp-checkout-place white-bg">
                <h3 className="tp-checkout-place-title">Your Order</h3>
                <div className="tp-order-info-list">
                  <ul>
                    {/* header */}
                    <li className="tp-order-info-list-header">
                      <h4>Product</h4>
                      <h4>Total</h4>
                    </li>

                    {/* item list */}
                    {checkoutItems.map((item) => (
                      <>
                        {" "}
                        <li className="tp-order-info-list-desc">
                          <p>
                            {item.product.product}{" "}
                            <span> x {item.quantity}</span>
                          </p>
                          <span>₹{item.product.finalprice}</span>
                        </li>
                        {/*item list */}
                        {/* subtotal */}
                        <li className="tp-order-info-list-subtotal">
                          <span>Subtotal</span>
                          <span>
                            ₹{item.product.finalprice * item.quantity}
                          </span>
                        </li>
                      </>
                    ))}
                    {/* shipping */}
                    <li className="tp-order-info-list-shipping">
                      <span>Shipping</span>
                      <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                        <span>
                          <input id="flat_rate" type="radio" name="shipping" />
                          <label htmlFor="flat_rate">
                            Flat rate: <span>₹20.00</span>
                          </label>
                        </span>
                        <span>
                          <input
                            id="local_pickup"
                            type="radio"
                            name="shipping"
                          />
                          <label htmlFor="local_pickup">
                            Local pickup: <span>₹25.00</span>
                          </label>
                        </span>
                        <span>
                          <input
                            id="free_shipping"
                            type="radio"
                            name="shipping"
                          />
                          <label htmlFor="free_shipping">Free shipping</label>
                        </span>
                      </div>
                    </li>
                    {/* {userInfo.map((user) => ( */}
                    <li className="tp-order-info-list-shipping flex-col items-baseline gap-2">
                      <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                        Delivery Address
                      </span>
                      {userInfo?.address.length === 1 ? (
                        userInfo.address.map((address) => (
                          <div className="tp-order-info-list-shipping-item d-flex flex-column px-12 py-3 bg-[azure] rounded-lg border-[2px] border-blue-700 lg:w-[100%]">
                            <span>
                              <p className="font-bold text-blue-600">
                                {address.name}
                              </p>
                              <p className="font-bold text-blue-600">
                                Email : {address.email}
                              </p>

                              <div>
                                <p className="text-md font-sans text-black">
                                  <strong>Address:</strong>
                                  {address.street},{address.city},
                                  {address.pincode}
                                  <br />
                                  <strong>locality:</strong> {address.locality}{" "}
                                  <br />
                                  <strong>contact No.:</strong>{" "}
                                  {address.contact}
                                  <br />
                                  <strong>pincode :</strong> {address.pincode}{" "}
                                  <br />
                                </p>
                              </div>
                            </span>
                            <span></span>
                          </div>
                        ))
                      ) : (
                        <h1 className="text-xl">
                          enter delivery address <br /> (no Billingdetails
                          found)
                        </h1>
                      )}
                    </li>
                    {/* ))} */}
                    {/* total */}
                    <li className="tp-order-info-list-total">
                      <span>Total</span>
                      <span>${totalPrice}</span>
                    </li>
                  </ul>
                </div>
                <div className="tp-checkout-payment">
                  <div className="tp-checkout-payment-item">
                    <input type="radio" id="back_transfer" name="payment" />
                    <label
                      htmlFor="back_transfer"
                      data-bs-toggle="direct-bank-transfer"
                    >
                      Direct Bank Transfer
                    </label>
                    <div className="tp-checkout-payment-desc direct-bank-transfer">
                      <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                  <div className="tp-checkout-payment-item">
                    <input type="radio" id="cheque_payment" name="payment" />
                    <label htmlFor="cheque_payment">Cheque Payment</label>
                    <div className="tp-checkout-payment-desc cheque-payment">
                      <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                  <div className="tp-checkout-payment-item">
                    <input
                      type="radio"
                      id="cod"
                      value="cash"
                      name="payment"
                      onChange={(e) => {
                        handlePaymentMode(e);
                      }}
                    />
                    <label htmlFor="cod">Cash on Delivery</label>
                    <div className="tp-checkout-payment-desc cash-on-delivery">
                      <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                  <div className="tp-checkout-payment-item paypal-payment">
                    <input
                      type="radio"
                      id="paypal"
                      value="card"
                      name="payment"
                      onChange={(e) => {
                        handlePaymentMode(e);
                      }}
                    />
                    <label htmlFor="paypal">
                      pay by card using stripe{" "}
                      <img
                        src="https://becexamguide.com/wp-content/uploads/2020/10/logo-stripe-350x111.png"
                        alt=""
                      />{" "}
                      <a href="https://www.nerdwallet.com/article/small-business/what-is-stripe">
                        What is stripe?
                      </a>
                    </label>
                  </div>
                </div>
                <div className="tp-checkout-agree">
                  <div className="tp-checkout-option">
                    <input id="read_all" type="checkbox" />
                    <label htmlFor="read_all">
                      I have read and agree to the website.
                    </label>
                  </div>
                </div>
                <div className="tp-checkout-btn-wrapper">
                  <button className="tp-checkout-btn w-100" onClick={paymentMode==="card"?checkout:placeOrder}>
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
