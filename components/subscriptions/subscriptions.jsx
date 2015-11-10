var React = require('react');
var Request = require('superagent');

module.exports = React.createClass({
	addSubscriber: function(e) {
		e.preventDefault();
		var that = this;
		Request
		.post(this.props.subscribers.api.base_url + 'lists/b27c7c6d4f/members')
		.set('Authorization', 'apikey ' + this.props.subscribers.api.key)
		.set('content-type', 'application/json')
		.send({'email_address': this.refs.email.getDOMNode().value, 'status': 'subscribed'})
		.end(function(err, res) {
			var state = that.state;
			if(err) {
				console.log(err);
				state.returnMsg = err;
				that.setState(state);
				return;
			}
			console.log(res);
			state.returnMsg = res;
			that.setState(state);
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
