import React, { Component } from 'react';
import logo from '../../img/logo.png';

class Footer extends Component {
  // state = {  }
  render() { 
    return ( 
      <footer className="footer-distributed">

        <div className="footer-left">

          <h3><img src={logo} alt='img' className="Side-logo" /><span>Notey</span></h3>

          <p className="footer-links">
            <a href="#">Home</a>
            ·
					<a href="#">Blog</a>
            ·
					<a href="#">Pricing</a>
            ·
					<a href="#">About</a>
            ·
					<a href="#">Faq</a>
            ·
					<a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Notey&copy; 2019</p>
        </div>

        <div className="footer-center">

          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>21 New york</span> Manhattan, NY</p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1 555 5555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@Notey.com</a></p>
          </div>

        </div>

        <div className="footer-right">

          <p className="footer-company-about">
            <span>About Notey</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				  </p>

          <div className="footer-icons">

            <a href="#"><i className="fab fa-facebook-f fo-icons"></i></a>
            <a href="#"><i className="fab fa-twitter fo-icons"></i></a>
            <a href="#"><i className="fab fa-linkedin-in fo-icons"></i></a>
            <a href="#"><i className="fab fa-github fo-icons"></i></a>

          </div>

        </div>

      </footer>

     );
  }
}
 
export default Footer;