import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import CalorieCard from '../Home/CalorieCard';
import 'react-day-picker/dist/style.css';

const TotalCalorie = () => {
    const [selected, setSelected] = useState(new Date())

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div>
            <h3 className='text-center'>All Calorie Intakes</h3>
            <div className='d-flex justify-content-center'>
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer}
                />
            </div>
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