import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Feature.css'
import feature1 from '../../../images/feature (1).png'
import feature2 from '../../../images/feature (2).png'
import feature3 from '../../../images/feature (3).png'
import feature4 from '../../../images/feature (4).png'

const Feature = () => {
    return (
        <div className='feature-main py-5'>
            <Container>
                <Row>
                    <Col lg={2} md={4}><h4 className='text-secondary mt-5'>As Featured On</h4></Col>
                    <Col lg={2} md={4}>
                    <img className='img-fluid mt-5' src={feature1} alt="" />
                    </Col>
                    <Col lg={2} md={4}>
                    <img className='img-fluid mt-5' src={feature2} alt="" />
                    </Col>
                    <Col lg={2} md={4}>
                    <img className='img-fluid mt-5' src={feature1} alt="" />
                    </Col>
                    <Col lg={2} md={4}>
                    <img className='img-fluid mt-5' src={feature3} alt="" />
                    </Col>
                    
                    <Col lg={2} md={4}>
                    <img className='img-fluid mt-5' src={feature4} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Feature;