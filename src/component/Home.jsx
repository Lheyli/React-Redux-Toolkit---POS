import React from 'react';
import Product from '../component/Product';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white">
                <img className="card-img" src="/assets/bg.jpg" alt="Background" height="550px"/>
                    <div className="card-img-overlay d-flex flex-column  justify-content-center">
                        <div className="container">
                        <h5 className="card-title display-1 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
            </div>
            <Product/>
        </div>
    );
}

export default Home;