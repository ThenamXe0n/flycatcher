import React from "react";
import CategoryCard from "./CategoryCard";

const CardList = () => {
  return (
    <section className="tp-product-category pt-60 pb-15">
      <div className="container">
        <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
            <CategoryCard image="assets/img/product/category/product-cat-1.png" title="Mini Book(Photo Book)" quantity="20" />
            <CategoryCard image="assets/img/product/category/product-cat-2.png" title="Calendars" quantity="20" />
            <CategoryCard image="assets/img/product/category/product-cat-3.png" title="Pendrive" quantity="20" />
            <CategoryCard image="assets/img/product/category/product-cat-4.png" title="Magazines" quantity="20" />
            <CategoryCard image="assets/img/product/category/product-cat-5.png" title="Keychains" quantity="20" />
        </div>
      </div>
    </section>
  );
};

export default CardList;
