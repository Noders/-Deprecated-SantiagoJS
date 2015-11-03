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

/* Data */
var Contact = require('../../api/contact');
var Location = require('../../api/location');
var Partners = require('../../api/sponsors');
var Questions = require('../../api/faq');
var Social = require('../../api/social');


module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<Event/>
				<Calendar/>
				<Speakers/>
				<Reasons/>
				<Faq questions={Questions}/>
				<Sponsors sponsors={Partners}/>
				<Subscriptions/>
				<Map/>
				<Venue location={Location} contact={Contact}/>
				<Footer data={Social}/>
			</div>
		);
	}	
});
