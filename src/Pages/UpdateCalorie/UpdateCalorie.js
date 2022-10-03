import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import moment from "moment/moment";
import axios from "axios";

const UpdateCalorie = () => {
  const nameRef = useRef();
  const quantityRef = useRef();
  const calorieRef = useRef();
  const [selectedImage, setSelectedImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [calories, setCalories] = useState("");
  // const handleName = (e) => {
  //     setName(e.target.value);
  // };
  // const handleQuantity = (e) => {
  //     setQuantity(e.target.value);
  // };
  // const handleCalorie = (e) => {
  //     setCalories(e.target.value);
  // };

  const { _id } = useParams();
  const {
    data: singleCalorie,
    isLoading,
    refetch,
  } = useQuery("singleCalorie", () =>
    fetch(
      `https://calories-new-server-8v018vu3g-7rahib.vercel.app/calorie/${_id}`
    ).then((res) => res.json())
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
          const name = nameRef.current.value;
          const quantity = quantityRef.current.value;
          const calorie = calorieRef.current.value;
          const quantityInt = parseInt(quantity);
          const calorieCount = parseInt(calorie);

          const totalCalorieCount = parseInt(quantityInt * calorieCount);
          console.log(uploadedImage);
          const updateCalorie = {
            name: name,
            calorieCount: calorie,
            quantity: quantity,
            date: today,
            email: user?.email,
            totalCalorieCount: totalCalorieCount,
            img: uploadedImage,
          };
          fetch(`http://localhost:5000/calorie/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateCalorie),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              alert("Successfully Updated");
              navigate("/home");
              refetch();
            });
        }
      });
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="addcalorie d-flex justify-content-center align-items-center">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label>Name of Food</label>
          <br />
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            defaultValue={singleCalorie?.name}
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label>Quantity</label>
          <br />
          <input
            type="text"
            className=""
            defaultValue={singleCalorie?.quantity}
            ref={quantityRef}
          />
        </div>
        <div className="mb-3">
          <label>Calories per serving</label>
          <br />
          <input
            type="text"
            className=""
            defaultValue={singleCalorie?.calorieCount}
            ref={calorieRef}
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
