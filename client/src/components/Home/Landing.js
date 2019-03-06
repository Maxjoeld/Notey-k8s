/* eslint-disable  */
import React, { Component } from 'react';
import home from '../../img/home.jpg';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../../img/logo.png';



class Landing extends Component {
  // state = {}
  render() {
    console.log(this.props)
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <div className="container">
            <div className="navbar-brand" href="/home">
              <img src={logo} alt='img' className="home-logo" />
              <p id="logo-name">Notey</p>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu" /> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="index.html" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    What We Do
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a href="blog.html" className="nav-link">
                    The Journal
                  </a>
                </li> */}
                  <li onClick={() => this.props.history.push('/login')} className="nav-item">
                    <a className="nav-link">
                        Sign In
                    </a>
                  </li>
                <li onClick={() => this.props.history.push('/signup')} className="nav-item">
                  <a className="nav-link">
                      Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
				{/* image landing*/}
        <section
          className="ftco-cover"
					style={{ backgroundImage: `url(${home})`}}
          id="section-home"
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row align-items-center ftco-vh-100">
              <div className="col-md-7">
                <h1
                  className="ftco-heading mb-3"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Create. Read . Send
                </h1>
                <h2
                  className="h5 ftco-subheading mb-5"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                </h2>
                <p data-aos="fade-up" data-aos-delay="700">
                  <a
                    className="btn btn-outline-white px-4 py-3"
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

export default withRouter(Landing);
