import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import {
  selectLoggedInUserInfo,
  fetchUserByIdAsync,
} from "../../../features/Auth/AuthSlice";
import { fetchUserOrdersAsync, selectUserOrders } from "../../../features/Orders/OrderSlice";

const UserOrderTab = ({ orderInfo }) => {
  const loggedInUser = useSelector(selectLoggedInUserInfo);
  const dispatch = useDispatch();
  const userOrder = useSelector(selectUserOrders);
  const userId = Cookies.get("userID");
  console.log(userId);
  useEffect(() => {
    dispatch(fetchUserByIdAsync(userId));
    dispatch(fetchUserOrdersAsync(userId));
    // axios
    //   .get(`http://localhost:8080/api/order/show?user=${userId}`)
    //   .then((response) => {
    //     setUserOrder(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  }, []);
  return (
    <div className="col-xxl-8 col-lg-8 shadow-effect">
      <div
        className="tab-pane fade active show"
        id="nav-order"
        role="tabpanel"
        aria-labelledby="nav-order-tab"
      >
        <div className="profile__ticket table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Product Title</th>
                <th scope="col">Status</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {userOrder.map((order) => (
                <tr key={order?._id}>
                  <th scope="row"> {order?._id}</th>
                  <div className="flex flex-col justify-start">
                    {order.products.map((item) => (
                      <div
                        className="flex my-2 px-2 py-2 border-[1px] border-gray-300 rounded-lg items-center justify-between gap-2"
                        style={{ background: "whitesmoke" }}
                      >
                        <div className="h-10 w-10 rounded-full flex items-center justify-center overflow-hidden border-gray-500 border-[1px]">
                          <img
                            className="h-full"
                            src={item?.product?.thumbnail}
                            alt="product_Image"
                          />
                        </div>
                        <td data-info="title">{item.product.product}</td>
                        <td>Qty. :{item?.quantity}</td>
                      </div>
                    ))}
                  </div>
                  <td data-info="status pending">{order?.status} </td>
                  <td>
                    <a href="#" className="tp-logout-btn">
                      view
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserOrderTab;
