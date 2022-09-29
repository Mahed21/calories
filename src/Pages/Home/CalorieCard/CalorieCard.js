import React from 'react';
import './CalorieCard.css'
import testImage from '../../../Assets/Images/testImage.jpg';

const CalorieCard = () => {
    return (
        <div className='calorie'>
            <div className='calorie-details'>
                <img src={testImage} alt=""></img>
                <div className='calorie-info'>
                    <p className='calorie-name'>Test Calorie</p>
                    <p>Calorie: 1020</p>
                    <p><small>Quantity: 2</small></p>
                </div>
            </div>
            <div>
                <button className='calorie-update-btn'>Update</button>
            </div>
        </div>
    );
};

export default CalorieCard;