
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var async = require('async');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));

  // waterfall
  async.waterfall([
    function (callback) {
        console.log('waterfall 1');
        setTimeout(function () {
            console.log('waterfall 1 done.');
            callback(null, 1);
        }, 500);
    },
    function (arg, callback) {
        console.log('waterfall 2' + arg);
        setTimeout(function () {
            console.log('waterfall 2 done.');
            callback(null, arg + 1);
        }, 300);
    },
    function (arg, callback) {
        console.log('waterfall 3' + arg);
        setTimeout(function () {
            console.log('waterfall 3 done.');
            callback(null, arg + 1);
        }, 100);
    }
], function (err) {
    if (err) { throw err; }
    console.log('waterfall all done.');
});
});
