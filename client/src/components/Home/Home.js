/* eslint-disable  */
import React, { Component } from 'react';
import Landing from './Landing';
import Body from './Body';
import Details from './Details';
import Testimonial from './Testimonial';
import About from './About';
import Blog from './Blog';
import Footer from './Footer';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import { withRouter } from 'react-router';

class Home extends Component {
  // state = {}
  render() {
    return (
      <div>
				<Landing />
				<Body />
        <Details />
        <Testimonial />
        <About />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default Home;
