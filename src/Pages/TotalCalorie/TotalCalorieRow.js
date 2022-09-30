import React from 'react';

const TotalCalorieRow = ({ calorie, refetch }) => {
    const { name, quantity, calorieCount, img } = calorie;

    return (
        <div className='col col-12 col-md-12 col-lg-6 my-3'>
            <div class="card float-right mb-2">
                <div class="row">
                    <div class="col-sm-5">
                        <img class="d-block w-100" src={img} alt="" />
                    </div>
                    <div class="col-sm-7 pt-2">
                        <div class="card-block">
                            <p className='fw-semibold fs-5'>{name}</p>
                            <p>Calorie: {calorieCount}</p>
                            <p>Quantity: {quantity}</p>
                            <br />
                            <button class="btn btn-primary btn-sm float-right">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCalorieRow;