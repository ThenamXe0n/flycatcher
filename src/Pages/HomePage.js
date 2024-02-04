import React from "react";
import Header from "../components/Header";
import Slider from "../components/sliders/Slider";
import ProductSection from '../components/product/ProductSection';
import SaleBanner from '../components/SaleBanner';
import CarouselVericle from "../components/sliders/CarouselVericle";
import SubscriptionArea from '../components/SubscriptionArea';
import BlogArea from "../components/Blog/BlogArea";
import Footer from "../components/Footer";
import CardList from "../components/Cards/CardList";
import FeaturedArea from "../components/FeatureArea";



const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <CardList />
    <FeaturedArea />
      <ProductSection heading={"Trending Products"} />
      <SaleBanner productOnSales={"BLU G91 PRO 2022"} productCategory={"Smartphone"} saleDiscount={"20%"} offerValidOn={"all store"} productOnSales_II={"HyperX Cloud II"} productCategory_II={"Wireless"} saleDiscount_II={"35%"} />
      <CarouselVericle />
      {/* <ProductOfferSection /> */}
      <BlogArea />
      <SubscriptionArea saleOffer={"SALE 20% OFF ALL STORE"} />
      <Footer />

      
      {/* <div className=".col">
        <ProductCard
          productImg={"assets/img/product/product-1.jpg"}
          productName={"watch"}
          productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"}
          ProductPrice={750}
        />
        <ProductCard
          productImg={"assets/img/product/product-2.jpg"}
          productName={"watch"}
          productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"}
          ProductPrice={750}
        />
        <ProductCard
          productImg={"assets/img/product/product-2.jpg"}
          productName={"watch"}
          productDiscption={"Tracker with IP67 Waterproof Pedometer Smart"}
          ProductPrice={750}
        />
      </div> */}
    </>
  );
};

export default HomePage;
