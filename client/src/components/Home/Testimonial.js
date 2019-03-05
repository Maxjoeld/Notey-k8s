import React, { Component } from 'react';

class Testimonial extends Component {
  // state = {  }
  render() { 
    return ( 
			<div class="ftco-section">
				<div class="container">
					<div class="row justify-content-center mb-5 pb-5">
						<div class="col-md-7 text-center" data-aos="fade-up">
							<h2>Testimonials</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6 col-lg-4" data-aos="fade-up">
							<div class="flip-container">
								<div class="flipper">
									<div class="front" style="background-image: url(../images/image_5.jpg);">
										<div class="box">
											<h2>Mellissa Clark</h2>
											<p>Web Designer</p>
										</div>
									</div>
									<div class="back">

										<blockquote>
											<p>&ldquo;A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.&rdquo;</p>
										</blockquote>
										<div class="author d-flex">
											<div class="image mr-3 align-self-center">
												<img src="images/person_1.jpg" alt="" />
											</div>
											<div class="name align-self-center">Mellisa Clark <span class="position">Web Designer</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">

							<div class="flip-container hover">
								<div class="flipper">
									<div class="front" style="background-image: url(../images/image_6.jpg);">
										<div class="box">
											<h2>Mellissa Clark</h2>
											<p>Web Designer</p>
										</div>
									</div>
									<div class="back">

										<blockquote>
											<p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
										</blockquote>
										<div class="author d-flex">
											<div class="image mr-3 align-self-center">
												<img src="images/person_2.jpg" alt="" />
											</div>
											<div class="name align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
										</div>
									</div>
								</div>
							</div>

						</div>
						<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">

							<div class="flip-container">
								<div class="flipper">
									<div class="front" style="background-image: url(../images/image_7.jpg);">
										<div class="box">
											<h2>Aldin Powell</h2>
											<p>Web Developer</p>
										</div>
									</div>
									<div class="back">

										<blockquote>
											<p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
										</blockquote>
										<div class="author d-flex">
											<div class="image mr-3 align-self-center">
												<img src="images/person_3.jpg" alt="" />
											</div>
											<div class="name align-self-center">Aldin Powell <span class="position">Web Developer</span></div>
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