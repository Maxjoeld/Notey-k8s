/* eslint-disable  */
import React, { Component } from 'react';
import home from '../../img/home.jpg';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { NavLink } from 'react-router-dom';


class Landing extends Component {
  // state = {}
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <div class="container">
            <a class="navbar-brand" href="index.html">
              Papers
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="oi oi-menu" /> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a href="index.html" class="nav-link">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a href="services.html" class="nav-link">
                    What We Do
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a href="blog.html" class="nav-link">
                    The Journal
                  </a>
                </li> */}
                  <li class="nav-item">
                    <a class="nav-link">
                      <NavLink to='/login'>
                        Sign In
                      </NavLink>
                    </a>
                  </li>
                <li class="nav-item">
                  <a href="pricing.html" class="nav-link">
                    <NavLink to='/signup'>
                      Sign Up
                    </NavLink>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="contact.html" class="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
				{/* image landing*/}
        <section
          class="ftco-cover"
					style={{ backgroundImage: `url(${home})`}}
          id="section-home"
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div class="container">
            <div class="row align-items-center ftco-vh-100">
              <div class="col-md-7">
                <h1
                  class="ftco-heading mb-3"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Create. Read . Send
                </h1>
                <h2
                  class="h5 ftco-subheading mb-5"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                </h2>
                <p data-aos="fade-up" data-aos-delay="700">
                  <a
                    class="btn btn-outline-white px-4 py-3"
                    data-toggle="modal"
                    data-target="#reservationModal"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
