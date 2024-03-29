import React from "react";
import { GoTag } from "react-icons/go";

const BlogCard = ({blogDate,blogIsOf,blogType,blogDescription,blogTitle,blogImage}) => {
  return (
    <div className="tp-blog-item mb-30 swiper-slide w-[30rem] m-6" >
      <div className="tp-blog-thumb p-relative fix">
        <a href="blog-details.html">
          <img src={blogImage} alt="blog" />
        </a>
        <div className="tp-blog-meta tp-blog-meta-date">
          <span>{blogDate}</span>
          {/* <span>14 July, 2022</span> */}
        </div>
      </div>
      <div className="tp-blog-content">
        <h3 className="tp-blog-title">
          <a href="blog-details.html">{blogTitle}</a>
        </h3>
        {/* <h3 className="tp-blog-title">
          <a href="blog-details.html">The Modern Art Clay Ceramics.</a>
        </h3> */}
        <div className="tp-blog-tag flex gap-1">
          <span>
            <GoTag />
          </span>
          {/* <a href="#">Tablet,</a>
          <a href="#">News</a> */}
          <a href="#">{blogIsOf}</a>
          <a href="#">,{blogType}</a>
        </div>
        <p>
         {blogDescription}
        </p>
        {/* <p>
          The world is an amazing place providing an incredible assortment of
          interesting locations across.
        </p> */}
        <div className="tp-blog-btn flex">
          <a href="blog-details.html" className="tp-btn-2 tp-btn-border-2">
            Read More ➡️
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
