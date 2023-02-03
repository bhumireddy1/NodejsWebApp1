'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hey i am sunilkumar');
    res .end('i am sunilkumar and also we find sindhuja')
}).listen(port);
