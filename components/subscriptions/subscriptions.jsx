var React = require('react');
var Request = require('superagent');
var Notification = require('react-notification');

module.exports = React.createClass({
	addSubscriber: function(e) {
		e.preventDefault();
		var that = this;
		Request
		.post('http://api.meetupjs.cl/subscribe')
		.set('content-type', 'application/json')
		.send({'email': this.refs.email.getDOMNode().value})
		.end(function(code, msg) {
			console.log(msg);
			var state = that.state;
			state.message = msg.text;
			state.isActive = true;
			if(msg.statusCode === 200) {
				state.styles = {
					backgroundColor: 'rgb(192,216,144)',
					color: 'rgb(20, 27, 32)'
				};
			} else if(msg.statusCode === 401) {
				state.styles = {
					backgroundColor: 'rgb(97, 172, 234)',
					color: 'rgb(20, 27, 32)'
				};
			}
			that.setState(state);
			return;
		});
	},
	getInitialState: function() {
		return {
			returnMsg: '',
			message: '',
	      	action: 'Cerrar',
	      	dismissAfter: 2000,
	      	isActive: false,
	      	styles: {}
		}
	},
	handleNotification: function() {
		console.log('ea');
		this.setState({
	      notification: {
	        isActive: false,
	      },
	    })
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
		                <Notification message={this.state.message} action={this.state.action} isActive={this.state.isActive} style={this.state.styles} onClick={this.handleNotification} />
		            </div>

		        </div>
		    </div>
		);
	}	
});
