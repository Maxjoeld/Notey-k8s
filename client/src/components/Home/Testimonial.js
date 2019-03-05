import React, { Component } from 'react';
import img5 from '../../img/image_5.jpg';
import img6 from '../../img/image_6.jpg';
import img7 from '../../img/image_7.jpg';
import person1 from '../../img/person_1.jpg';
import person2 from '../../img/person_2.jpg';
import person3 from '../../img/person_3.jpg';
/* eslint-disable  */

class Testimonial extends Component {
  // state = {  }
  render() { 
    return ( 
			<div className="ftco-section">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-5">
						<div className="col-md-7 text-center" data-aos="fade-up">
							<h2>Testimonials</h2>
						</div>
					</div>

					<div className="row">

						<div className="col-md-6 col-lg-4" data-aos="fade-up">
							<div className="flip-container">
								<div className="flipper">
									<div className="front" style={{ backgroundImage: `url(${img5})` }}>
										<div className="box">
											<h2>Mellissa Clark</h2>
											<p>Web Designer</p>
										</div>
									</div>
									<div className="back">
										<blockquote>
											<p>&ldquo;A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.&rdquo;</p>
										</blockquote>
										<div className="author d-flex">
											<div className="image mr-3 align-self-center">
												<img src={person1} alt="" />
											</div>
											<div className="name align-self-center">Mellisa Clark <span className="position">Web Designer</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
							<div className="flip-container hover">
								<div className="flipper">
									<div className="front" style={{ backgroundImage: `url(${img6})` }}>
										<div className="box">
											<h2>Mellissa Clark</h2>
											<p>Web Designer</p>
										</div>
									</div>
									<div className="back">
										<blockquote>
											<p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
										</blockquote>
										<div className="author d-flex">
											<div className="image mr-3 align-self-center">
												<img src={person2} alt="" />
											</div>
											<div className="name align-self-center">Louise Kelly <span className="position">Illustrator Designer</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
							<div className="flip-container">
								<div className="flipper">
									<div className="front" style={{backgroundImage: `url(${img7})`}}>
										<div className="box">
											<h2>Aldin Powell</h2>
											<p>Web Developer</p>
										</div>
									</div>
									<div className="back">
										<blockquote>
											<p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
										</blockquote>
										<div className="author d-flex">
											<div className="image mr-3 align-self-center">
												<img src={person3} alt="" />
											</div>
											<div className="name align-self-center">Aldin Powell <span className="position">Web Developer</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
    );
  }
}
 
export default Testimonial;