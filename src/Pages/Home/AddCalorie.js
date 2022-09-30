import React from 'react';
import { useForm } from 'react-hook-form';

const AddCalorie = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = 'a1d7d3a7e4fde5cadc71e0a2315af238';
    const onSubmit = async data => {
        const formData = new FormData();
        const image = data.image[0];
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const updateProfile = {
                        name: data.calorieName,
                        calorieCount: data.calorieCount,
                        quantity: data.quantity,
                        img: img
                    };
                    fetch(`http://localhost:5000/calorie`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(updateProfile)
                    }).then(res => res.json())
                        .then(data => {
                            console.log(data);
                            reset();
                        })
                }
            })



    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    {...register("calorieName")}
                />
            </div>
            <div className="">
                <input
                    type="text"
                    className=""
                    {...register("quantity")}
                />
            </div>
            <div className="">
                <input
                    type="text"
                    className=""
                    {...register("calorieCount")}
                />
            </div>
            <div className="">
                <input
                    type="file"
                    className=""
                    {...register("image")}
                />
            </div>
            <input className='btn btn-secondary' type="submit" value="Add Doctor" />
        </form>
    );
};

export default AddCalorie;