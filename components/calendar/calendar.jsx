var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<section className="highlight">
		        <div className="container">
		            <p className="lead text-center">Gather is a responsive website template for events, conferences, meetups, webinars etc. This template can be used of all type of gatherings. It has many features specifically designed for events like RSVP, Eventbrite Integration, Subscribe and contact. it also comes with different color versions to choose.</p>
		            <div className="text-center">
		                <span className="addtocalendar atc-style-theme">
		                <a className="atcb-link"><i className="fa fa-calendar"> </i> Add to My Calendar</a>
		                  <var className="atc_event">
		                      <var className="atc_date_start">2016-05-04 12:00:00</var>
		                      <var className="atc_date_end">2016-05-04 18:00:00</var>
		                      <var className="atc_timezone">Europe/London</var>
		                      <var className="atc_title">Gather Event template</var>
		                      <var className="atc_description">Gather is a responsive event template with many awesome features including add to my calendar feature. Awesome. huh?</var>
		                      <var className="atc_location">Stockholm, Sweden</var>
		                      <var className="atc_organizer">Surjith S M</var>
		                      <var className="atc_organizer_email">test@surjithctly.in</var>
		                  </var>
		               </span>
		            </div>
		        </div>
		    </section>
		);
	}	
});
