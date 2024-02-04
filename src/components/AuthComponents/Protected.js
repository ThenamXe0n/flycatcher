import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({component}) => {
  const Navigate = useNavigate();
  // const loggedInUser = {
  //   firstname: "jhon",
  //   lastname: "Doe",
  //   email: "jhondoe@exapmle.com",
  //   contact: 987585228,
  //   state: "madhya pradesh IN",
  //   street: "452 block b",
  //   locality: "bawarkua Square",
  // };
  // const userID = "jhonDoe@example";
  // const userName = "jhon Doe";
  useEffect(() => {
    // const login = localStorage.setItem("user",`email :  ${loggedInUser.email} , name : ${loggedInUser.firstname} ${loggedInUser.lastname}  `);
    localStorage.removeItem("user");
    const user = localStorage.getItem("user");
    if (!user) {
      Navigate("/login");
    }
  }, [Navigate]);
  return <div>{component}</div>;
};

export default Protected;
