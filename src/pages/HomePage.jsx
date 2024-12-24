
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import logo from '../assets/';
// import CalculatorForm from '../components/CalculatorForm';
const images = require.context('../assets/images/shape', false, /\.svg$/);
const iconimages = require.context('../assets/images/icon', false, /\.svg$/);
function HomePage() {
	// <h1>Calculator App</h1>
    // <CalculatorForm />
	
	useEffect(() => {
		
		AOS.init({
		  duration: 1000,
		  once: false,
		});		
	  }, []);
    return (
        <div>
            <div className="hero-banner-two">
				<div className="container h-100">
					<div className="main-content h-100">
						<div className="text-wrapper">
							<h1 className="hero-heading font-recoleta"><span>Empowering</span> Your Vision.</h1>
							<p className="hero-sub-heading text-lg">From innovative software solutions to seamless digital experiences, we bring your ideas to life. Partner with us to transform challenges into opportunities and redefine possibilities.</p>
							<ul className="button-group d-sm-flex align-items-center style-none">
								<li><a href="contactV2.html" className="mt-15 demo-button tran3s">Try a free demo</a></li>
								<li><a href="contactV2.html" className="mt-15 callback-button d-flex align-items-center"><span>Request a Callback</span> 
								<img src={iconimages('./icon_23.svg')} alt="" className="ms-3"/>
								</a></li>
							</ul>
						</div>


						<div className="row gx-md-5 align-items-end h-100">
							<div className="col-3">
								<img src={ require('../assets/images/assets/screen_02.png')} alt=""/>
							</div>
							<div className="col-3">
								<img src={ require('../assets/images/assets/screen_03.png')} alt="" className="mb-35"/>
								<img src={ require('../assets/images/assets/screen_04.png')} alt=""/>
							</div>
							<div className="col-3">
								<img src={ require('../assets/images/assets/screen_05.png')} alt="" className="mb-35"/>
								<img src={require('../assets/images/assets/screen_06.png')} alt="" />
							</div>
							<div className="col-3">
								<img src={ require('../assets/images/assets/screen_07.png')} alt="" className="mb-35"/>
								<img src={ require('../assets/images/assets/screen_08.png')} alt=""/>
							</div>
						</div>
						<img src={images('./shape_03.svg')} alt="" className="shapes shape-one" />

					</div>
				</div>
			</div>

			<div className="vcamp-feature-section-three mt-200 lg-mt-150 md-mt-120">
				<div className="container">
					<div className="row align-items-center mb-75 lg-mb-50 md-mb-20">
						<div className="col-xl-6 col-lg-5" data-aos="fade-right">
							<div className="title-style-one">
								<h2 className="title">Your Trusted <span>Software</span> Expert</h2>
							</div>
						</div>
						<div className="col-lg-5 ms-auto" data-aos="fade-left">
							<p className="meta-info-text text-lg ps-xxl-5 md-pt-20">Empowering businesses with cutting-edge software solutions that drive efficiency and innovation. We specialize in creating custom technology designed to meet the unique needs of every client, ensuring growth and success in a digital world.	</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-sm-6" data-aos="fade-up">
							<div className="card-style-three mt-50">
								<div className="icon d-flex align-items-center justify-content-center"><img src={iconimages('./icon_24.svg')} alt="" className="tran3s"/></div>
								<h4 className="title"> Custom Software Development</h4>
								<ul className="style-none">
									<li>Developing tailor-made software solutions for specific business needs.</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="100">
							<div className="card-style-three mt-50">
								<div className="icon d-flex align-items-center justify-content-center"><img src={iconimages('./icon_25.svg')} alt="" className="tran3s"/></div>
								<h4 className="title">Innovative Web Solutions</h4>
								<ul className="style-none">
									<li>Services include frontend, backend, and full-stack development.</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="200">
							<div className="card-style-three mt-50">
								<div className="icon d-flex align-items-center justify-content-center"><img src={iconimages('./icon_26.svg')} alt="" className="tran3s"/></div>
								<h4 className="title">Mobile App Development</h4>
								<ul className="style-none">
									<li>Creating mobile applications for iOS, Android, and cross-platform frameworks.</li>
								</ul>
							</div>
						</div>
						
						<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
							<div className="card-style-three mt-50">
								<div className="icon d-flex align-items-center justify-content-center"><img src={iconimages('./icon_27.svg')} alt="" className="tran3s"/></div>
								<h4 className="title">Expert IT<br/>Guidance</h4>
								<ul className="style-none">
									<li>Offering advice on software architecture, technology stack, and scaling.</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
							<div className="card-style-three mt-50">
								<div className="icon d-flex align-items-center justify-content-center"><img src={iconimages('./icon_27.svg')} alt="" className="tran3s"/></div>
								<h4 className="title">Creative Design Solutions</h4>
								<ul className="style-none">
									<li>Enhancing user experience with modern design practices, and engaging interfaces.
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
							<div className="card-style-three mt-50">
								<div className="icon d-flex align-items-center justify-content-center"><img src={iconimages('./icon_27.svg')} alt="" className="tran3s"/></div>
								<h4 className="title">Efficient DevOps Solutions</h4>
								<ul className="style-none">
									<li>Managing CI/CD pipelines and infrastructure as streamlining the software delivery process.
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
							<div className="card-style-three mt-50">
								<div className="icon d-flex align-items-center justify-content-center"><img src={iconimages('./icon_27.svg')} alt="" className="tran3s"/></div>
								<h4 className="title">eCommerce Experiences</h4>
								<ul className="style-none">
									<li>Developing eCommerce platforms, integrations, and payment gateways.</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
							<div className="card-style-three mt-50">
								<div className="icon d-flex align-items-center justify-content-center"><img src={iconimages('./icon_27.svg')} alt="" className="tran3s"/></div>
								<h4 className="title">Targeted Marketing Strategies</h4>
								<ul className="style-none">
									<li>Optimizing SEO and Running targeted ads on Google, Facebook, and Instagram.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="vcamp-text-block-one mt-300 xl-mt-200 md-mt-120">
				<div className="container">
					<div className="row">
						<div className="col-xxl-5 col-xl-6 col-lg-7 ms-auto">
							<div className="text-wrapper pt-0">
								<div className="title-style-two">
									<h3 className="title">Global <span>Business</span> Empowerment
										</h3>
								</div>
								<p className="meta-info-text text-lg">From small startups to global enterprises, we provide innovative software solutions that drive growth and efficiency. Our expertise ensures every project is a step toward success.</p>
								<a href="about-usV1.html" className="theme-btn-one ripple-btn">More about us</a>
							</div>
						</div>
					</div>
				</div>
				<div className="left-img-meta">
					<img src={ require('../assets/images/media/img_04.jpg')} alt=""/>
					<img src={images('./shape_04.svg')} alt="" className="shapes shape-one"/>
				</div>
				<img src={images('./shape_05.svg')} alt="" className="shapes shape-two"/>
			</div>


			<div class="vcamp-feature-section-four mt-250 lg-mt-150 md-mt-120">
				<img src={images('./shape_05.svg')} alt="" class="shapes shape-one"/>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-xl-5 col-lg-6" data-aos="fade-right">
							<div class="text-wrapper mb-130 lg-mb-70">
								<div class="title-style-one">
									<h2 class="title">Why <br/> you <span>choose</span> us.</h2>
								</div>
								<p class="meta-info-text text-lg">We offer innovative solutions tailored to your unique needs, ensuring top-quality service and exceptional results.</p>
								<a href="about-usV2.html" class="theme-btn-three">Learn more <i class="fas fa-angle-right"></i></a>
							</div>
						</div>
						<div class="col-lg-6 ms-auto">
							<div class="row gx-5">
								<div class="col-sm-6" data-aos="fade-up">
									<div class="card-style-four mb-130 lg-mb-70">
										<div class="icon d-flex align-items-end"><img src={iconimages('./icon_29.svg')} alt="" class="tran3s"/></div>
										<h4 class="title">Custom Software Solutions</h4>
										<p>Tailored technology to meet your unique business needs.</p>
									</div>
								</div>
								<div class="col-sm-6" data-aos="fade-up" data-aos-delay="100">
									<div class="card-style-four mb-130 lg-mb-70">
										<div class="icon d-flex align-items-end"><img src={iconimages('./icon_30.svg')} alt="" class="tran3s"/></div>
										<h4 class="title">Project Management Tools</h4>
										<p>Streamlined workflows for better team collaboration and efficiency.</p>
									</div>
								</div>
								<div class="col-sm-6" data-aos="fade-up" data-aos-delay="100">
									<div class="card-style-four mb-130 lg-mb-70">
										<div class="icon d-flex align-items-end"><img src={iconimages('./icon_31.svg')} alt="" class="tran3s"/></div>
										<h4 class="title">Cloud Integration</h4>
										<p>Scalable and secure cloud solutions to store and manage your data.</p>
									</div>
								</div>
								<div class="col-sm-6" data-aos="fade-up" data-aos-delay="100">
									<div class="card-style-four mb-130 lg-mb-70">
										<div class="icon d-flex align-items-end"><img src={iconimages('./icon_32.svg')} alt="" class="tran3s"/></div>
										<h4 class="title">Real-Time Communication</h4>
										<p>High-quality voice and video calls for seamless collaboration.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="contact-section-two mt-200 mb-80 lg-mt-120">
				<div class="bg-wrapper">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-xl-5 col-lg-6 me-auto">
								<div class="contact-meta-one">
									<div class="title-style-one">
										<h2 class="title">Let’s talk <br/>about your big <span>project</span></h2>
									</div>
									<p class="text-lg">eiusmod tempor incididunt. Ut enim mimu veniamnostrud elit.</p>
									<div class="help-text"><span>Urgent?</span> Call Us:</div>
									<a href="tel:+918178296553" class="call-button">+91 81782 96553</a>,
									<br/>
									<a href="tel:+919716986007" class="call-button">+91 97169 86007</a>
								</div> 
							</div>
							<div class="col-lg-6">
								<div class="form-style-one with-border md-mt-40">
									<form id="contact-form" action="https://html.creativegigstf.com/vCamp/vCamp/inc/contact.php" data-toggle="validator">
										<div class="messages"></div>
										<div class="row controls">
											<div class="col-12">
												<div class="input-group-meta form-group mb-25">
													<label>Name*</label>
													<input type="text" placeholder="Rashed Kabir" name="name" required="required" data-error="Name is required."/>
													<div class="help-block with-errors"></div>
												</div>
											</div>
											<div class="col-12">
												<div class="input-group-meta form-group mb-40">
													<label>Email*</label>
													<input type="email" placeholder="rshdkabir@gmail.com" name="email" required="required" data-error="Valid email is required."/>
													<div class="help-block with-errors"></div>
												</div>
											</div>
											<div class="col-12">
												<div class="input-group-meta form-group mb-35">
													<textarea placeholder="Your message*" name="message" required="required" data-error="Please,leave us a message."></textarea>
													<div class="help-block with-errors"></div>
												</div>
											</div>
											<div class="col-12"><button class="theme-btn-one ripple-btn w-100">Send Message</button></div>
										</div>
									</form>
									<img src={images('./shape_12.svg')} alt="" class="shapes shape-one"/>
								</div> 
							</div>
						</div>
					</div>
				</div> 
			</div>


			<div class="address-section-two">
				<div class="container">
					<div class="inner-content">
						<div class="row g-0">
							<div class="col-md-6">
								<div class="address-block-two d-flex border-right">
									<img src={iconimages('./icon_34.svg')} alt="" class="icon"/>
									<div class="text-meta">
										<h4 class="title">Our E-Mail Address</h4>
										<p><a href="mailto:hello@quickwrk.com">hello@quickwrk.com</a></p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="address-block-two d-flex">
									<img src={iconimages('./icon_35.svg')} alt="" class="icon"/>
									<div class="text-meta">
										<h4 class="title">Contact Info</h4>
										<p>Open a chat or give us call at <br/>
											<a href="tel:+918178296553">+91 81782 96553</a>,
											<a href="tel:+919716986007">+91 97169 86007</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

        </div>
    );
    
}

export default HomePage;
