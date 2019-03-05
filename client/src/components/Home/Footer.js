import React, { Component } from 'react';
import logo from '../../img/logo.png';

class Footer extends Component {
  // state = {  }
  render() { 
    return ( 
      <footer class="footer-distributed">

        <div class="footer-left">

          <h3><img src={logo} alt='img' className="Side-logo" /><span>Notey</span></h3>

          <p class="footer-links">
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

          <p class="footer-company-name">Notey&copy; 2019</p>
        </div>

        <div class="footer-center">

          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>21 New york</span> Manhattan, NY</p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+1 555 5555</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@Notey.com</a></p>
          </div>

        </div>

        <div class="footer-right">

          <p class="footer-company-about">
            <span>About Notey</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				  </p>

          <div class="footer-icons">

            <a href="#"><i class="fab fa-facebook-f fo-icons"></i></a>
            <a href="#"><i class="fab fa-twitter fo-icons"></i></a>
            <a href="#"><i class="fab fa-linkedin-in fo-icons"></i></a>
            <a href="#"><i class="fab fa-github fo-icons"></i></a>

          </div>

        </div>

      </footer>

     );
  }
}
 
export default Footer;