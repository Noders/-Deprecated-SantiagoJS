var React = require('react');
var Request = require('superagent');

module.exports = React.createClass({
	addSubscriber: function(e) {
		e.preventDefault();
		var that = this;
		Request
		.post('http://api.meetupjs.cl/subscribe')
		.set('content-type', 'application/json')
		.send({'email': this.refs.email.getDOMNode().value})
		.end(function(code, msg) {
			var state = that.state;
			that.setState(msg);
			return;
		});
	},
	getInitialState: function() {
		return {
			returnMsg: ''
		}
	},
	render: function() {
		return(
			<div className="highlight  col-xs-12 no-padding-v">
		        <div className="container">
		            <div className="row">
		                <form action="" method="post" className="form subscribe-form" id="subscribeform" onSubmit={this.addSubscriber}>
		                    <div className="form-group col-md-3 hidden-sm">
		                        <h6 className="susbcribe-head wow fadeInLeft"> SUSCRÍBETE <small>A NUESTROS NEWSLETTERS</small></h6>
		                    </div>
		                    <div className="form-group col-sm-8 col-md-6 wow fadeInRight">
		                        <label className="sr-only">Tu correo</label>
		                        <input type="text" className="form-control input-lg" ref="email" placeholder="Tu email" required />
		                        <div id="js-subscribe-result" className="text-center">{this.state.returnMsg}</div>
		                    </div>
		                    <div className="form-group col-sm-4 col-md-3">
		                        <button type="submit" className="btn btn-lg btn-success btn-block" id="js-subscribe-btn">Suscribirse →</button>
		                    </div>
		                </form>
		            </div>
		        </div>
		    </div>
		);
	}	
});
