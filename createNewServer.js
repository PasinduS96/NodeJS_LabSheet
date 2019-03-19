const http = require('http');

http.createServer((req,res) => {

res.setHeader('Content-Type', 'text/html');
res.write('<h2>Server Test</h2>');
res.write('<strong>Locahost 3001</strong>');
res.end

}).listen(3001);