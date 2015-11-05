var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<div className="highlight  col-xs-12 no-padding-v">
		        <div className="container">
		            <div className="row">
		                <form action="" method="post" className="form subscribe-form" id="subscribeform">
		                    <div className="form-group col-md-3 hidden-sm">
		                        <h6 className="susbcribe-head wow fadeInLeft"> SUSCRÍBETE <small>A NUESTROS NEWSLETTERS</small></h6>
		                    </div>
		                    <div className="form-group col-sm-8 col-md-6 wow fadeInRight">
		                        <label className="sr-only">Tu correo</label>
		                        <input type="email" className="form-control input-lg" placeholder="Tu email" name="email" id="email" required />
		                        <div id="js-subscribe-result" className="text-center" data-success-msg="Casi listos. Revisa tu correo para confirmar." data-error-msg="Oops. Something went wrong."></div>
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
