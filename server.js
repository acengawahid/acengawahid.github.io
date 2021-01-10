var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('request ', req.url);
    var filename = '.' + req.url;
    // jika filename url default
    if (filename == './') {
        filename = './index.html';
    }

    // membaca file
    fs.readFile(filename, function(err, data) {
        if (err) { // mengirim balasan error
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("<h1 align='center'> 404 | Page Not Found </h1>");
        } 
        // mengirim balasan dengan isi file statis
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
  
}).listen(8000); // Port yang digunakan
console.log('Server running on http://localhost:8000');


