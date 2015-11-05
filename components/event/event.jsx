var React = require('react');
var Request = require('superagent');
require('./event.styl');

module.exports = React.createClass({
	componentDidMount:function(){
		console.log(this);
		Request
			.get('https://api.meetup.com/2/groups')
			.send({ group_id: '19083108', sign:true, 'photo-host' : 'public', 'access_token':'566f922653277d592b754e114f7010'})
			.set("Access-Control-Expose-Headers", "X-Meetup-server, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimt-Reset")
			.set("Access-Control-Allow-Origin", "http://consumerhost.com")
			.set("Access-Control-Allow-Credentials", "true")
			.set("Access-Control-Allow-Methods", "GET, OPTIONS")
			.set("Access-Control-Max-Age", "86400")
			.end(function(err, res){
				console.log(res)
			// Calling the end function will send the request
			});




	},
	render: function() {
		return(
			<header id="top" className="header col-xs-12 no-padding-v">
				<div className="container">
					<div className="header_top-bg">
						<div className="logo">
							<a href="#"><img src="/assets/images/event-logo.png" alt="event-logo" /></a>
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
