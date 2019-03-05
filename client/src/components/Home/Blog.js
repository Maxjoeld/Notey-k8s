import React, { Component } from 'react';
import img8 from '../../img/image_8.jpg';
import img9 from '../../img/image_9.jpg';
import img10 from '../../img/image_10.jpg';
/* eslint-disable  */

class Blog extends Component {
  // state = {  }
  render() { 
    return ( 
      <div class="ftco-section bg-light">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-5">
            <div class="col-md-7 text-center" data-aos="fade-up">
              <h2>Our Blog</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <a href="blog-single.html" class="block-5" style={{ backgroundImage: `url(${img10})` }}>
                <div class="text">
                  <div class="subheading">Travel</div>
                  <h3 class="heading">Far far away, behind the word mountains</h3>
                  <div class="post-meta">
                    <span>Wellie Clark</span>
                    <span>March 20, 2018</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <a href="blog-single.html" class="block-5" style={{ backgroundImage: `url(${img8})` }}>
                <div class="text">
                  <div class="subheading">Travel</div>
                  <h3 class="heading">Far far away, behind the word mountains</h3>
                  <div class="post-meta">
                    <span>Wellie Clark</span>
                    <span>March 20, 2018</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <a href="blog-single.html" class="block-5" style={{ backgroundImage: `url(${img9})` }}>
                <div class="text">
                  <div class="subheading">Travel</div>
                  <h3 class="heading">Far far away, behind the word mountains</h3>
                  <div class="post-meta">
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
