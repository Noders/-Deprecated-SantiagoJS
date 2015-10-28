require('font-awesome-webpack');
window.$ = window.jQuery = require('jquery/dist/jquery.min.js');
require('bootstrap-webpack');
require('font-awesome-webpack');
require('animate.css/animate.min.css')

require('./assets/css/plugins/slick.styl');
require('./assets/css/plugins/magnific-popup.styl');
require('./assets/css/plugins/streamline-icons.css');
require('./assets/css/plugins/flexslider.styl');
require('./assets/css/event.css');
require('./assets/css/themes/yellow.styl');

require('./assets/js/plugins/');
require('./assets/js/main.js');

var React = require('react');
React.render((require('./router.config.jsx')), document.body);
