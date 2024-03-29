import React from "react";
import ProductSectionHeader from "./ProductSectionHeader";
import ProductGrid from "./ProductGrid";

const ProductSection = ({heading}) => {
  return (
    <section className="tp-product-area pb-55">
      <div className="container">
        <ProductSectionHeader title={heading} />
        <ProductGrid />
      </div>
    </section>
  );
};

export default ProductSection;
