var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<section className="highlight col-xs-12 no-padding-v">
		        <div className="container">
		            <p className="lead text-center">Todos los asistentes, voluntarios e incluso auspiciadores de los Meetups deben seguir nuestro código de conducta.</p>
		            <div className="text-center">
		                <span className="addtocalendar atc-style-theme">
		                <a href="../../assets/files/code.pdf" target="_blank" className="atcb-link"><i className="fa fa-file-pdf-o"> </i> Código de Conducta Meetups JS</a>
		               </span>
		            </div>
		        </div>
		    </section>
		);
	}	
});
