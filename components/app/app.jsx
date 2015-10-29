var React = require('react');
var Event = require('../event');
var Calendar = require('../calendar');
var Speakers = require('../speakers');
var Reasons = require('../reasons');
var Faq = require('../faq');
var Sponsors = require('../sponsors');
var Subscriptions = require('../subscriptions');
var Map = require('../map');
var Venue = require('../venue');
var Footer = require('../footer');

var Social = require('../../api/social');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<Event/>
				<Calendar/>
				<Speakers/>
				<Reasons/>
				<Faq/>
				<Sponsors/>
				<Subscriptions/>
				<Map/>
				<Venue/>
				<Footer data={Social}/>
			</div>
		);
	}	
});
