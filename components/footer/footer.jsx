var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<footer>
				<div className="social-icons">
            		<a href="#" className="wow zoomIn"> <i className="fa fa-twitter"></i> </a>
            		<a href="#" className="wow zoomIn" data-wow-delay="0.2s"> <i className="fa fa-facebook"></i> </a>
            		<a href="#" className="wow zoomIn" data-wow-delay="0.4s"> <i className="fa fa-linkedin"></i> </a>
        		</div>
        		<p> <small className="text-muted">Algunos derechos reservados © 2015. Javascript CL. Made in Chile</small></p>
    		</footer>
		);
	}	
});
