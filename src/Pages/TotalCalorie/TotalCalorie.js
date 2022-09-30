import React from 'react';
import CalorieCard from '../Home/CalorieCard';

const TotalCalorie = () => {
    return (
        <div>
            <h3 className='text-center'>All Calorie Intakes</h3>
            <div className='m-3'>
                <div className='row'>
                    <div className='col col-12 col-md-12 col-lg-6 my-3'>
                        <CalorieCard />
                    </div>
                    <div className='col col-12 col-md-12 col-lg-6 my-3'>
                        <CalorieCard />
                    </div>
                    <div className='col col-12 col-md-12 col-lg-6 my-3'>
                        <CalorieCard />
                    </div>
                    <div className='col col-12 col-md-12 col-lg-6 my-3'>
                        <CalorieCard />
                    </div>
                    <div className='col col-12 col-md-12 col-lg-6 my-3'>
                        <CalorieCard />
                    </div>
                    <div className='col col-12 col-md-12 col-lg-6 my-3'>
                        <CalorieCard />
                    </div>
                    <div className='col col-12 col-md-12 col-lg-6 my-3'>
                        <CalorieCard />
                    </div>
                    <div className='col col-12 col-md-12 col-lg-6 my-3'>
                        <CalorieCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCalorie;