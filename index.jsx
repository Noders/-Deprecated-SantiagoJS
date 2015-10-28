var React = require('react');
require('./assets/css/bootstrap.styl');

require('./assets/css/plugins/animate.styl');
require('./assets/css/plugins/slick.styl');
require('./assets/css/plugins/magnific-popup.styl');
require('./assets/css/plugins/font-awesome.styl');
require('./assets/css/plugins/streamline-icons.styl');
require('./assets/css/plugins/flexslider.styl');

require('./assets/css/event.styl');
require('./assets/themes/yellow.styl');

require('./assets/js/modernizr.min.js');

require('./assets/js/plugins/pace.js');
require('./assets/js/plugins/google-map.js');

require('./assets/js/jquery.min.js');
require('./assets/js/bootstrap.min.js');
require('./assets/js/main.js');

React.render((require('./router.config.jsx')), document.body);
