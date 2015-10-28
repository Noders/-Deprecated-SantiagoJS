var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<div className="highlight">
		        <div className="container">
		            <div className="row">
		                <form action="php/subscribe.php" method="post" className="form subscribe-form" id="subscribeform">
		                    <div className="form-group col-md-3 hidden-sm">
		                        <h6 className="susbcribe-head wow fadeInLeft"> SUBSCRIBE <small>TO OUR NEWSLETTER</small></h6>
		                    </div>
		                    <div className="form-group col-sm-8 col-md-6 wow fadeInRight">
		                        <label className="sr-only">Email address</label>
		                        <input type="email" className="form-control input-lg" placeholder="Enter your email" name="email" id="email" required />
		                        <div id="js-subscribe-result" className="text-center" data-success-msg="Almost finished. Please check your email and verify." data-error-msg="Oops. Something went wrong."></div>
		                    </div>
		                    <div className="form-group col-sm-4 col-md-3">
		                        <button type="submit" className="btn btn-lg btn-success btn-block" id="js-subscribe-btn">Subscribe Now →</button>
		                    </div>
		                </form>
		            </div>
		        </div>
		    </div>
		);
	}	
});
