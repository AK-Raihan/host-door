import React from 'react';
import './Pricing.css'

const Pricing = () => {
    return (
        <div className='py-5 text-white pricing-main'>
            <div className="container">
                <div className="pricing-title py-4">
                    <h1>Our Hosting Plan</h1>
                </div>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">

            <div className="col" data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                <div className="card h-100 pricing-card">
                <div className="pricing-header p-3 text-start mb-3">
                <div className="card-icon w-25 mx-auto">
                <i className="fab fa-ioxhost"></i>
                </div>
                <div className="card-body ">
                    <h2 className="card-title">Shared Hosting</h2>
                    <h6 className="card-title">Start at:</h6>
                    <h5 className="card-title">$<span className='fs-1'>8.19</span> /month</h5>
                    <strong> Web Hosting With Free Domain</strong> 
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
                                    <h6>250GB SSD</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="fas fa-database"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>DATA</h6>
                                    <h6>1TB BANDWIDTH</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="far fa-envelope"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>EMAIL</h6>
                                    <h6>120 EMAIL</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="fas fa-igloo"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>TLD</h6>
                                    <h6>30 DOMAINS</h6>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="pricing-btn py-3">
                    <button className='btn order-btn'>Order Now</button>
                    </div>
                </div>
            </div>
            <div className="col" data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                <div className="card h-100 pricing-card">
                <div className="pricing-header p-3 text-start mb-3">
                <div className="card-icon w-25 mx-auto">
                <i className="fas fa-server"></i>
                </div>
                <div className="card-body ">
                    <h2 className="card-title">Dedicated Server</h2>
                    <h6 className="card-title">annually get (20% discount)</h6>
                    <h5 className="card-title">$<span className='fs-1'>82.00</span> /month</h5>
                    <strong> Web Hosting Without Free Domain</strong> 
                </div>
                </div>
                <div className="option">
                        <ul>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="fas fa-compact-disc"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>CPU</h6>
                                    <h6>4x 3.20Ghz 2 Cores</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="fas fa-database"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>RAM</h6>
                                    <h6>16GB (up to 32GB)</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="far fa-envelope"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>DRIVES</h6>
                                    <h6>2 x 1TB SATA 3.5</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="fas fa-igloo"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>UPLINK</h6>
                                    <h6>1Gbps - 20TB</h6>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="pricing-btn py-3">
                    <button className='btn order-btn'>Order Now</button>
                    </div>
                </div>
            </div>
            <div className="col" data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                <div className="card h-100 pricing-card">
                <div className="pricing-header p-3 text-start mb-3">
                <div className="card-icon w-25 mx-auto">
                <i className="fas fa-cloud-download-alt"></i>
                </div>
                <div className="card-body ">
                    <h2 className="card-title">Shared Hosting</h2>
                    <h6 className="card-title">Start at:</h6>
                    <h5 className="card-title">$<span className='fs-1'>8.19</span> /month</h5>
                    <strong> Web Hosting With Free Domain</strong> 
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
                                    <h6>250GB SSD</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="fas fa-database"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>DATA</h6>
                                    <h6>1TB BANDWIDTH</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="far fa-envelope"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>EMAIL</h6>
                                    <h6>120 EMAIL</h6>
                                </div>
                            </li>
                            <li className='list-unstyled d-flex align-items-center mb-4'>
                                <div className="option-icon">
                                <i className="fas fa-igloo"></i>
                                </div>
                                <div className="option-content ms-4 text-start">
                                    <h6>TLD</h6>
                                    <h6>30 DOMAINS</h6>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="pricing-btn py-3">
                    <button className='btn order-btn'>Order Now</button>
                    </div>
                </div>
            </div>
           
            </div>
            </div>
        </div>
    );
};

export default Pricing;