var React = require('react');
var Request = require('superagent');
var Moment = require('moment');
require('./event.styl');

module.exports = React.createClass({
	getInitialState:function(){
		return {
			date:''
		}
	},
	componentDidMount:function(){
		this.state.date = Moment(this.props.event.date).format('DD MMMM YYYY');
		this.state.url = this.props.event.url;
		this.setState(this.state);
		/*
		Request
			.get('https://api.meetup.com/2/groups')
			.send({ group_id: '19083108', sign:true, 'photo-host' : 'public', 'access_token':'566f922653277d592b754e114f7010'})
			.set("Access-Control-Expose-Headers", "X-Meetup-server, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimt-Reset")
			.set("Access-Control-Allow-Origin", "http://consumerhost.com")
			.set("Access-Control-Allow-Credentials", "true")
			.set("Access-Control-Allow-Methods", "GET, OPTIONS")
			.set("Access-Control-Max-Age", "86400")
			.end(function(err, res){
			});
		*/

	},
	render: function() {
		return(
			<header id="top" className="header col-xs-12 no-padding-v">
				<div className="container">
					<div className="header_top-bg">
						<div className="logo">
							<a href="#">
							</a>
						</div>
					</div>
					<h3 className="headline-support wow fadeInDown"></h3>
					<h1 className="headline wow fadeInDown" data-wow-delay="0.1s">JS Meetup Santiago</h1>
					<div className="when_where wow fadeIn" data-wow-delay="0.4s">
						<p className="event_when">Proximo meetup:</p>
						<p className="event_when">{this.state.date}</p>
						<p className="event_where">{this.props.location.address.city} - {this.props.location.address.street}</p>
					</div>
					<div className="header_bottom-bg">
						<a className="btn btn-default btn-xl wow zoomIn" data-wow-delay="0.3s" data-toggle="modal" href={this.state.url} target="_blank">RESERVAR MI ENTRADA</a>
						<p className="cta_urgency wow fadeIn" data-wow-delay="0.5s"><small>Apurate! Que son pocos cupos!</small></p>
					</div>
				</div>
			</header>
		);
	}	
});
