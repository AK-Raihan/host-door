import React from 'react';
import './NavTop.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import useAuth from './../../../hooks/useAuth';

const NavTop = () => {
    const {user, logout}=useAuth()
    return (
        <div className='navtop-main'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center py-3'>
                    <Col lg={4} md={12}>
                    <div className='top-contact '>
                            <span className='me-3 fs-5'> <a className='text-decoration-none text-white' href="tel:+1514312-5478"><i className="fas fa-phone-volume"></i> +1 (514) 312-5478</a></span>
                            <span className='fs-5'> <a className='text-decoration-none text-white' href="/"><i class="fas fa-solid fa-comment-dots"></i> Live Chat</a> </span>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                    <div className="social-menu d-flex list-unstyled justify-content-center ">                  
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>
                        <li><i className="fab fa-instagram-square"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                    </div>
                    </Col>
                    <Col lg={4} md={12}>
                    <div className="login d-flex justify-content-center align-items-center">
                        <span className='fs-3 text-white '><i className="fas fa-cart-arrow-down"></i></span>
                        {
                            user.email ? <div>
                                <button onClick={logout}>Logout</button>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                            </div>:<NavLink to="/login">
                            <Button className='px-5 mx-2'>Login</Button>
                            </NavLink>
                        }
                        
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavTop;