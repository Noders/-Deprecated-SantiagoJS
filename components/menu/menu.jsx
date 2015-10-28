var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<nav className="navbar navbar-default navbar-fixed-top reveal-menu js-reveal-menu reveal-menu-hidden">
		        <div className="container">
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a className="navbar-brand" href="#"><img src="images/event-logo-dark.png" alt="Gather"> </a>
		            </div>
		            <div id="navbar" className="navbar-collapse collapse">
		                <ul className="nav navbar-nav navbar-right">
		                    <li className="active"><a href="#top">Home</a></li>
		                    <li><a href="#speakers">Speakers</a></li>
		                    <li><a href="#schedule">Schedule</a></li>
		                    <li><a href="#gallery">Gallery</a></li>
		                    <li><a href="#pricing">Pricing</a></li>
		                    <li><a href="#sponsors" className="hidden-sm">Sponsors</a></li>
		                    <li><a href="#venue" className="hidden-sm">Venue</a></li>
		                    <li><a href="#contact">Contact</a></li>
		                    <li className="dropdown">
		                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></a>
		                        <ul className="dropdown-menu">
		                            <li><a href="shortcodes.html">Shortcodes</a></li>
		                            <li><a href="blog.html">Blog</a></li>
		                            <li><a href="blog-single.html">Blog Single</a></li>
		                            <li role="separator" className="divider"></li>
		                            <li className="dropdown-header">Header Layouts</li>
		                            <li><a href="index.html">Solid Color</a></li>
		                            <li><a href="index-slider.html">Content Slider</a></li>
		                            <li><a href="index-parallax.html">Image Parallax</a></li>
		                            <li><a href="index-video.html">Video Background</a></li>
		                            <li role="separator" className="divider"></li>
		                            <li className="dropdown-header">Form Variations</li>
		                            <li><a href="index.html">Paypal Registration</a></li>
		                            <li><a href="index-email.html">Email Registraion</a></li>
		                            <li><a href="index-mailchimp.html">Mailchimp Subscription</a></li>
		                            <li><a href="index-eventbrite.html">Eventbrite Integration</a></li>
		                        </ul>
		                    </li>
		                </ul>
		            </div>
		        </div>
		    </nav>
		);
	}	
});
