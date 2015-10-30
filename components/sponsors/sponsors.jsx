var React = require('react');

module.exports = React.createClass({
	render: function() {
		var sponsorsList = [];
		console.log(this.props.sponsors.length);
		if(this.props.sponsors.length > 0) {
			this.props.sponsors.forEach(function(sponsor){
				sponsorsList.push(<div className="col-md-6 sponsors" key={sponsor.name}><img src={'/assets/images/' + sponsor.logo} className="img-responsive center-block" alt="sponsor"/> </div>)
			});
		}
		console.log(sponsorsList);
		return(
			<section className="sponsors" id="sponsors">
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
