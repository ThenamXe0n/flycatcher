import React from "react";

const FeaturedItemCard = ({feature , facility,icon}) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="tp-feature-item d-flex align-items-start">
        <div className="tp-feature-icon mr-15">
          <span>
          {icon}
          </span>
        </div>
        <div className="tp-feature-content">
          <h3 className="tp-feature-title">{feature}</h3>
          <p>{facility}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItemCard;
