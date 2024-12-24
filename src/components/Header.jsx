import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo/logo_1.png';

const Header = () => {
	const [isFixed, setIsFixed] = useState(false);
	const handleScroll = () => {
		if (window.scrollY > 100) {
		  setIsFixed(true);  // Add the fixed class
		} else {
		  setIsFixed(false);  // Remove the fixed class
		}
	  };

	  useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	
		// Clean up the event listener when the component unmounts
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);
    return (
        <div>
            <header className={`theme-main-menu sticky-menu theme-menu-two ${isFixed ? 'fixed' : ''}`}>
				<div className="inner-content">
					<div className="d-flex align-items-center justify-content-between">
						<div className="logo"><a href="#">
							<img src={logo} alt="" width="200"/></a>
							</div>
						<nav className="navbar navbar-expand-lg">
							<button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						    	<span></span>
						 	</button>
						    <div className="collapse navbar-collapse" id="navbarNav">
						    	<ul className="navbar-nav">
						    		<li className="d-block d-lg-none"><div className="logo"><a href="index.html"><img src="../assets/images/logo/logo_1.png" alt="" width="127"/></a></div></li>
							        <li className="nav-item active dropdown mega-dropdown">
							        	<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home</a>
						            </li>
						            <li className="nav-item dropdown mega-dropdown">
							        	<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Blog</a>
						            </li>
							        <li className="nav-item dropdown mega-dropdown">
							        	<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Hiring</a>
						            </li>
						    	</ul>
						    	<div className="mobile-content d-block d-lg-none">
						    		<form action="#" className="search-form">
								  		<input type="text" placeholder="Search here.."/>
								  		<button><i className="bi bi-search"></i></button>
								  	</form>

								  	<div className="address-block">
								  		<h4 className="title">Our Address</h4>
								  		<p>Chowrastar Mirpur- 1210, Sangu <br/>River, Dhaka</p>
								  		<p>Urgent issue? call us at <br/><a href="tel:310.841.5500">310.841.5500</a></p>
								  	</div>
						    	</div>
						    </div>
						</nav>
						<div className="right-widget d-flex align-items-center">
							<a href="contactV2.html" className="tran3s contact-btn d-none d-sm-block">
								<span>Contact Us</span>
							</a>
						</div>
					</div>
				</div>
			</header> 
        </div>
    );
};

export default Header;
