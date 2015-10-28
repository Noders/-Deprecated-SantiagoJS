var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<header id="top" className="header">
		        <div className="container">
		            <div className="header_top-bg">
		                <div className="logo">
		                    <a href="#"><img src="images/event-logo.png" alt="event-logo" /></a>
		                </div>
		            </div>
		            <h3 className="headline-support wow fadeInDown">A CREATIVE CONFERENCE</h3>
		            <h1 className="headline wow fadeInDown" data-wow-delay="0.1s">INSPIRE. CREATE. REPEAT. </h1>
		            <div className="when_where wow fadeIn" data-wow-delay="0.4s">
		                <p className="event_when">August 21st - 22nd 2016</p>
		                <p className="event_where">Stockholm, Sweden</p>
		            </div>
		            <div className="header_bottom-bg">
		                <a className="btn btn-default btn-xl wow zoomIn" data-wow-delay="0.3s" href="#" data-toggle="modal" data-target="#register-now">RESERVE MY SEAT</a>
		                <p className="cta_urgency wow fadeIn" data-wow-delay="0.5s"><small>Hurry up, Only few seats are available</small></p>
		            </div>
		        </div>
		    </header>
		);
	}	
});
