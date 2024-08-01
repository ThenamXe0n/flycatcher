import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import PasswordInputBox from "./PasswordInputBox";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAsync } from "../../features/Auth/AuthSlice";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [userData, setuserData] = useState();
  const [user, setUser] = useState(0);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //   const config = {
    //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, }
    // };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    axios
      .post(
        "http://localhost:8080/api/login",
        {
          email: data.email,
          password: data.password,
        },
        config
      )
      .then((res) => {
        const userid = res.data.userdata.userId;
        setUser(res.data.token);
        Cookies.set("token", `${res.data.token}`);
        localStorage.setItem("token", `${res.data.token}`);
        const userInfo = JSON.stringify(res.data.userdata);
        localStorage.setItem("user", `${userInfo}`);
        Cookies.set("UserLoggedIn","yes");
        Cookies.set("userID", `${userid}`);
        if(res.status===201){
          toast.success("logged in successfully!")
        }
        Navigate("/user");
      })
      .catch((err) => {
        console.error(err);
        toast.error("invalid Credentials");
      });
    dispatch(userLoginAsync({ email: data.email, password: data.password }));
  };
  return (
    <section className="tp-login-area pb-140 p-relative z-index-1 fix">
      <div className="tp-login-shape">
        <img
          className="tp-login-shape-1"
          src="assets/img/login/login-shape-1.png"
          alt=""
        />
        <img
          className="tp-login-shape-2"
          src="assets/img/login/login-shape-2.png"
          alt=""
        />
        <img
          className="tp-login-shape-3"
          src="assets/img/login/login-shape-3.png"
          alt=""
        />
        <img
          className="tp-login-shape-4"
          src="assets/img/login/login-shape-4.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="tp-login-wrapper">
              <div className="tp-login-top text-center mb-30">
                <h3 className="tp-login-title">Login to Shofy.</h3>
                <p>
                  Don’t have an account?{" "}
                  <span>
                    <Link to="/register">Create a free account</Link>
                  </span>
                </p>
              </div>
              <div className="tp-login-option">
                <div className="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
                  <div className="tp-login-option-item has-google">
                    <a href="#">
                      <img src="assets/img/icon/login/google.svg" alt="" />
                      <p>Sign in with google</p>
                    </a>
                  </div>
                  <div className="tp-login-option-item">
                    <a href="#">
                      <img src="assets/img/icon/login/facebook.svg" alt="" />
                    </a>
                  </div>
                  <div className="tp-login-option-item">
                    <a href="#">
                      <img
                        className="apple"
                        src="assets/img/icon/login/apple.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="tp-login-mail text-center mb-40">
                  <p>
                    or Sign in with <a href="#">Email</a>
                  </p>
                </div>
                <form
                  className="tp-login-input-wrapper"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="tp-login-input-box">
                    <div className="tp-login-input">
                      <input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="shofy@mail.com"
                      />
                    </div>
                    <div className="tp-login-input-title">
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <PasswordInputBox register={register} />
                  <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                    <div className="tp-login-remeber">
                      <input id="remeber" type="checkbox" />
                      <label htmlFor="remeber">Remember me</label>
                    </div>
                    <div className="tp-login-forgot">
                      <a href="forgot.html">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="tp-login-bottom">
                    <button
                      type="submit"
                      className="tp-login-btn w-100 bg-black"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
