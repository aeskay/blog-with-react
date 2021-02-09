import React from 'react'
import { Link } from 'react-router-dom';
import Divider from '../layout/Divider';
import './Contact.css';

function Contact() {
    return (
        <div className="container">
            <div className="pb-5">
                <Divider text={<span>Contact Us</span>}/> 
            </div>
            
             <section className="Material-contact-section section-padding section-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                            <h1 className="section-title py-3">Love to Hear From You</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft pt-5" data-wow-delay=".2s">
                            <div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.</p>

                            <div className="find-widget">
                            Company:  <Link to="/">SKA Technologies</Link>
                            </div>
                            <div className="find-widget">
                            Address: <a href="#">Osogbo, Nigeria</a>
                            </div>
                            <div className="find-widget">
                            Phone:  <a href="#">+2348133355944</a>
                            </div>
                            
                            <div className="find-widget">
                            Email:  <a href="mailto:alaladesambluez@gmail.com">alaladesambluez@gmail.com</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                            <form className="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                                <div className="form-group label-floating">
                                    <label className="control-label" htmlFor="name">Name</label>
                                    <input className="form-control" id="name" type="text" name="name" required data-error="Please enter your name"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group label-floating">
                                    <label className="control-label" htmlFor="email">Email</label>
                                    <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group label-floating">
                                    <label className="control-label">Subject</label>
                                    <input className="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group label-floating">
                                    <label htmlFor="message" className="control-label">Message</label>
                                    <textarea className="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-submit mt-5">
                                    <button className="btn btn-primary" type="submit" id="form-submit"><i className="material-icons mdi mdi-message-outline"></i> Send Message</button>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
