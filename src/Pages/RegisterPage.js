import React from "react";
import HeaderTop from "../components/header/HeaderTop";
import NavBar from "../components/Navigation/NavBar";
import RegisterForm from "../components/AuthComponents/RegisterForm";
import Breadcrums from "../components/Navigation/Breadcrums";

const RegisterPage = () => {
  return (
    <>
      <HeaderTop />
      <NavBar />
      <Breadcrums title={"Register"} mainPage={"home"} subPage={"register"} />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
