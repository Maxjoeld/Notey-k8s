import React, { Component } from 'react';
import img8 from '../../img/image_8.jpg';
import img9 from '../../img/image_9.jpg';
import img10 from '../../img/image_10.jpg';
/* eslint-disable  */

class Blog extends Component {
  // state = {  }
  render() { 
    return ( 
      <div className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center" data-aos="fade-up">
              <h2>Our Blog</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <a href="blog-single.html" className="block-5" style={{ backgroundImage: `url(${img10})` }}>
                <div className="text">
                  <div className="subheading">Travel</div>
                  <h3 className="heading">Consectetur adipiscing elit, sed do eiusmod tempor </h3>
                  <div className="post-meta">
                    <span>Amanda Bynes</span>
                    <span>March 20, 2018</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <a href="blog-single.html" className="block-5" style={{ backgroundImage: `url(${img8})` }}>
                <div className="text">
                  <div className="subheading">Tech</div>
                  <h3 className="heading">Eum invenire contentiones eu</h3>
                  <div className="post-meta">
                    <span>Sam Washington</span>
                    <span>March 20, 2018</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <a href="blog-single.html" className="block-5" style={{ backgroundImage: `url(${img9})` }}>
                <div className="text">
                  <div className="subheading">Education</div>
                  <h3 className="heading">Dicunt labitur definiebas et sea. </h3>
                  <div className="post-meta">
                    <span>Wellie Clark</span>
                    <span>March 20, 2018</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
     );
  }
}
 
export default Blog;
