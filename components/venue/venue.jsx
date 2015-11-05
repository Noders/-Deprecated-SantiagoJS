var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<div className="highlight  col-xs-12 no-padding-v">
        		<div className="container">
					<div className="row">
                		<div className="col-sm-6">
                    		<div className="contact-box">
                        		<img src="/assets/images/location-icon.png" alt="location icon" className="wow zoomIn" />
                        		<h5>{this.props.location.name}</h5>
                        		<p>{this.props.location.address.street}
                            	<br/>{this.props.location.address.suburb}
                            	<br/>{this.props.location.address.city}
                            	<br/>
                            	<br/><strong>Desde las {this.props.location.hours.start} a las {this.props.location.hours.end}</strong></p>
                    		</div>
                		</div>
		                <div className="col-sm-6">
		                    <div className="contact-box">
		                        <img src="/assets/images/email-icon.png" alt="email icon" className="wow zoomIn" data-wow-delay="0.3s" />
		                        <h5>Contacto</h5>
		                        <p><a href={'mailto:'+this.props.contact.email}>{this.props.contact.email}</a>
		                            <br/>
		                            <br/>
		                            <br/>
		                            <br/>
		                            <br/>
		                        </p>
		                    </div>
		                </div>
            		</div>
        		</div>
    		</div>
		);
	}	
});
