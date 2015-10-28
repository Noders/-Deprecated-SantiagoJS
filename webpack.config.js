var getConfig = require('hjs-webpack');
var version = require('./package.json').version;
module.exports = getConfig({ in : 'index.jsx',
    out: '',
        isDev: process.env.NODE_ENV !== 'production',
        html: function(context) {
            //ISDEV
            if (process.env.NODE_ENV !== 'production') {
                return {
                    'index.html': '<!doctype html>' + '<head>' + '<meta charset="utf-8"/>' + '<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>' + "<link href='https://fonts.googleapis.com/css?family=Flamenco:400,300|Raleway:400,100|Fredericka+the+Great' rel='stylesheet' type='text/css'>" + '</head>' + '<body class="row no-margin">' + '</body>' + '<script src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>' + '<script src="/app.js"></script>'
                };
            } else {
                return {
                    'index.html': '<!doctype html>' + '<head>' + '<meta charset="utf-8"/>' + '<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>' + '<link rel="stylesheet" href="/meetupjs.' + version + '.css"/>' + "<link href='https://fonts.googleapis.com/css?family=Flamenco:400,300|Raleway:400,100|Fredericka+the+Great' rel='stylesheet' type='text/css'>" + '</head>' + '<body class="row no-margin">' + '</body>' + '<script src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>' + "<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-60352542-3', 'auto');ga('send', 'pageview');</script>" + '<script src="/meetupjs.' + version + '.js"></script>'
                };
            }
        }
});
