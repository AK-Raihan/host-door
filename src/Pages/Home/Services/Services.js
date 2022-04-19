import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import './Services.css'
import service1 from '../../../images/service (1).png'
import service2 from '../../../images/service (2).png'
import service3 from '../../../images/service (3).png'
import service4 from '../../../images/service (4).png'
import service5 from '../../../images/service (5).png'
import service6 from '../../../images/service (6).png'



const Services = () => {
    return (
        <div className=' service-main py-5 text-white'>
            <Container>
                <div className="service-title py-5">
                    <h1>Our Awesome Service</h1>
                </div>
            <div className="row row-cols-1 row-cols-md-3 g-5">
            <div className="col-lg-4 col-md-6">
                <div className="card h-100 service-card p-3">
                <div className='service-img' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"><img src={service4} className="card-img-top" alt="..."/></div>
                <div className="card-body">
                    <h5 className="card-title">Performance</h5>
                    <p className="card-text">The availability of a website is measured by the percentage of a year in which the website is publicly.</p>
                    <button className="btn text-info">READ MORE <i class=" fas fa-solid fa-arrow-right"></i></button>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card h-100 service-card p-3">
                <div className='service-img' data-aos="zoom-in-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><img src={service5} className="card-img-top" alt="..."/></div>
                <div className="card-body">
                    <h5 className="card-title">Uptime</h5>
                    <p className="card-text">The availability of a website is measured by the percentage of a year in which the website is publicly.</p>
                    <button className="btn text-info">READ MORE <i class=" fas fa-solid fa-arrow-right"></i></button>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card h-100 service-card p-3">
                <div className='service-img' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><img src={service6} className="card-img-top" alt="..."/></div>
                <div className="card-body">
                    <h5 className="card-title">Security</h5>
                    <p className="card-text">The availability of a website is measured by the percentage of a year in which the website is publicly.</p>
                    <button className="btn text-info">READ MORE <i class=" fas fa-solid fa-arrow-right"></i></button>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card h-100 service-card p-3">
                <div className='service-img' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"><img src={service1} className="card-img-top" alt="..."/></div>
                <div className="card-body">
                    <h5 className="card-title">Support</h5>
                    <p className="card-text">The availability of a website is measured by the percentage of a year in which the website is publicly.</p>
                    <button className="btn text-info">READ MORE <i class=" fas fa-solid fa-arrow-right"></i></button>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card h-100 service-card p-3">
                <div className='service-img' data-aos="zoom-in-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><img src={service2} className="card-img-top" alt="..."/></div>
                <div className="card-body">
                    <h5 className="card-title">Update</h5>
                    <p className="card-text">The availability of a website is measured by the percentage of a year in which the website is publicly.</p>
                    <button className="btn text-info">READ MORE <i class=" fas fa-solid fa-arrow-right"></i></button>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card h-100 service-card p-3">
                <div className='service-img' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"><img src={service3} className="card-img-top" alt="..."/></div>
                <div className="card-body">
                    <h5 className="card-title">Backup</h5>
                    <p className="card-text">The availability of a website is measured by the percentage of a year in which the website is publicly.</p>
                    <button className="btn text-info">READ MORE <i class=" fas fa-solid fa-arrow-right"></i></button>
                </div>
                </div>
            </div>
            
            </div>
            </Container>
        </div>
    );
};

export default Services;