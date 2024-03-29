import React, { useState } from "react";
import Breadcrums from "../components/Navigation/Breadcrums";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const ContactPage = () => {
  const [inqueryMessage, setInqueryMessage] = useState(null);
  const [saveDetailsChecked, setSaveDetailsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const saveDetailsOfInquisitive = (checked, data) => {
    if (checked === true) {
      localStorage.setItem("InquisitiveName", `${data.name}`);
      localStorage.setItem("InquisitiveEmail", `${data.email}`);
    } else {
      return;
    }
  };
  const userName = localStorage.getItem("InquisitiveName");
  const userEmail = localStorage.getItem("InquisitiveName");

  const sendInqueryMesssage = (data) => {
    console.log(data);
    saveDetailsOfInquisitive(saveDetailsChecked, data);
    alert(
      `${data.name} your inquery has been submitted Successfully. will get back to you soon.`
    );
  };

  return (
    <>
      <NavBar />
      <Breadcrums
        title={"keep In Touch With US"}
        mainPage={"home"}
        subPage={"Contact"}
      />
      <section className="tp-contact-area pb-100">
        <div className="container">
          <div className="tp-contact-inner">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="tp-contact-wrapper">
                  <h3 className="tp-contact-title">
                    Fill up below form will get to you as soon.
                  </h3>
                  <div className="tp-contact-form">
                    <form
                      id="contact-form"
                      // action="assets/mail.html"
                      // method="POST"
                      onSubmit={handleSubmit(sendInqueryMesssage)}
                    >
                      <div className="tp-contact-input-wrapper">
                        <div className="tp-contact-input-box">
                          <div className="tp-contact-input">
                            <input
                              {...register("name", {
                                required:
                                  "*Name is required.please enter your Name.",
                              })}
                              name="name"
                              id="name"
                              type="text"
                              placeholder="Enter Your Full Name"
                              defaultValue={`${userName}`}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage errors={errors} name="name" />{" "}
                            </div>
                          </div>
                          <div className="tp-contact-input-title">
                            <label htmlFor="name">Your Name</label>
                          </div>
                        </div>
                        <div className="tp-contact-input-box">
                          <div className="tp-contact-input">
                            <input
                              {...register("email", {
                                required: "*email is required",
                                pattern: {
                                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                  message: "email not valid",
                                },
                              })}
                              name="email"
                              id="email"
                              type="email"
                              placeholder="shofy@mail.com"
                              defaultValue={`${userEmail}`}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage errors={errors} name="email" />{" "}
                            </div>
                          </div>
                          <div className="tp-contact-input-title">
                            <label htmlFor="email">Your Email</label>
                          </div>
                        </div>
                        <div className="tp-contact-input-box">
                          <div className="tp-contact-input">
                            <input
                              {...register("subject", {
                                required: "*Subject can be left empty",
                              })}
                              name="subject"
                              id="subject"
                              type="text"
                              placeholder="Write your subject"
                              defaultValue={"Inquery"}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              <ErrorMessage errors={errors} name="subject" />
                            </div>
                          </div>
                          <div className="tp-contact-input-title">
                            <label htmlFor="subject">Subject</label>
                          </div>
                        </div>
                        <div className="tp-contact-input-box">
                          <div className="tp-contact-input">
                            <textarea
                              {...register("message", {
                                required:
                                  "*This field need to be filled.Cant be left Empty",
                              })}
                              id="message"
                              name="message"
                              placeholder="Write your message here..."
                              defaultValue={""}
                            />
                            <div className="text-red-600 flex flex-row items-center gap-1 text-[1.3rem]">
                              {" "}
                              <ErrorMessage
                                errors={errors}
                                name="message"
                              />{" "}
                            </div>
                          </div>
                          <div className="tp-contact-input-title">
                            <label htmlFor="message">Your Message</label>
                          </div>
                        </div>
                      </div>
                      <div className="tp-contact-suggetions mb-20">
                        <div className="tp-contact-remeber">
                          <input
                            id="remeber"
                            type="checkbox"
                            onChange={(e) => {
                              setSaveDetailsChecked(e.target.checked);
                            }}
                          />
                          <label htmlFor="remeber">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                      </div>
                      <div className="tp-contact-btn">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                    <p className="ajax-response" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="tp-contact-info-wrapper">
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <img
                          src="assets/img/contact/contact-icon-1.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p data-info="mail">
                        <a href="mailto:contact@shofy.com">contact@shofy.com</a>
                      </p>
                      <p data-info="phone">
                        <a href="tel:670-413-90-762">+670 413 90 762</a>
                      </p>
                    </div>
                  </div>
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <img
                          src="assets/img/contact/contact-icon-2.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p>
                        <a
                          href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.6976637,-74.1197638,11z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2"
                          target="_blank"
                        >
                          84 sleepy hollow st. <br /> jamaica, New York 1432
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <img
                          src="assets/img/contact/contact-icon-3.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <div className="tp-contact-social-wrapper mt-5">
                        <h4 className="tp-contact-social-title">
                          Find on social media
                        </h4>
                        <div className="tp-contact-social-icon">
                          <a href="#">
                           <FaFacebookF />
                          </a>
                          <a href="#">
                           <FaWhatsapp />
                          </a>
                          <a href="#">
                            <FaInstagram />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map area start */}
      <section className="tp-map-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-map-wrapper">
                <div className="tp-map-hotspot">
                  <span className="tp-hotspot tp-pulse-border">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={6} cy={6} r={6} fill="#821F40" />
                    </svg>
                  </span>
                </div>
                <div className="tp-map-iframe">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976383964465!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1678114595329!5m2!1sen!2sbd" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* map area end */}
      <Footer />
    </>
  );
};

export default ContactPage;
