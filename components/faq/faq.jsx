var React = require('react');

module.exports = React.createClass({
	render: function() {
		var questionsList = [];
		if(this.props.questions.length > 0) {
			this.props.questions.forEach(function(faq){
				questionsList.push(<div><h6 className="faq-title">{faq.question}</h6><p dangerouslySetInnerHTML={{__html: faq.answer}}></p></div>);
			});
		}
		return(
			<section className="faq  col-xs-12 no-padding-v">
		        <div className="container">
		            <div className="section-title">
		                <h5>Preguntas Frecuentes</h5>
		            </div>
		            <div className="row">
		                <div className="col-md-6 wow fadeInLeft" data-wow-duration="2s">
		                    {questionsList[0]}
		                    {questionsList[1]}
		                </div>
		                <div className="col-md-6 wow fadeInRight" data-wow-duration="2s">
		                    {questionsList[2]}
		                    {questionsList[3]}
		                </div>
		            </div>
		        </div>
		    </section>
		);
	}	
});
