import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';
import moment from "moment/moment";
import axios from "axios";

const UpdateCalorie = () => {
    const [selectedImage, setSelectedImage] = useState("");
    const [uploadedImage, setUploadedImage] = useState("");

    const { _id } = useParams();
    const { data: singleCalorie, isLoading, refetch } = useQuery('singleCalorie', () => fetch(`http://localhost:5000/calorie/${_id}`).then(res => res.json()))

    let navigate = useNavigate();
    const { user } = UseAuth();
    let today = new Date();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = async (data) => {

        const formData = new FormData();
        formData.append("file", selectedImage);
        formData.append("upload_preset", "snxpkbiu");
        await axios.post(
            "https://api.cloudinary.com/v1_1/dxmdixovn/image/upload", formData
        ).then((res) => {
            const { data } = res;
            setUploadedImage(data?.url);
        })

        const quantity = parseInt(data.quantity);
        const calorieCount = parseInt(data.calorieCount);

        const totalCalorieCount = parseInt(quantity * calorieCount);
        console.log(uploadedImage);
        const updateCalorie = {
            name: data.calorieName,
            calorieCount: data.calorieCount,
            quantity: data.quantity,
            date: moment(today).format("MMM Do YY"),
            email: user?.email,
            totalCalorieCount: totalCalorieCount,
            img: uploadedImage
        };
        fetch(`http://localhost:5000/calorie/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateCalorie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();
                navigate('/totalCalorie');
                refetch();
            })
    }

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label>Name of Food</label>
                    <br />
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        defaultValue={singleCalorie?.name}
                        {...register("calorieName", {
                            required: {
                                value: true,
                                message: 'Calorie Name is Required'
                            }
                        })}
                    />
                    <label className="d-flex label">
                        {errors.calorieName?.type === 'required' && <span className="label-text-alt text-danger">{errors.calorieName.message}</span>}
                    </label>
                </div>
                <div className="mb-3">
                    <label>Quantity</label>
                    <br />
                    <input type="text" className="" defaultValue={singleCalorie?.quantity} {...register("quantity", {
                        required: {
                            value: true,
                            message: 'Quantity is Required'
                        }
                    })} />
                    <label className="d-flex label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-danger">{errors.quantity.message}</span>}
                    </label>
                </div>
                <div className="mb-3">
                    <label>Calories per serving</label>
                    <br />
                    <input type="text" className="" defaultValue={singleCalorie?.calorieCount} {...register("calorieCount", {
                        required: {
                            value: true,
                            message: 'Calorie Count is Required'
                        }
                    })} />
                    <label className="d-flex label">
                        {errors.calorieCount?.type === 'required' && <span className="label-text-alt text-danger">{errors.calorieCount.message}</span>}
                    </label>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="ps-2"
                        defaultValue={moment(today).format("MMM Do YY")}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="file"
                        className="ps-2"
                        onChange={(e) => { setSelectedImage(e.target.files[0]) }}
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

export default UpdateCalorie;