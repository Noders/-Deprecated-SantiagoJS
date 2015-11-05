var React = require('react');

module.exports = React.createClass({
	render: function() {
		var sponsorsList = [];
		if(this.props.sponsors.length > 0) {
			this.props.sponsors.forEach(function(sponsor){
				sponsorsList.push(<div className="col-md-6 sponsors" key={sponsor.name}><img src={'/assets/images/' + sponsor.logo} className="img-responsive center-block" alt="sponsor"/> </div>)
			});
		}
		return(
			<section className="sponsors  col-xs-12 no-padding-v" id="sponsors">
				<div className="container">
		            <div className="section-title wow fadeInUp">
		                <h4>PATROCINAN</h4>
		            </div>
		            <div className="sponsor-slider wow bounceIn">
		                {sponsorsList}
		            </div>
        		</div>
    		</section>
		);
	}	
});
