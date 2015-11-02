var React = require('react');
var {Router, Route, Link} =  require('react-router');
var History =  require('history/lib/createHashHistory');

var App = require('./components/app');

var main = (
	<Router history={History({
			queryKey: false
		})}>
		<Route path="/" component={App}/>
	</Router>
);

module.exports = main;
