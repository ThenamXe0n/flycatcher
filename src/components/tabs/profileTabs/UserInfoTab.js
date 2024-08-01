import React, { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  selectLoggedInUserInfo,
  fetchUserByIdAsync,
} from "../../../features/Auth/AuthSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AiTwotonePicture } from "react-icons/ai";

const UserInfoTab = () => {
  const userId = Cookies.get("userID");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // form submit handler
  const onSubmit = (data) => {
    axios
      .patch(`http://localhost:8080/api/user/update/${userId}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.messsage));
    // window.location.reload();
    toast.success("user profile has been updated successfully!");
  };

  useEffect(() => {
    dispatch(fetchUserByIdAsync(userId));
  }, []);
  const userInfo = useSelector(selectLoggedInUserInfo);
  return (
    <div className="col-xxl-8 col-lg-8 shadow-effect">
      <div
        className="tab-pane"
        id="nav-information"
        role="tabpanel"
        aria-labelledby="nav-information-tab"
      >
        <div className="profile__info">
          <h3 className="profile__info-title">Personal Details</h3>
          <div className="profile__info-content">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-xxl-6 col-md-6">
                  <div className="profile__input-box">
                    <div className="profile__input">
                      <input
                        {...register("name", {
                          required: "*this is required",
                        })}
                        type="text"
                        placeholder="Enter your username"
                        defaultValue={userInfo.name}
                      />
                      <span>
                        <svg
                          width={17}
                          height={19}
                          viewBox="0 0 17 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.5 17.6C15.5 14.504 12.3626 12 8.5 12C4.63737 12 1.5 14.504 1.5 17.6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-md-6">
                  <div className="profile__input-box">
                    <div className="profile__input">
                      <input
                        {...register("email", {
                          required: "*this is required",
                        })}
                        type="email"
                        placeholder="Enter your email"
                        defaultValue={userInfo?.email}
                      />
                      <span>
                        <svg
                          width={18}
                          height={16}
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13 5.3999L10.496 7.3999C9.672 8.0559 8.32 8.0559 7.496 7.3999L5 5.3999"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-md-6">
                  <div className="profile__input-box">
                    <div className="profile__input">
                      <input
                        {...register("profile", {
                          required: "*this is required",
                        })}
                        type="text"
                        placeholder="Enter profile pic url"
                        defaultValue={userInfo?.profile}
                      />
                      <span>
                       <AiTwotonePicture />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-md-6">
                  <div className="profile__input-box">
                    <div className="profile__input">
                      <input
                        {...register("contact", {
                          required: "*this is required",
                        })}
                        type="text"
                        placeholder="Enter your number"
                        defaultValue={userInfo?.contact}
                      />
                      <span>
                        <svg
                          width={15}
                          height={18}
                          viewBox="0 0 15 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.9148 5V13C13.9148 16.2 13.1076 17 9.87892 17H5.03587C1.80717 17 1 16.2 1 13V5C1 1.8 1.80717 1 5.03587 1H9.87892C13.1076 1 13.9148 1.8 13.9148 5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.4"
                            d="M9.08026 3.80054H5.85156"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.4"
                            d="M7.45425 14.6795C8.14522 14.6795 8.70537 14.1243 8.70537 13.4395C8.70537 12.7546 8.14522 12.1995 7.45425 12.1995C6.76327 12.1995 6.20312 12.7546 6.20312 13.4395C6.20312 14.1243 6.76327 14.6795 7.45425 14.6795Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12">
                  <div className="profile__btn">
                    <button type="submit" className="tp-btn bg-black">
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoTab;
