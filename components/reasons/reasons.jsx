var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<section className="benefits">
		        <div className="container">
		            <div className="section-title wow fadeInUp">
		                <h4>WHAT TO EXPECT</h4>
		            </div>
		            <div className="row">
		                <div className="col-md-10 col-md-offset-1">
		                    <div className="row">
		                        <div className="col-sm-6">
		                            <div className="benefit-item wow fadeInLeft">
		                                <div className="benefit-icon"><i className="icon icon-bubble-love-streamline-talk"> </i></div>
		                                <h6 className="benefit-title">One great night</h6>
		                                <p>We are honoured to have 4 amazing industry experts Mike Kus, Jeremy Keith, Robin Christopherson and Sarah Parmenter!</p>
		                            </div>
		                        </div>
		                        <div className="col-sm-6">
		                            <div className="benefit-item wow fadeInRight">
		                                <div className="benefit-icon"><i className="icon icon-map-pin-streamline"> </i></div>
		                                <h6 className="benefit-title">Location</h6>
		                                <p>Altitude will be held at The Spinnaker Tower in Portsmouth. 100 metres above the sea. The views from the top are breathtaking!</p>
		                            </div>
		                        </div>
		                        <div className="col-sm-6">
		                            <div className="benefit-item wow fadeInLeft">
		                                <div className="benefit-icon"> <i className="icon icon-cocktail-mojito-streamline"> </i></div>
		                                <h6 className="benefit-title">Free food and drink!</h6>
		                                <p>With the help of our amazing sponsors we will be providing every guest 2 free drinks and cocktail canapés on the night!</p>
		                            </div>
		                        </div>
		                        <div className="col-sm-6">
		                            <div className="benefit-item wow fadeInRight">
		                                <div className="benefit-icon"> <i className="icon icon-armchair-chair-streamline"> </i></div>
		                                <h6 className="benefit-title">Accommodation</h6>
		                                <p>We’ve secured a great deal with a local five star hotel, and compiled a list of some other hotels in the area for a pleasant stay.</p>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		);
	}	
});
