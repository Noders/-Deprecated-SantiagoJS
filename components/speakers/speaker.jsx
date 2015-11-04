var React = require('react');

module.exports = React.createClass({
	getInitalState:function(){
        return {
            img:'',
            name:'',
            talk:'',
            url:''
        };
	},
	componentWillMount:function(){
		var ob = {};
		ob.img = this.props.data.img;
		ob.name = this.props.data.name;
		ob.talk = this.props.data.talk.title;
		ob.url = this.props.data.social.url;
		this.setState(ob);
	},
	render: function() {
		return(
			<div className="speaker-info wow fadeIn col-md-4" data-wow-delay="0s">
                <img src={this.state.img} alt="avatar" className="img-responsive center-block"/>
                <p>{this.state.name}</p>
                <span>{this.state.url}</span>
            </div>
		);
	}	
});
