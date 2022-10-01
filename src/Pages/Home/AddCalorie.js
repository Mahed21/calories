import React from "react";
import { useForm } from "react-hook-form";
import "react-day-picker/dist/style.css";
import UseAuth from "../../Context/UseAuth";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import "./Home.css";

const AddCalorie = () => {
  let navigate = useNavigate();
  const { user } = UseAuth();
  let today = new Date();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (user.email) {
      const quantity = parseInt(data.quantity);
      const calorieCount = parseInt(data.calorieCount);

      const totalCalorieCount = parseInt(quantity * calorieCount);

      const updateProfile = {
        name: data.calorieName,
        calorieCount: data.calorieCount,
        quantity: data.quantity,
        date: moment(today).format("MMM Do YY"),
        email: user.email,
        totalCalorieCount: totalCalorieCount,
      };
      fetch(`http://localhost:5000/calorie`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProfile),
      })
        .then((res) => res.json())
        .then((data) => {
          reset();
          navigate("/totalCalorie");
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className=" addcalorie d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-center mb-3">Add new calorie intake</h5>
          <div className="mb-3">
            <label>Name of Food</label>
            <br />
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("calorieName", {
                required: {
                  value: true,
                  message: "Calorie Name is Required",
                },
              })}
            />
            <label className="d-flex label">
              {errors.calorieName?.type === "required" && (
                <span className="label-text-alt text-danger">
                  {errors.calorieName.message}
                </span>
              )}
            </label>
          </div>
          <div className="mb-3">
            <label>Quantity</label>
            <br />
            <input
              type="text"
              className=""
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Quantity is Required",
                },
              })}
            />
            <label className="d-flex label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-danger">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="mb-3">
            <label>Calories per serving</label>
            <br />
            <input
              type="text"
              className=""
              {...register("calorieCount", {
                required: {
                  value: true,
                  message: "Calorie Count is Required",
                },
              })}
            />
            <label className="d-flex label">
              {errors.calorieCount?.type === "required" && (
                <span className="label-text-alt text-danger">
                  {errors.calorieCount.message}
                </span>
              )}
            </label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="ps-2"
              defaultValue={moment(today).format("MMM Do YY")}
            />
          </div>
          <input
            className="loginBtn ps-4 pe-4 pt-2 pb-2"
            type="submit"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCalorie;
