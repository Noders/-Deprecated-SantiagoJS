var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<section className="sponsors" id="sponsors">
				<div className="container">
		            <div className="section-title wow fadeInUp">
		                <h4>OUR SPONSORS</h4>
		                <p>Event is supported by easily recognisable companies and products which we use everyday.</p>
		            </div>
		            <div className="sponsor-slider wow bounceIn">
		                <div><img src="/assets/images/sponsor_1.png" className="img-responsive center-block" alt="sponsor"/> </div>
		                <div><img src="/assets/images/sponsor_2.png" className="img-responsive center-block" alt="sponsor"/> </div>
		                <div><img src="/assets/images/sponsor_3.png" className="img-responsive center-block" alt="sponsor"/> </div>
		                <div><img src="/assets/images/sponsor_4.png" className="img-responsive center-block" alt="sponsor"/> </div>
		                <div><img src="/assets/images/sponsor_1.png" className="img-responsive center-block" alt="sponsor"/> </div>
		                <div><img src="/assets/images/sponsor_2.png" className="img-responsive center-block" alt="sponsor"/> </div>
		                <div><img src="/assets/images/sponsor_3.png" className="img-responsive center-block" alt="sponsor"/> </div>
		                <div><img src="/assets/images/sponsor_4.png" className="img-responsive center-block" alt="sponsor"/> </div>
		            </div>
        		</div>
    		</section>
		);
	}	
});
