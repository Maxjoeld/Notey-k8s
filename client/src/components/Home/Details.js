import React, { Component } from 'react';
import detail1 from '../../img/detail_1.jpg';
import detail2 from '../../img/image_5.jpg';

class Details extends Component {
  // state = {  }
  render() { 
    return ( 
      <>
        <section className="ftco-section-2">
          <div className="container-fluid">
            <div className="section-2-blocks-wrapper row no-gutters">
              <div className="img col-sm-12 col-md-5" style={{ backgroundImage: `url(${detail1})`}} data-aos="fade-right">
                {/* <a href="https://vimeo.com/45830194" className="button popup-vimeo" data-aos="fade-right" data-aos-delay="700"><span className="ion-ios-play"></span></a> */}
              </div>
              <div className="text col-md-6 col-lg-7 d-flex">
                <div className="text-inner align-self-center" data-aos="fade-up">
                  <h3>Teindgs iewe kels ameklw</h3>
                  <p>Many years ago, on my way from Hongkong to New York, I passed a week in San Francisco. A long time had gone by since I had been in that city, during which my ventures in the Orient had prospered beyond my hope;</p>

                  <p>i I was rich and could afford to revisit my own country to renew my friendship with such of the companions of my youth as still lived and remembered me with the old affection.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-2-blocks-wrapper-2">
          <div className="container-fluid">
            <div className="section-2-blocks-wrapper row no-gutters d-flex" style={{background: "#fafafa" }}>

              <div className="text col-md-5 col-lg-5 col-xl-4 ml-auto d-flex" data-aos="fade-up">
                <div className="text-inner align-self-center mr-auto">
                  <h4 className="text-primary h5">Excepteur sint occaecat cupidatat non </h4>
                  <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.lows by their place and supplies it with the necessary regelialiaA small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of</p>
                  <h4 className="text-primary h5">A small river named Duden flows by their place</h4>
                  <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.lows by their place and supplies it with the necessary regelialiaA small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of</p>
                </div>
              </div>
              <div className="img col-md-5 no-gutters ml-auto">
                <div className="image" style={{ backgroundImage: `url(${detail2})` }} data-aos="fade-left"></div>
                <div className="quote" data-aos="fade-left">
                  <p className="mb-5">&rdquo;Ours is a noble house, and stretches a long way back into antiquity. The earliest ancestor the Twains have any record of was a friend of the family by the name of Higgins. This was in the eleventh century, when our people were living in Aberdeen, county of Cork, England&ldquo;</p>
                  <p className="author">&mdash; Mellissa Clark</p>
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
