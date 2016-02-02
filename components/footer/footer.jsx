var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<footer className=" col-xs-12 no-padding-v">
				<div className="social-icons">
            		<a href={this.props.data.twitter} className="wow zoomIn"> <i className="fa fa-twitter"></i> </a>
            		<a href={this.props.data.facebook} className="wow zoomIn" data-wow-delay="0.2s"> <i className="fa fa-facebook"></i> </a>
        		</div>
        		<p> <small className="text-muted">Algunos derechos reservados © 2016. With <i className="fa fa-heart-o"></i> from Javascript Chile</small></p>
    		</footer>
		);
	}
});
