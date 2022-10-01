import React from "react";
import { useForm } from "react-hook-form";
import "react-day-picker/dist/style.css";
import UseAuth from "../../Context/UseAuth";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

const AddCalorie = () => {
  let navigate = useNavigate();
  const { user } = UseAuth();
  let today = new Date();
  console.log(moment(today).format("MMM Do YY"));
  console.log(user.email);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (user.email) {
      console.log("hi");
      const quantity = parseInt(data.quantity);
      const calorieCount = parseInt(data.calorieCount);

      const totalCalorieCount = parseInt(quantity * calorieCount);
      console.log(totalCalorieCount);

      const updateProfile = {
        name: data.calorieName,
        calorieCount: data.calorieCount,
        quantity: data.quantity,
        date: moment(today).format("MMM Do YY"),
        email: user?.user?.email,
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
          console.log(data);
          reset();
        });
    } else {
      console.log("hello");
      navigate("/login");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Amount of Calorie</label>
          <br />
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("calorieName")}
          />
        </div>
        <div className="mb-3">
          <label>Amount of Calorie</label>
          <br />

          <input type="text" className="" {...register("quantity")} />
        </div>
        <div className="mb-3">
          <label>Quantity</label>
          <br />
          <input type="text" className="" {...register("calorieCount")} />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="ps-2"
            value={moment(today).format("MMM Do YY")}
          />
        </div>
        <input
          className="loginBtn ps-4 pe-4 pt-2 pb-2"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
};

export default AddCalorie;
