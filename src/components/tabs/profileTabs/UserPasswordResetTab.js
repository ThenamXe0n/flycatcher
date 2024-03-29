import React from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import FormButton from "../../UiComponents/FormButton";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";

const UserPasswordResetTab = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const userId = Cookies.get("userID");
  console.log(userId);

  const onSubmit = (data) => {
    axios
      .get(`http://localhost:8080/api/user/${userId}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="col-xxl-8 col-lg-8 shadow-effect">
      <div className="flex justify-start items-center">
        <LockClosedIcon className="w-6 font-semibold h-auto m-0" />
        <h1 className="text-black font-bold font-sans text-3xl">
          Password Reset
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-xl font-semibold font-serif relative top-4 left-2 bg-white">
            Current Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            placeholder="Enter Current Password"
          />
        </div>
        <div>
          <label className="text-xl font-semibold font-serif relative top-4 left-2 bg-white">
            New Password
          </label>
          <input
            {...register("new_password")}
            type="password"
            name="new_password"
            id="new_password"
            placeholder="enter a new password"
          />
        </div>
        <div className="mb-4">
          <label className="text-xl font-semibold font-serif relative top-4 left-2 bg-white">
            confirm Password
          </label>
          <input
            {...register("confirm_password")}
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="confirm password"
          />
        </div>
        <FormButton
          name={"change password"}
          size={"max-content"}
          type={"submit"}
        />
      </form>
    </div>
  );
};

export default UserPasswordResetTab;
