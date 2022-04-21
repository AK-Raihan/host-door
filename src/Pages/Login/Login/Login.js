import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/login.jpg'
import Navigation from '../../Shared/Navigation/Navigation';
import NavTop from '../../Shared/NavTop/NavTop';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, signInUsingGoogle, loginUser, authError, isLoading } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = ()=>{
        signInUsingGoogle(location, navigate)
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, navigate, location);
        e.preventDefault();
    }
    return (

        <div>
            <Navigation/>
            <div style={{ 
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            paddingTop: '200px',
            paddingBottom: '262px',

         }}>
        <div className="login-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                            <div className="form-title text-start">
                                <h2 className='text-info'>LOGIN</h2>
                            </div>
                            <form onSubmit={handleLoginSubmit}>
                                <input onBlur={handleOnBlur} name="email" className='form-control my-3 rounded-pill' type="email" placeholder='Email' />
                                <input onBlur={handleOnBlur} name="password" className='form-control my-3 rounded-pill' type="password" placeholder='Password' />
                                <input className='btn btn-info w-50 btn-outline-secondary text-white rounded-pill' type="submit" value="LOGIN" />
                                <div className=' mt-3'>
                                <span >New User? </span>
                                <NavLink
                                to="/register" className="text-decoration-none fw-bold text-start">
                                <span className=' mt-3 text-info'>Please Create Account</span>
                            </NavLink>
                                </div>
                                <div className="social-media">
                                <h3 className='py-2 text-info'>Login with social media</h3>
                                    <ul className="">
                                        <li><i class=" fab fa-brands fa-facebook"></i></li>
                                        <li className='img-fluid' onClick={handleGoogle}><i class="fab fa-brands fa-google"></i></li>
                                        <li><i class="fab fa-brands fa-github"></i></li>
                                    </ul>
                                </div>

                            {isLoading && <div className="spinner-grow text-warning" role="status">
                                <span className="visually-hidden">Loading...</span>
                                </div>}
                            {authError && <alert alert >{authError}</alert>}
                            </form>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    
    );
};

export default Login;