import React from 'react';
import logo from '../assets/images/logo/logo_1.png';
const images = require.context('../assets/images/shape', false, /\.svg$/);
const iconimages = require.context('../assets/images/icon', false, /\.svg$/);


const Footer = () => {
	
    return (
        <div>
            <div className="vcamp-footer-one dark-bg">
				<div className="clearfix">
					<div className="container">
						<div className="row">
							<div className="col-xxl-11 m-auto">
								<div className="subscribe-area">
									<div className="row align-items-center">
										<div className="col-md-6">
											<div className="title-style-three white-vr sm-pb-20">
												<h4 className="title">Get update by <span>signup</span> Newsletter</h4>
											</div>
										</div>
										<div className="col-md-6">
											<div className="subscribe-form">
												<form action="#">
													<input type="email" placeholder="Enter your email"/>
													<button className="ripple-btn">Join <img src={iconimages('./icon_20.svg')} alt="" className="ms-2 d-inline-block"/></button>
												</form>
												<p>Already sign up? <a href="#">unsubscribe</a></p>
											</div>
										</div>
									</div>
								</div>

								<div className="top-footer mt-90 md-mt-70">
									<div className="row">
										<div className="col-lg-4 col-md-2 d-flex justify-content-between flex-column">
											<div className="logo"><a href="index.html"><img src={ require('../assets/images/logo/logo_2.png')} alt=""/></a></div>
											<img src={images('./shape_14.svg')} alt="" className="shape mt-15 d-none d-md-block"/>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-4">
											<h6 className="footer-title">Links</h6>
											<ul className="footer-nav-link style-none">
												<li><a href="index.html">Home</a></li>
												<li><a href="pricingV1.html">Pricing</a></li>
												<li><a href="about-usV1.html">About us</a></li>
												<li><a href="serviceV2.html">Service</a></li>
												<li><a href="serviceV1.html">Features</a></li>
												<li><a href="blogV3.html">Blog</a></li>
											</ul>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-4">
											<h6 className="footer-title">Legal</h6>
											<ul className="footer-nav-link style-none">
												<li><a href="faqV1.html">Terms of use</a></li>
												<li><a href="faqV1.html">Terms & conditions</a></li>
												<li><a href="faqV1.html">Privacy policy</a></li>
												<li><a href="faqV1.html">Cookie policy</a></li>
											</ul>
										</div>
										<div className="col-lg-2 col-md-4 col-sm-4">
											<h6 className="footer-title">About Us</h6>
											<ul className="footer-nav-link style-none">
												<li><a href="testimonialV1.html">Testimonial</a></li>
												<li><a href="about-usV1.html">About us</a></li>
												<li><a href="teamV1.html">Our Team</a></li>
												<li><a href="productV1.html">Product</a></li>
												<li><a href="blogV2.html">News</a></li>
												<li><a href="faqV1.html">Terms of use</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xxl-11 m-auto">
							<div className="bottom-footer">
								<div className="row">
									<div className="col-lg-4 order-lg-0 mb-15">
										<ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
											<li><a href="faqV1.html">Privacy &amp; Terms.</a></li>
											<li><a href="contactV1.html">Contact Us</a></li>
										</ul>
									</div>
									<div className="col-lg-4 order-lg-2 mb-15">
										<ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
											<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
											<li><a href="#"><i className="fab fa-twitter"></i></a></li>
											<li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
										</ul>
									</div>
									<div className="col-lg-4 order-lg-1 mb-15">
										<p className="copyright text-center">Copyright @2024 Quick Wrk.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<button className="scroll-top">
				<i className="bi bi-arrow-up-short"></i>
			</button>
        </div>
    );
};

export default Footer;
