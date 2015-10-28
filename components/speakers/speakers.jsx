var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<section className="speakers" id="speakers">
		        <div className="container">
		            <div className="section-title wow fadeInUp">
		                <h4>OUR SPEAKERS</h4>
		            </div>
		            <div className="speaker-slider">
		                <div className="speaker-info wow fadeIn col-md-4" data-wow-delay="0s">
		                    <img src="/assets/images/avatar_1.png" alt="avatar" className="img-responsive center-block"/>
		                    <p>George Burton</p>
		                    <span>Flow Interactive</span>
		                </div>
		                <div className="speaker-info wow fadeIn col-md-4" data-wow-delay="0.1s">
		                    <img src="/assets/images/avatar_2.png" alt="avatar" className="img-responsive center-block"/>
		                    <p>Louis Castillo</p>
		                    <span>Foursquare</span>
		                </div>
		                <div className="speaker-info wow fadeIn col-md-4" data-wow-delay="0.2s">
		                    <img src="/assets/images/avatar_3.png" alt="avatar" className="img-responsive center-block"/>
		                    <p>Jamie Hefford</p>
		                    <span>Consultant</span>
		                </div>
		            </div>
		        </div>
		    </section>
		);
	}	
});
