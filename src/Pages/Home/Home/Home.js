import React from 'react';
import CalorieCard from '../CalorieCard/CalorieCard';
import './Home.css';

const Home = () => {
    return (
        <div className='home-layout'>
            <div>
                Home
            </div>
            <div>
                <CalorieCard></CalorieCard>
            </div>
        </div>
    );
};

export default Home;