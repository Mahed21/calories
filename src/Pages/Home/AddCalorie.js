import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const AddCalorie = () => {
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "a1d7d3a7e4fde5cadc71e0a2315af238";
  const onSubmit = async (data) => {
    const formData = new FormData();
    const image = data.image[0];
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const updateProfile = {
            name: data.calorieName,
            calorieCount: data.calorieCount,
            quantity: data.quantity,
            img: img,
            date: selected,
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
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          {...register("calorieName")}
        />
      </div>
      <div className="mb-3">
        <input type="text" className="" {...register("quantity")} />
      </div>
      <div className="mb-3">
        <input type="text" className="" {...register("calorieCount")} />
      </div>
      <div className="">
        <input type="file" className="" {...register("image")} />
      </div>
      <div>
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        />
      </div>
      <input className="btn btn-secondary" type="submit" value="Add Doctor" />
    </form>
  );
};

export default AddCalorie;
