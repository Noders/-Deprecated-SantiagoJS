var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<div className="g-maps" id="venue">
        		<div className="map" id="map_canvas" data-maplat="59.3292956" data-maplon="18.0686451" data-mapzoom="2" data-color="yellow" data-height="400" data-img="images/marker.png" data-info="Stockholm, Sweden"></div>
			</div>
		);
	}	
});
