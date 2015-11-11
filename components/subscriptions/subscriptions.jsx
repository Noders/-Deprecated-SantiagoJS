var React = require('react');
var Request = require('superagent');
var NotificationSystem = require('react-notification-system');

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
			if(msg.statusCode === 200) {
				state.type = "¡Genial! ¡Ya estás suscrito a nuestro newsletter! :)";
				state.message = msg.text;
			} else if(msg.statusCode === 401) {
				state.type = 'error';
				state.message = "¡Error! Intenta nuevamente, o envíanos un mensaje. Tenemos Twitter, mail, facebook, birddy y palomas mensajeras! ;)";
			}
			that.setState(state);
			that._addNotification();
			return;
		});
	},
	getInitialState: function() {
		return {
			returnMsg: '',
			message: '',
			styles: { // Applied to every notification, regardless of the notification level
      			margin: '10x 5px 2px 1px'
    		},
		}
	},
	componentDidMount: function() {
		this._notificationSystem = this.refs.notificationSystem;
	},

	_addNotification: function(event) {
		this._notificationSystem.addNotification({
			message: this.state.message,
			level: this.state.type
		});
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
                        <NotificationSystem ref="notificationSystem" style={this.state.styles}/>
		            </div>

		        </div>
		    </div>
		);
	}	
});
