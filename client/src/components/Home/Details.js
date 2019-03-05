import React, { Component } from 'react';
import detail1 from '../../img/detail_1.jpg';
import detail2 from '../../img/image_5.jpg';

class Details extends Component {
  // state = {  }
  render() { 
    return ( 
      <>
        <section class="ftco-section-2">
          <div class="container-fluid">
            <div class="section-2-blocks-wrapper row no-gutters">
              <div class="img col-sm-12 col-md-5" style={{ backgroundImage: `url(${detail1})`}} data-aos="fade-right">
                <a href="https://vimeo.com/45830194" class="button popup-vimeo" data-aos="fade-right" data-aos-delay="700"><span class="ion-ios-play"></span></a>
              </div>
              <div class="text col-md-6 col-lg-7 d-flex">
                <div class="text-inner align-self-center" data-aos="fade-up">
                  <h3>Far far away, behind the word mountains</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-2-blocks-wrapper-2">
          <div class="container-fluid">
            <div class="section-2-blocks-wrapper row no-gutters d-flex" style={{background: "#fafafa" }}>

              <div class="text col-md-5 col-lg-5 col-xl-4 ml-auto d-flex" data-aos="fade-up">
                <div class="text-inner align-self-center mr-auto">
                  <h4 class="text-primary h5">Far far away, behind the word mountains</h4>
                  <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <h4 class="text-primary h5">A small river named Duden flows by their place</h4>
                  <p class="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
              </div>
              <div class="img col-md-5 no-gutters ml-auto">
                <div class="image" style={{ backgroundImage: `url(${detail2})` }} data-aos="fade-left"></div>
                <div class="quote" data-aos="fade-left">
                  <p class="mb-5">&rdquo;A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. &ldquo;</p>
                  <p class="author">&mdash; Mellissa Clark</p>
                </div>
              </div>
            </div>
          </div>

        </section>
      </>
     );
  }
}

export default Details;
