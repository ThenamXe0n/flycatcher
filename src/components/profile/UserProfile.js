import React, { useEffect, useState } from "react";
import TabList from "../tabs/TabList";
import UserProfileTab from "../tabs/profileTabs/UserProfileTab";
import { FaUserPen } from "react-icons/fa6";
import {
  IoInformationCircleOutline,
  IoLocationOutline,
  IoReceiptOutline,
} from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import UserOrderTab from "../tabs/profileTabs/UserOrderTab";
import TabListButton from "../UiComponents/TabListButton";
import UserInfoTab from "../tabs/profileTabs/UserInfoTab";
import UserAddressTab from "../tabs/profileTabs/UserAddressTab";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUser ,selectLoggedInUserInfo} from "../../features/Auth/AuthSlice";
import { fetchUserByIdAsync } from "../../features/Auth/AuthSlice";
import Cookies from "js-cookie";
import UserPasswordResetTab from "../tabs/profileTabs/UserPasswordResetTab";

const userOrder = [
  { id: 2454551, productTitle: "Iphone", productStatus: "pending" },
  { id: 211551, productTitle: "t-shirt", productStatus: "canceled" },
  { id: 4565, productTitle: "asus tuf A 15", productStatus: "pending" },
  { id: 84811, productTitle: "mac pro", productStatus: "delivered" },
];
// const user = [{name:"nameet mandwal"}]
const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  // const userInfo = localStorage.getItem("user");
  const user = localStorage.getItem("user");

  //user info fetching and storing it on state
  const loggedInUser = useSelector(selectLoggedInUserInfo);
  const userId = Cookies.get("userID");
  console.log(userId)
  const dispatch = useDispatch();
 
  //user info fetching and storing it on state

  return (
    <section className="profile__area pt-120 pb-120 mx-24">
      <div className="container">
        <div className="profile__inner p-relative">
          <div className="profile__shape">
            <img
              className="profile__shape-1"
              src="assets/img/login/laptop.png"
              alt=""
            />
            <img
              className="profile__shape-2"
              src="assets/img/login/man.png"
              alt=""
            />
            <img
              className="profile__shape-3"
              src="assets/img/login/shape-1.png"
              alt=""
            />
            <img
              className="profile__shape-4"
              src="assets/img/login/shape-2.png"
              alt=""
            />
            <img
              className="profile__shape-5"
              src="assets/img/login/shape-3.png"
              alt=""
            />
            <img
              className="profile__shape-6"
              src="assets/img/login/shape-4.png"
              alt=""
            />
          </div>
          {user && (
            <div className="row">
              <TabList>
                <div
                  onClick={(e) => {
                    setActiveTab("Profile");
                  }}
                >
                  <TabListButton title={"Profile"} icon={<FaUserPen />} />
                </div>
                <div
                  onClick={(e) => {
                    setActiveTab("Information");
                  }}
                >
                  <TabListButton
                    title={"Information"}
                    icon={<IoInformationCircleOutline />}
                  />
                </div>
                <div
                  onClick={(e) => {
                    setActiveTab("Address");
                  }}
                >
                  <TabListButton
                    title={"Address"}
                    icon={<IoLocationOutline />}
                  />
                </div>
                <div
                  onClick={(e) => {
                    setActiveTab("My Orders");
                  }}
                >
                  <TabListButton
                    title={"My Orders"}
                    icon={<IoReceiptOutline />}
                  />
                </div>
                <div
                  onClick={(e) => {
                    setActiveTab("Notification");
                  }}
                >
                  <TabListButton title={"Notification"} icon={<FaRegBell />} />
                </div>
                <div
                  onClick={(e) => {
                    setActiveTab("Change Password");
                  }}
                >
                  <TabListButton
                    title={"Change Password"}
                    icon={<IoIosLock />}
                  />
                </div>
              </TabList>

              {activeTab === "Profile" ? (
                <UserProfileTab  />
              ) : null}
              {activeTab === "My Orders" ? (
                <UserOrderTab orderInfo={userOrder} />
              ) : null}
              {activeTab === "Information" ? (
                <UserInfoTab userInfo={user} />
              ) : null}
              {activeTab === "Address" ? <UserAddressTab /> : null}
              {activeTab === "Change Password" ? <UserPasswordResetTab />:null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
