import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/host-logo.png';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#01173C' }}>
            <ScrollToTop smooth top="1000" />
            <Container className="pt-5 pb-2 text-start">
                <Row>
                    <Col lg={3} md={6} className="text-white">
                        <h3 className="text-center text-md-start"><img style={{height: '55px'}} className='img-fluid' src={logo} alt="" /></h3>
                        <p className="text-light text-center text-md-start">Experience what the biggest and the best of wet and wild iconic Hosting Provider</p>
                        <p> Mirpur, Dhaka-1216</p>
                        <p><i class="fas fa-solid fa-envelope"></i> support@domain.com</p>
                        <p><i class="fas fa-solid fa-phone-volume"></i> (+880)1962 123345</p>
                    </Col>
                    <Col lg={2} md={6} className="text-white">
                        <h4 className="text-center text-md-start mb-3">Quick Links</h4>
                        <button className="btn text-white "><i class=" fas fa-solid fa-chevron-right text-info"></i> About Us</button><br />
                        <button className="btn text-white "><i class=" fas fa-solid fa-chevron-right text-info"></i> Services</button><br />
                        <button className="btn text-white "><i class=" fas fa-solid fa-chevron-right text-info"></i> Booking</button><br />
                        <button className="btn text-white "><i class=" fas fa-solid fa-chevron-right text-info"></i> Packages</button><br />
                        <button className="btn text-white "><i class=" fas fa-solid fa-chevron-right text-info"></i> Contact</button>
                    </Col>
                    <Col lg={3} md={6} className="text-white">
                        <h4 className="text-center text-md-start mb-3">Useful Links</h4>
                        <button className="btn text-white "><i class=" fas fa-solid fa-chevron-right text-info"></i> Privacy Policy</button><br />
                        <button className="btn text-white "><i class=" fas fa-solid fa-chevron-right text-info"></i> Terms and Conditions</button><br />
                        <button className="btn text-white "><i class=" fas fa-solid fa-chevron-right text-info"></i> Disclaimer</button><br />
                        <button className="btn text-white "><i class=" fas fa-solid fa-chevron-right text-info"></i> Support</button><br />
                        <button className="btn text-white "><i class=" fas fa-solid fa-chevron-right text-info "></i> FAQ</button>
                    </Col>
                    <Col lg={4} md={6} className="text-white">
                        <h4 className="text-center text-md-start mb-3">Join our newsletter</h4>
                        <div className="news-form">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                        <hr />
                        <div className="social-link">
                            <div className="social-menu d-flex list-unstyled justify-content-center ">                  
                            <li><i className="fab fa-facebook-square"></i></li>
                            <li><i className="fab fa-twitter-square"></i></li>
                            <li><i className="fab fa-instagram-square"></i></li>
                            <li><i className="fab fa-linkedin"></i></li>
                        </div>
                        </div>
                        <hr />
                        <Row>
                            <Col className="p-0">
                            <p><i class="fab fa-brands fa-cc-stripe text-info"></i> Stripe</p>
                            </Col>
                            <Col>
                            <p><i class="fab fa-brands fa-cc-paypal text-info"></i> PayPal</p>
                            </Col>
                            <Col>
                            <p><i class="fab fa-brands fa-cc-visa text-info"></i> Visa</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr className="text-white" />
                <p className="text-white text-center">Copyright &copy; 2022. All rights reserved.</p>
            </Container>
        </div>
    );
};

export default Footer;