var React = require('react');
var Speaker = require('./speaker');
module.exports = React.createClass({
	getInitialState: function() {
        return {
            people: ''
        };
    },
	componentWillMount:function(){
		var people = []
		this.props.people.forEach(function(el,i,as){
			people.push(<Speaker data={el}/>)
		});
		this.state.people = people;
		this.setState(this.state)
	},
	render: function() {
		return(
			<section className="speakers" id="speakers">
		        <div className="container">
		            <div className="sectiPeopleon-title wow fadeInUp">
		                <h4>OUR SPEAKERS</h4>
		            </div>
		            <div className="speaker-slider">
		                {this.state.people}
		            </div>/
		        </div>
		    </section>
		);
	}	
});
