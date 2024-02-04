import React from "react";
import {Link} from 'react-router-dom';

const Breadcrums = ({title,mainPage,subPage}) => {
  return (
    <section className="breadcrumb__area include-bg text-center py-14">
      <div className="container flex">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title text-left">{title}</h3>
              <div className="breadcrumb__list float-start">
                <span>
                  <Link to={`/${mainPage}`}>{mainPage}</Link>
                </span>
                <span>{subPage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrums;
