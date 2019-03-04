/* eslint-disable  */
import React, { Component } from 'react';
// import logo from './SideBar/logo.png';
import home from '../../img/home.jpg';
import { NavLink, Link } from 'react-router-dom';
import {
	LazyLoadImage
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { withRouter } from 'react-router';

class Home extends Component {
	// state = {}
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" data-aos="fade-down" data-aos-delay="500">
					<div class="container">
						<a class="navbar-brand" href="index.html">Papers</a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="oi oi-menu"></span> Menu
       		 	</button>

						<div class="collapse navbar-collapse" id="ftco-nav">
							<ul class="navbar-nav ml-auto">
								<li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
								<li class="nav-item"><a href="services.html" class="nav-link">What We Do</a></li>
								<li class="nav-item"><a href="blog.html" class="nav-link">The Journal</a></li>
								<li class="nav-item"><a href="about.html" class="nav-link">Who We Are</a></li>
								<li class="nav-item"><a href="pricing.html" class="nav-link">Plans &amp; Pricing</a></li>
								<li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Home;
