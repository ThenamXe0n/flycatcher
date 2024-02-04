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

const userOrder = [
  { id: 2454551, productTitle: "Iphone", productStatus: "pending" },
  { id: 211551, productTitle: "t-shirt", productStatus: "canceled" },
  { id: 4565, productTitle: "asus tuf A 15", productStatus: "pending" },
  { id: 84811, productTitle: "mac pro", productStatus: "delivered" },
];
// const user = [{name:"nameet mandwal"}]
const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/auth/user/65bb6f21eafa699fc016016e`,{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }})
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });
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
       {user &&   <div className="row">
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
                <TabListButton title={"Address"} icon={<IoLocationOutline />} />
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
                <TabListButton title={"Change Password"} icon={<IoIosLock />} />
              </div>
            </TabList>

            {activeTab === "Profile" ? (
              <UserProfileTab
                username={user.name}
                userImg={"../../assets/img/users/user-3.jpg"}
              />
            ) : null}
            {activeTab === "My Orders" ? (
              <UserOrderTab orderInfo={userOrder} />
            ) : null}
            {activeTab === "Information" ? <UserInfoTab user={user} /> : null}
            {activeTab === "Address" ? <UserAddressTab /> : null}
          </div>}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
