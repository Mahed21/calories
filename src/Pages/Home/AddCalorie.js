import React from "react";
import { useForm } from "react-hook-form";
import "react-day-picker/dist/style.css";
import UseAuth from "../../Context/UseAuth";

const AddCalorie = () => {
    const user = UseAuth();
    let today = new Date();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const quantity = parseInt(data.quantity);
        const calorieCount = parseInt(data.calorieCount);

        const totalCalorieCount = parseInt(quantity * calorieCount);
        console.log(totalCalorieCount);

        const updateProfile = {
            name: data.calorieName,
            calorieCount: data.calorieCount,
            quantity: data.quantity,
            date: today,
            email: user?.user?.email,
            totalCalorieCount: totalCalorieCount
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
            <input className="btn btn-secondary mt-2" type="submit" value="Add Doctor" />
        </form>
    );
};

export default AddCalorie;
