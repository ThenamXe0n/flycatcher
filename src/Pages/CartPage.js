import React, { useEffect, useState } from 'react'
import Breadcrums from '../components/Navigation/Breadcrums'
import NavBar from '../components/Navigation/NavBar'
import HeaderTop from '../components/header/HeaderTop'
import axios from 'axios'

const CartPage = () => {
  const [cartItems,setCartItems] = useState([])
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const id = user.userId

    axios.get(`http://localhost:8080/api/cart/show?user=${id}`).then(res=>{console.log(res.data);setCartItems(res.data)}).catch(error=>console.log(error.message))

  },[])
  {/* {console.log(cartItems)} */}
  const totalPrice = cartItems?.reduce((total,prev)=>total+prev?.product?.finalprice*prev.quantity,0)
  console.log(totalPrice);
  return (
   <>
   <HeaderTop />
   <NavBar />
   <Breadcrums title={"Shopping Cart"} mainPage={"home"} subPage={"Shopping Cart"}/>
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
                <th className="tp-cart-header-price">Price</th>
                <th className="tp-cart-header-quantity">Quantity</th>
                <th>Action</th>
                <th />
              </tr>
            </thead>
            <tbody>
            {cartItems.map((item)=>(
              <tr>
                {/* img */}
                <td className="tp-cart-img">
                  <a href="product-details.html">
                    {" "}
                    <img
                      src={item.product.thumbnail}
                      alt=""
                    />
                  </a>
                </td>
                {/* title */}
                <td className="tp-cart-title">
                  <a href="product-details.html">
                    {item.product.product}
                  </a>
                </td>
                {/* price */}
                <td className="tp-cart-price">
                  <span>${item.quantity * item.product.finalprice }</span>
                </td>
                {/* quantity */}
                <td className="tp-cart-quantity">
                  <div className="tp-product-quantity mt-10 mb-10">
                    <span className="tp-cart-minus">
                      <svg
                        width={10}
                        height={2}
                        viewBox="0 0 10 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1H9"
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
                      defaultValue={item.quantity}
                    />
                    <span className="tp-cart-plus">
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 1V9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 5H9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="tp-cart-add-to-cart">
                  <button type="submit" className="tp-btn tp-btn-2 tp-btn-blue">
                    Add To Cart
                  </button>
                </td>
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
                    <span>Remove</span>
                  </button>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>
        <div className="tp-cart-bottom">
          <div className="row align-items-end">
            <div className="col-xl-6 col-md-4">
              <div className="tp-cart-update">
                <a href="cart.html" className="tp-cart-update-btn">
                  Go To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-auto ml-8">
  <div className="tp-cart-checkout-wrapper">
    <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
      <span className="tp-cart-checkout-top-title">Subtotal</span>
      <span className="tp-cart-checkout-top-price">${totalPrice}</span>
    </div>
    <div className="tp-cart-checkout-shipping">
      <h4 className="tp-cart-checkout-shipping-title">Shipping</h4>
      <div className="tp-cart-checkout-shipping-option-wrapper">
        <div className="tp-cart-checkout-shipping-option">
          <input id="flat_rate" type="radio" name="shipping" />
          <label htmlFor="flat_rate">
            Flat rate: <span>$20.00</span>
          </label>
        </div>
        <div className="tp-cart-checkout-shipping-option">
          <input id="local_pickup" type="radio" name="shipping" />
          <label htmlFor="local_pickup">
            Local pickup: <span> $25.00</span>
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
      <span>${totalPrice}</span>
    </div>
    <div className="tp-cart-checkout-proceed">
      <a href="checkout.html" className="tp-cart-checkout-btn w-100">
        Proceed to Checkout
      </a>
    </div>
  </div>
</div>

    </div>
  </div>
</section>

   </>
  )
}

export default CartPage