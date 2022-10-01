import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import moment from "moment/moment";
import axios from "axios";

const UpdateCalorie = () => {
    const [selectedImage, setSelectedImage] = useState("");
    const [uploadedImage, setUploadedImage] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [calories, setCalories] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    };
    const handleCalorie = (e) => {
        setCalories(e.target.value);
    };

    const { _id } = useParams();
    const {
        data: singleCalorie,
        isLoading,
        refetch,
    } = useQuery("singleCalorie", () =>
        fetch(`https://calories-new-server-8v018vu3g-7rahib.vercel.app/calorie/${_id}`).then((res) => res.json())
    );

    let navigate = useNavigate();
    const { user } = UseAuth();
    let today = singleCalorie?.date;

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", selectedImage);
        formData.append("upload_preset", "snxpkbiu");
        axios
            .post("https://api.cloudinary.com/v1_1/dxmdixovn/image/upload", formData)
            .then((res) => {
                const { data } = res;
                setUploadedImage(data?.url);
                if (uploadedImage) {
                    const quantityInt = parseInt(quantity);
                    const calorieCount = parseInt(calories);

                    const totalCalorieCount = parseInt(quantityInt * calorieCount);
                    console.log(uploadedImage);
                    const updateCalorie = {
                        name: name,
                        calorieCount: calories,
                        quantity: quantity,
                        date: today,
                        email: user?.email,
                        totalCalorieCount: totalCalorieCount,
                        img: uploadedImage,
                    };
                    fetch(`https://calories-new-server-8v018vu3g-7rahib.vercel.app/calorie/${_id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(updateCalorie),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);

                            navigate("/totalCalorie");
                            refetch();
                        });
                }
            });
    };

    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label>Name of Food</label>
                    <br />
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        defaultValue={singleCalorie?.name}
                        onBlur={handleName}
                    />
                </div>
                <div className="mb-3">
                    <label>Quantity</label>
                    <br />
                    <input
                        type="text"
                        className=""
                        defaultValue={singleCalorie?.quantity}
                        onBlur={handleQuantity}
                    />
                </div>
                <div className="mb-3">
                    <label>Calories per serving</label>
                    <br />
                    <input
                        type="text"
                        className=""
                        defaultValue={singleCalorie?.calorieCount}
                        onBlur={handleCalorie}
                    />
                </div>
                <div className="mb-3">
                    <input type="text" className="ps-2" defaultValue={today} />
                </div>
                <div className="mb-3">
                    <input
                        type="file"
                        className="ps-2"
                        onChange={(e) => {
                            setSelectedImage(e.target.files[0]);
                        }}
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
