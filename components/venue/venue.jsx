var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<div className="highlight">
        		<div className="container">
					<div className="row">
                		<div className="col-sm-6">
                    		<div className="contact-box">
                        		<img src="images/location-icon.png" alt="location icon" className="wow zoomIn" />
                        		<h5>ADDRESS</h5>
                        		<p>Level 5, Meet n Party,
                            	<br/>Barnhusgatan 7 b,
                            	<br/> 125 Stockholm, Sweden
                            	<br/>
                            	<br/>Time: 10:30 AM to 3:30 PM</p>
                    		</div>
                		</div>
		                <div className="col-sm-6">
		                    <div className="contact-box">
		                        <img src="images/email-icon.png" alt="email icon" className="wow zoomIn" data-wow-delay="0.3s" />
		                        <h5>CONTACT</h5>
		                        <p><a href="mailto:gather@eventwebsite.com">gather@eventwebsite.com</a>
		                            <br/> <a href="mailto:sponsor@thisevent.com">sponsor@thisevent.com</a>
		                            <br/>
		                            <br/> +1 400 253 1800
		                            <br/> +33 230 58 5420
		                        </p>
		                    </div>
		                </div>
            		</div>
        		</div>
    		</div>
		);
	}	
});
