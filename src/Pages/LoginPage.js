import React, { useEffect } from 'react'
import Breadcrums from '../components/Navigation/Breadcrums'
import LoginForm from '../components/AuthComponents/LoginForm'
import Header from '../components/Header';
import { Navigate } from 'react-router-dom';
import Footer from '../components/Footer'
import NavBar from '../components/Navigation/NavBar'
import HeaderTop from '../components/header/HeaderTop'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const Navigate = useNavigate();
  useEffect(()=>{
const user = localStorage.getItem("user")
if(user){
  Navigate("/")
}
  },[])
  
  return (
    <>
    <HeaderTop />
    <NavBar />
    <Breadcrums title={"Login"} mainPage={"home"} subPage={"Login/User"}/>
    <LoginForm />
    <Footer />
    </>
  )
}

export default LoginPage