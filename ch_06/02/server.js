var http = require('http');

var server = http.createServer(function(req, res){
    var header = {
        "Content-Type": "text/html"
    }
    res.writeHead(200, header)

    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>HTML Response</title>
            </head>
            <body>
                <h1>Serving HTML Text</h1>
                <p>${req.url}</p>
                <p>${req.method}</p>
            </body>
        </html>
    `);
})

server.listen(3000);

console.log("Server listening on port 3000");