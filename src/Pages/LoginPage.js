import React, { useEffect } from "react";
import Breadcrums from "../components/Navigation/Breadcrums";
import LoginForm from "../components/AuthComponents/LoginForm";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navigation/NavBar";
import HeaderTop from "../components/header/HeaderTop";
import Cookies from "js-cookie";

const LoginPage = () => {
  const Navigate = useNavigate();
  
  useEffect(() => {
    const user = Cookies.get("token");
    if (user) {
      Navigate("/");
    }
  }, []);

  return (
    <>
      <HeaderTop />
      <NavBar />
      <Breadcrums title={"Login"} mainPage={"home"} subPage={"Login/User"} />
      <LoginForm />
      <Footer />
    </>
  );
};

export default LoginPage;
