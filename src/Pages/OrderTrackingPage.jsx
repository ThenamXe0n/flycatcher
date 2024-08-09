import React from "react";
import HeaderTop from "../components/header/HeaderTop";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer";
import { Breadcrumbs } from "@material-tailwind/react";

const OrderTrackingPage = () => {
  return (
    <React.Fragment>
      <HeaderTop />
      <NavBar />
      {/* =======================breadcrumbs================== */}
      <div className="">
        {" "}
        <Breadcrumbs className="w-screen">
          <a href="#" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
          <a href="#" className="text-bold capitalize">order details</a>
        </Breadcrumbs>
      </div>
      <section className="p-6">
        <h1 className="h1 capitalize">order details </h1>
        <div className="w-1/2 border shadow-md rounded-xl flex gap-4 border-slate-600">
        <img src="https://cdn.baymard.com/blog/ux-product-image-categories-6-usage-inspiration-1.jpg" alt="productImage" className="size-44 aspect-square" />
        <div id="order-info-track">
          <h2 className="text-2xl font-bold">Order #123456</h2>
          <p className="text-sm text-gray-600">Order Date: 2022-01</p>
          <h3>Product Name</h3>

        </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default OrderTrackingPage;
