import React,{useState,useEffect} from "react";
import axios from "axios";
import BlogCard from "../components/Blog/BlogCard";
import NavBar from "../components/Navigation/NavBar";
import HeaderTop from "../components/header/HeaderTop";
import Footer from "../components/Footer";
import moment from "moment";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/news/show")
      .then((res) => setBlogs(res.data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <>
      <HeaderTop />
      <NavBar />
      <section className="py-8 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
         <div className="mb-20"> <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
          Blog Section
          </h2>
          </div>
          <div className="lg:grid-col-2 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-2 grid" >

         
          {blogs.map((item, index) => (
                    <div key={index}>
                      <BlogCard
                        blogTitle={item.title}
                        blogDate={moment(item.publishon).format("DD MMM,YYYY")}
                        blogImage={item.ImgURL}
                        blogIsOf={item.genre}
                        blogType={item.blogtype}
                        blogLink={item.link}
                        blogDescription={item.description}
                      />
                    </div>
                  ))}
           </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
