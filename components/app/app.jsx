var React = require('react');
var Event = require('../event');
var Code = require('../code');
var Speakers = require('../speakers');
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
var EventData = require('../../api/event');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<Event location={Location} event={EventData}/>
				<Code/>
				<Speakers people={EventData.speakers} />
				<Map />
				<Venue location={Location} contact={Contact} />
				<Faq questions={Questions} />
				<Sponsors sponsors={Partners} />
				<Subscriptions />
				<Footer data={Social} />
			</div>
		);
	}	
});
