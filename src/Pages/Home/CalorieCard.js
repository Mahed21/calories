import React from 'react';
import testImage from '../../Assets/Images/testImage.jpg';

const CalorieCard = () => {
    return (
        <div class="card float-right mb-2">
            <div class="row">
                <div class="col-sm-5">
                    <img class="d-block w-100" src={testImage} alt="" />
                </div>
                <div class="col-sm-7 pt-2">
                    <div class="card-block">
                        <p className='fw-semibold fs-5'>Test Calorie</p>
                        <p>Calorie: 1200</p>
                        <p>Quantity: 2</p>
                        <br />
                        <button class="btn btn-primary btn-sm float-right">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalorieCard;