import React from 'react';
import './Launch.css'

const Launch = () => {
    return (
        <div className=' launch-main py-5'>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                <div className="col-lg-6">
                    <h1>Launch your website in cloud today!</h1>
                    <p>A web hosting service is a type of Internet hosting service that allows individuals and organizations to make their website accessible via the World Wide Web.</p>
                </div>
                <div className="col-lg-6">
                    <button className='btn btn-info py-2 px-5 text-white fs-3'> Get Started</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Launch;