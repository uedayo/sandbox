var http = require('http');
var server = http.createServer(function(){});
server.listen(1337, function() {
    server.close();
});
