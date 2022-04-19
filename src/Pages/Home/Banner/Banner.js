import React, { Component } from "react";
import './Banner.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import banner from '../../../images/banner.png'
import banner2 from '../../../images/banner (1).png'
import banner3 from '../../../images/banner (2).png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <div className='banner-main text-white py-5'>
            <Container>
                <Row className='d-flex align-items-center py-5'>
                    <Col xs={12} md={6} >
                    <div className="banner-content text-start" data-aos="fade-right" data-aos-duration="2000">
                        <h1 > Next level web hosting</h1>
                        <p className='mt-3 mb-5'>Web hosting is our specialty. Happy customers are the priority. Our aim is to host your website securely.</p>
                        <h6 className='mb-4'>Starting at only $2.50/mo*</h6>
                        <Button className='py-3 px-5'> Get Start Now</Button>
                    </div>
                    
                    </Col>
                    <Col xs={12} md={6} >
                    <div className="banner-img text-end " data-aos="fade-left" data-aos-duration="2000">
                        <img className='img-fluid mt-5' src={banner} alt="" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
          </div>
          <div>
          <div className='banner-main text-white py-5'>
            <Container>
                <Row className='d-flex align-items-center py-5'>
                    <Col xs={12} md={6} >
                    <div className="banner-content text-start" data-aos="fade-right" data-aos-duration="2000">
                        <h1 > Next level web hosting</h1>
                        <p className='mt-3 mb-5'>Web hosting is our specialty. Happy customers are the priority. Our aim is to host your website securely.</p>
                        <h6 className='mb-4'>Starting at only $2.50/mo*</h6>
                        <Button className='py-3 px-5'> Get Start Now</Button>
                    </div>
                    
                    </Col>
                    <Col xs={12} md={6} >
                    <div className="banner-img text-end " data-aos="fade-left" data-aos-duration="2000">
                        <img className='img-fluid mt-5' src={banner2} alt="" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
          </div>
          <div>
          <div className='banner-main text-white py-5'>
            <Container>
                <Row className='d-flex align-items-center py-5'>
                    <Col xs={12} md={6} >
                    <div className="banner-content text-start" data-aos="fade-right" data-aos-duration="2000">
                        <h1 > Next level web hosting</h1>
                        <p className='mt-3 mb-5'>Web hosting is our specialty. Happy customers are the priority. Our aim is to host your website securely.</p>
                        <h6 className='mb-4'>Starting at only $2.50/mo*</h6>
                        <Button className='py-3 px-5'> Get Start Now</Button>
                    </div>
                    
                    </Col>
                    <Col xs={12} md={6} >
                    <div className="banner-img text-end " data-aos="fade-left" data-aos-duration="2000">
                        <img className='img-fluid mt-5' src={banner3} alt="" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
          </div>

        </Slider>
      </div>
    );
  }
}
