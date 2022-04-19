import React from 'react';
import './Faq.css'
import question from '../../../images/qu.png'

const Faq = () => {
    return (
        <div className='faq-main py-5 text-white'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    
                    <div className="col-lg-6">
                        <div className="faq-title mb-5">
                            <h2>Quick Ask & Answer</h2>
                        </div>

                        <div className="faq-box">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item faq-item">
                            <h2 className="accordion-header " id="panelsStayOpen-headingOne">
                            <button className="accordion-button faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <h5>How does web hosting working?</h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <strong>
                                To host a website on the internet, an individual company would need their own computer or server. As not all companies had the budget or expertise to do this, web hosting services.
                                </strong> 
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <h5>What kind of web hosting do I need?</h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <strong>To host a website on the internet, an individual company would need their own computer or server. As not all companies had the budget or expertise to do this, web hosting services.</strong>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                            <button className="accordion-button collapsed faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                                <h5>How do I transfer my web page?</h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                            <div className="accordion-body">
                            <strong>To host a website on the internet, an individual company would need their own computer or server. As not all companies had the budget or expertise to do this, web hosting services.</strong>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingNine">
                            <button className="accordion-button collapsed faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                                <h5>How do I get refund after 7 days?</h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
                            <div className="accordion-body">
                            <strong>To host a website on the internet, an individual company would need their own computer or server. As not all companies had the budget or expertise to do this, web hosting services.</strong>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                            <button className="accordion-button collapsed faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                <h5>Can I host multiple Web sites within one Hosting plan?</h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                            <div className="accordion-body">
                            <strong>To host a website on the internet, an individual company would need their own computer or server. As not all companies had the budget or expertise to do this, web hosting services.</strong>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                            <button className="accordion-button collapsed faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                <h5>Do you provide Free Domain for monthly Payment?</h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                            <div className="accordion-body">
                            <strong>To host a website on the internet, an individual company would need their own computer or server. As not all companies had the budget or expertise to do this, web hosting services.</strong>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                            <button className="accordion-button collapsed faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                                <h5>What is your Payment Method?</h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                            <div className="accordion-body">
                            <strong>To host a website on the internet, an individual company would need their own computer or server. As not all companies had the budget or expertise to do this, web hosting services.</strong>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-img">
                            <img className='img-fluid' src={question} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;