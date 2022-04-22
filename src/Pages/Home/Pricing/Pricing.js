import React, { useState, useEffect} from 'react';
import Price from './Price/Price';
import './Pricing.css'


const Pricing = () => {
    const [pricing, setPricing] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/pricing')
        .then(res=>res.json())
        .then(data=>setPricing(data))
    },[])

    return (
        <div className='py-5 text-white pricing-main'>
            <div className="container">
                <div className="pricing-title py-4">
                    <h1>Our Hosting Plan</h1>
                </div>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
                {
                    pricing.map(price=><Price 
                        key={price._id}
                        price={price}
                    ></Price>)
                }
            </div>
            </div>
        </div>
    );
};

export default Pricing;