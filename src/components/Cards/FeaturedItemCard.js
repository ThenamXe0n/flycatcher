import React from "react";

const FeaturedItemCard = ({feature , facility,icon}) => {
  return (
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div class="tp-feature-item d-flex align-items-start">
        <div class="tp-feature-icon mr-15">
          <span>
          {icon}
          </span>
        </div>
        <div class="tp-feature-content">
          <h3 class="tp-feature-title">{feature}</h3>
          <p>{facility}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItemCard;
