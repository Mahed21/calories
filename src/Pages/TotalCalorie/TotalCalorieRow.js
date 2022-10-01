import React from "react";
import { useNavigate } from "react-router-dom";
import Sample from "../../Assets/Images/sample.jpg";

const TotalCalorieRow = ({ calorie, refetch }) => {
  const navigate = useNavigate();

  const { _id, name, quantity, calorieCount, img, totalCalorieCount } = calorie;

  const handleUpdate = (_id) => {
    navigate(`/updateCalorie/${_id}`);
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
                className="btn btn-primary btn-sm float-right"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCalorieRow;
