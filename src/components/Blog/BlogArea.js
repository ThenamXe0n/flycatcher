import React from "react";
import BlogCard from "./BlogCard";

const BlogArea = () => {
  return (
    <section className="tp-blog-area pt-50 pb-75">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-4 col-md-6">
            <div className="tp-section-title-wrapper mb-50">
              <h3 className="tp-section-title">
                Latest news &amp; blogs
                <svg
                  width={114}
                  height={35}
                  viewBox="0 0 114 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
                    stroke="currentColor"
                    strokeWidth={4}
                    strokeMiterlimit="3.8637"
                    strokeLinecap="round"
                  />
                </svg>
              </h3>
            </div>
          </div>
          <div className="col-xl-8 col-md-6">
            <div className="tp-blog-more-wrapper d-flex justify-content-md-end">
              <div className="tp-blog-more mb-50 text-md-end">
                <a
                  href="blog-grid.html"
                  className="tp-btn tp-btn-2 tp-btn-blue"
                >
                  View All Blog
                  <svg
                    width={17}
                    height={14}
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 6.99976L1 6.99976"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <span className="tp-blog-more-border" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog-main-slider">
              <div className="tp-blog-main-slider-active swiper-container">
                <div className="swiper-wrapper">
                  <BlogCard blogTitle={"The Modern Art Clay Ceramics"} blogDate={"14 July, 2022"} blogImage={"assets/img/blog/blog-1.jpg"} blogIsOf={"Tablet"} blogType={"News"} blogDescription={"The world is an amazing place providing an assortment of interesting location across"} />
                  <BlogCard blogTitle={"How clothes are linked to climate"} blogDate={"10 Nov, 2022"} blogImage={"assets/img/blog/blog-2.jpg"} blogIsOf={"Monitor"} blogType={"Texhnology"} blogDescription={"The world is an amazing place providing an assortment of interesting location across"} />
                  <BlogCard blogTitle={"How clothes are linked to climate"} blogDate={"10 Nov, 2022"} blogImage={"assets/img/blog/blog-3    .jpg"} blogIsOf={"Monitor"} blogType={"Texhnology"} blogDescription={"The world is an amazing place providing an assortment of interesting location across"} />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
