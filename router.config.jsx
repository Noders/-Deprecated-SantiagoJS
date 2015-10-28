var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var App = require('./components/app');

var main = (
	<Router>
		<Route path="/" component={App}/>
	</Router>
);

module.exports = main;