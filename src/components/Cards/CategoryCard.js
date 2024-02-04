import React from "react";

const CategoryCard = ({image,title,quantity}) => {
  return (
    <div>
      <div className="col">
        <div className="tp-product-category-item text-center mb-40">
          <div className="tp-product-category-thumb fix">
            <a href="shop-category.html">
              <img
                src={image}
                alt="product-category"
                height={100}
              />
            </a>
          </div>
          <div className="tp-product-category-content">
            <h3 className="tp-product-category-title">
              <a href="shop-category.html">{title}</a>
            </h3>
            <p>{quantity} Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
