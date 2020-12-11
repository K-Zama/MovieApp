import React from 'react';
import Ilustration from'../img/Ilustration.png';
import './Home.scss';

const Home = () => {
    return (
        <div className="col d-flex justify-content-center logo">
           <img src={Ilustration} alt="ApiMovie"/> 
        </div>
    )
}

export default Home;