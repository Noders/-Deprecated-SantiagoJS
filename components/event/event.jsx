var React = require('react')
var Moment = require('moment')

module.exports = React.createClass({
	getInitialState: function () {
		return {
			date: ''
		}
	},
	componentDidMount: function (){
		this.state.date = Moment(this.props.event.date).locale('es').format('DD MMMM YYYY')
		this.state.url = this.props.event.url
		this.setState(this.state)
	},
	render: function () {
		return(
			<header id='top' className='header col-xs-12 no-padding-v'>
				<div className='container'>
					<div className='header_top-bg'>
						<div className='logo'>
							<a href='#'>
							</a>
						</div>
					</div>
					<h3 className='headline-support wow fadeInDown'></h3>
					<h1 className='headline wow fadeInDown' data-wow-delay='0.1s'>Meetup JS Santiago</h1>
					<div className='when_where wow fadeIn' data-wow-delay='0.4s'>
						<p className='event_when shadow-text' >Proximo meetup:</p>
						<p className='event_when shadow-text'>{this.state.date}</p>
						<p className='event_where black-text'>{this.props.location.address.city} - {this.props.location.address.street}</p>
					</div>
					<div className='header_bottom-bg'>
						<a className='btn btn-default btn-black btn-xl wow zoomIn shadow-text-sm' data-wow-delay='0.3s' href={this.state.url} target='_blank'>RESERVAR MI ENTRADA</a>
							<p className='cta_urgency wow fadeIn' data-wow-delay='0.5s'></p>
							<p className='cta_urgency wow fadeIn' data-wow-delay='0.5s'><small>¡Apúrate!, tenemos cupos limitados :( </small></p>
							<p className='cta_urgency wow fadeIn' data-wow-delay='0.5s'><small> (Y galletas durante los meetups! :-) ) </small></p>
					</div>
				</div>
			</header>
		);
	}	
});
