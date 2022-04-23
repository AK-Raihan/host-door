import React from 'react';
import { NavLink } from 'react-router-dom';
import './Price.css'

const Price = (props) => {
    const {_id, name, price, free, disk, data, email, uplink} = props.price
    return (
        <div className="col" data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                <div className="card h-100 pricing-card">
                <div className="pricing-header p-3 text-start mb-3">
                <div className="card-icon w-25 mx-auto">
                <i className="fab fa-ioxhost"></i>
                </div>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <h6 className="card-title">Start at:</h6>
                    <h5 className="card-title">$<span className='fs-1'>{price}</span> /month</h5>
                    <strong> {free}</strong> 
                </div>
                </div>
                <div className="option">
                        <ul>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="fas fa-compact-disc"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>DISK</h6>
                                    <h6>{disk}</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="fas fa-database"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>DATA</h6>
                                    <h6>{data}</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="far fa-envelope"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>EMAIL</h6>
                                    <h6>{email}</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="fas fa-igloo"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>TLD</h6>
                                    <h6>{uplink}</h6>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="pricing-btn text-center py-3">
                    <NavLink to={`/booking/${_id}`}>
                    <button className='btn order-btn'>Order Now</button>
                    </NavLink>
                    
                    </div>
                </div>
            </div>
    );
};

export default Price;