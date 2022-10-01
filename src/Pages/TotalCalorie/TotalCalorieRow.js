import React from "react";
import { useNavigate } from "react-router-dom";
import Sample from "../../Assets/Images/sample.jpg";

const TotalCalorieRow = ({ calorie, refetch }) => {
  const navigate = useNavigate();

  const { _id, name, quantity, calorieCount, img, totalCalorieCount } = calorie;

  const handleUpdate = (_id) => {
    navigate(`/updateCalorie/${_id}`);
  };
  const handleDelete = (id) => {
    //console.log(id);

    const url = `http://localhost:5000/calorie/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          // const remain = handleProducts.filter((user) => user._id !== id);
          // setHandleProducts(remain);
        }
      });
  };

  return (
    <div className="col col-12 col-md-12 col-lg-6 my-3">
      <div className="card float-right mb-2 pb-2">
        <div className="row">
          <div className="col-sm-5 ">
            {calorie?.img ? (
              <img
                className="d-block img-fluid"
                width={250}
                height={200}
                src={img}
                alt=""
              />
            ) : (
              <img
                className="d-block img-fluid"
                src={Sample}
                width={250}
                height={200}
                alt=""
              />
            )}
          </div>
          <div className="col-sm-7 pt-2">
            <div className="card-block">
              <p className="fw-semibold fs-5">{name}</p>
              <p>Calorie(per serving): {calorieCount}</p>
              <p>Quantity: {quantity}</p>
              <p>Total Calorie: {totalCalorieCount}</p>
              <br />
              <button
                onClick={() => handleUpdate(_id)}
                className="loginBtn ps-3 pe-3 pt-1 pb-1"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(_id)}
                className="loginBtn ps-3 pe-3 pt-1 pb-1 ms-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCalorieRow;
